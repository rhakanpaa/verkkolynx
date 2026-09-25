import type { RouteKey, ServiceKey } from '@/lib/routes';

export type PhotoKey =
  | 'tammerkoski'
  | 'finlayson'
  | 'nasinneula'
  | 'nasijarvi'
  | 'lake'
  | 'lakePortrait'
  | 'swing'
  | 'sunset'
  | 'keskustori';

export interface Meta {
  title: string;
  description: string;
}

export interface Capability {
  t: string;
  d: string;
  ex?: string;
}

export interface ServiceGroup {
  tag: string;
  t: string;
  d: string;
  items: string[];
}

export interface Service {
  key: ServiceKey;
  /** 01–05 for the core disciplines, '+' for the audience-specific offering */
  n: string;
  audience?: boolean;
  name: string;
  nav: string;
  /** one-line proposition used in menus and on the home page */
  line: string;
  /** one to two sentences used on the home page and the services overview */
  summary: string;
  tags: string[];
  photo: PhotoKey;
  groupsTitle?: string;
  groups?: ServiceGroup[];
  scale?: { title: string; items: { t: string; d: string }[] };
  /** shows the interactive system diagram on this page */
  diagram?: boolean;
  /** cross-links to neighbouring services, e.g. “Need something bigger than a website?” */
  bridge?: { text: string; to: ServiceKey }[];
  heroTitle: string;
  lede: string;
  intro: string[];
  problemsTitle: string;
  problems: { t: string; d: string }[];
  capabilitiesTitle: string;
  capabilities: Capability[];
  outcomesTitle: string;
  outcomes: { t: string; d: string }[];
  edgeTitle: string;
  edge: string[];
  extraTitle?: string;
  extra?: string[];
  related: ServiceKey[];
  ctaTitle: string;
  ctaText: string;
  meta: Meta;
}

export interface Value {
  n: string;
  title: string;
  short: string;
  long: string;
  photo: PhotoKey;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string[];
  /** optional bullet list rendered after the paragraphs */
  list?: string[];
}
export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface LegalSection {
  h: string;
  p?: string[];
  list?: string[];
  sub?: { h: string; p?: string[]; list?: string[] }[];
}

export interface Dict {
  lang: 'fi' | 'en';
  htmlLang: string;
  ogLocale: string;
  skip: string;
  nav: {
    items: { key: RouteKey; label: string }[];
    servicesMenuTitle: string;
    allServices: string;
    contact: string;
    menu: string;
    close: string;
    language: string;
    primary: string;
    breadcrumb: string;
    switchTo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primary: string;
    secondary: string;
    mapLabel: string;
    mapHint: string;
    nodes: { id: string; label: string; ref: string; line: string; to: RouteKey; cta: string }[];
    /** how the capabilities feed each other; shown when a node is selected */
    edges: { a: string; b: string; text: string }[];
    steps: string[];
  };
  system: {
    title: string;
    lede: string;
    cols: { title: string; nodes: { id: string; label: string; text: string }[] }[];
    /** representative routes through the system, one node per column; selecting a node highlights its route */
    paths: string[][];
  };
  homeSoftware: {
    title: string;
    lede: string;
    kinds: { t: string; d: string }[];
    cta: string;
  };
  capabilities: { title: string; more: string };
  why: {
    title: string;
    intro: string;
    items: { t: string; d: string }[];
    facts: { k: string; v: string }[];
    more: string;
  };
  values: { title: string; intro: string; items: Value[] };
  sole: {
    title: string;
    text: string;
    items: string[];
    cta: string;
  };
  cta: { title: string; text: string; button: string; or: string };
  services: Service[];
  servicesPage: { title: string; lede: string; meta: Meta; overview: string };
  labels: {
    example: string;
    related: string;
    home: string;
    contactUs: string;
    services: string;
    audience: string;
    mail: string;
    updated: string;
  };
  whyPage: {
    meta: Meta;
    title: string;
    lede: string;
    intro: string[];
    itemsTitle: string;
    meansForYou: string;
    items: { t: string; d: string; you: string }[];
    modelsTitle: string;
    models: { t: string; d: string }[];
    closing: string;
  };
  aboutPage: {
    meta: Meta;
    title: string;
    lede: string;
    chapters: { id: string; n: string; t: string; p: string[] }[];
    nameTitle: string;
    nameText: string;
    processTitle: string;
    process: { t: string; d: string }[];
    valuesTitle: string;
    valuesIntro: string;
  };
  faqPage: {
    meta: Meta;
    title: string;
    lede: string;
    search: string;
    searchPlaceholder: string;
    categories: string;
    all: string;
    none: string;
    noneHelp: string;
    expandAll: string;
    collapseAll: string;
    stillQuestions: string;
    categoriesData: FaqCategory[];
  };
  contactPage: {
    meta: Meta;
    title: string;
    lede: string;
    emailLabel: string;
    emailNote: string;
    topicsTitle: string;
    topics: { label: string; subject: string }[];
    detailsTitle: string;
    details: { k: string; v: string }[];
    startTitle: string;
    start: string[];
    hours: string;
  };
  legal: {
    privacy: {
      meta: Meta;
      title: string;
      updated: string;
      intro: string;
      sections: LegalSection[];
    };
    terms: { meta: Meta; title: string; updated: string; intro: string; sections: LegalSection[] };
    languageNote?: string;
  };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    location: string;
  };
  notFound: { title: string; text: string; back: string };
  homeMeta: Meta;
  schemaDescription: string;
}
