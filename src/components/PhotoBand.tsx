import type { PhotoKey } from '@/content/types';
import type { Locale } from '@/lib/site';
import { Photo } from './ui';

/** Full-bleed Tampere photograph with a coordinate label: a deliberate pause between dense sections. */
export function PhotoBand({
  locale,
  photo,
  caption,
  position = '50% 50%',
}: {
  locale: Locale;
  photo: PhotoKey;
  caption: string;
  position?: string;
}) {
  return (
    <section className="band" aria-hidden="true">
      <Photo name={photo} locale={locale} sizes="100vw" position={position} />
      <div className="container band__inner">
        <p className="band__caption">{caption}</p>
      </div>
    </section>
  );
}
