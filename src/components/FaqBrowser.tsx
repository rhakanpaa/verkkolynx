'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { FaqCategory } from '@/content/types';
import type { Locale } from '@/lib/site';

interface Labels {
  search: string;
  placeholder: string;
  categories: string;
  all: string;
  none: string;
  noneHelp: string;
  expandAll: string;
  collapseAll: string;
}

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function FaqBrowser({
  categories,
  labels,
  resultsLabel,
}: {
  categories: FaqCategory[];
  labels: Labels;
  resultsLabel: string;
  locale: Locale;
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [current, setCurrent] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const q = norm(query.trim());
  const filtered = useMemo(
    () =>
      categories
        .map((c) => ({
          ...c,
          items: q
            ? c.items.filter((it) =>
                norm([it.q, ...it.a, ...(it.list ?? [])].join(' ')).includes(q),
              )
            : c.items,
        }))
        .filter((c) => c.items.length > 0),
    [categories, q],
  );
  const total = filtered.reduce((n, c) => n + c.items.length, 0);

  const setItem = useCallback((id: string, on: boolean) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  // deep links: #q-<id> opens and scrolls to a question, #c-<id> to a category
  useEffect(() => {
    const go = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;
      if (hash.startsWith('q-')) {
        const id = hash.slice(2);
        if (categories.some((c) => c.items.some((i) => i.id === id))) {
          setQuery('');
          setItem(id, true);
          const cat = categories.find((c) => c.items.some((i) => i.id === id));
          if (cat) setCurrent(cat.id);
          requestAnimationFrame(() =>
            document.getElementById(hash)?.scrollIntoView({ block: 'start' }),
          );
        }
      } else if (hash.startsWith('c-')) {
        setQuery('');
        setCurrent(hash.slice(2));
        requestAnimationFrame(() =>
          document.getElementById(hash)?.scrollIntoView({ block: 'start' }),
        );
      }
    };
    go();
    window.addEventListener('hashchange', go);
    return () => window.removeEventListener('hashchange', go);
  }, [categories, setItem]);

  // scroll-spy for the category index
  useEffect(() => {
    const els = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[];
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0]?.target.getAttribute('data-cat');
        if (id) setCurrent(id);
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  const toggle = (id: string) => {
    const on = !open.has(id);
    setItem(id, on);
    if (on) history.replaceState(null, '', `#q-${id}`);
  };

  const allIds = useMemo(() => filtered.flatMap((c) => c.items.map((i) => i.id)), [filtered]);
  const allOpen = allIds.length > 0 && allIds.every((id) => open.has(id));

  return (
    <div className="faq" data-searching={q ? '' : undefined}>
      <aside className="faq__index">
        <div className="faq__search">
          <label htmlFor="faq-search">{labels.search}</label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.placeholder}
            autoComplete="off"
            enterKeyHint="search"
          />
        </div>
        <nav aria-label={labels.categories}>
          <p className="faq__index-title">{labels.categories}</p>
          <ul>
            {categories.map((c) => {
              const count = filtered.find((f) => f.id === c.id)?.items.length ?? 0;
              return (
                <li key={c.id}>
                  <a
                    href={`#c-${c.id}`}
                    aria-current={current === c.id && count > 0 ? 'location' : undefined}
                    data-empty={count === 0 || undefined}
                    onClick={(e) => {
                      setCurrent(c.id);
                      // phones show one category at a time: reveal it first, then scroll to it
                      if (window.matchMedia('(max-width: 899px)').matches) {
                        e.preventDefault();
                        requestAnimationFrame(() =>
                          document.getElementById(`c-${c.id}`)?.scrollIntoView({ block: 'start' }),
                        );
                      }
                    }}
                  >
                    <span>{c.title}</span>
                    <span className="faq__count">{count}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div>
        <div className="faq__bar">
          <p className="faq__status" role="status" aria-live="polite">
            {total} {resultsLabel}
          </p>
          <button
            type="button"
            className="faq__toggle"
            onClick={() => setOpen(allOpen ? new Set() : new Set(allIds))}
          >
            {allOpen ? labels.collapseAll : labels.expandAll}
          </button>
        </div>

        {filtered.length === 0 && (
          <div className="faq__none">
            <p className="faq__none-t">{labels.none}</p>
            <p className="dim">{labels.noneHelp}</p>
          </div>
        )}

        {filtered.map((c) => (
          <section
            key={c.id}
            id={`c-${c.id}`}
            data-cat={c.id}
            ref={(el) => {
              sectionRefs.current[c.id] = el;
            }}
            className="faq__cat"
            data-current={current === c.id || undefined}
            aria-labelledby={`h-${c.id}`}
          >
            <h2 id={`h-${c.id}`}>
              {c.title}
              <span className="faq__count">{c.items.length}</span>
            </h2>
            <ul>
              {c.items.map((it) => {
                const isOpen = open.has(it.id);
                return (
                  <li key={it.id} id={`q-${it.id}`} className="qa" data-open={isOpen || undefined}>
                    <h3>
                      <button
                        type="button"
                        id={`qb-${it.id}`}
                        className="qa__btn"
                        aria-expanded={isOpen}
                        aria-controls={`a-${it.id}`}
                        onClick={() => toggle(it.id)}
                      >
                        <span>{it.q}</span>
                        <span className="qa__icon" aria-hidden="true" />
                      </button>
                    </h3>
                    <div
                      className="qa__panel"
                      id={`a-${it.id}`}
                      role="region"
                      aria-labelledby={`qb-${it.id}`}
                    >
                      <div>
                        <div className="qa__content">
                          {it.a.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                          {it.list && (
                            <ul>
                              {it.list.map((l) => (
                                <li key={l}>{l}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
