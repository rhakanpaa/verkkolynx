'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useSyncExternalStore } from 'react';

const BUILD_YEAR = new Date().getFullYear();
const noop = () => () => {};

/** Current year, resolved in the visitor's browser so a static build never goes stale. */
export function CopyrightYear() {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );
  return <span suppressHydrationWarning>{year}</span>;
}

/** Marks the document as JS-enabled and reveals [data-reveal] elements as they enter the viewport. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
