import { notFound } from 'next/navigation';
import { getDict } from '@/content';
import { pageLd } from '@/lib/jsonld';
import { keyFromSlug, type RouteKey } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { Capabilities } from './Capabilities';
import { CtaBand } from './CtaBand';
import { Hero } from './Hero';
import { HomeSoftware } from './HomeSoftware';
import { PhotoBand } from './PhotoBand';
import { AboutPage, ContactPage, FaqPage, LegalPage, ServicesIndexPage, WhyPage } from './pages';
import { ServicePage } from './ServicePage';
import { SoleSection } from './SoleSection';
import { ValuesTrail } from './ValuesTrail';
import { WhyHome } from './WhyHome';

function Body({ pageKey, locale }: { pageKey: RouteKey; locale: Locale }) {
  const dict = getDict(locale);
  switch (pageKey) {
    case 'home':
      return (
        <>
          <Hero locale={locale} dict={dict} />
          <HomeSoftware locale={locale} dict={dict} />
          <Capabilities locale={locale} dict={dict} />
          <PhotoBand
            locale={locale}
            photo="nasinneula"
            caption={dict.footer.tagline}
            position="50% 55%"
          />
          <WhyHome locale={locale} dict={dict} />
          <ValuesTrail locale={locale} values={dict.values} id="values" />
          <SoleSection locale={locale} dict={dict} />
          <CtaBand locale={locale} dict={dict} />
        </>
      );
    case 'services':
      return <ServicesIndexPage locale={locale} dict={dict} />;
    case 'why':
      return <WhyPage locale={locale} dict={dict} />;
    case 'about':
      return <AboutPage locale={locale} dict={dict} />;
    case 'faq':
      return <FaqPage locale={locale} dict={dict} />;
    case 'contact':
      return <ContactPage locale={locale} dict={dict} />;
    case 'privacy':
    case 'terms':
      return <LegalPage locale={locale} dict={dict} which={pageKey} />;
    default: {
      const service = dict.services.find((s) => s.key === pageKey);
      if (!service) notFound();
      return <ServicePage locale={locale} dict={dict} service={service} />;
    }
  }
}

export function PageRouter({ slug, locale }: { slug?: string[]; locale: Locale }) {
  const key = keyFromSlug(slug, locale);
  if (!key) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageLd(key, locale)).replace(/</g, '\\u003c'),
        }}
      />
      <Body pageKey={key} locale={locale} />
    </>
  );
}
