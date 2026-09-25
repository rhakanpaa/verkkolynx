import Link from 'next/link';
import type { Dict } from '@/content/types';
import { pathFor } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { SystemDiagram } from './SystemDiagram';

/** Software is service 01: it gets its own dark block directly under the hero, with the system diagram. */
export function HomeSoftware({ locale, dict }: { locale: Locale; dict: Dict }) {
  const s = dict.homeSoftware;
  return (
    <section className="section section--raised" aria-labelledby="hsw-title">
      <div className="container">
        <div className="hsw__top">
          <div className="hsw__lead" data-reveal>
            <h2 id="hsw-title">{s.title}</h2>
            <p className="dim">{s.lede}</p>
            <Link className="btn btn--solid" href={pathFor('software', locale)}>
              {s.cta}
            </Link>
          </div>
          <div className="hsw__kinds" data-reveal>
            <ul>
              {s.kinds.map((k) => (
                <li key={k.t}>
                  <h3>{k.t}</h3>
                  <p className="dim">{k.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hsw__diagram" data-reveal>
          <div className="hsw__diagram-head">
            <p className="hsw__diagram-title">{dict.system.title}</p>
            <p className="dim">{dict.system.lede}</p>
          </div>
          <SystemDiagram system={dict.system} />
        </div>
      </div>
    </section>
  );
}
