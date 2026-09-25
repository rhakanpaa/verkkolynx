import type { Locale } from '@/lib/site';
import type { Dict } from './types';
import { fi } from './fi';
import { en } from './en';

export const dictionaries: Record<Locale, Dict> = { fi, en };
export const getDict = (locale: Locale): Dict => dictionaries[locale];
export * from './types';
