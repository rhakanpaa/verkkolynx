import Link from 'next/link';
import { getDict } from '@/content';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';

/** `alts` adds a block per extra language so the fallback 404 serves every language version. */
export function NotFound({ locale, alts }: { locale: Locale; alts?: Locale[] }) {
  const d = getDict(locale);
  return (
    <section className="section section--dark notfound">
      <div className="container notfound__inner">
        <p className="notfound__code">404</p>
        <h1>{d.notFound.title}</h1>
        <p className="lede dim">{d.notFound.text}</p>
        <Link className="btn btn--solid" href={pathFor('home', locale)}>
          {d.notFound.back}
        </Link>
        {alts?.map((alt) => (
          <div className="notfound__alt" lang={alt} key={alt}>
            <p className="dim">{getDict(alt).notFound.title}.</p>
            <Link className="tlink" href={pathFor('home', alt)}>
              {getDict(alt).notFound.back}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
