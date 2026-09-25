import Link from 'next/link';
import type { Dict } from '@/content/types';
import { CORE_SERVICE_KEYS, pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Photo } from './ui';

/** The five core disciplines as an editorial numbered system: number, name, outcome, examples, cue, link. */
export function Capabilities({ locale, dict }: { locale: Locale; dict: Dict }) {
  const primary = dict.services.filter((s) => CORE_SERVICE_KEYS.includes(s.key));
  return (
    <section className="section section--light" aria-labelledby="cap-title" id="palvelut">
      <div className="container">
        <header className="cap-head">
          <h2 id="cap-title" data-reveal>
            {dict.capabilities.title}
          </h2>
        </header>

        <ol className="cap-list">
          {primary.map((s, i) => (
            <li key={s.key} className="cap" data-reveal>
              <span className="cap__n" aria-hidden="true">
                {s.n}
              </span>
              <div className="cap__main">
                <h3 className="cap__title">
                  <Link href={pathFor(s.key, locale)} className="cap__link">
                    {s.name}
                  </Link>
                </h3>
                <p className="cap__summary">{s.summary}</p>
                <ul className="keywords" aria-label={s.name}>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div aria-hidden="true">
                <div className="cap__frame">
                  <Photo
                    name={s.photo}
                    locale={locale}
                    sizes="(min-width: 900px) 34vw, 92vw"
                    position={
                      s.key === 'analytics'
                        ? '50% 62%'
                        : s.key === 'marketing'
                          ? '32% 40%'
                          : '50% 50%'
                    }
                  />
                </div>
              </div>
              <span className="sr-only">{dict.capabilities.more}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
