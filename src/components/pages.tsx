import Image from 'next/image';
import Link from 'next/link';
import type { Dict, LegalSection } from '@/content/types';
import { CORE_SERVICE_KEYS, pathFor } from '@/lib/routes';
import { SITE, type Locale } from '@/lib/site';
import { CtaBand } from './CtaBand';
import { FaqBrowser } from './FaqBrowser';
import { PageHero } from './PageHero';
import { ValuesTrail } from './ValuesTrail';
import { Arrow, Photo } from './ui';

type P = { locale: Locale; dict: Dict };

/* ------------------------------------------------------------------ services index */
export function ServicesIndexPage({ locale, dict }: P) {
  const sp = dict.servicesPage;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: sp.title }]}
        title={sp.title}
        lede={sp.lede}
      />
      <section className="section section--light section--tight" aria-label={sp.overview}>
        <div className="container">
          <ol className="sindex">
            {dict.services
              .filter((s) => CORE_SERVICE_KEYS.includes(s.key))
              .map((s, i) => (
                <li key={s.key} className="sindex__row" data-reveal>
                  <span className="sindex__n" aria-hidden="true">
                    {s.n}
                  </span>
                  <h2>
                    <Link href={pathFor(s.key, locale)}>{s.name}</Link>
                  </h2>
                  <div>
                    <p className="dim">{s.summary}</p>
                    <ul className="keywords">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </section>
      {dict.services
        .filter((s) => s.audience)
        .map((s) => (
          <section
            key={s.key}
            className="section section--tint section--tight"
            aria-label={dict.labels.audience}
          >
            <div className="container sindex__row sindex__row--aud" data-reveal>
              <p className="sindex__aud-label">{dict.labels.audience}</p>
              <h2>
                <Link href={pathFor(s.key, locale)}>{s.name}</Link>
              </h2>
              <div>
                <p className="dim">{s.summary}</p>
                <ul className="keywords">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

/* ------------------------------------------------------------------ why */
export function WhyPage({ locale, dict }: P) {
  const w = dict.whyPage;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: w.meta.title }]}
        title={w.title}
        lede={w.lede}
      />
      <section className="section section--light" aria-label={w.meta.title}>
        <div className="container split">
          <div className="split__lead" data-reveal>
            <h2 className="split__title">{w.itemsTitle}</h2>
            <div className="prose why-intro">
              {w.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="why-legend">{w.meansForYou}</p>
          </div>
          <ol className="rows">
            {w.items.map((it, i) => (
              <li key={it.t} className="row row--numbered" data-reveal>
                <span className="row__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{it.t}</h3>
                <p className="row__d dim">{it.d}</p>
                <p className="row__benefit">{it.you}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="models-title">
        <div className="container split">
          <div className="split__lead" data-reveal>
            <h2 id="models-title" className="split__title">
              {w.modelsTitle}
            </h2>
          </div>
          <dl className="models">
            {w.models.map((m) => (
              <div key={m.t} data-reveal>
                <dt>{m.t}</dt>
                <dd className="dim">{m.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} title={w.closing} />
    </>
  );
}

/* ------------------------------------------------------------------ about */
export function AboutPage({ locale, dict }: P) {
  const a = dict.aboutPage;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: a.meta.title }]}
        title={a.title}
        lede={a.lede}
      />

      <section className="section section--light" aria-label={a.meta.title}>
        <div className="container split split--nav">
          <nav className="split__lead chapter-nav" aria-label={a.meta.title}>
            <ol>
              {a.chapters.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>{c.t}</a>
                </li>
              ))}
              <li>
                <a href="#arvot">{a.valuesTitle}</a>
              </li>
            </ol>
          </nav>
          <div className="chapters">
            {a.chapters.map((c, i) => (
              <article key={c.id} id={c.id} className="chapter" data-reveal>
                <h2 className="chapter__t">{c.t}</h2>
                <div className="prose">
                  {c.p.map((p, k) => (
                    <p key={k} className={k === 0 ? 'chapter__lead' : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
                {i === 1 && (
                  <figure className="chapter__figure">
                    <div className="chapter__photo">
                      <Photo
                        name="keskustori"
                        locale={locale}
                        sizes="(min-width: 900px) 58vw, 92vw"
                        position="50% 55%"
                      />
                    </div>
                    <figcaption>Tampere, {locale === 'fi' ? 'Suomi' : 'Finland'}</figcaption>
                  </figure>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised" aria-labelledby="name-title">
        <div className="container name__grid">
          <div className="name__mark" data-reveal>
            <Image
              src="/assets/brand/verkkolynx-mark-white.svg"
              alt=""
              width={161}
              height={331}
              unoptimized
            />
          </div>
          <div className="name__copy" data-reveal>
            <h2 id="name-title">{a.nameTitle}</h2>
            <p className="lede dim">{a.nameText}</p>
          </div>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="process-title">
        <div className="container">
          <div className="outcomes__head" data-reveal>
            <h2 id="process-title">{a.processTitle}</h2>
          </div>
          <ol className="process">
            {a.process.map((s, i) => (
              <li key={s.t} data-reveal>
                <span className="process__pt" aria-hidden="true" />
                <span className="process__n">{i + 1}</span>
                <h3>{s.t}</h3>
                <p className="dim">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ValuesTrail
        locale={locale}
        values={dict.values}
        id="arvot"
        heading={a.valuesTitle}
        intro={a.valuesIntro}
      />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

/* ------------------------------------------------------------------ faq */
export function FaqPage({ locale, dict }: P) {
  const f = dict.faqPage;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: f.meta.title }]}
        title={f.title}
        lede={f.lede}
      />
      <section className="section section--light faq-section" aria-label={f.title}>
        <div className="container">
          <FaqBrowser
            categories={f.categoriesData}
            labels={{
              search: f.search,
              placeholder: f.searchPlaceholder,
              categories: f.categories,
              all: f.all,
              none: f.none,
              noneHelp: f.noneHelp,
              expandAll: f.expandAll,
              collapseAll: f.collapseAll,
            }}
            resultsLabel={locale === 'fi' ? 'kysymystä' : 'questions'}
            locale={locale}
          />
          <p className="faq-more dim">
            {f.stillQuestions}{' '}
            <Link className="tlink" href={pathFor('contact', locale)}>
              {dict.nav.contact}
              <Arrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ contact */
export function ContactPage({ locale, dict }: P) {
  const c = dict.contactPage;
  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        trail={[{ label: c.meta.title }]}
        title={c.title}
        lede={c.lede}
      />
      <section className="section section--light" aria-label={c.meta.title}>
        <div className="container contact">
          <div className="contact__main" data-reveal>
            <p className="contact__label">{c.emailLabel}</p>
            <a className="contact__mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p className="dim">{c.emailNote}</p>

            <h2 className="contact__h">{c.topicsTitle}</h2>
            <ul className="topics">
              {c.topics.map((t) => (
                <li key={t.label}>
                  <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(t.subject)}`}>
                    <span>{t.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="contact__side" data-reveal>
            <h2 className="contact__h contact__h--small">{c.detailsTitle}</h2>
            <dl className="details">
              {c.details.map((d) => (
                <div key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
              <div>
                <dt>{locale === 'fi' ? 'Aukioloajat' : 'Hours'}</dt>
                <dd>{c.hours}</dd>
              </div>
            </dl>

            <h2 className="contact__h contact__h--small">{c.startTitle}</h2>
            <ol className="steps">
              {c.start.map((s, i) => (
                <li key={s}>
                  <span>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="place" aria-hidden="true">
        <Photo name="nasijarvi" locale={locale} sizes="100vw" position="50% 55%" />
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ legal */
function Sections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h} className="legal__sec">
          <h2>{s.h}</h2>
          {s.p?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.list && (
            <ul>
              {s.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
          {s.sub?.map((sub, i) => (
            <div key={`${sub.h}-${i}`} className="legal__sub">
              {sub.h && <h3>{sub.h}</h3>}
              {sub.p?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {sub.list && (
                <ul>
                  {sub.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

export function LegalPage({ locale, dict, which }: P & { which: 'privacy' | 'terms' }) {
  const doc = dict.legal[which];
  return (
    <>
      <PageHero locale={locale} dict={dict} trail={[{ label: doc.title }]} title={doc.title} />
      <section className="section section--light" aria-label={doc.title}>
        <div className="container legal">
          {dict.legal.languageNote && <p className="legal__note">{dict.legal.languageNote}</p>}
          <p className="lede">{doc.intro}</p>
          <Sections sections={doc.sections} />
          <p className="legal__back">
            <Link className="tlink" href={pathFor('contact', locale)}>
              {dict.nav.contact}
              <Arrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
