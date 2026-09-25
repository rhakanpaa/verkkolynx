import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { getDict } from '@/content';
import { sans } from '@/lib/fonts';
import type { Locale } from '@/lib/site';
import { SITE } from '@/lib/site';
import { RevealObserver } from './client-bits';
import { Footer } from './Footer';
import { Header } from './Header';

export const viewport: Viewport = {
  themeColor: '#04142f',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  icons: {
    icon: [
      {
        url: '/assets/brand/verkkolynx-mark-blue.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/brand/verkkolynx-mark-white.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/favicon.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

/** Root layout body, shared by the Finnish and English route groups. */
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDict(locale);
  return (
    <html lang={dict.htmlLang} className={sans.variable} suppressHydrationWarning>
      <body>
        {/* flags JS before first paint so scroll reveals never flash */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a className="skip-link" href="#main">
          {dict.skip}
        </a>
        <Header
          locale={locale}
          data={{
            nav: dict.nav,
            services: dict.services.map((s) => ({
              key: s.key,
              nav: s.nav,
              line: s.line,
              audience: !!s.audience,
            })),
            location: dict.footer.location,
          }}
        />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <RevealObserver />
      </body>
    </html>
  );
}
