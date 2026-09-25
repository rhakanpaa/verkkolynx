import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Arrow } from './ui';

export function WhyHome({ locale, dict }: { locale: Locale; dict: Dict }) {
  const w = dict.why;
  return (
    <section className="section section--tint" aria-labelledby="why-title">
      <div className="container why grid">
        <div className="why__lead" data-reveal>
          <h2 id="why-title">{w.title}</h2>
          <p className="dim">{w.intro}</p>
          <dl className="why__facts">
            {w.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
          <Link className="tlink" href={pathFor('why', locale)}>
            {w.more}
            <Arrow />
          </Link>
        </div>
        <ol className="why__list">
          {w.items.map((it, i) => (
            <li key={it.t} data-reveal>
              <h3>{it.t}</h3>
              <p className="dim">{it.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
