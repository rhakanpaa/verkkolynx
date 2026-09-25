import { Lexend } from 'next/font/google';

/** One sans-serif family for the whole site. */
export const sans = Lexend({
  subsets: ['latin'], // covers Finnish (ä ö å) and English; other glyphs fall back gracefully
  weight: ['400', '500', '600'],
  variable: '--font-sans-loaded',
  display: 'swap',
});
