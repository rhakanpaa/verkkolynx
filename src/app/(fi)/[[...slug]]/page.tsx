import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageRouter } from '@/components/PageRouter';
import { buildMetadata } from '@/lib/metadata';
import { keyFromSlug, staticSlugParams } from '@/lib/routes';

export const dynamicParams = false;
export const generateStaticParams = () => staticSlugParams('fi');

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = keyFromSlug(slug, 'fi');
  if (!key) notFound();
  return buildMetadata(key, 'fi');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PageRouter slug={slug} locale="fi" />;
}
