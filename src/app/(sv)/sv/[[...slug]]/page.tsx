import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageRouter } from '@/components/PageRouter';
import { buildMetadata } from '@/lib/metadata';
import { keyFromSlug, staticSlugParams } from '@/lib/routes';

export const dynamicParams = false;
export const generateStaticParams = () => staticSlugParams('sv');

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = keyFromSlug(slug, 'sv');
  if (!key) notFound();
  return buildMetadata(key, 'sv');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PageRouter slug={slug} locale="sv" />;
}
