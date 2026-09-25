import type { Metadata } from 'next';
import { LOCALES, SITE, type Locale } from './site';
import { pathFor, type RouteKey } from './routes';
import { getDict } from '@/content';
import type { Meta } from '@/content/types';

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path}`;
}

export function metaFor(key: RouteKey, locale: Locale): Meta {
  const d = getDict(locale);
  switch (key) {
    case 'home':
      return d.homeMeta;
    case 'services':
      return d.servicesPage.meta;
    case 'why':
      return d.whyPage.meta;
    case 'about':
      return d.aboutPage.meta;
    case 'faq':
      return d.faqPage.meta;
    case 'contact':
      return d.contactPage.meta;
    case 'privacy':
      return d.legal.privacy.meta;
    case 'terms':
      return d.legal.terms.meta;
    default:
      return d.services.find((s) => s.key === key)!.meta;
  }
}

export function buildMetadata(key: RouteKey, locale: Locale): Metadata {
  const d = getDict(locale);
  const m = metaFor(key, locale);
  const path = pathFor(key, locale);
  const isHome = key === 'home';
  const title = isHome
    ? `${SITE.name} | ${m.title}`
    : m.title.includes(SITE.name)
      ? m.title
      : `${m.title} | ${SITE.name}`;
  return {
    metadataBase: new URL(SITE.url),
    title: { absolute: title },
    description: m.description,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, pathFor(key, l)])),
        'x-default': pathFor(key, 'fi'),
      },
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title,
      description: m.description,
      url: path,
      locale: d.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => getDict(l).ogLocale),
      images: [{ url: '/assets/og/og-default.png', width: 1200, height: 630, alt: 'Verkkolynx' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: m.description,
      images: ['/assets/og/og-default.png'],
    },
    robots: { index: true, follow: true },
  };
}
