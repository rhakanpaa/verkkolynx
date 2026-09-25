import { NextResponse, type NextRequest } from 'next/server';
import { keyFromSlug } from '@/lib/routes';
import { LOCALES, type Locale } from '@/lib/site';

/**
 * Unknown URLs get a real HTTP 404 in the language of the section they were requested in.
 * (Next's not-found boundary cannot render inside the separate Finnish and English root
 * layouts, so the proxy rewrites unknown paths to a per-language 404 page instead.)
 */
const NOT_FOUND_PATH: Record<Locale, string> = {
  fi: '/sivua-ei-loytynyt',
  en: '/en/page-not-found',
  sv: '/sv/sidan-hittades-inte',
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const prefixed = LOCALES.find((l) => l !== 'fi' && l === segments[0]);
  const locale: Locale = prefixed ?? 'fi';
  if (prefixed) segments.shift();

  if (keyFromSlug(segments, locale)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = NOT_FOUND_PATH[locale];
  return NextResponse.rewrite(url, { status: 404 });
}

export const config = {
  // pages only: skip Next internals and any file with an extension (assets, icons, sitemap, robots)
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
