import type { MetadataRoute } from 'next';
import { pathFor, ROUTE_KEYS } from '@/lib/routes';
import { SITE, LOCALES } from '@/lib/site';

/** One entry per public page and language; each lists its translated equivalent as an alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTE_KEYS.flatMap((key) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}${pathFor(key, locale)}`,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}${pathFor(key, l)}`])),
          'x-default': `${SITE.url}${pathFor(key, 'fi')}`,
        },
      },
    })),
  );
}
