import type { Metadata } from 'next';
import { NotFound } from '@/components/NotFound';

export const metadata: Metadata = { title: 'Sivua ei löytynyt', robots: { index: false } };
export default function Page() {
  return <NotFound locale="fi" />;
}
