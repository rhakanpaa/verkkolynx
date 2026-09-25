import type { Metadata } from 'next';
import { NotFound } from '@/components/NotFound';

export const metadata: Metadata = {
  title: 'Sivua ei löytynyt | Verkkolynx',
  robots: { index: false, follow: true },
};

/** Rendered by src/proxy.ts, with status 404, for every unknown URL outside /en. */
export default function Page() {
  return <NotFound locale="fi" />;
}
