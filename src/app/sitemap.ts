import type { MetadataRoute } from 'next';
import { pathFor, ROUTE_KEYS } from '@/lib/routes';
import { SITE, LOCALES } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTE_KEYS.flatMap((key) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}${pathFor(key, locale)}`,
      lastModified,
      changeFrequency:
        key === 'privacy' || key === 'terms' ? ('yearly' as const) : ('monthly' as const),
      priority: key === 'home' ? 1 : 0.7,
      alternates: {
        languages: {
          fi: `${SITE.url}${pathFor(key, 'fi')}`,
          en: `${SITE.url}${pathFor(key, 'en')}`,
        },
      },
    })),
  );
}
