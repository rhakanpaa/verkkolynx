import type { ReactNode } from 'react';
import { RootShell, baseMetadata, viewport } from '@/components/RootShell';

export const metadata = baseMetadata;
export { viewport };

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell locale="sv">{children}</RootShell>;
}
