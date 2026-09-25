import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import { SITE, type Locale } from '@/lib/site';
import { CopyrightYear } from './client-bits';
import { Logo } from './ui';

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href={pathFor('home', locale)} aria-label="Verkkolynx" className="footer__logo">
              <Logo variant="white" height={44} />
            </Link>
            <p className="footer__tag">{f.tagline}</p>
            <a className="footer__mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>

          <nav className="footer__col" aria-label={f.explore}>
            <h2>{f.explore}</h2>
            <ul>
              {dict.nav.items.map((i) => (
                <li key={i.key}>
                  <Link href={pathFor(i.key, locale)}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label={dict.nav.servicesMenuTitle}>
            <h2>{dict.nav.servicesMenuTitle}</h2>
            <ul>
              {dict.services.map((s) => (
                <li key={s.key}>
                  <Link href={pathFor(s.key, locale)}>{s.nav}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2>{f.company}</h2>
            <ul>
              <li>{SITE.legalName}</li>
              <li>
                {f.businessId}: {SITE.businessId}
              </li>
              <li>{f.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © <CopyrightYear /> {f.rights}
          </p>
          <ul className="footer__legal">
            <li>
              <Link href={pathFor('privacy', locale)}>{f.privacy}</Link>
            </li>
            <li>
              <Link href={pathFor('terms', locale)}>{f.terms}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
