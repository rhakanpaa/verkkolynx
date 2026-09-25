import type { Service } from './types';

export const servicesEn: Service[] = [
  {
    key: 'software',
    n: '01',
    name: 'Custom software and automation',
    nav: 'Custom software and automation',
    line: 'Internal tools, applications and automation.',
    summary:
      'We build the tools, systems and automations that off-the-shelf software does not provide.',
    tags: ['Internal tools', 'Web applications', 'CMS', 'API integrations', 'Automation'],
    photo: 'tammerkoski',
    diagram: true,
    heroTitle: 'We build the tools that off-the-shelf systems do not.',
    lede: 'We design and build software, internal tools and automations around your actual workflow: from web applications to custom CMS platforms and integrations.',
    intro: [
      'In many companies the work happens between spreadsheets, email and disconnected systems. We can design and build focused software around that workflow, instead of bending the process to fit the software.',
      'The result can be a small internal utility or a substantial custom system. The starting point is the data, the rules and the people who will use the tool.',
    ],
    groupsTitle: 'What we can build',
    groups: [
      {
        tag: 'Custom business software',
        t: 'Systems for workflows that off-the-shelf software cannot handle',
        d: 'Purpose-built systems for processes that general-purpose software does not handle properly.',
        items: [
          'Order and demand processes',
          'Industry-specific calculation and rule models',
          'Operational tracking systems',
        ],
      },
      {
        tag: 'Internal tools',
        t: 'Tools your team uses to manage data and operations',
        d: 'Interfaces and applications for employees to manage products, content, data, customers and workflows.',
        items: [
          'Product and catalog tools',
          'Content and data management',
          'Applications that replace spreadsheets',
        ],
      },
      {
        tag: 'Automation',
        t: 'Repetitive tasks as reliable automated workflows',
        d: 'We replace manual copying, updating and reporting with automated workflows.',
        items: [
          'Data transfers and updates',
          'Automated reporting',
          'Product data processing',
          'Notifications and alerts',
        ],
      },
      {
        tag: 'Custom CMS and data management',
        t: 'A system for structured information',
        d: 'A system built to manage structured information when a generic website CMS is not enough.',
        items: [
          'Product and catalog management',
          'Admin views over existing databases',
          'Permissions and change history',
        ],
      },
      {
        tag: 'Data products and analytics applications',
        t: 'Analysis as a tool people use repeatedly',
        d: 'We turn analysis into an interactive application that is used again and again, instead of producing another static report.',
        items: [
          'Interactive analysis tools',
          'Monitoring and tracking views',
          'Reporting applications',
        ],
      },
      {
        tag: 'Integrations',
        t: 'Systems that talk to each other',
        d: 'We connect APIs, databases, ecommerce platforms, internal systems and third-party services.',
        items: [
          'API integrations',
          'Data transfer between existing systems',
          'Automated data pipelines',
        ],
      },
      {
        tag: 'Web applications',
        t: 'Applications and portals that run in the browser',
        d: 'We build web applications with real application logic, authentication, data processing and workflows.',
        items: [
          'Customer and employee portals',
          'Administration interfaces',
          'Mobile-friendly applications',
        ],
      },
      {
        tag: 'Decision tools',
        t: 'Logic that helps people decide',
        d: 'Pricing engines, recommendation and comparison tools, forecasting tools, search systems and scoring models.',
        items: [
          'Pricing tools',
          'Recommendation and comparison',
          'Forecasting',
          'Search and scoring',
        ],
      },
    ],
    scale: {
      title: 'From a small utility to a substantial system',
      items: [
        {
          t: 'A focused tool',
          d: 'One clear task, for example an internal utility that replaces a spreadsheet, or a single automation. Quick to put into use.',
        },
        {
          t: 'A complete application',
          d: 'Several user groups, permissions and workflows in one web application.',
        },
        {
          t: 'A large custom system',
          d: 'Multiple integrations, data pipelines and interfaces, developed in phases.',
        },
      ],
    },
    problemsTitle: 'Do you recognise any of these?',
    problems: [
      {
        t: 'Information is moved by hand between systems',
        d: 'The same data gets typed into two or three places.',
      },
      {
        t: 'Complicated spreadsheets keep operations running',
        d: 'One person understands how they work, and mistakes spread unnoticed.',
      },
      {
        t: 'The same administrative steps repeat',
        d: 'Daily and weekly routine work takes time from the real work.',
      },
      {
        t: 'Platform limits are worked around',
        d: 'The system in use lacks a needed feature, so it is done the roundabout way.',
      },
      {
        t: 'Reports are compiled manually',
        d: 'Numbers are collected from several sources and combined again every time.',
      },
      {
        t: 'Product information is maintained inefficiently',
        d: 'Product data lives in several files and systems.',
      },
      {
        t: 'Several tools that do not talk to each other',
        d: 'Work breaks down each time it moves from one tool to another.',
      },
      {
        t: 'Analysis never becomes operational',
        d: 'Results stay in a report and never become part of the work.',
      },
      {
        t: 'The process adapts to the software',
        d: 'Software should support the process, not the other way around.',
      },
    ],
    capabilitiesTitle: 'How we build',
    capabilities: [
      {
        t: 'Understand the workflow',
        d: 'We go through how the work is done today: the data, the rules, the people and the existing systems.',
      },
      {
        t: 'Model and design',
        d: 'We define the data model, logic and interface before building. Analysis and rules can be carried straight into the software.',
      },
      {
        t: 'Build in stages',
        d: 'Working parts go live first, and users can try the tool during development.',
      },
      {
        t: 'Connect and automate',
        d: 'We integrate the tool with your existing systems and automate repetitive steps.',
      },
      {
        t: 'Maintain and optimise',
        d: 'We follow usage and data and develop the tool according to what is actually needed.',
      },
    ],
    outcomesTitle: 'What follows',
    outcomes: [
      { t: 'Less manual work', d: 'Repetitive steps happen automatically.' },
      {
        t: 'One place for the work',
        d: 'Data and workflows live in one tool instead of scattered ones.',
      },
      {
        t: 'Analysis in use',
        d: 'Data and rules become part of the workflow instead of staying a report.',
      },
      {
        t: 'Software that supports the process',
        d: 'The tool is built on the terms of the workflow.',
      },
    ],
    edgeTitle: 'The Verkkolynx difference',
    edge: [
      'Data, development, ecommerce and automation in one team: we analyse the workflow, model it and build the tool to run it.',
      'Development starts from the real workflow, not a generic software template.',
      'Ownership and usage rights are agreed per project.',
      'Security and permissions are designed in from the start.',
    ],
    extraTitle: 'Technically',
    extra: [
      'Browser-based, mobile-friendly interfaces',
      'Databases, APIs and back-end systems',
      'Authentication and role-based permissions',
      'Integrations with ecommerce platforms, internal systems and third-party services',
      'Documentation and training at handover, plus maintenance and further development',
    ],
    bridge: [
      { text: 'Do you only need a public website?', to: 'web' },
      { text: 'Is the starting point data analysis?', to: 'analytics' },
    ],
    related: ['analytics', 'ecommerce', 'web'],
    ctaTitle: 'Tell us what work you would like to automate.',
    ctaText:
      'Describe the current workflow or problem briefly. We will tell you what can be built from it and at what scale.',
    meta: {
      title: 'Custom software and automation',
      description:
        'Custom internal tools, web applications, CMS platforms, API integrations and automation. We build the tools that off-the-shelf systems do not. Tampere, Finland.',
    },
  },
  {
    key: 'analytics',
    n: '02',
    name: 'Data analytics and insights',
    nav: 'Data analytics and insights',
    line: 'Analysis, forecasts and decision tools.',
    summary:
      'We analyse data and, when it makes sense, turn the result into a tool: a forecast, monitoring or decision support.',
    tags: ['Sales trends', 'Forecasts', 'Decision tools', 'Automated analysis'],
    photo: 'sunset',
    heroTitle: 'Data that becomes decisions, and when needed, tools.',
    lede: 'Verkkolynx analyses data from sales trends to customer behaviour and helps find hidden opportunities. When an analysis needs continuous use, it can be built into an application.',
    intro: [
      'Analysis does not have to end in a report. We identify the patterns and trends that improve decisions in inventory management, customer segmentation, pricing and market assessment.',
      'Often a clear report is enough. When the same analysis is repeated over and over, it can become a forecast, a monitoring system or a decision tool your team uses itself.',
    ],
    problemsTitle: 'What analytics answers',
    problems: [
      {
        t: 'Data does not drive decisions',
        d: 'Information accumulates but never turns into action.',
      },
      {
        t: 'Inventory does not follow demand',
        d: 'Oversupply ties up capital and undersupply loses sales.',
      },
      { t: 'Customer groups are unclear', d: 'The most valuable segments are not identified.' },
      {
        t: 'Processes are slow and costly',
        d: 'Bottlenecks from product delivery to customer service go unnoticed.',
      },
      {
        t: 'There is too little data',
        d: 'Datasets tailored to your needs can be built even from a small starting point.',
      },
    ],
    capabilitiesTitle: 'What we analyse',
    capabilities: [
      {
        t: 'Sales trend analysis',
        d: 'Identify what sells, when and why.',
        ex: 'Seasonal demand, so inventory levels are right.',
      },
      {
        t: 'Customer behaviour tracking',
        d: 'Understand your audience and identify high-value customer segments.',
        ex: 'Trends that fuel personalised campaigns and reactivation of dormant customers.',
      },
      {
        t: 'Operational efficiency metrics',
        d: 'Identify bottlenecks from product delivery to customer service.',
        ex: 'Smoother operations, lower costs and shorter delivery times.',
      },
      {
        t: 'Market analysis',
        d: 'Assess market dynamics in Finland and internationally.',
        ex: 'Untapped markets such as the United States: competition, regional trends and customer preferences.',
      },
      {
        t: 'From analysis to tool',
        d: 'When an analysis is needed repeatedly, it can be built into a decision-support application, a monitoring system or an algorithm inside the workflow.',
        ex: 'A forecasting tool, scoring model or automated monitoring that the team uses daily.',
      },
    ],
    outcomesTitle: 'Where analysis can lead',
    outcomes: [
      {
        t: 'Informed decisions',
        d: 'Reports, visualisations and recommendations built on reliable data.',
      },
      {
        t: 'Decision support and forecasts',
        d: 'Decision-support applications, forecasting tools and scoring models.',
      },
      {
        t: 'Automated monitoring',
        d: 'Automated analysis and monitoring systems that detect deviations.',
      },
      {
        t: 'Part of the business',
        d: 'Operational tools, interactive analysis applications and algorithms inside business processes.',
      },
    ],
    edgeTitle: 'The Verkkolynx difference',
    edge: [
      'Analytics skills combined with experience of large sports product datasets.',
      'Analysis can be carried into software by the same team that did it: modelling and implementation stay together.',
      'Recommendations based on your situation rather than generic assumptions.',
      'Clear reports and visualisations.',
    ],
    extraTitle: 'Methods we use',
    extra: [
      'Predictive analytics: statistical models and machine learning to forecast trends and risks',
      'Dynamic pricing: algorithms that adjust prices to demand, competition and market trends',
      'Data quality: cleaning, organising and standardising',
      'Real-time metrics for sales, inventory and website performance',
      'Training, so your team can interpret analytics tools on its own',
    ],
    bridge: [{ text: 'Want the analysis available as a tool?', to: 'software' }],
    related: ['software', 'ecommerce', 'marketing'],
    ctaTitle: 'What should the data tell you?',
    ctaText:
      'Tell us what data you have and what you would like to learn from it. We will say whether a report is enough or whether a tool is worth building.',
    meta: {
      title: 'Data analytics and insights',
      description:
        'Sales trends, customer behaviour, forecasts and market analysis. Analysis can be turned into decision support or a tool when needed. Verkkolynx, Tampere, Finland.',
    },
  },
  {
    key: 'ecommerce',
    n: '03',
    name: 'Ecommerce systems and optimisation',
    nav: 'Ecommerce systems and optimisation',
    line: 'Product data, pricing, search and integrations.',
    summary:
      'We build and optimise the systems behind an online store: product data, catalog structure, pricing, search and integrations.',
    tags: [
      'Product data',
      'Taxonomy',
      'Pricing algorithms',
      'Search and recommendations',
      'Integrations',
    ],
    photo: 'keskustori',
    heroTitle: 'An online store whose systems work.',
    lede: 'We develop a store’s product data, catalog structure, pricing, search and integrations, and build internal tools to manage them when needed.',
    intro: [
      'An online store’s results are often decided behind the scenes: is the product data accurate, can products be found, does pricing follow the market, and does information move between systems without manual work.',
      'Behind the work are historical and current datasets we have compiled and organised across industries such as sports, retail and technology.',
    ],
    problemsTitle: 'What this answers',
    problems: [
      {
        t: 'Products cannot be found',
        d: 'Weak taxonomy and search hide the right products from the customer.',
      },
      {
        t: 'Product information is scattered or inaccurate',
        d: 'Incomplete descriptions weaken trust and the quality of sales data.',
      },
      {
        t: 'Prices do not follow the market',
        d: 'Campaigns and seasons go unexploited when it comes to profitability.',
      },
      {
        t: 'Maintaining products is manual work',
        d: 'The same information is updated by hand in several places.',
      },
      {
        t: 'Inventory does not match demand',
        d: 'Overstocking and understocking eat into margin.',
      },
      { t: 'Purchases are abandoned', d: 'Complicated navigation and checkout drive buyers away.' },
    ],
    capabilitiesTitle: 'What we build and optimise',
    capabilities: [
      {
        t: 'Product data and structured product information',
        d: 'Clear, accurate product information structured so that it can be searched, compared and updated.',
      },
      {
        t: 'Taxonomy and catalog structure',
        d: 'Categories and attributes that make products discoverable and manageable.',
      },
      {
        t: 'Pricing algorithms',
        d: 'Automatic price changes to stay competitive and to manage profitability in campaigns and peak seasons.',
      },
      {
        t: 'Search and recommendations',
        d: 'Search functions and recommendations that help the customer find the right product.',
        ex: 'Gear comparison or personalised product recommendations.',
      },
      {
        t: 'Inventory-related analysis',
        d: 'Demand forecasting and avoiding over- or understocking.',
      },
      {
        t: 'Product information automation',
        d: 'Importing, transforming, enriching and updating product data as automated workflows.',
      },
      {
        t: 'Integrations and marketplace workflows',
        d: 'Connecting the store, inventory systems, marketplaces and internal tools through APIs.',
      },
      {
        t: 'Internal merchandising tools',
        d: 'An interface where the team manages products, prices and content without manual work. Built when needed.',
      },
      {
        t: 'Customer journey optimisation',
        d: 'Easy navigation, fewer abandoned purchases, mobile-friendly design and intuitive checkout.',
      },
    ],
    outcomesTitle: 'Why staying current matters',
    outcomes: [
      {
        t: 'Credibility',
        d: 'Customers trust platforms with the latest products and accurate information.',
      },
      {
        t: 'SEO benefits',
        d: 'New, well-described products improve visibility in search results.',
      },
      { t: 'Better sales data', d: 'Accurate product information helps you understand trends.' },
    ],
    edgeTitle: 'The Verkkolynx difference',
    edge: [
      'Taxonomy, product data and pricing from a team that can also build the tools and integrations around them.',
      'Data-based decisions: analysis guides pricing, assortment and inventory.',
      'Automation reduces manual work in product data maintenance.',
    ],
    extraTitle: 'Also, when needed',
    extra: [
      'Adding ecommerce features to an existing site: carts, payments, inventory management and customer accounts',
      'Content production for product descriptions and marketing materials',
      'Payment security and PCI DSS requirements on ecommerce platforms',
    ],
    bridge: [
      { text: 'Need an internal product management tool or automation?', to: 'software' },
      { text: 'Want to know what your sales data says?', to: 'analytics' },
    ],
    related: ['software', 'analytics', 'web'],
    ctaTitle: 'What takes the most time in your store?',
    ctaText:
      'Tell us what is maintained by hand in your store or what does not work. We will say what can be optimised and what is worth building.',
    meta: {
      title: 'Ecommerce systems and optimisation',
      description:
        'Product data, taxonomy, pricing algorithms, search, recommendations and integrations. Ecommerce systems and optimisation from Tampere, Finland.',
    },
  },
  {
    key: 'web',
    n: '04',
    name: 'Websites and digital experiences',
    nav: 'Websites and digital experiences',
    line: 'Company sites, store front ends and content platforms.',
    summary:
      'We design and build public websites and interfaces that are fast, accessible and readable to search engines.',
    tags: ['Company sites', 'Store front ends', 'Campaign sites', 'Accessibility', 'Performance'],
    photo: 'finlayson',
    heroTitle: 'Websites that work and get found.',
    lede: 'We design and build company sites, store front ends, campaign sites and content platforms. They work on every device, are accessible and are built to be readable by search engines.',
    intro: [
      'A website is the first thing a customer sees. We combine data-driven design, an understanding of user behaviour and technical quality.',
      'We build the site around Google’s E-E-A-T principles (experience, expertise, authoritativeness, trustworthiness) so it communicates credibility.',
    ],
    problemsTitle: 'What a site renewal answers',
    problems: [
      {
        t: 'The site looks good but does not perform',
        d: 'The structure does not guide visitors toward action.',
      },
      {
        t: 'The experience suffers on mobile',
        d: 'The site does not work properly on every device.',
      },
      { t: 'The site is slow or outdated', d: 'Usability, performance or look needs updating.' },
      {
        t: 'The site is not found in search',
        d: 'Search optimisation was not considered at build time.',
      },
    ],
    capabilitiesTitle: 'What we build',
    capabilities: [
      {
        t: 'Company sites and content platforms',
        d: 'Clear structure, content and management that support the company’s goals.',
      },
      {
        t: 'Store front ends',
        d: 'Interfaces that guide customers toward a purchase.',
      },
      {
        t: 'Campaign and landing pages',
        d: 'Focused pages for a specific purpose.',
        ex: 'Highlighting high-demand categories, or landing pages tailored to customer needs.',
      },
      {
        t: 'UX and conversion',
        d: 'We analyse user behaviour and create clear structures that improve the experience and streamline customer journeys.',
      },
      {
        t: 'Responsive design and accessibility',
        d: 'The site works on desktop, tablet and phone. The goal is accessibility in line with the WCAG guidelines.',
      },
      {
        t: 'Performance and search-friendly structure',
        d: 'Fast pages and a technical structure ready for search optimisation from the start.',
      },
    ],
    outcomesTitle: 'What the site delivers',
    outcomes: [
      { t: 'Trust', d: 'Credibility built on E-E-A-T principles.' },
      {
        t: 'Conversion',
        d: 'Clear, user-centred solutions help turn visitors into customers.',
      },
      { t: 'Engagement', d: 'Smooth experiences that make users want to return.' },
      { t: 'Scalability', d: 'A platform that copes with growing content and traffic.' },
    ],
    edgeTitle: 'The Verkkolynx difference',
    edge: [
      'Web design, ecommerce expertise and data in one team.',
      'When a site needs application logic, authentication or integrations, software development is part of the same team.',
      'A platform that can be extended as needs grow.',
    ],
    extraTitle: 'In practice',
    extra: [
      'Platforms: WordPress, Shopify, Magento and custom systems; we recommend what fits your needs',
      'Multilingual: Finnish, English and French, with search optimisation for each language',
      'Redesigns, migrations to a new platform and maintenance after launch',
      'Third-party services: payments, social media and analytics tools',
      'We do not provide hosting ourselves, but help you choose a provider and set up professional email',
    ],
    bridge: [{ text: 'Need a system larger than a website?', to: 'software' }],
    related: ['software', 'marketing', 'ecommerce'],
    ctaTitle: 'What should the site achieve?',
    ctaText:
      'Tell us what you are building or renewing. We will propose a structure, technical approach and schedule.',
    meta: {
      title: 'Websites and digital experiences',
      description:
        'Company sites, store front ends and campaign sites: fast, accessible and search-friendly. Verkkolynx, Tampere, Finland.',
    },
  },
  {
    key: 'marketing',
    n: '05',
    name: 'Marketing and SEO',
    nav: 'Marketing and SEO',
    line: 'Search visibility, campaigns and content.',
    summary:
      'We complement the technical work with visibility: search optimisation, targeted campaigns and content whose impact is measured.',
    tags: ['SEO', 'Digital campaigns', 'Content marketing', 'Email'],
    photo: 'nasinneula',
    heroTitle: 'Visibility for the right people.',
    lede: 'We combine search optimisation, targeted campaigns and content so your business is found at the right moment and the impact can be measured.',
    intro: [
      'Marketing and SEO are done in the same team, and from the same data, as our other services.',
      'It is not only about clicks, but about turning visitors into customers.',
    ],
    problemsTitle: 'What marketing and SEO answer',
    problems: [
      { t: 'The site is not found in search', d: 'The right keywords and content are missing.' },
      { t: 'Campaigns are not targeted', d: 'Paid visibility does not reach the right audience.' },
      { t: 'Content is filler', d: 'Texts lack the detail your audience actually benefits from.' },
      {
        t: 'Impact is not visible in numbers',
        d: 'Results are not measured, so activity cannot be improved.',
      },
    ],
    capabilitiesTitle: 'How the work is done',
    capabilities: [
      {
        t: 'Search engine optimisation (SEO)',
        d: 'Improve visibility with targeted keyword strategies.',
        ex: 'A sports equipment retailer that wants its products to appear for searches such as “hockey skates”.',
      },
      {
        t: 'Targeted digital campaigns',
        d: 'Paid search and social media campaigns that match your goals.',
        ex: 'Limited-time hockey equipment offers to the right audience.',
      },
      {
        t: 'Content marketing',
        d: 'Data-driven, detailed content built on sports product datasets: blog articles, product comparisons and niche guides.',
      },
      {
        t: 'Email marketing',
        d: 'Flows for abandoned carts, seasonal campaigns and loyal-customer engagement.',
      },
    ],
    outcomesTitle: 'Why visibility matters',
    outcomes: [
      {
        t: 'Credibility',
        d: 'Businesses that rank well in search results are seen as trustworthy.',
      },
      {
        t: 'Higher-quality leads',
        d: 'Better visibility brings more suitable visitors to your site.',
      },
      {
        t: 'Sustainability',
        d: 'Organic visibility lasts longer than paid campaigns.',
      },
    ],
    edgeTitle: 'The Verkkolynx difference',
    edge: [
      'Experience of large sports product datasets gives content and campaigns concrete insight.',
      'SEO is part of the technical structure: site, product data and content are designed together.',
      'We measure what affects the business and optimise continuously.',
    ],
    extraTitle: 'In practice',
    extra: [
      'Multilingual SEO in Finnish, English and French, and local search visibility',
      'Paid campaigns on Google Ads, Facebook Ads and LinkedIn Ads',
      'Social media marketing, influencer collaboration and brand strategy',
      'Regular reports: traffic, conversions, clicks and engagement',
    ],
    bridge: [{ text: 'Need reporting or data collection automated?', to: 'software' }],
    related: ['web', 'analytics', 'ecommerce'],
    ctaTitle: 'Is your business found for the right searches?',
    ctaText:
      'Tell us who you want to reach and where. We will review the current situation and suggest what to do first.',
    meta: {
      title: 'Marketing and SEO',
      description:
        'Search engine optimisation, targeted digital campaigns, content marketing and email marketing, driven by data. Verkkolynx, Tampere, Finland.',
    },
  },
  {
    key: 'sole',
    n: '+',
    audience: true,
    name: 'Services for sole traders',
    nav: 'Services for sole traders',
    line: 'Websites, visibility and small tools.',
    summary:
      'Affordable, personal services for sole traders: websites, search visibility, multilingual content, personal advice and, when it makes sense, a small tool or automation.',
    tags: ['Websites', 'SEO', 'Content in three languages', 'Small automations', 'Personal advice'],
    photo: 'lakePortrait',
    heroTitle: 'Services sized for you.',
    lede: 'As a sole trader your hands are full, and there is rarely time to build online visibility or handle routine work. We offer personal, affordable service built around your needs.',
    intro: [
      'For a sole trader, price matters. We size the work so it stays affordable.',
      'Whether you are setting up an online shop, want a modern website or are looking for a way into the North American market, we are by your side. When a repetitive task eats your time, we can also build a small tool or automation.',
    ],
    problemsTitle: 'Familiar challenges',
    problems: [
      {
        t: 'Time does not stretch',
        d: 'There is too little time to look for opportunities or build visibility.',
      },
      { t: 'Routines eat working time', d: 'The same manual work repeats week after week.' },
      {
        t: 'Services feel expensive',
        d: 'The services that really move a business forward are often too costly for a small business.',
      },
      {
        t: 'International visibility is missing',
        d: 'Reaching Finnish, Canadian or American customers takes the right languages and keywords.',
      },
    ],
    capabilitiesTitle: 'What we can offer you',
    capabilities: [
      {
        t: 'Websites and online shops',
        d: 'A site or shop that looks good and works well.',
        ex: 'A sole trader working with digital content or products gets a shop that showcases the products.',
      },
      {
        t: 'Search engine optimisation (SEO)',
        d: 'The right keywords and effective strategies, whether you target Finnish, Canadian or American customers.',
        ex: 'Appearing for searches such as “digital products in Finland”.',
      },
      {
        t: 'Content in three languages',
        d: 'Expert content production in Finnish, English and French.',
        ex: 'Blog articles, product presentations or targeted ad content, for example for a North American audience.',
      },
      {
        t: 'Small tools and automations',
        d: 'We can build a small tool or automation when a repetitive task takes too much time.',
        ex: 'An application that replaces a spreadsheet, or automatic transfer of data from one system to another.',
      },
      {
        t: 'Branding and digital visibility',
        d: 'A strong brand, social media management and an appealing domain name.',
      },
      {
        t: 'Personal advice and guidance',
        d: 'One-to-one expert work is at the heart of this service: we guide you and provide solutions for your needs.',
      },
    ],
    outcomesTitle: 'Why choose Verkkolynx',
    outcomes: [
      { t: 'Affordability', d: 'Affordable solutions sized to your needs.' },
      { t: 'Tailoring', d: 'Services designed around your goals.' },
      {
        t: 'Expertise',
        d: 'Strong software, SEO and data skills combined with an international perspective.',
      },
      { t: 'Personal touch', d: 'We advise you and do the work together with you.' },
    ],
    edgeTitle: 'Why our services are affordable',
    edge: [
      'Our team members cover many roles: where some agencies hire separate specialists for data, development and web design, we have skills in all of these areas.',
      'With the skills in one team, delivery is faster and more coherent.',
    ],
    bridge: [{ text: 'Need a custom tool?', to: 'software' }],
    related: ['web', 'software', 'marketing'],
    ctaTitle: 'Tell us where you need help.',
    ctaText:
      'Tell us your situation and we will propose a solution that fits the size and budget of your business.',
    meta: {
      title: 'Services for sole traders',
      description:
        'Affordable, tailored services for sole traders: websites, SEO, multilingual content, small tools and automations, and personal advice.',
    },
  },
];
