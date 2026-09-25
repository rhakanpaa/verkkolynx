import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { HeroMap } from './HeroMap';
import { Photo } from './ui';

export function Hero({ locale, dict }: { locale: Locale; dict: Dict }) {
  const h = dict.hero;
  return (
    <section className="hero section--dark" aria-labelledby="hero-title">
      <div className="hero__photo" aria-hidden="true">
        <Photo name="tammerkoski" locale={locale} sizes="100vw" priority position="50% 62%" />
      </div>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__place">{h.eyebrow}</p>
          <h1 id="hero-title">{h.title}</h1>
          <p className="lede dim">{h.lede}</p>
          <div className="hero__actions">
            <Link className="btn btn--solid" href={pathFor('contact', locale)}>
              {h.primary}
            </Link>
            <Link className="btn btn--line" href={pathFor('services', locale)}>
              {h.secondary}
            </Link>
          </div>
        </div>
        <HeroMap locale={locale} nodes={h.nodes} edges={h.edges} label={h.mapLabel} />
      </div>
      <ol className="container hero__steps" aria-label={h.steps.join(', ')}>
        {h.steps.map((s, i) => (
          <li key={s}>
            <span className="hero__step-n">{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
    </section>
  );
}
