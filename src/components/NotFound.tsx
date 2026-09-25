import Link from 'next/link';
import { getDict } from '@/content';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';

export function NotFound({ locale }: { locale: Locale }) {
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
      </div>
    </section>
  );
}
