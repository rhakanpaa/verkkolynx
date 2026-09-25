'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dict } from '@/content/types';

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Inputs → logic → application → output. At rest the four columns are shown plainly.
 * Selecting a component highlights one representative route through the system.
 * Below 900px the columns stack into a vertical flow and the description opens under the component.
 */
export function SystemDiagram({ system }: { system: Dict['system'] }) {
  const [active, setActive] = useState<string | null>(null);
  const [boxes, setBoxes] = useState<Record<string, Box>>({});
  const grid = useRef<HTMLDivElement>(null);
  const nodeEls = useRef<Record<string, HTMLButtonElement | null>>({});

  const nodes = useMemo(
    () => new Map(system.cols.flatMap((c) => c.nodes.map((n) => [n.id, n] as const))),
    [system.cols],
  );
  const route = useMemo(
    () => (active ? (system.paths.find((p) => p.includes(active)) ?? [active]) : []),
    [active, system.paths],
  );

  const measure = useCallback(() => {
    const root = grid.current;
    if (!root || window.innerWidth < 900) {
      setBoxes({});
      return;
    }
    const origin = root.getBoundingClientRect();
    const next: Record<string, Box> = {};
    for (const [id, el] of Object.entries(nodeEls.current)) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      next[id] = { x: r.left - origin.left, y: r.top - origin.top, w: r.width, h: r.height };
    }
    setBoxes(next);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (grid.current) ro.observe(grid.current);
    return () => ro.disconnect();
  }, [measure]);

  const segments = route.slice(1).flatMap((id, i) => {
    const a = boxes[route[i]];
    const b = boxes[id];
    if (!a || !b) return [];
    const x1 = a.x + a.w;
    const y1 = a.y + a.h / 2;
    const x2 = b.x;
    const y2 = b.y + b.h / 2;
    const mx = (x1 + x2) / 2;
    return [{ key: `${route[i]}-${id}`, d: `M${x1} ${y1}C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}` }];
  });
  const current = active ? nodes.get(active) : undefined;

  return (
    <div
      className="sysd"
      onMouseLeave={() => setActive(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActive(null);
      }}
    >
      <div className="sysd__grid" ref={grid}>
        <svg className="sysd__lines" aria-hidden="true" focusable="false">
          {segments.map((s) => (
            <path key={s.key} d={s.d} />
          ))}
        </svg>
        {system.cols.map((col) => (
          <div className="sysd__col" key={col.title}>
            <h3 className="sysd__title">{col.title}</h3>
            <ul>
              {col.nodes.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    ref={(el) => {
                      nodeEls.current[n.id] = el;
                    }}
                    className="sysd__node"
                    data-route={route.includes(n.id) || undefined}
                    data-self={active === n.id || undefined}
                    data-dim={(active && !route.includes(n.id)) || undefined}
                    aria-pressed={active === n.id}
                    onMouseEnter={() => setActive(n.id)}
                    onFocus={() => setActive(n.id)}
                    onClick={() => setActive((v) => (v === n.id ? null : n.id))}
                  >
                    {n.label}
                  </button>
                  <p className="sysd__inline">{active === n.id ? n.text : null}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sysd__readout" aria-live="polite">
        {current && (
          <>
            <p className="sysd__route">{route.map((id) => nodes.get(id)?.label).join(' → ')}</p>
            <p>{current.text}</p>
          </>
        )}
      </div>
    </div>
  );
}
