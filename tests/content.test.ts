import { describe, expect, it } from 'vitest';
import { dictionaries } from '@/content';
import { keyFromSlug, pathFor, REDIRECTS, ROUTE_KEYS, SLUGS } from '@/lib/routes';
import { LOCALES } from '@/lib/site';
import { metaFor } from '@/lib/metadata';

describe('routes', () => {
  it('has unique slugs per locale', () => {
    for (const l of LOCALES) {
      const slugs = ROUTE_KEYS.map((k) => SLUGS[k][l]);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it('round-trips every slug, including non-ASCII ones', () => {
    for (const l of LOCALES) {
      for (const k of ROUTE_KEYS) {
        const slug = SLUGS[k][l];
        expect(keyFromSlug(slug ? [slug] : [], l)).toBe(k);
        expect(keyFromSlug(slug ? [encodeURIComponent(slug)] : [], l)).toBe(k);
      }
    }
  });

  it('keeps every URL of the previous site alive, either as a page or a redirect', () => {
    const legacy = [
      '/tietoa-meista',
      '/verkkolynxin-arvot',
      '/data-analytiikka-ja-oivallukset',
      '/verkkokaupan-optimointi',
      '/verkkosivujen-suunnittelu-ja-kehitys',
      '/kattavat-markkinointi-ja-seo',
      '/palvelut-toiminimiyrittäjille',
      '/yhteystiedot',
      '/miksi-verkkolynx',
      '/ukk',
      '/tietosuojaseloste',
      '/käyttöehdot',
    ];
    for (const url of legacy) {
      const isPage = ROUTE_KEYS.some(
        (k) => pathFor(k, 'fi') === url || decodeURI(pathFor(k, 'fi')) === url,
      );
      const isRedirect = REDIRECTS.some((r) => r.source === url);
      expect(isPage || isRedirect, url).toBe(true);
    }
  });

  it('never redirects a URL that is also a live page', () => {
    for (const r of REDIRECTS) {
      expect(ROUTE_KEYS.some((k) => pathFor(k, 'fi') === r.source)).toBe(false);
    }
  });
});

describe('content', () => {
  it('has equal FAQ size and category structure in both languages', () => {
    const [fi, en] = LOCALES.map((l) => dictionaries[l].faqPage.categoriesData);
    expect(fi.length).toBe(en.length);
    fi.forEach((c, i) => expect(c.items.length).toBe(en[i].items.length));
  });

  it('has unique FAQ ids within each language', () => {
    for (const l of LOCALES) {
      const ids = dictionaries[l].faqPage.categoriesData.flatMap((c) => c.items.map((i) => i.id));
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('has five values and the software-first service architecture in both languages', () => {
    for (const l of LOCALES) {
      const d = dictionaries[l];
      expect(d.values.items).toHaveLength(5);
      expect(d.services.map((s) => s.key)).toEqual([
        'software',
        'analytics',
        'ecommerce',
        'web',
        'marketing',
        'sole',
      ]);
      expect(d.services.filter((s) => !s.audience).map((s) => s.n)).toEqual([
        '01',
        '02',
        '03',
        '04',
        '05',
      ]);
      expect(d.services.filter((s) => s.audience).map((s) => s.key)).toEqual(['sole']);
    }
  });

  it('gives the software service its own URL and richer structure', () => {
    expect(pathFor('software', 'fi')).toBe('/ohjelmistokehitys-ja-automaatio');
    expect(pathFor('software', 'en')).toBe('/en/custom-software-and-automation');
    for (const l of LOCALES) {
      const sw = dictionaries[l].services[0];
      expect(sw.groups).toHaveLength(8);
      expect(sw.diagram).toBe(true);
      expect(sw.scale?.items).toHaveLength(3);
    }
  });

  it('has system diagram routes that visit each column once, left to right', () => {
    for (const l of LOCALES) {
      const { cols, paths } = dictionaries[l].system;
      const col = new Map(cols.flatMap((c, i) => c.nodes.map((n) => [n.id, i] as const)));
      for (const path of paths) {
        expect(path).toHaveLength(cols.length);
        path.forEach((id, i) => expect(col.get(id), `${l} ${path.join('>')}`).toBe(i));
      }
      // every component belongs to at least one route, so selecting it always shows a path
      for (const id of col.keys())
        expect(
          paths.some((p) => p.includes(id)),
          `${l} ${id}`,
        ).toBe(true);
    }
  });

  it('keeps the hero capability map consistent', () => {
    for (const l of LOCALES) {
      const { nodes, edges } = dictionaries[l].hero;
      const ids = new Set(nodes.map((n) => n.id));
      expect(nodes.map((n) => n.id)).toEqual([
        'data',
        'software',
        'automation',
        'commerce',
        'web',
        'seo',
      ]);
      for (const e of edges) expect(ids.has(e.a) && ids.has(e.b)).toBe(true);
    }
  });

  it('links every service bridge and related service to an existing service', () => {
    for (const l of LOCALES) {
      const keys = new Set(dictionaries[l].services.map((s) => s.key));
      for (const s of dictionaries[l].services) {
        for (const r of s.related) expect(keys.has(r)).toBe(true);
        for (const b of s.bridge ?? []) expect(keys.has(b.to)).toBe(true);
      }
    }
  });

  it('keeps titles and descriptions within search-result limits', () => {
    for (const l of LOCALES) {
      for (const k of ROUTE_KEYS) {
        const m = metaFor(k, l);
        expect(m.title.length, `${l}/${k} title`).toBeLessThanOrEqual(60);
        expect(m.description.length, `${l}/${k} description`).toBeGreaterThan(40);
        expect(m.description.length, `${l}/${k} description`).toBeLessThanOrEqual(190);
      }
    }
  });

  it('contains no leftover template copy or invented claims', () => {
    const all = JSON.stringify(dictionaries);
    for (const banned of [
      'Therapy Sessions',
      'lorem',
      '100 miljoonan',
      '100 million',
      'toimialakohtaisia sertifikaatteja',
      'yli 40 vuoden',
      'Austin',
      // ownership is agreed per project (see terms 5.2), never promised as automatic
      'täyden maksun jälkeen',
      'after full payment',
      'www.verkkolynx',
    ]) {
      expect(all.includes(banned), banned).toBe(false);
    }
  });
});

describe('production URLs', () => {
  it('uses the bare https domain for every absolute URL', async () => {
    const { SITE } = await import('@/lib/site');
    expect(SITE.url).toBe('https://verkkolynx.fi');
  });

  it('lists every route in both languages in the sitemap, with reciprocal alternates', async () => {
    const sitemap = (await import('@/app/sitemap')).default;
    const entries = sitemap();
    expect(entries).toHaveLength(ROUTE_KEYS.length * 2);
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    for (const e of entries) {
      expect(e.url.startsWith('https://verkkolynx.fi')).toBe(true);
      expect(Object.values(e.alternates?.languages ?? {})).toContain(e.url);
    }
  });

  it('points robots at the production sitemap', async () => {
    const robots = (await import('@/app/robots')).default();
    expect(robots.sitemap).toBe('https://verkkolynx.fi/sitemap.xml');
  });
});

describe('language-specific 404', () => {
  it('rewrites unknown URLs to the 404 page of their own language with status 404', async () => {
    const { NextRequest } = await import('next/server');
    const { proxy } = await import('@/proxy');
    const run = (path: string) => proxy(new NextRequest(`https://verkkolynx.fi${path}`));
    const target = (res: Response) => res.headers.get('x-middleware-rewrite') ?? '';

    expect(target(run('/ei-ole-olemassa'))).toContain('/sivua-ei-loytynyt');
    expect(target(run('/en/does-not-exist'))).toContain('/en/page-not-found');
    expect(target(run('/en/palvelut'))).toContain('/en/page-not-found');
    expect(target(run('/palvelut/x'))).toContain('/sivua-ei-loytynyt');
    // real pages pass straight through
    expect(target(run('/palvelut'))).toBe('');
    expect(target(run('/en/services'))).toBe('');
    expect(target(run('/'))).toBe('');
    expect(target(run('/en'))).toBe('');
  });
});
