import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageRouter } from '@/components/PageRouter';
import { buildMetadata } from '@/lib/metadata';
import { keyFromSlug, staticSlugParams } from '@/lib/routes';

export const dynamicParams = false;
export const generateStaticParams = () => staticSlugParams('en');

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = keyFromSlug(slug, 'en');
  if (!key) notFound();
  return buildMetadata(key, 'en');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PageRouter slug={slug} locale="en" />;
}
