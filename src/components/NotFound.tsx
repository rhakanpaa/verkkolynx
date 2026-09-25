import Link from 'next/link';
import { getDict } from '@/content';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';

/** `alt` adds a second-language block so one 404 page serves both language versions. */
export function NotFound({ locale, alt }: { locale: Locale; alt?: Locale }) {
  const d = getDict(locale);
  const a = alt ? getDict(alt) : null;
  return (
    <section className="section section--dark notfound">
      <div className="container notfound__inner">
        <p className="notfound__code">404</p>
        <h1>{d.notFound.title}</h1>
        <p className="lede dim">{d.notFound.text}</p>
        <Link className="btn btn--solid" href={pathFor('home', locale)}>
          {d.notFound.back}
        </Link>
        {a && alt && (
          <div className="notfound__alt" lang={alt}>
            <p className="dim">{a.notFound.title}.</p>
            <Link className="tlink" href={pathFor('home', alt)}>
              {a.notFound.back}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
