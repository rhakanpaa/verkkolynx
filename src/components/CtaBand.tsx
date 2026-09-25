import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import { SITE, type Locale } from '@/lib/site';

export function CtaBand({
  locale,
  dict,
  title,
  text,
}: {
  locale: Locale;
  dict: Dict;
  title?: string;
  text?: string;
}) {
  const c = dict.cta;
  return (
    <section className="section section--dark" aria-labelledby="cta-title">
      <div className="container cta__grid">
        <div className="cta__copy" data-reveal>
          <h2 id="cta-title">{title ?? c.title}</h2>
          <p className="lede dim">{text ?? c.text}</p>
        </div>
        <div className="cta__actions" data-reveal>
          <a className="cta__mail" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <div className="cta__buttons">
            <Link className="btn btn--solid" href={pathFor('contact', locale)}>
              {c.button}
            </Link>
            <Link className="tlink" href={pathFor('faq', locale)}>
              {c.or}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
