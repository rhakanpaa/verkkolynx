import type { Locale } from './site';

export const ROUTE_KEYS = [
  'home',
  'services',
  'software',
  'analytics',
  'ecommerce',
  'web',
  'marketing',
  'sole',
  'why',
  'about',
  'faq',
  'contact',
  'privacy',
  'terms',
] as const;
export type RouteKey = (typeof ROUTE_KEYS)[number];
export type ServiceKey = 'software' | 'analytics' | 'ecommerce' | 'web' | 'marketing' | 'sole';
/** Display order. `sole` is an audience-specific offering, not one of the five core disciplines. */
export const SERVICE_KEYS: ServiceKey[] = [
  'software',
  'analytics',
  'ecommerce',
  'web',
  'marketing',
  'sole',
];
export const CORE_SERVICE_KEYS: ServiceKey[] = [
  'software',
  'analytics',
  'ecommerce',
  'web',
  'marketing',
];

/** Finnish slugs match the public URLs of the previous site, so existing links keep working. */
export const SLUGS: Record<RouteKey, Record<Locale, string>> = {
  home: { fi: '', en: '' },
  services: { fi: 'palvelut', en: 'services' },
  software: { fi: 'ohjelmistokehitys-ja-automaatio', en: 'custom-software-and-automation' },
  analytics: { fi: 'data-analytiikka-ja-oivallukset', en: 'data-analytics-and-insights' },
  ecommerce: { fi: 'verkkokaupan-optimointi', en: 'ecommerce-optimization' },
  web: { fi: 'verkkosivujen-suunnittelu-ja-kehitys', en: 'web-design-and-development' },
  marketing: { fi: 'kattavat-markkinointi-ja-seo', en: 'marketing-and-seo' },
  sole: { fi: 'palvelut-toiminimiyrittäjille', en: 'sole-trader-services' },
  why: { fi: 'miksi-verkkolynx', en: 'why-verkkolynx' },
  about: { fi: 'tietoa-meista', en: 'about' },
  faq: { fi: 'ukk', en: 'faq' },
  contact: { fi: 'yhteystiedot', en: 'contact' },
  privacy: { fi: 'tietosuojaseloste', en: 'privacy-policy' },
  terms: { fi: 'käyttöehdot', en: 'terms-of-use' },
};

/** Path as it appears in a URL (non-ASCII percent-encoded). */
export function pathFor(key: RouteKey, locale: Locale, hash?: string): string {
  const slug = SLUGS[key][locale];
  const base = locale === 'en' ? (slug ? `/en/${slug}` : '/en') : slug ? `/${slug}` : '/';
  const encoded = base
    .split('/')
    .map((s) => encodeURIComponent(s))
    .join('/');
  return hash ? `${encoded}#${hash}` : encoded;
}

export function keyFromSlug(slug: string[] | undefined, locale: Locale): RouteKey | null {
  if (!slug || slug.length === 0) return 'home';
  if (slug.length > 1) return null;
  let s = slug[0];
  try {
    s = decodeURIComponent(s);
  } catch {
    return null;
  }
  const hit = ROUTE_KEYS.find((k) => k !== 'home' && SLUGS[k][locale] === s);
  return hit ?? null;
}

export function staticSlugParams(locale: Locale): { slug?: string[] }[] {
  return ROUTE_KEYS.map((k) => (k === 'home' ? { slug: [] } : { slug: [SLUGS[k][locale]] }));
}

/** Legacy public URLs that no longer resolve to their own page. */
export const REDIRECTS: { source: string; destination: string }[] = [
  { source: '/verkkolynxin-arvot', destination: `${pathFor('about', 'fi')}#arvot` },
  { source: '/palvelut-toiminimiyrittajille', destination: pathFor('sole', 'fi') },
  { source: '/kayttoehdot', destination: pathFor('terms', 'fi') },
  { source: '/en/values', destination: `${pathFor('about', 'en')}#values` },
];
