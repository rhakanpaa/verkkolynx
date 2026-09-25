'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Arrow } from './ui';

const CHAIN = ['data', 'software', 'automation'];
const RELATED = ['commerce', 'web', 'seo'];

/** Data → software → automation, feeding ecommerce, web and SEO. Select a box to read what connects to it. */
export function HeroMap({
  locale,
  nodes,
  edges,
  label,
}: {
  locale: Locale;
  nodes: Dict['hero']['nodes'];
  edges: Dict['hero']['edges'];
  label: string;
}) {
  const [active, setActive] = useState('software');
  const byId = (id: string) => nodes.find((n) => n.id === id)!;
  const relations = edges.filter((e) => e.a === active || e.b === active);
  const linked = (id: string) => relations.some((e) => e.a === id || e.b === id);

  const box = (id: string) => {
    const n = byId(id);
    return (
      <button
        key={id}
        type="button"
        className="flow__box"
        data-active={id === active || undefined}
        data-linked={(id !== active && linked(id)) || undefined}
        aria-pressed={id === active}
        onMouseEnter={() => setActive(id)}
        onFocus={() => setActive(id)}
        onClick={() => setActive(id)}
      >
        {n.label}
      </button>
    );
  };

  return (
    <div className="flow" role="group" aria-label={label}>
      <div className="flow__diagram">
        <div className="flow__chain">
          {CHAIN.map((id, i) => [
            i > 0 && (
              <span key={`d${id}`} className="flow__down" aria-hidden="true">
                ↓
              </span>
            ),
            box(id),
          ])}
        </div>
        <span className="flow__arrow" aria-hidden="true" />
        <div className="flow__related">{RELATED.map(box)}</div>
      </div>
      {/* every readout is rendered in the same grid cell, so the panel is always as tall as the longest one */}
      <div className="flow__readout" aria-live="polite">
        {nodes.map((n) => (
          <div
            key={n.id}
            className="flow__panel"
            data-active={n.id === active || undefined}
            aria-hidden={n.id !== active}
          >
            <p className="flow__line">{n.line}</p>
            <ul>
              {edges
                .filter((e) => e.a === n.id || e.b === n.id)
                .slice(0, 3)
                .map((r) => (
                  <li key={`${r.a}-${r.b}`}>{r.text}</li>
                ))}
            </ul>
            <Link className="tlink" href={pathFor(n.to, locale)}>
              {n.cta}
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
