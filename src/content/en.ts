import type { Dict } from './types';
import { servicesEn } from './en-services';
import { faqEn } from './en-faq';
import { privacyFi, termsFi } from './legal-fi';

const legalNote =
  'The legally binding version of this document is in Finnish and is reproduced below. Contact us at asiakaspalvelu@verkkolynx.fi for an English summary.';

export const en: Dict = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  skip: 'Skip to content',
  nav: {
    items: [
      { key: 'home', label: 'Home' },
      { key: 'services', label: 'Services' },
      { key: 'why', label: 'Why Verkkolynx' },
      { key: 'about', label: 'About' },
      { key: 'faq', label: 'FAQ' },
      { key: 'contact', label: 'Contact' },
    ],
    servicesMenuTitle: 'Services',
    allServices: 'All services',
    contact: 'Contact us',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    primary: 'Main navigation',
    breadcrumb: 'Breadcrumb',
    switchTo: 'Switch language to Finnish',
  },
  hero: {
    eyebrow: 'Tampere · Finland',
    title: 'We build the tools that do the work.',
    lede: 'Verkkolynx analyses your data, designs the solution and builds the software and automations your business runs on.',
    primary: 'Contact us',
    secondary: 'Explore services',
    mapLabel: 'Capability map: data, software, automation, ecommerce, web and SEO',
    mapHint: 'Select a point on the map',
    nodes: [
      {
        id: 'data',
        label: 'Data',
        ref: 'A4',
        line: 'We analyse data and find what should drive decisions.',
        to: 'analytics',
        cta: 'Data analytics',
      },
      {
        id: 'software',
        label: 'Software',
        ref: 'B3',
        line: 'We build the tools and applications that off-the-shelf systems do not provide.',
        to: 'software',
        cta: 'Custom software',
      },
      {
        id: 'automation',
        label: 'Automation',
        ref: 'C4',
        line: 'We replace repetitive manual steps with reliable workflows.',
        to: 'software',
        cta: 'Automation',
      },
      {
        id: 'commerce',
        label: 'Ecommerce',
        ref: 'D2',
        line: 'Product data, pricing and integrations working together.',
        to: 'ecommerce',
        cta: 'Ecommerce systems',
      },
      {
        id: 'web',
        label: 'Web',
        ref: 'C2',
        line: 'A site or application that works on every device.',
        to: 'web',
        cta: 'Websites',
      },
      {
        id: 'seo',
        label: 'SEO',
        ref: 'E1',
        line: 'Discoverability and targeted visibility for the right people.',
        to: 'marketing',
        cta: 'Marketing and SEO',
      },
    ],
    edges: [
      { a: 'data', b: 'software', text: 'Analysis becomes the logic of an application.' },
      {
        a: 'software',
        b: 'automation',
        text: 'Software runs the automations that replace manual work.',
      },
      {
        a: 'automation',
        b: 'commerce',
        text: 'Automation updates product data and prices in the store.',
      },
      { a: 'software', b: 'web', text: 'A website can become an application with real logic.' },
      { a: 'commerce', b: 'web', text: 'Store systems connect to the interface through APIs.' },
      {
        a: 'web',
        b: 'seo',
        text: 'The technical structure is readable to search engines from the start.',
      },
      { a: 'data', b: 'commerce', text: 'Sales analysis guides pricing and assortment.' },
    ],
    steps: ['Understand', 'Analyse', 'Design', 'Build', 'Automate', 'Optimise'],
  },
  capabilities: {
    title: 'Five disciplines, one team.',
    more: 'Read more',
  },
  system: {
    title: 'Data in, tool out.',
    lede: 'Every system is made of inputs, logic, an application and an outcome. Select a part to see what it connects to.',
    cols: [
      {
        title: 'Inputs',
        nodes: [
          {
            id: 'data',
            label: 'Data',
            text: 'Sales, product, customer and usage data, plus files and databases.',
          },
          {
            id: 'apis',
            label: 'APIs',
            text: 'External services, ecommerce platforms and marketplaces.',
          },
          {
            id: 'existing',
            label: 'Existing systems',
            text: 'Software already in use: inventory, invoicing, product information systems.',
          },
          {
            id: 'human',
            label: 'User input',
            text: 'Forms, decisions and corrections made by users in the tool.',
          },
        ],
      },
      {
        title: 'Logic',
        nodes: [
          {
            id: 'rules',
            label: 'Rules',
            text: 'Business rules, checks and conditions written into code.',
          },
          { id: 'automation', label: 'Automation', text: 'Scheduled and event-driven workflows.' },
          {
            id: 'algorithms',
            label: 'Algorithms',
            text: 'Pricing, scoring, search and recommendation.',
          },
          {
            id: 'analysis',
            label: 'Analysis',
            text: 'Statistical models, forecasts and anomaly detection.',
          },
        ],
      },
      {
        title: 'Application',
        nodes: [
          {
            id: 'ui',
            label: 'Interface',
            text: 'A browser-based, mobile-friendly view of the work.',
          },
          { id: 'workflow', label: 'Workflow', text: 'Steps, states and approvals.' },
          { id: 'permissions', label: 'Permissions', text: 'Roles and authentication.' },
          {
            id: 'cms',
            label: 'CMS / internal tool',
            text: 'Managing and maintaining structured information.',
          },
        ],
      },
      {
        title: 'Output',
        nodes: [
          { id: 'action', label: 'Action', text: 'A work step gets done automatically.' },
          {
            id: 'decision',
            label: 'Decision',
            text: 'A recommendation or score to base a decision on.',
          },
          { id: 'update', label: 'Update', text: 'Information updates in the right systems.' },
          { id: 'report', label: 'Report', text: 'An up-to-date report without manual work.' },
          {
            id: 'experience',
            label: 'Customer experience',
            text: 'The site, search or service the customer sees gets better.',
          },
        ],
      },
    ],
    paths: [
      ['data', 'analysis', 'ui', 'decision'],
      ['apis', 'automation', 'workflow', 'update'],
      ['existing', 'rules', 'cms', 'report'],
      ['human', 'rules', 'permissions', 'action'],
      ['data', 'algorithms', 'ui', 'experience'],
    ],
  },
  homeSoftware: {
    title: 'We build the tools that off-the-shelf systems do not.',
    lede: 'In many companies the work happens between spreadsheets and disconnected systems. We build software around the workflow: from a small internal tool to a substantial system.',
    kinds: [
      { t: 'Internal tools', d: 'Applications for managing data, products and workflows.' },
      { t: 'Automation', d: 'Repetitive steps that run by themselves.' },
      { t: 'Custom CMS', d: 'A system for structured information.' },
      { t: 'API integrations', d: 'Systems that talk to each other.' },
      { t: 'Web applications', d: 'Portals and applications with real application logic.' },
      { t: 'Decision tools', d: 'Pricing, forecasting, search and recommendation.' },
    ],
    cta: 'Explore custom software',
  },
  why: {
    title: 'We analyse, build and automate in one team.',
    intro:
      'The difference is the connection: data, software, automation, ecommerce, web and visibility sit in one team, so work does not break at the boundaries between suppliers.',
    items: [
      {
        t: 'From analysis to tool',
        d: 'We analyse the workflow, model it and build the tool to run it.',
      },
      {
        t: 'Software development',
        d: 'Custom internal tools, web applications, CMS platforms and integrations.',
      },
      {
        t: 'Analytics capability',
        d: 'Statistics and data analytics in support of decision-making.',
      },
      {
        t: 'Product and ecommerce data',
        d: 'Experience with large product and ecommerce datasets behind pricing, analytics and content.',
      },
      {
        t: 'Ecommerce expertise',
        d: 'Taxonomies, product data, pricing algorithms and integrations.',
      },
      {
        t: 'From Tampere, internationally',
        d: 'Clients and partners in Finland, Canada, the United States and Europe.',
      },
      { t: 'Multilingual', d: 'Content and SEO in Finnish and English, and in French on request.' },
      { t: 'Large and small', d: 'Services suited to companies and sole traders alike.' },
    ],
    facts: [
      { k: 'Business ID', v: '3486845-7' },
      { k: 'Founded', v: '2024' },
      { k: 'Based in', v: 'Tampere, Finland' },
      { k: 'Engagement', v: 'Subscription or project' },
    ],
    more: 'Read how we work',
  },
  values: {
    title: 'Five markers on the trail.',
    intro:
      'Our values define who we are and how we work. They draw on Finnish excellence and on the agility and precision of the lynx.',
    items: [
      {
        n: '01',
        title: 'Finnish pride, global perspective',
        short: 'Finnish precision and pragmatism serving global markets.',
        long: 'We are proud of being Finnish and support the local businesses and entrepreneurs who strengthen Finland. We serve clients in Finland, Canada, the United States and Europe, and bring Finnish know-how to every project.',
        photo: 'nasinneula',
      },
      {
        n: '02',
        title: 'Precision that delivers results',
        short: 'Every project is carried out with care and with the client in mind.',
        long: 'Attention to detail makes the difference. From data-driven insight to ecommerce systems, precision is a promise for us and not just a standard: the goal is measurable results.',
        photo: 'tammerkoski',
      },
      {
        n: '03',
        title: 'No one is left behind',
        short: 'Partnership is at the core of what we do: support and shared success.',
        long: 'We see ourselves as partners on our clients’ journey and work together for their success. When our clients succeed, we succeed.',
        photo: 'swing',
      },
      {
        n: '04',
        title: 'Change creates opportunities',
        short: 'Digital change is an opportunity, not a threat.',
        long: 'The digital world changes constantly. We help clients navigate shifting environments with agility and creativity, and turn challenges into growth.',
        photo: 'sunset',
      },
      {
        n: '05',
        title: 'Precision meets individuality',
        short: 'Tailored solutions with expert care.',
        long: 'Every client and every challenge is unique. With a small but skilled team we give the attention it takes. Precision does not only mean exactness, but that every detail serves the client’s needs.',
        photo: 'lake',
      },
    ],
  },
  sole: {
    title: 'Working alone does not mean doing everything alone.',
    text: 'Sole traders rarely have time for online visibility and routine work, and good services often feel too expensive. We offer personal, affordable support: websites, search visibility, small tools and advice.',
    items: [
      'Websites and online shops',
      'Small tools and automations',
      'Search engine optimisation',
      'Content in Finnish and English, and in French on request',
      'Personal advice',
    ],
    cta: 'Services for sole traders',
  },
  cta: {
    title: 'Tell us what you are building.',
    text: 'Email is the best way to reach us. Tell us briefly about your situation and we will reply.',
    button: 'Contact us',
    or: 'or read the frequently asked questions first',
  },
  services: servicesEn,
  servicesPage: {
    title: 'Services',
    lede: 'Five disciplines and a dedicated offering for sole traders. They work together: data guides software, software automates the store, and the store and site need visibility.',
    overview: 'Choose a service',
    meta: {
      title: 'Services',
      description:
        'Custom software and automation, data analytics, ecommerce systems, websites and digital experiences, marketing and SEO, and services for sole traders.',
    },
  },
  labels: {
    example: 'Example',
    related: 'Related services',
    home: 'Home',
    contactUs: 'Contact us',
    services: 'Services',
    audience: 'For businesses',
    mail: 'Send an email',
    updated: 'Effective date',
  },
  whyPage: {
    meta: {
      title: 'Why Verkkolynx',
      description:
        'A Tampere-based technical digital company: software development, data, automation, ecommerce systems, websites and SEO from one team.',
    },
    title: 'A partner that connects data, software and the web.',
    lede: 'Verkkolynx is a Tampere-based technical digital company. We analyse, build and automate, in the same team.',
    intro: [
      'Most companies end up assembling separate suppliers: an analyst, a software developer, a web agency and a marketer. Here they are one team, so work does not break at the handovers.',
      'In Finland we value quality, but also good value for money.',
    ],
    itemsTitle: 'Seven reasons',
    meansForYou: 'What this means for you',
    items: [
      {
        t: 'A connection between analysis and implementation',
        d: 'Analysis, rules and workflow can be carried straight into software, without requirements getting lost between suppliers.',
        you: 'A tool that matches the real work, and fewer middlemen.',
      },
      {
        t: 'Custom software development and automation',
        d: 'Internal tools, web applications, custom CMS platforms and integrations, from small utilities to large systems.',
        you: 'Tools that off-the-shelf systems do not provide, and less manual work.',
      },
      {
        t: 'Analytics capability and data',
        d: 'Statistical expertise and experience with large historical and current ecommerce datasets.',
        you: 'Decisions based on data, and forecasts you can use.',
      },
      {
        t: 'Ecommerce systems',
        d: 'Taxonomies, product data, pricing algorithms, search and integrations.',
        you: 'A store whose back-end systems work together.',
      },
      {
        t: 'Websites and visibility',
        d: 'Fast, accessible sites, with SEO and marketing as complementary expertise.',
        you: 'A site that works and gets found.',
      },
      {
        t: 'Flexible engagement models',
        d: 'We offer both subscription-based and project-based agreements to businesses of all sizes.',
        you: 'Services adapt to your needs and the size of your business.',
      },
      {
        t: 'Based in Finland, with international experience',
        d: 'Finland is home, and we have clients and partners in Canada, the United States and Europe.',
        you: 'Finnish precision and international experience in the same team.',
      },
    ],
    modelsTitle: 'Ways of working together',
    models: [
      {
        t: 'Subscription',
        d: 'Ongoing support, maintenance and development on an agreed monthly model.',
      },
      { t: 'Project', d: 'A clearly scoped deliverable at a fixed or hourly price.' },
    ],
    closing: 'Tell us what work you would like to make easier.',
  },
  aboutPage: {
    meta: {
      title: 'About',
      description:
        'Verkkolynx Ratkaisut Oy is a Tampere-based technical digital company: software development, data, automation, ecommerce and web. Our story, way of working and values.',
    },
    title: 'Finnish precision, global perspective.',
    lede: 'Verkkolynx Ratkaisut Oy is a Tampere-based digital and technical partner: data, software, automation, websites, ecommerce, SEO and marketing in one team.',
    chapters: [
      {
        id: 'who',
        n: '01',
        t: 'Who Verkkolynx is',
        p: [
          'The company was founded in 2024 with the vision of combining advanced data analytics with practical business solutions. We are a Tampere-based technical digital company combining software development, data, automation, ecommerce systems, websites and visibility.',
          'Our mission is to help businesses of all sizes turn data into practical insight and practical tools.',
        ],
      },
      {
        id: 'tampere',
        n: '02',
        t: 'From Tampere, Finland',
        p: [
          'We work from Tampere and combine Finnish precision with a global perspective. We support the local businesses and entrepreneurs who strengthen Finland, and are proud to be part of the local economy and community.',
        ],
      },
      {
        id: 'difference',
        n: '03',
        t: 'What is technically different about us',
        p: [
          'Software development, data analytics, ecommerce, automation and SEO all live in-house. Our team includes professionals with backgrounds in mathematics, statistics, computer science, sports and entrepreneurship.',
          'The difference is the connection. Instead of stopping at the analysis, we analyse the workflow, model it, automate it and build the tool to run it.',
        ],
      },
      {
        id: 'international',
        n: '04',
        t: 'International perspective',
        p: [
          'Our clients and partners are in Finland, Canada, the United States and Europe. We understand the differences between markets and schedule meetings flexibly across time zones. We produce content and SEO in Finnish and English, and in French on request.',
        ],
      },
    ],
    nameTitle: 'Behind the name',
    nameText:
      '“Verkko” means network or the web, and “lynx” (ilves) symbolises agility and sharp vision. Together they describe our ability to navigate the complex networks of data.',
    processTitle: 'How we work',
    process: [
      { t: 'Initial interview', d: 'We clarify your goals and starting point.' },
      {
        t: 'Planning',
        d: 'Schedule, budget and, where needed, wireframes and interface sketches.',
      },
      { t: 'Delivery', d: 'Development and testing in stages, with you kept involved.' },
      { t: 'Launch', d: 'Rollout, documentation and training when needed.' },
      { t: 'Support', d: 'Maintenance and further development as your business grows.' },
    ],
    valuesTitle: 'Our values',
    valuesIntro:
      'Our values are more than words. They guide everything we do, from supporting businesses to mastering the challenges of the digital wilderness.',
  },
  faqPage: {
    meta: {
      title: 'Frequently asked questions',
      description:
        'Answers to common questions: services, data analytics, websites, marketing and SEO, support and training, security and project management.',
    },
    title: 'Frequently asked questions',
    lede: 'Answers to the most common questions. If something is still unclear, email asiakaspalvelu@verkkolynx.fi.',
    search: 'Search questions',
    searchPlaceholder: 'Search e.g. SEO, pricing, GDPR',
    categories: 'Topics',
    all: 'All',
    none: 'No matches.',
    noneHelp: 'Try another search term or write to us.',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    stillQuestions: 'Did not find your answer?',
    resultsLabel: 'questions',
    categoriesData: faqEn,
  },
  contactPage: {
    meta: {
      title: 'Contact',
      description:
        'Contact Verkkolynx Ratkaisut Oy: asiakaspalvelu@verkkolynx.fi. Tampere, Finland.',
    },
    title: 'Get in touch.',
    lede: 'Email is the best way to reach us. Tell us briefly what you are working on or which work you would like to make easier.',
    emailLabel: 'Email',
    emailNote: 'We reply in Finnish or English, and in French on request.',
    topicsTitle: 'What would you like to talk about?',
    topics: [
      { label: 'Data analytics', subject: 'Data analytics and insights' },
      { label: 'Ecommerce', subject: 'Ecommerce systems and optimisation' },
      { label: 'Websites', subject: 'Websites and digital experiences' },
      { label: 'Marketing and SEO', subject: 'Marketing and SEO' },
      { label: 'Sole-trader services', subject: 'Services for sole traders' },
      { label: 'Something else', subject: 'Enquiry' },
    ],
    detailsTitle: 'Company details',
    details: [
      { k: 'Company', v: 'Verkkolynx Ratkaisut Oy' },
      { k: 'Business ID', v: '3486845-7' },
      { k: 'Location', v: 'Tampere, Finland' },
      { k: 'Languages', v: 'Finnish; English and French on request' },
    ],
    startTitle: 'How to start',
    start: [
      'Email us and briefly describe your situation and goals.',
      'We arrange an initial consultation.',
      'You receive a proposal covering scope, schedule and price.',
    ],
    hoursLabel: 'Available',
    hours: 'Mon–Fri 9:00–17:00 (EET). Meetings can be arranged flexibly outside these hours.',
  },
  legal: {
    languageNote: legalNote,
    privacy: {
      meta: {
        title: 'Privacy policy',
        description:
          'Privacy policy of Verkkolynx Ratkaisut Oy: what personal data we collect, why, and your rights (Finnish original).',
      },
      title: 'Privacy policy',
      updated: '13 November 2024',
      intro: privacyFi.intro,
      sections: privacyFi.sections,
    },
    terms: {
      meta: {
        title: 'Terms of use',
        description:
          'Terms of use of Verkkolynx Ratkaisut Oy: prices, payment, delivery, data protection and liability (Finnish original).',
      },
      title: 'Terms of use',
      updated: '28 October 2024',
      intro: termsFi.intro,
      sections: termsFi.sections,
    },
  },
  footer: {
    tagline: 'Software, data and automation from Tampere.',
    explore: 'Site',
    company: 'Company',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    rights: 'Verkkolynx Ratkaisut Oy',
    location: 'Tampere, Finland',
    businessId: 'Business ID',
  },
  notFound: {
    title: 'Page not found',
    text: 'This path leads nowhere, as happens in the forest sometimes. Return to the home page or choose a service.',
    back: 'Back home',
  },
  homeMeta: {
    title: 'Software, data and automation',
    description:
      'Verkkolynx analyses your data, designs the solution and builds the software, automations and ecommerce systems your business runs on. Tampere, Finland.',
  },
  schemaDescription:
    'Verkkolynx Ratkaisut Oy is a Tampere-based technical digital company: custom software and automation, data analytics, ecommerce systems, websites, and marketing and SEO.',
};
