import type { Locale } from '@/lib/site';
import type { Dict } from './types';
import { fi } from './fi';
import { en } from './en';
import { sv } from './sv';

export const dictionaries: Record<Locale, Dict> = { fi, en, sv };
export const getDict = (locale: Locale): Dict => dictionaries[locale];
export * from './types';
