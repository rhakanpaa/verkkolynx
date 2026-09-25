import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Photo } from './ui';

export function SoleSection({ locale, dict }: { locale: Locale; dict: Dict }) {
  const s = dict.sole;
  return (
    <section className="section section--light" aria-labelledby="sole-title">
      <div className="container sole__grid">
        <div className="sole__copy" data-reveal>
          <h2 id="sole-title">{s.title}</h2>
          <p className="lede dim">{s.text}</p>
          <ul className="sole__items">
            {s.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <Link className="btn btn--line-light" href={pathFor('sole', locale)}>
            {s.cta}
          </Link>
        </div>
        <div className="sole__media" aria-hidden="true">
          <Photo
            name="lakePortrait"
            locale={locale}
            sizes="(min-width: 900px) 36vw, 92vw"
            position="50% 40%"
          />
        </div>
      </div>
    </section>
  );
}
