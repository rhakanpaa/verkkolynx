import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Dict } from '@/content/types';
import { pathFor, type RouteKey } from '@/lib/routes';
import type { Locale } from '@/lib/site';

export interface Crumb {
  label: string;
  key?: RouteKey;
}

export function Breadcrumbs({
  locale,
  dict,
  trail,
}: {
  locale: Locale;
  dict: Dict;
  trail: Crumb[];
}) {
  return (
    <nav className="crumbs" aria-label={dict.nav.breadcrumb}>
      <ol>
        <li>
          <Link href={pathFor('home', locale)}>{dict.labels.home}</Link>
        </li>
        {trail.map((c, i) => (
          <li key={c.label}>
            {c.key && i < trail.length - 1 ? (
              <Link href={pathFor(c.key, locale)}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  locale,
  dict,
  trail,
  title,
  lede,
  visual,
  actions,
}: {
  locale: Locale;
  dict: Dict;
  trail: Crumb[];
  title: string;
  lede?: string;
  visual?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="phero section--dark" aria-labelledby="page-title">
      <div className="container">
        <Breadcrumbs locale={locale} dict={dict} trail={trail} />
        <div className={`phero__grid${visual ? ' phero__grid--visual' : ''}`}>
          <div className="phero__copy">
            <h1 id="page-title">{title}</h1>
            {lede && <p className="lede dim">{lede}</p>}
            {actions}
          </div>
          {visual && <div>{visual}</div>}
        </div>
      </div>
    </section>
  );
}
