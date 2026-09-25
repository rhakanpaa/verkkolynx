import Link from 'next/link';
import type { Dict, Service } from '@/content/types';
import { pathFor } from '@/lib/routes';
import { SITE, type Locale } from '@/lib/site';
import { CtaBand } from './CtaBand';
import { Disclosure } from './Disclosure';
import { PageHero } from './PageHero';
import { SystemDiagram } from './SystemDiagram';
import { Arrow, Photo } from './ui';

export function ServicePage({
  locale,
  dict,
  service,
}: {
  locale: Locale;
  dict: Dict;
  service: Service;
}) {
  const s = service;
  const related = s.related.map((k) => dict.services.find((x) => x.key === k)!);
  // pages with a "what we can build" block start their alternation one step later
  const problemsTone = s.groups ? 'light' : 'tint';
  const capsTone = s.groups ? 'tint' : 'light';
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: dict.labels.services, key: 'services' }, { label: s.name }]}
        title={s.heroTitle}
        lede={s.lede}
        visual={
          <div className="phero__photo">
            <Photo name={s.photo} locale={locale} sizes="(min-width: 900px) 40vw, 92vw" priority />
          </div>
        }
        actions={
          <div className="phero__actions">
            <Link className="btn btn--solid" href={pathFor('contact', locale)}>
              {dict.labels.contactUs}
            </Link>
            <a
              className="tlink"
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(s.name)}`}
            >
              {SITE.email}
            </a>
          </div>
        }
      />

      <section className="section section--light section--tight" aria-label={s.name}>
        <div className="container split split--intro">
          <div className="split__lead" data-reveal>
            <p className="intro__big">{s.intro[0]}</p>
          </div>
          <div className="prose" data-reveal>
            {s.intro.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="keywords keywords--rule" aria-label={s.name}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {s.groups && (
        <section className="section section--tint" aria-labelledby="groups-title">
          <div className="container">
            <div className="groups__head" data-reveal>
              <h2 id="groups-title">{s.groupsTitle}</h2>
            </div>
            <ul className="groups">
              {s.groups.map((g, i) => (
                <li key={g.tag} className="group" data-reveal>
                  <Disclosure
                    as="h3"
                    className="group__disc"
                    summary={
                      <>
                        <span className="group__tag">{g.tag}</span>
                        <span className="group__t">{g.t}</span>
                      </>
                    }
                  >
                    <p className="dim">{g.d}</p>
                    <ul className="group__items">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </Disclosure>
                </li>
              ))}
            </ul>
            {s.scale && (
              <div className="scale" data-reveal>
                <h3 className="scale__title">{s.scale.title}</h3>
                <ol>
                  {s.scale.items.map((it, i) => (
                    <li key={it.t}>
                      <span className="scale__bar" data-n={i + 1} aria-hidden="true" />
                      <h4>{it.t}</h4>
                      <p className="dim">{it.d}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      {s.diagram && (
        <section className="section section--raised" aria-labelledby="diagram-title">
          <div className="container">
            <div className="groups__head" data-reveal>
              <h2 id="diagram-title">{dict.system.title}</h2>
              <p className="dim">{dict.system.lede}</p>
            </div>
            <SystemDiagram system={dict.system} />
          </div>
        </section>
      )}

      <section className={`section section--${problemsTone}`} aria-labelledby="problems-title">
        <div className="container split">
          <div className="split__lead" data-reveal>
            <h2 id="problems-title">{s.problemsTitle}</h2>
          </div>
          <ul className="rows rows--two">
            {s.problems.map((p, i) => (
              <li key={p.t} className="row row--problem" data-reveal>
                <Disclosure summary={p.t} as="h3" className="row__disc">
                  <p className="row__d dim">{p.d}</p>
                </Disclosure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section section--${capsTone}`} aria-labelledby="caps-title">
        <div className="container split">
          <div className="split__lead" data-reveal>
            <h2 id="caps-title">{s.capabilitiesTitle}</h2>
          </div>
          <ol className="rows">
            {s.capabilities.map((c, i) => (
              <li
                key={c.t}
                className={s.key === 'software' ? 'row row--numbered' : 'row'}
                data-reveal
              >
                {s.key === 'software' && (
                  <span className="row__num" aria-hidden="true">
                    {i + 1}
                  </span>
                )}
                <h3>{c.t}</h3>
                <p className="row__d dim">{c.d}</p>
                {c.ex && (
                  <p className="row__ex">
                    <span className="row__ex-label">{dict.labels.example}</span>
                    {c.ex}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--raised" aria-labelledby="outcomes-title">
        <div className="container">
          <div className="outcomes__head" data-reveal>
            <h2 id="outcomes-title">{s.outcomesTitle}</h2>
          </div>
          <ul className="outcomes" style={{ '--n': s.outcomes.length } as React.CSSProperties}>
            {s.outcomes.map((o, i) => (
              <li key={o.t} data-reveal>
                <h3>{o.t}</h3>
                <p className="dim">{o.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="edge-title">
        <div className="container edge">
          <div className="edge__media" aria-hidden="true">
            <Photo name={s.photo} locale={locale} sizes="(min-width: 900px) 40vw, 92vw" />
          </div>
          <div className="edge__body" data-reveal>
            <h2 id="edge-title">{s.edgeTitle}</h2>
            <ul className="ticks">
              {s.edge.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            {s.extra && s.extraTitle && (
              <div className="extra">
                <Disclosure summary={s.extraTitle} as="h3" className="extra__disc">
                  <ul>
                    {s.extra.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </Disclosure>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="related-title">
        <div className="container split">
          <div className="split__lead" data-reveal>
            <h2 id="related-title" className="split__title">
              {dict.labels.related}
            </h2>
          </div>
          <div>
            {s.bridge && (
              <ul className="bridge">
                {s.bridge.map((b) => {
                  const target = dict.services.find((x) => x.key === b.to)!;
                  return (
                    <li key={b.to}>
                      <Link href={pathFor(b.to, locale)} className="bridge__link">
                        <span className="bridge__q">{b.text}</span>
                        <span className="bridge__a">{target.name}</span>
                        <Arrow />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
            <ul className="related__list">
              {related
                .filter((r) => !s.bridge?.some((b) => b.to === r.key))
                .map((r) => (
                  <li key={r.key}>
                    <Link href={pathFor(r.key, locale)} className="related__link">
                      <span className="related__name">{r.name}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} title={s.ctaTitle} text={s.ctaText} />
    </>
  );
}
