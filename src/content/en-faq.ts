import type { FaqCategory, FaqItem } from './types';

const i = (id: string, q: string, a: string | string[], list?: string[]): FaqItem => ({
  id,
  q,
  a: Array.isArray(a) ? a : [a],
  ...(list ? { list } : {}),
});

export const faqEn: FaqCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      i(
        'services',
        'What services does Verkkolynx offer?',
        'Verkkolynx Ratkaisut Oy offers five disciplines:',
        [
          'Custom Software & Automation: internal tools, web applications, CMS platforms, integrations and automation.',
          'Data analytics and insights: analysis, forecasts and decision tools.',
          'Ecommerce Systems & Optimisation: product data, taxonomy, pricing algorithms, search and integrations.',
          'Websites & Digital Experiences: company sites, store front ends and campaign sites.',
          'Marketing and SEO: search optimisation, campaigns and content.',
        ],
      ),
      i(
        'sole-traders',
        'What services does Verkkolynx offer to sole traders?',
        'We understand the particular challenges of sole traders. Our tailored services include:',
        [
          'Websites and online shops: affordable, easy-to-use solutions.',
          'Search engine optimisation (SEO) for the keywords that matter.',
          'Multilingual content production in Finnish, English and French.',
          'Branding and digital presence: social media channels, domain names and building your brand.',
          'Personal coaching and support.',
        ],
      ),
      i('location', 'Where is Verkkolynx located?', 'Our office is in Tampere, Finland.'),
      i(
        'contact',
        'How can I contact Verkkolynx?',
        'You can reach us by email at asiakaspalvelu@verkkolynx.fi.',
      ),
      i(
        'getting-started',
        'How do I get started with Verkkolynx?',
        'Email us at asiakaspalvelu@verkkolynx.fi and we will arrange an initial consultation.',
      ),
      i(
        'values',
        'What are Verkkolynx’s values?',
        'Our values are Finnish pride with a global perspective, precision that delivers results, no one is left behind, change creates opportunities, and precision meets individuality. You can read more on the About page.',
      ),
      i(
        'affordability',
        'Why are Verkkolynx’s services affordable?',
        'Our team members cover many roles and have broad expertise. Where some agencies hire specialists solely for data analytics, branding or web design, we have experience in all of these areas. This all-round expertise makes delivery faster and more coherent.',
      ),
      i(
        'company-types',
        'What kinds of companies are Verkkolynx’s services suited to?',
        'Companies of all sizes that want to improve their digital visibility, optimise their ecommerce operations or use data analytics to grow.',
      ),
      i(
        'industries',
        'Which industries does Verkkolynx specialise in?',
        'Our services suit almost any industry, but we have extensive experience in ecommerce, retail, sports data and digital services. We specialise especially in sports ecommerce, such as selling hockey equipment, baseball supplies and soccer accessories.',
      ),
      i(
        'abroad',
        'Can Verkkolynx work with companies outside Finland?',
        'Yes. We have experience working with international clients. Our current clients are in Finland, Canada and the United States, and we know the particularities of these regions. Whether you aim to succeed in Finland or expand globally, we can help.',
      ),
      i(
        'history',
        'What is Verkkolynx’s history?',
        'Verkkolynx was founded in 2024 with the vision of combining advanced data analytics with practical business solutions. Our team consists of specialists in data analytics, web development and digital marketing.',
      ),
      i(
        'team',
        'Who is behind Verkkolynx?',
        'Our team includes professionals with backgrounds in mathematics, statistics, computer science, sports and entrepreneurship. This combined expertise supports our commitment to high-quality, data-driven solutions.',
      ),
      i(
        'name',
        'What does the name “Verkkolynx” mean?',
        '“Verkko” is Finnish for network or the web, and “lynx” (ilves) symbolises agility and sharp vision. Together the name reflects our ability to navigate the complex networks of data with agility and precision.',
      ),
      i(
        'mission',
        'What is Verkkolynx’s mission?',
        'We help businesses of all sizes turn data into practical insight, optimise their digital presence and drive sustainable growth through innovative solutions.',
      ),
      i(
        'hours',
        'What are Verkkolynx’s opening hours?',
        'Our regular hours are Monday to Friday, 9:00–17:00 (EET). We are flexible and arrange meetings outside these hours too, so we can serve international clients in Canada and the United States.',
      ),
    ],
  },
  {
    id: 'software',
    title: 'Software and automation',
    items: [
      i(
        'what-software',
        'What software can Verkkolynx build?',
        'We can build custom software around your workflow. Examples:',
        [
          'Internal tools and administration interfaces',
          'Web applications and customer or employee portals',
          'Automations and automated data pipelines',
          'Custom CMS and data management systems',
          'API integrations and connections between systems',
          'Decision tools: pricing, forecasting, search, recommendation and scoring',
        ],
      ),
      i(
        'internal-tools',
        'What do internal tools mean?',
        'Applications and interfaces that employees use to manage data, products, content, customers or workflows. They often replace spreadsheets and manual work.',
      ),
      i(
        'app-vs-site',
        'What is the difference between a web application and a website?',
        'A website presents content to visitors. A web application has application logic, authentication, data processing and workflows, and is used to get work done. Public sites belong to Websites & Digital Experiences.',
      ),
      i(
        'automation',
        'What can be automated?',
        'Repetitive, rule-based steps such as moving data between systems, processing product information, reporting and notifications. We first assess whether a step is worth automating.',
      ),
      i(
        'custom-cms',
        'When is a custom CMS needed?',
        'When a regular website CMS does not fit the management of structured information, for example product or catalog data, complex permissions, or an admin view over an existing database.',
      ),
      i(
        'system-integrations',
        'Can existing systems be connected?',
        'Yes. We connect ecommerce platforms, internal systems and third-party services such as payment systems, social media platforms and analytics tools through APIs, databases and files.',
      ),
      i(
        'data-applications',
        'Can an analysis be turned into an application?',
        'Yes, when the analysis is needed repeatedly. It can become a forecasting tool, a scoring model, a monitoring view or an interactive analysis application. Not every analysis needs software: often a clear report is enough.',
      ),
      i(
        'dev-process',
        'How does software development proceed?',
        'In the initial interview and workflow review we clarify the goals. Then we design the data model, logic and interface, build and test in stages, and take the solution into use. We work in stages, so you see progress and can give feedback along the way.',
      ),
      i(
        'ownership-maintenance',
        'Who owns the software, and can it be maintained and developed further?',
        'Work produced in the project transfers to you after full payment. We deliver documentation and train your team, and offer maintenance and further development.',
      ),
      i(
        'scale-security',
        'How large a system can you build, and how is security handled?',
        'From a one-task utility to a large system developed in phases. Security and permissions, such as roles and authentication, are designed in from the start, and we follow secure coding practices and GDPR requirements.',
      ),
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data analytics',
    items: [
      i(
        'analytics-benefits',
        'How do data analytics services benefit my business?',
        'Our services are built on advanced mathematics and statistics. We look for hidden opportunities, optimise performance and help you make informed decisions.',
      ),
      i(
        'ecommerce-optimisation',
        'What does ecommerce optimisation mean at Verkkolynx?',
        'Ecommerce optimisation includes developing product categories, optimising product information and creating dynamic pricing algorithms. The aim is to streamline the customer journey, improve search and maximise sales results.',
      ),
      i(
        'little-data',
        'I do not have much data. Can you help me get more?',
        'Yes. We specialise in building and using extensive databases tailored to your needs. Through data collection, organisation and visualisation you can access meaningful information even from a small starting point.',
      ),
      i(
        'why-data',
        'Why does data matter?',
        'Well-organised data not only improves your website but also simplifies bookkeeping, streamlines business management and improves your customers’ experience. Structured data is the foundation of smarter, more efficient operation.',
      ),
      i(
        'predictive',
        'How does Verkkolynx approach predictive analytics?',
        'We develop and use statistical models and machine learning techniques to forecast trends, identify risks and find growth opportunities.',
      ),
      i(
        'dynamic-pricing',
        'What is dynamic pricing, and how can Verkkolynx implement it?',
        'Dynamic pricing adjusts the prices of products or services in real time based on demand, competition and market trends. We develop custom algorithms for your business so you can maximise results and stay competitive.',
      ),
      i(
        'data-quality',
        'Can Verkkolynx improve the quality of my data?',
        'Yes. We improve data quality by cleaning, organising and standardising datasets so your data is accurate, reliable and ready for decision-making.',
      ),
      i(
        'customer-behaviour',
        'How can Verkkolynx help me understand my customers’ behaviour?',
        'We analyse customer behaviour using segmentation methods, statistical models and trend analysis. We identify patterns in purchase habits, preferences and engagement that improve retention and grow sales.',
      ),
      i(
        'real-time',
        'Does Verkkolynx offer real-time analytics?',
        'Yes. We implement real-time analytics solutions that let you monitor key metrics, for example sales, inventory or website performance.',
      ),
      i(
        'analytics-industries',
        'Which industries benefit most from your data analytics services?',
        'Our expertise is especially useful in ecommerce, retail, sports data and digital services. Our methods can be tailored to the needs of any industry.',
      ),
      i(
        'ai',
        'Can Verkkolynx help with AI-based analytics?',
        'Yes. We integrate AI and machine learning into our analytics services to find deeper insights, automate complex processes and produce smarter recommendations.',
      ),
      i(
        'big-data',
        'How does Verkkolynx handle large datasets?',
        'We have experience managing and analysing large datasets, including distributed computing and cloud-based solutions.',
      ),
      i(
        'data-security',
        'How secure is my data in your analytics services?',
        'Security is central to our analytics services. We protect your data during the analytics process, for example with encryption and access control.',
      ),
      i(
        'analytics-training',
        'Does Verkkolynx offer training in data analytics tools?',
        'Yes. Training helps your team learn to use and interpret data analytics tools and make data-based decisions independently.',
      ),
    ],
  },
  {
    id: 'websites',
    title: 'Websites',
    items: [
      i(
        'web-difference',
        'How do your web design and development services differ from others?',
        'We focus on data-driven design to get user experience, functionality and measurable results right. We tailor sites to your needs, whether launching a new platform or updating an existing one.',
      ),
      i(
        'multilingual',
        'Does Verkkolynx offer multilingual web design and SEO?',
        'Yes. We specialise in designing multilingual websites and optimising them for search across regions and languages. Our main languages are Finnish, English and French.',
      ),
      i(
        'platforms',
        'Which platforms does Verkkolynx work with?',
        'We work with WordPress, Shopify, Magento and custom systems, among others. We make sure the chosen platform fits your needs and scalability requirements.',
      ),
      i(
        'redesign',
        'Can Verkkolynx redesign my existing website?',
        'Yes. We update and improve existing sites in functionality, user experience and look, whether it is a small update or a complete overhaul.',
      ),
      i(
        'accessibility',
        'How do you make sure websites are user-friendly and accessible?',
        'We emphasise user experience and accessibility in the design process. We follow best practices and guidelines such as WCAG (Web Content Accessibility Guidelines).',
      ),
      i(
        'mobile',
        'Does Verkkolynx offer mobile-friendly web design?',
        'Yes. Every site we build is optimised for mobile devices with responsive design techniques, so it works on smartphones, tablets and computers.',
      ),
      i(
        'ecommerce-features',
        'Can Verkkolynx add ecommerce features to my website?',
        'Yes. We implement ecommerce features from shopping carts and payment systems to inventory management and customer accounts.',
      ),
      i(
        'custom-or-template',
        'Do you offer custom development or use ready-made templates?',
        'Both, depending on your needs and budget. We can create a fully custom site from scratch or adapt existing templates to your brand and requirements.',
      ),
      i(
        'site-security',
        'How does Verkkolynx ensure the security of websites?',
        'We apply industry-standard measures such as SSL certificates, secure coding practices and regular updates. We also offer ongoing monitoring and maintenance.',
      ),
      i(
        'maintenance',
        'Can Verkkolynx help with maintenance and updates after launch?',
        'Yes. Ongoing support and maintenance keep your site current, secure and performing. This includes content updates, technical support and adding new features as needed.',
      ),
      i(
        'build-time',
        'How long does building a website take?',
        'The schedule depends on the project’s complexity. Simple sites can be ready in a few weeks; more complex ones can take several months. We provide a detailed schedule in the planning phase.',
      ),
      i(
        'web-process',
        'How does Verkkolynx run website development projects?',
        'The process starts with an initial interview where we clarify your goals. Then we design wireframes and interface sketches. After your approval we move to development, testing and launch. We keep you involved at every stage.',
      ),
      i(
        'hosting',
        'Does Verkkolynx provide hosting and domain services?',
        'We do not provide hosting ourselves, but we help you choose a reliable hosting provider and register domain names that best represent your brand. We also set up professional email (for example Google Workspace).',
      ),
      i(
        'web-content',
        'How does Verkkolynx handle website content production?',
        'We provide content production such as copywriting and multimedia in Finnish, English and French.',
      ),
      i(
        'cms',
        'Which content management systems (CMS) does Verkkolynx recommend?',
        'We work with WordPress, Drupal and Joomla, among others. We recommend the system that best fits your needs based on scalability, ease of use and functionality.',
      ),
      i(
        'seo-in-web',
        'Is search engine optimisation included in web development?',
        'Yes. SEO is integrated into our development process from the start, so your site is optimised for search engines from the day it launches. It is part of our standard service.',
      ),
      i(
        'migration',
        'Can Verkkolynx help with website migration?',
        'Yes. We help move your site to a new platform or hosting provider with minimal downtime and make sure data and functionality are preserved.',
      ),
    ],
  },
  {
    id: 'marketing-seo',
    title: 'Marketing and SEO',
    items: [
      i(
        'visibility',
        'How do your marketing and SEO services improve my business’s visibility?',
        'We design targeted marketing strategies and apply SEO techniques that improve search visibility, attract quality traffic and increase conversion.',
      ),
      i(
        'social',
        'Does Verkkolynx offer social media marketing?',
        'Yes. We provide social media marketing services to strengthen your brand’s online visibility: meaningful reach, genuine connection and telling your story effectively.',
      ),
      i(
        'content-marketing',
        'How does Verkkolynx approach content marketing and content production?',
        'We believe in high-quality content that speaks to the target audience. We develop content strategies and produce blog posts, articles, infographics, videos and social media content. The content reflects your brand voice and supports SEO.',
      ),
      i(
        'paid-campaigns',
        'Can Verkkolynx help with paid advertising campaigns?',
        'Yes. We manage campaigns on platforms such as Google Ads, Facebook Ads and LinkedIn Ads. The work includes keyword research, audience targeting, ad creation and continuous optimisation.',
      ),
      i(
        'measurement',
        'How does Verkkolynx measure the success of its marketing strategies?',
        'We use key performance indicators (KPIs) such as website traffic, conversion and click-through rates and engagement metrics. Regular reports keep you up to date.',
      ),
      i(
        'multilingual-seo',
        'Does Verkkolynx offer multilingual SEO services?',
        'Yes. We optimise your site for different languages and regions in Finnish, English and French.',
      ),
      i(
        'local-seo',
        'Can Verkkolynx improve my local SEO visibility?',
        'Yes. Local visibility includes optimising your Google business profile, building local directory listings and creating region-specific content.',
      ),
      i(
        'marketing-difference',
        'What sets Verkkolynx’s marketing strategies apart?',
        'A data-driven approach. Every action is tailored to your audience and business goals, and its impact is measured.',
      ),
      i(
        'email',
        'Do you offer email marketing services?',
        'Yes. We create and manage email campaigns, including newsletter design, automation setup and performance analysis.',
      ),
      i(
        'campaign-analytics',
        'Do you provide analytics for marketing campaigns?',
        'Yes. We deliver detailed analyses and regular reports including engagement rates, conversion rates and ROI.',
      ),
      i(
        'branding',
        'How does Verkkolynx approach branding and brand strategy?',
        'We help develop a coherent brand strategy covering identity, communication and positioning. It includes market research, competitor analysis and creating brand guidelines.',
      ),
    ],
  },
  {
    id: 'support-training',
    title: 'Support and training',
    items: [
      i(
        'tailored-solutions',
        'How does Verkkolynx approach tailored solutions for businesses?',
        'We work closely with our clients to understand their needs and challenges. Solutions are built on data and support your business goals.',
      ),
      i(
        'not-sports',
        'I do not run a sports-related online store. Is Verkkolynx still a fit?',
        'Yes. Data is data, and our skills in data analytics, web development, SEO and ecommerce optimisation can be adapted to retail, travel, digital services or any other field.',
      ),
      i(
        'results',
        'What kind of results can I expect?',
        'Results vary by project. Typical goals include better website performance, growing traffic and conversion, a better customer experience and smoother ecommerce processes. We emphasise measurable results.',
      ),
      i(
        'after-project',
        'Does Verkkolynx offer support after a project is complete?',
        'Yes. Ongoing support and maintenance include regular site updates and adapting SEO strategies to new trends.',
      ),
      i(
        'team-training',
        'Does Verkkolynx offer training for a company’s own teams?',
        'Yes. Training topics can include interpreting data analytics, ecommerce best practices or managing SEO.',
      ),
      i(
        'training-content',
        'What kind of training does Verkkolynx offer?',
        'Training in using data analytics tools, website content management, SEO best practices, social media management and digital marketing strategies. Training is tailored to your team’s needs.',
      ),
      i(
        'tech-support',
        'Do you provide technical support for the solutions you deliver?',
        'Yes. Ongoing technical support keeps the solutions we deliver working, and issues are resolved quickly.',
      ),
      i(
        'change-management',
        'Can Verkkolynx help with change management during rollout?',
        'Yes. Rolling out new systems can be challenging, so we offer change management support, including staff training and process documentation.',
      ),
    ],
  },
  {
    id: 'security',
    title: 'Security',
    items: [
      i(
        'security',
        'How does Verkkolynx ensure security in its services?',
        'Security is a top priority. We follow industry best practices and GDPR regulations.',
      ),
      i(
        'backups',
        'Does Verkkolynx offer backup and recovery services?',
        'Yes. We implement regular backup schedules and secure storage practices so your data can be restored quickly if it is lost or damaged.',
      ),
      i(
        'privacy-laws',
        'How does Verkkolynx comply with international data protection laws?',
        'We are familiar with international data protection regulations, including GDPR in the EU and CCPA in the United States.',
      ),
      i(
        'breaches',
        'What measures does Verkkolynx take to prevent data breaches?',
        'We use multiple layers of protection such as firewalls, encryption, intrusion detection systems and regular security audits.',
      ),
      i(
        'pci-dss',
        'Does Verkkolynx have experience with PCI DSS compliance in online stores?',
        'Yes. We help ecommerce platforms implement the safeguards needed to handle card data securely in line with the PCI DSS standard.',
      ),
      i(
        'secure-coding',
        'How do you make sure the sites and applications you build are secure?',
        'We follow secure coding practices and run thorough testing, including vulnerability assessments. Security is part of every stage of development.',
      ),
      i(
        'privacy-policy',
        'Can Verkkolynx help draft a privacy policy for my website?',
        'Yes. We help draft privacy policies and terms of use that meet legal requirements and explain clearly how data is handled.',
      ),
      i(
        'access-control',
        'How does Verkkolynx manage user rights and access control?',
        'We implement access control so that only authorised people can reach sensitive data: role-based permissions, multi-factor authentication and regular access reviews.',
      ),
      i(
        'gdpr',
        'Can Verkkolynx help with GDPR compliance?',
        'Yes. We help align data handling practices with GDPR requirements, including processing procedures, consent management and documentation.',
      ),
    ],
  },
  {
    id: 'project-management',
    title: 'Project management',
    items: [
      i(
        'small-businesses',
        'Can Verkkolynx help small businesses, or is it aimed at large companies?',
        'Our services are scalable and designed for businesses of all sizes. Whether you are a large company or a sole trader, we work with you to reach your goals.',
      ),
      i(
        'project-length',
        'How long does a typical project take?',
        'It varies with scope. Small tasks such as SEO audits can take a few weeks, while site redesigns or algorithm development can take several months. We provide a clear schedule in the planning phase.',
      ),
      i(
        'pricing',
        'How does Verkkolynx price and budget its projects?',
        'We offer transparent pricing tailored to the scope of the project. During initial consultation we provide a detailed proposal.',
      ),
      i(
        'scaling',
        'Can Verkkolynx scale solutions as my business grows?',
        'Yes. We design systems that grow with your business and handle increasing traffic, data volume and operational complexity.',
      ),
      i(
        'methods',
        'What project management methods does Verkkolynx use?',
        'We work in short stages and agree the next step with you as we go, so the project stays flexible.',
      ),
      i(
        'communication',
        'How does Verkkolynx communicate during a project?',
        'We prioritise transparent, regular communication. You work directly with the people building the solution, and we give updates, gather feedback and answer your questions by email and video meetings.',
      ),
      i(
        'collaboration-models',
        'What collaboration models are available (for example fixed price, hourly)?',
        'Fixed-price contracts for clearly defined projects and hourly contracts for projects needing flexibility, as well as subscription and project-based models.',
      ),
      i(
        'multiple-projects',
        'Can Verkkolynx handle several projects at once?',
        'Yes. Resources are allocated so every project gets the attention it needs and schedules hold.',
      ),
      i(
        'on-schedule',
        'How do projects stay on schedule and within budget?',
        'We set clear schedules and budgets in the planning phase and track progress with project management tools. Regular checkpoints help resolve deviations quickly.',
      ),
      i(
        'changing-needs',
        'What happens if my needs change during the project?',
        'One of our core values is “Change creates opportunities”. We discuss changes, assess the impact on schedule and budget and adjust the project plan so the project stays aligned with your goals.',
      ),
      i(
        'scaling-support',
        'Does Verkkolynx offer support after a project regarding scalability?',
        'Yes. Ongoing support and maintenance include performance monitoring, needed adjustments and updates as your business grows.',
      ),
      i(
        'international-experience',
        'How experienced is Verkkolynx in managing international projects?',
        'We have experience managing projects across countries and time zones. We coordinate with international stakeholders and account for cultural differences. Our clients are in Finland, Canada, the United States and Europe.',
      ),
      i(
        'team-size',
        'How big is the Verkkolynx team?',
        'Our team consists of professionals specialising in data analytics, web development, digital marketing and cybersecurity. This range of skills lets us manage projects of different sizes and complexity.',
      ),
      i(
        'references',
        'Can Verkkolynx provide references or case studies?',
        'Yes, we can provide case studies and references on request.',
      ),
      i(
        'documentation',
        'Do you provide project documentation and handover after completion?',
        'Yes. We deliver comprehensive project documentation and ensure handover through training and support so your team can manage and maintain the solutions.',
      ),
    ],
  },
];
