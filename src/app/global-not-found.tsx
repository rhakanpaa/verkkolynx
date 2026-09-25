import type { Metadata, Viewport } from 'next';
import { NotFound } from '@/components/NotFound';
import { RootShell, viewport as shellViewport } from '@/components/RootShell';

export const metadata: Metadata = {
  title: 'Sivua ei löytynyt | Page not found',
  robots: { index: false, follow: true },
};
export const viewport: Viewport = shellViewport;

/** Single 404 for every unmatched URL, Finnish and English. Returns HTTP 404, no canonical, not in the sitemap. */
export default function GlobalNotFound() {
  return (
    <RootShell locale="fi">
      <NotFound locale="fi" alt="en" />
    </RootShell>
  );
}
