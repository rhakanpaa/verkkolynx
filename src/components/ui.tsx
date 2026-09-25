import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { PhotoKey } from '@/content/types';
import { PHOTOS } from '@/lib/photos';
import type { Locale } from '@/lib/site';

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path d="M1 8h15M10 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({
  variant = 'white',
  height = 34,
}: {
  variant?: 'white' | 'blue';
  height?: number;
}) {
  const w = Math.round((height * 1132.53) / 314.95);
  return (
    <Image
      src={`/assets/brand/verkkolynx-wordmark-${variant}.svg`}
      alt="Verkkolynx"
      width={w}
      height={height}
      unoptimized
      loading="eager"
    />
  );
}

export function Photo({
  name,
  locale,
  sizes,
  priority,
  className,
  position,
}: {
  name: PhotoKey;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** CSS object-position, used to choose a deliberate crop */
  position?: string;
}) {
  const p = PHOTOS[name];
  return (
    <Image
      src={p.src}
      alt={p.alt[locale]}
      sizes={sizes}
      loading={priority ? 'eager' : undefined}
      fetchPriority={priority ? 'high' : undefined}
      placeholder="blur"
      className={className}
      style={position ? { objectPosition: position } : undefined}
      fill
    />
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="tlink" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
