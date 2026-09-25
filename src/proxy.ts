import { NextResponse, type NextRequest } from 'next/server';
import { keyFromSlug } from '@/lib/routes';
import type { Locale } from '@/lib/site';

/**
 * Unknown URLs get a real HTTP 404 in the language of the section they were requested in.
 * (Next's not-found boundary cannot render inside the separate Finnish and English root
 * layouts, so the proxy rewrites unknown paths to a per-language 404 page instead.)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const locale: Locale = segments[0] === 'en' ? 'en' : 'fi';
  if (locale === 'en') segments.shift();

  if (keyFromSlug(segments, locale)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = locale === 'en' ? '/en/page-not-found' : '/sivua-ei-loytynyt';
  return NextResponse.rewrite(url, { status: 404 });
}

export const config = {
  // pages only: skip Next internals and any file with an extension (assets, icons, sitemap, robots)
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
