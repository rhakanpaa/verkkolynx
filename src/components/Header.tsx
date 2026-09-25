'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dict } from '@/content/types';
import { keyFromSlug, pathFor, SERVICE_KEYS, type RouteKey } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Logo } from './ui';

export interface HeaderData {
  nav: Dict['nav'];
  services: { key: RouteKey; nav: string; line: string; audience: boolean }[];
  location: string;
}

function currentKey(pathname: string, locale: Locale): RouteKey {
  const p = locale === 'en' ? pathname.replace(/^\/en/, '') : pathname;
  const slug = p.split('/').filter(Boolean);
  return keyFromSlug(slug, locale) ?? 'home';
}

export function Header({ locale, data }: { locale: Locale; data: HeaderData }) {
  const pathname = usePathname() ?? '/';
  const key = currentKey(pathname, locale);
  const [scrolled, setScrolled] = useState(false);
  // open state is tied to the pathname it was opened on, so navigating closes everything
  const [sheetPath, setSheetPath] = useState<string | null>(null); // mobile sheet
  const [menuPath, setMenuPath] = useState<string | null>(null); // desktop services dropdown
  const sheetOpen = sheetPath === pathname;
  const menuOpen = menuPath === pathname;
  const setSheetOpen = useCallback(
    (v: boolean | ((prev: boolean) => boolean)) =>
      setSheetPath((prev) =>
        (typeof v === 'function' ? v(prev === pathname) : v) ? pathname : null,
      ),
    [pathname],
  );
  const setMenuOpen = useCallback((v: boolean) => setMenuPath(v ? pathname : null), [pathname]);
  const [mobileServices, setMobileServices] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pinned = useRef(false); // opened by click or keyboard rather than hover

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    pinned.current = false;
  }, [pathname]);

  // lock page scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sheetOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (menuRef.current?.contains(document.activeElement)) {
        menuRef.current.querySelector('button')?.focus();
      }
      pinned.current = false;
      setMenuOpen(false);
      setSheetOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        pinned.current = false;
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [setMenuOpen, setSheetOpen]);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  }, [setMenuOpen]);
  const closeMenuSoon = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      if (!pinned.current) setMenuOpen(false);
    }, 140);
  }, [setMenuOpen]);

  const isServices = key === 'services' || (SERVICE_KEYS as string[]).includes(key);
  const isActive = (k: RouteKey) => (k === 'services' ? isServices : k === key);
  const nav = data.nav;
  const core = data.services.filter((s) => !s.audience);
  const audience = data.services.filter((s) => s.audience);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled || undefined}
      data-open={sheetOpen || undefined}
    >
      <div className="container site-header__bar">
        <Link
          className="site-header__logo"
          href={pathFor('home', locale)}
          aria-label={`Verkkolynx – ${nav.items[0].label}`}
        >
          <Logo variant="white" height={34} />
        </Link>

        <nav className="site-header__nav" aria-label={nav.primary}>
          <ul className="nav-list">
            {nav.items
              .filter((i) => i.key !== 'contact')
              .map((item) =>
                item.key === 'services' ? (
                  <li
                    key={item.key}
                    ref={menuRef}
                    className="nav-list__item--menu"
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenuSoon}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        pinned.current = false;
                        setMenuOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="nav-link"
                      aria-expanded={menuOpen}
                      aria-controls="services-menu"
                      aria-current={isActive('services') ? 'page' : undefined}
                      onClick={() => {
                        const close = menuOpen && pinned.current;
                        pinned.current = !close;
                        setMenuOpen(!close);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          pinned.current = true;
                          setMenuOpen(true);
                          requestAnimationFrame(() =>
                            menuRef.current?.querySelector<HTMLElement>('.dropdown a')?.focus(),
                          );
                        }
                      }}
                    >
                      {item.label}
                      <svg className="nav-link__chev" viewBox="0 0 10 6" aria-hidden="true">
                        <path
                          d="M1 1l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </button>
                    <div id="services-menu" className="dropdown" data-open={menuOpen || undefined}>
                      <ul>
                        {core.map((s) => (
                          <li key={s.key}>
                            <Link className="dropdown__item" href={pathFor(s.key, locale)}>
                              <span className="dropdown__name">{s.nav}</span>
                              <span className="dropdown__line">{s.line}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="dropdown__more">
                        {audience.map((s) => (
                          <li key={s.key}>
                            <Link className="dropdown__item" href={pathFor(s.key, locale)}>
                              <span className="dropdown__name">{s.nav}</span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link className="dropdown__item" href={pathFor('services', locale)}>
                            <span className="dropdown__name">{nav.allServices}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li
                    key={item.key}

                    onMouseEnter={() => {
                      if (!pinned.current) setMenuOpen(false);
                    }}
                  >
                    <Link
                      className="nav-link"
                      href={pathFor(item.key, locale)}
                      aria-current={isActive(item.key) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
          </ul>
        </nav>

        <div className="site-header__right">
          <div className="lang" role="group" aria-label={nav.language}>
            <Link
              href={pathFor(key, 'fi')}
              hrefLang="fi"
              lang="fi"
              aria-current={locale === 'fi' ? 'true' : undefined}
              aria-label={locale === 'fi' ? 'Suomi' : 'Vaihda kieleksi suomi'}
            >
              FI
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={pathFor(key, 'en')}
              hrefLang="en"
              lang="en"
              aria-current={locale === 'en' ? 'true' : undefined}
              aria-label={locale === 'en' ? 'English' : 'Switch to English'}
            >
              EN
            </Link>
          </div>
          <Link
            className="header-cta"
            href={pathFor('contact', locale)}
            aria-current={key === 'contact' ? 'page' : undefined}
          >
            {nav.contact}
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={sheetOpen}
            aria-controls="mobile-sheet"
            onClick={() => setSheetOpen((v) => !v)}
          >
            <span className="sr-only">{sheetOpen ? nav.close : nav.menu}</span>
            <span className="burger__lines" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-sheet" className="sheet" hidden={!sheetOpen}>
        <div className="container sheet__inner">
          <nav aria-label={nav.primary}>
            <ul className="sheet__list">
              {nav.items.map((item) =>
                item.key === 'services' ? (
                  <li key={item.key}>
                    <button
                      type="button"
                      className="sheet__link"
                      aria-expanded={mobileServices}
                      aria-controls="sheet-services"
                      onClick={() => setMobileServices((v) => !v)}
                    >
                      {item.label}
                      <span
                        className="sheet__plus"
                        aria-hidden="true"
                        data-open={mobileServices || undefined}
                      />
                    </button>
                    <ul id="sheet-services" className="sheet__sub" hidden={!mobileServices}>
                      {core.map((s) => (
                        <li key={s.key}>
                          <Link href={pathFor(s.key, locale)} className="sheet__sublink">
                            {s.nav}
                          </Link>
                        </li>
                      ))}
                      {audience.map((s) => (
                        <li key={s.key} className="sheet__divided">
                          <Link href={pathFor(s.key, locale)} className="sheet__sublink">
                            {s.nav}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={pathFor('services', locale)} className="sheet__sublink">
                          {nav.allServices}
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li key={item.key}>
                    <Link
                      href={pathFor(item.key, locale)}
                      className="sheet__link"
                      aria-current={isActive(item.key) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="sheet__foot">
            <Link className="btn btn--solid" href={pathFor('contact', locale)}>
              {nav.contact}
            </Link>
            <p className="sheet__place">{data.location}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
