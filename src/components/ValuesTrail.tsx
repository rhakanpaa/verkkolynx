'use client';

import { useState } from 'react';
import type { Dict } from '@/content/types';
import type { Locale } from '@/lib/site';
import { Photo } from './ui';

/** The five values as waypoints on a trail; the selected waypoint drives the photograph. */
export function ValuesTrail({
  locale,
  values: v,
  id,
  heading,
  intro,
  headingLevel = 2,
}: {
  locale: Locale;
  values: Dict['values'];
  id?: string;
  heading?: string;
  intro?: string;
  headingLevel?: 2 | 3;
}) {
  const [active, setActive] = useState(0);
  const H = `h${headingLevel}` as 'h2' | 'h3';
  return (
    <section
      className="section section--raised"
      id={id}
      aria-labelledby={`${id ?? 'values'}-title`}
    >
      <div className="container values__grid">
        <div className="values__lead" data-reveal>
          <H id={`${id ?? 'values'}-title`}>{heading ?? v.title}</H>
          <p className="dim">{intro ?? v.intro}</p>
        </div>

        <div className="values__media" aria-hidden="true">
          <div className="values__frame">
            {v.items.map((it, i) => (
              <div key={it.n} className="values__photo" data-on={i === active || undefined}>
                <Photo name={it.photo} locale={locale} sizes="(min-width: 900px) 42vw, 92vw" />
              </div>
            ))}
          </div>
        </div>

        <ol className="values__list">
          {v.items.map((it, i) => {
            const open = i === active;
            return (
              <li
                key={it.n}
                className="value"
                data-open={open || undefined}
                onMouseEnter={() => setActive(i)}
              >
                <button
                  type="button"
                  className="value__btn"
                  aria-expanded={open}
                  aria-controls={`value-${i}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="value__title">{it.title}</span>
                </button>
                <div className="value__body" id={`value-${i}`} role="region" aria-label={it.title}>
                  <div>
                    <p className="value__short">{it.short}</p>
                    <p className="value__long dim">{it.long}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
