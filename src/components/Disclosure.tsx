'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Native <details> that is expanded (and not collapsible) from 900px up, and collapsed on phones.
 * The markup is always server-rendered open, so the content is in the HTML; before hydration the
 * phone stylesheet already shows it collapsed, so nothing jumps.
 */
export function Disclosure({
  summary,
  children,
  className = '',
  summaryClassName = '',
  as: Summary = 'span',
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
  summaryClassName?: string;
  as?: 'span' | 'h2' | 'h3';
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(min-width: 900px)');
    const sync = () => {
      el.open = mq.matches;
    };
    el.dataset.ready = '';
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return (
    <details ref={ref} className={`disc ${className}`} open>
      <summary className={`disc__sum ${summaryClassName}`}>
        <Summary className="disc__title">{summary}</Summary>
        <span className="disc__icon" aria-hidden="true" />
      </summary>
      <div className="disc__body">{children}</div>
    </details>
  );
}
