import { SITE, type Locale } from './site';
import { pathFor, type RouteKey } from './routes';
import { absoluteUrl, metaFor } from './metadata';
import { getDict } from '@/content';

const orgId = `${SITE.url}/#organization`;

export function organizationLd(locale: Locale) {
  const d = getDict(locale);
  return {
    '@type': 'Organization',
    '@id': orgId,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/icon-512.png'),
      width: 512,
      height: 512,
    },
    email: SITE.email,
    description: d.schemaDescription,
    foundingDate: String(SITE.founded),
    taxID: SITE.businessId,
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: 'FI' },
    areaServed: ['FI', 'CA', 'US', 'EU'],
    knowsLanguage: ['fi', 'en', 'fr'],
  };
}

export function pageLd(key: RouteKey, locale: Locale) {
  const d = getDict(locale);
  const m = metaFor(key, locale);
  const url = absoluteUrl(pathFor(key, locale));
  const graph: Record<string, unknown>[] = [organizationLd(locale)];

  graph.push({
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: locale,
    publisher: { '@id': orgId },
  });
  graph.push({
    '@type':
      key === 'faq'
        ? 'FAQPage'
        : key === 'contact'
          ? 'ContactPage'
          : key === 'about'
            ? 'AboutPage'
            : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: m.title,
    description: m.description,
    inLanguage: locale,
    isPartOf: { '@id': `${SITE.url}/#website` },
    ...(key === 'faq'
      ? {
          mainEntity: d.faqPage.categoriesData.flatMap((c) =>
            c.items.map((it) => ({
              '@type': 'Question',
              name: it.q,
              acceptedAnswer: { '@type': 'Answer', text: [...it.a, ...(it.list ?? [])].join(' ') },
            })),
          ),
        }
      : {}),
  });

  const svc = d.services.find((s) => s.key === key);
  if (svc) {
    graph.push({
      '@type': 'Service',
      name: svc.name,
      description: svc.meta.description,
      url,
      provider: { '@id': orgId },
      areaServed: ['FI', 'CA', 'US', 'EU'],
      serviceType: svc.name,
    });
  }

  if (key !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: d.labels.home,
          item: absoluteUrl(pathFor('home', locale)),
        },
        ...(svc
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: d.labels.services,
                item: absoluteUrl(pathFor('services', locale)),
              },
              { '@type': 'ListItem', position: 3, name: svc.name, item: url },
            ]
          : [{ '@type': 'ListItem', position: 2, name: m.title, item: url }]),
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
