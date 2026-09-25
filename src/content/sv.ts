import type { Dict } from './types';
import { servicesSv } from './sv-services';
import { faqSv } from './sv-faq';
import { privacyFi, termsFi } from './legal-fi';

const legalNote =
  'Den juridiskt bindande versionen av det här dokumentet är på finska och återges nedan. Kontakta oss på asiakaspalvelu@verkkolynx.fi om du vill ha en sammanfattning på svenska.';

export const sv: Dict = {
  lang: 'sv',
  htmlLang: 'sv',
  ogLocale: 'sv_FI',
  skip: 'Hoppa till innehållet',
  nav: {
    items: [
      { key: 'home', label: 'Startsida' },
      { key: 'services', label: 'Tjänster' },
      { key: 'why', label: 'Varför Verkkolynx' },
      { key: 'about', label: 'Om oss' },
      { key: 'faq', label: 'FAQ' },
      { key: 'contact', label: 'Kontakt' },
    ],
    servicesMenuTitle: 'Tjänster',
    allServices: 'Alla tjänster',
    contact: 'Kontakta oss',
    menu: 'Meny',
    close: 'Stäng',
    language: 'Språk',
    primary: 'Huvudmeny',
    breadcrumb: 'Sökväg',
    switchTo: 'Byt språk till svenska',
  },
  hero: {
    eyebrow: 'Tammerfors · Finland',
    title: 'Vi bygger verktygen som gör jobbet.',
    lede: 'Verkkolynx analyserar din data, planerar lösningen och bygger de program och automationer som ditt företag använder.',
    primary: 'Kontakta oss',
    secondary: 'Se våra tjänster',
    mapLabel: 'Kompetenskarta: data, programvara, automation, e-handel, webb och SEO',
    mapHint: 'Välj en punkt på kartan',
    nodes: [
      {
        id: 'data',
        label: 'Data',
        ref: 'A4',
        line: 'Vi analyserar data och hittar det som bör styra besluten.',
        to: 'analytics',
        cta: 'Dataanalys',
      },
      {
        id: 'software',
        label: 'Programvara',
        ref: 'B3',
        line: 'Vi bygger de verktyg och program som färdiga system inte erbjuder.',
        to: 'software',
        cta: 'Programutveckling',
      },
      {
        id: 'automation',
        label: 'Automation',
        ref: 'C4',
        line: 'Vi ersätter upprepade manuella arbetsmoment med pålitliga arbetsflöden.',
        to: 'software',
        cta: 'Automation',
      },
      {
        id: 'commerce',
        label: 'E-handel',
        ref: 'D2',
        line: 'Produktdata, prissättning och integrationer som fungerar tillsammans.',
        to: 'ecommerce',
        cta: 'E-handelssystem',
      },
      {
        id: 'web',
        label: 'Webb',
        ref: 'C2',
        line: 'En webbplats eller ett program som fungerar på alla enheter.',
        to: 'web',
        cta: 'Webbplatser',
      },
      {
        id: 'seo',
        label: 'SEO',
        ref: 'E1',
        line: 'Sökbarhet och riktad synlighet för rätt personer.',
        to: 'marketing',
        cta: 'Marknadsföring och SEO',
      },
    ],
    edges: [
      { a: 'data', b: 'software', text: 'Analysen blir programmets logik.' },
      {
        a: 'software',
        b: 'automation',
        text: 'Programvaran driver automationer som ersätter manuellt arbete.',
      },
      {
        a: 'automation',
        b: 'commerce',
        text: 'Automationen uppdaterar produktdata och priser i webbutiken.',
      },
      {
        a: 'software',
        b: 'web',
        text: 'En webbplats kan bli ett program med riktig logik.',
      },
      {
        a: 'commerce',
        b: 'web',
        text: 'Webbutikens system kopplas till användargränssnittet via API:er.',
      },
      {
        a: 'web',
        b: 'seo',
        text: 'Den tekniska strukturen går att läsa för sökmotorer från första början.',
      },
      { a: 'data', b: 'commerce', text: 'Försäljningsanalysen styr prissättning och sortiment.' },
    ],
    steps: ['Förstå', 'Analysera', 'Planera', 'Bygg', 'Automatisera', 'Optimera'],
  },
  capabilities: {
    title: 'Fem kompetensområden, ett team.',
    more: 'Läs mer',
  },
  system: {
    title: 'Data in, verktyg ut.',
    lede: 'Varje system består av indata, logik, ett program och ett resultat. Välj en del för att se vad den hänger ihop med.',
    cols: [
      {
        title: 'Indata',
        nodes: [
          {
            id: 'data',
            label: 'Data',
            text: 'Försäljnings-, produkt-, kund- och användningsdata samt filer och databaser.',
          },
          {
            id: 'apis',
            label: 'API:er',
            text: 'Externa tjänster, e-handelsplattformar och marknadsplatser.',
          },
          {
            id: 'existing',
            label: 'Befintliga system',
            text: 'Program som redan används: lager, fakturering, produktinformationssystem.',
          },
          {
            id: 'human',
            label: 'Användarens indata',
            text: 'Formulär, beslut och rättelser som användaren gör i verktyget.',
          },
        ],
      },
      {
        title: 'Logik',
        nodes: [
          {
            id: 'rules',
            label: 'Regler',
            text: 'Affärsregler, kontroller och villkor skrivna i kod.',
          },
          {
            id: 'automation',
            label: 'Automation',
            text: 'Tidsstyrda och händelsestyrda arbetsflöden.',
          },
          {
            id: 'algorithms',
            label: 'Algoritmer',
            text: 'Prissättning, poängsättning, sökning och rekommendationer.',
          },
          {
            id: 'analysis',
            label: 'Analys',
            text: 'Statistiska modeller, prognoser och upptäckt av avvikelser.',
          },
        ],
      },
      {
        title: 'Program',
        nodes: [
          {
            id: 'ui',
            label: 'Användargränssnitt',
            text: 'En webbläsarbaserad, mobilvänlig vy för arbetet.',
          },
          { id: 'workflow', label: 'Arbetsflöde', text: 'Steg, tillstånd och godkännanden.' },
          {
            id: 'permissions',
            label: 'Behörigheter',
            text: 'Roller och inloggning.',
          },
          {
            id: 'cms',
            label: 'CMS / internt verktyg',
            text: 'Hantering och underhåll av strukturerad information.',
          },
        ],
      },
      {
        title: 'Resultat',
        nodes: [
          { id: 'action', label: 'Åtgärd', text: 'Ett arbetsmoment blir gjort automatiskt.' },
          {
            id: 'decision',
            label: 'Beslut',
            text: 'En rekommendation eller poängsättning som beslutsunderlag.',
          },
          { id: 'update', label: 'Uppdatering', text: 'Informationen uppdateras i rätt system.' },
          { id: 'report', label: 'Rapport', text: 'En uppdaterad rapport utan manuellt arbete.' },
          {
            id: 'experience',
            label: 'Kundupplevelse',
            text: 'Webbplatsen, sökningen eller tjänsten som kunden ser blir bättre.',
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
    title: 'Vi bygger de verktyg som färdiga system inte erbjuder.',
    lede: 'I många företag görs arbetet mellan kalkylblad och frånkopplade system. Vi bygger programvara kring arbetsflödet: från ett litet internt verktyg till ett omfattande system.',
    kinds: [
      { t: 'Interna verktyg', d: 'Program för att hantera data, produkter och arbetsflöden.' },
      { t: 'Automation', d: 'Upprepade arbetsmoment som sköter sig själva.' },
      { t: 'Skräddarsytt CMS', d: 'Ett system för att hantera strukturerad information.' },
      { t: 'API-integrationer', d: 'System som pratar med varandra.' },
      { t: 'Webbprogram', d: 'Portaler och program med riktig programlogik.' },
      { t: 'Beslutsverktyg', d: 'Prissättning, prognoser, sökning och rekommendationer.' },
    ],
    cta: 'Läs om programutveckling',
  },
  why: {
    title: 'Vi analyserar, bygger och automatiserar i samma team.',
    intro:
      'Skillnaden ligger i helheten: data, programvara, automation, e-handel, webb och synlighet finns i samma team, så arbetet bryts inte mellan olika leverantörer.',
    items: [
      {
        t: 'Från analys till verktyg',
        d: 'Vi analyserar arbetsflödet, modellerar det och bygger verktyget som driver det.',
      },
      {
        t: 'Programutveckling',
        d: 'Skräddarsydda interna verktyg, webbprogram, CMS-system och integrationer.',
      },
      {
        t: 'Analytisk kompetens',
        d: 'Statistik och dataanalys som stöd för beslutsfattandet.',
      },
      {
        t: 'Produkt- och e-handelsdata',
        d: 'Erfarenhet av stora produkt- och e-handelsmaterial som grund för prissättning, analys och innehåll.',
      },
      {
        t: 'E-handelskompetens',
        d: 'Taxonomier, produktdata, prissättningsalgoritmer och integrationer.',
      },
      {
        t: 'Från Tammerfors, internationellt',
        d: 'Kunder och samarbetspartner i Finland, Kanada, USA och Europa.',
      },
      {
        t: 'Flerspråkighet',
        d: 'Innehåll och SEO på finska och engelska, och på franska på begäran.',
      },
      { t: 'För stora och små', d: 'Tjänsterna passar både företag och egenföretagare.' },
    ],
    facts: [
      { k: 'FO-nummer', v: '3486845-7' },
      { k: 'Grundat', v: '2024' },
      { k: 'Verksamhetsort', v: 'Tammerfors, Finland' },
      { k: 'Samarbetsform', v: 'Abonnemang eller projekt' },
    ],
    more: 'Läs hur vi arbetar',
  },
  values: {
    title: 'Fem vägmärken längs stigen.',
    intro:
      'Våra värderingar visar vilka vi är och hur vi arbetar. De bygger på finländsk kvalitet samt på lodjurets smidighet och precision.',
    items: [
      {
        n: '01',
        title: 'Finländsk stolthet, globalt perspektiv',
        short: 'Finländsk noggrannhet och praktiskt sinnelag för en global marknad.',
        long: 'Vi är stolta över att vara finländare och stöder de lokala företag och företagare som stärker Finland. Vi betjänar kunder i Finland, Kanada, USA och Europa och tar med oss finländsk kunskap in i varje projekt.',
        photo: 'nasinneula',
      },
      {
        n: '02',
        title: 'Precision som ger resultat',
        short: 'Varje projekt genomförs omsorgsfullt och med kunden i fokus.',
        long: 'Uppmärksamhet på detaljer gör skillnad. Från datadrivna insikter till e-handelssystem är precision för oss ett löfte och inte bara en standard: målet är mätbara resultat.',
        photo: 'tammerkoski',
      },
      {
        n: '03',
        title: 'Ingen lämnas efter',
        short: 'Partnerskap är kärnan i vår verksamhet: stöd och gemensam framgång.',
        long: 'Vi ser oss som partner på våra kunders väg och arbetar tillsammans för deras framgång. När våra kunder lyckas, lyckas vi.',
        photo: 'swing',
      },
      {
        n: '04',
        title: 'Förändring skapar möjligheter',
        short: 'Digital förändring är en möjlighet, inte ett hot.',
        long: 'Den digitala världen förändras hela tiden. Vi hjälper våra kunder att hitta rätt i föränderliga miljöer med smidighet och kreativitet och att göra utmaningar till tillväxt.',
        photo: 'sunset',
      },
      {
        n: '05',
        title: 'Precision möter individualitet',
        short: 'Skräddarsydda lösningar med sakkunnig omsorg.',
        long: 'Varje kund och varje utmaning är unik. Med ett litet men skickligt team kan vi ge den uppmärksamhet som behövs. Precision handlar inte bara om exakthet, utan om att varje detalj tjänar kundens behov.',
        photo: 'lake',
      },
    ],
  },
  sole: {
    title: 'Som egenföretagare behöver du inte göra allt själv.',
    text: 'Det finns sällan tid över för synlighet på nätet och rutinuppgifter, och bra tjänster känns ofta för dyra. Vi erbjuder personligt och prisvärt stöd: från webbplatser och sökmotorsynlighet till små verktyg och rådgivning.',
    items: [
      'Webbplatser och webbutiker',
      'Små verktyg och automationer',
      'Sökmotoroptimering',
      'Innehåll på finska och engelska, på franska på begäran',
      'Personlig rådgivning',
    ],
    cta: 'Tjänster för egenföretagare',
  },
  cta: {
    title: 'Berätta vad du håller på att bygga.',
    text: 'E-post är det bästa sättet att nå oss. Beskriv din situation kort, så svarar vi.',
    button: 'Kontakta oss',
    or: 'eller läs först de vanliga frågorna',
  },
  services: servicesSv,
  servicesPage: {
    title: 'Tjänster',
    lede: 'Fem kompetensområden och ett separat tjänstepaket för egenföretagare. De hänger ihop: data styr programvaran, programvaran automatiserar webbutiken, och både butiken och webbplatsen behöver synlighet.',
    overview: 'Välj tjänst',
    meta: {
      title: 'Tjänster',
      description:
        'Programutveckling och automation, dataanalys, e-handelssystem, webbplatser och digitala upplevelser, marknadsföring och SEO samt tjänster för egenföretagare.',
    },
  },
  labels: {
    example: 'Exempel',
    related: 'Relaterade tjänster',
    home: 'Startsida',
    contactUs: 'Kontakta oss',
    services: 'Tjänster',
    audience: 'För företag',
    mail: 'Skicka e-post',
    updated: 'Ikraftträdelsedatum',
  },
  whyPage: {
    meta: {
      title: 'Varför Verkkolynx',
      description:
        'Ett tekniskt digitalt företag i Tammerfors: programutveckling, data, automation, e-handelssystem, webbplatser och SEO från samma team.',
    },
    title: 'En partner som binder ihop data, programvara och webben.',
    lede: 'Verkkolynx är ett tekniskt digitalt företag i Tammerfors. Vi analyserar, bygger och automatiserar i samma team.',
    intro: [
      'De flesta företag måste sätta ihop flera olika leverantörer: en analytiker, en programutvecklare, en webbyrå och en marknadsförare. Hos oss finns de i samma team, så arbetet bryts inte vid överlämningarna.',
      'I Finland värdesätter vi kvalitet, men också värde för pengarna.',
    ],
    itemsTitle: 'Sju skäl',
    meansForYou: 'Vad det innebär för dig',
    items: [
      {
        t: 'Ett samband mellan analys och genomförande',
        d: 'Analysen, reglerna och arbetsflödet kan föras direkt in i programvaran, utan att kraven försvinner mellan leverantörerna.',
        you: 'Ett verktyg som motsvarar det verkliga arbetet, och färre mellanhänder.',
      },
      {
        t: 'Skräddarsydd programutveckling och automation',
        d: 'Interna verktyg, webbprogram, skräddarsydda CMS-system och integrationer, från små hjälpprogram till omfattande system.',
        you: 'Verktyg som färdiga system inte erbjuder, och mindre manuellt arbete.',
      },
      {
        t: 'Analytisk kompetens och data',
        d: 'Statistisk kompetens och erfarenhet av stora historiska och aktuella e-handelsmaterial.',
        you: 'Beslut som bygger på data, och prognoser du kan använda.',
      },
      {
        t: 'E-handelssystem',
        d: 'Taxonomier, produktdata, prissättningsalgoritmer, sökning och integrationer.',
        you: 'En webbutik vars bakomliggande system fungerar tillsammans.',
      },
      {
        t: 'Webbplatser och synlighet',
        d: 'Snabba och tillgängliga webbplatser, med SEO och marknadsföring som kompletterande kompetens.',
        you: 'En webbplats som fungerar och som går att hitta.',
      },
      {
        t: 'Flexibla samarbetsformer',
        d: 'Vi erbjuder både abonnemangsbaserade och projektbaserade avtal för företag av alla storlekar.',
        you: 'Tjänsterna anpassas efter dina behov och ditt företags storlek.',
      },
      {
        t: 'Från Finland, med internationell erfarenhet',
        d: 'Finland är vårt hem, och vi har kunder och samarbetspartner i Kanada, USA och Europa.',
        you: 'Finländsk noggrannhet och internationell erfarenhet i samma team.',
      },
    ],
    modelsTitle: 'Samarbetsformer',
    models: [
      {
        t: 'Abonnemang',
        d: 'Löpande stöd, underhåll och utveckling enligt en överenskommen månadsmodell.',
      },
      {
        t: 'Projekt',
        d: 'En tydligt avgränsad helhet till fast pris eller timpris.',
      },
    ],
    closing: 'Berätta vilket arbete du skulle vilja underlätta.',
  },
  aboutPage: {
    meta: {
      title: 'Om oss',
      description:
        'Verkkolynx Ratkaisut Oy är ett tekniskt digitalt företag i Tammerfors: programutveckling, data, automation, e-handel och webb. Vår historia, vårt arbetssätt och våra värderingar.',
    },
    title: 'Finländsk noggrannhet, globalt perspektiv.',
    lede: 'Verkkolynx Ratkaisut Oy är ett tekniskt företag i Tammerfors som bygger programvara, automationer och datalösningar.',
    chapters: [
      {
        id: 'vilka',
        n: '01',
        t: 'Vilka Verkkolynx är',
        p: [
          'Företaget grundades 2024 med visionen att förena avancerad dataanalys med praktiska affärslösningar. Vi är ett tekniskt digitalt företag i Tammerfors som förenar programutveckling, data, automation, e-handelssystem, webbplatser och synlighet.',
          'Vårt uppdrag är att hjälpa företag av alla storlekar att göra data till praktiska insikter och praktiska verktyg.',
        ],
      },
      {
        id: 'tammerfors',
        n: '02',
        t: 'Från Tammerfors, Finland',
        p: [
          'Vi arbetar från Tammerfors och förenar finländsk noggrannhet med ett globalt perspektiv. Vi stöder de lokala företag och företagare som stärker Finland och är stolta över att vara en del av den lokala ekonomin och gemenskapen.',
        ],
      },
      {
        id: 'skillnad',
        n: '03',
        t: 'Vad som skiljer oss tekniskt',
        p: [
          'Programutveckling, dataanalys, e-handel, automation och SEO finns under samma tak. I vårt team finns experter med bakgrund inom matematik, statistik, datateknik, idrott och företagande.',
          'Skillnaden ligger i helheten. I stället för att arbetet slutar vid analysen analyserar vi arbetsflödet, modellerar det, automatiserar det och bygger verktyget som driver det.',
        ],
      },
      {
        id: 'internationellt',
        n: '04',
        t: 'Internationellt perspektiv',
        p: [
          'Våra kunder och samarbetspartner finns i Finland, Kanada, USA och Europa. Vi känner till skillnaderna mellan olika marknader och bokar möten flexibelt över tidszoner. Innehåll och SEO producerar vi på finska och engelska, och på franska på begäran.',
        ],
      },
    ],
    nameTitle: 'Bakom namnet',
    nameText:
      '”Verkko” betyder nät eller webben på finska, och ”lynx” (lodjur, på finska ilves) symboliserar smidighet och skarp syn. Tillsammans beskriver de vår förmåga att hitta rätt i datans komplexa nätverk.',
    processTitle: 'Så arbetar vi',
    process: [
      { t: 'Inledande samtal', d: 'Vi utreder dina mål och din utgångspunkt.' },
      {
        t: 'Planering',
        d: 'Tidsplan och budget samt vid behov wireframes och skisser av användargränssnittet.',
      },
      { t: 'Genomförande', d: 'Utveckling och testning i etapper, och du är med hela vägen.' },
      { t: 'Lansering', d: 'Driftsättning, dokumentation och vid behov utbildning.' },
      { t: 'Stöd', d: 'Underhåll och vidareutveckling när ditt företag växer.' },
    ],
    valuesTitle: 'Våra värderingar',
    valuesIntro:
      'Våra värderingar är mer än ord. De styr allt vi gör, från att stödja företag till att klara utmaningarna i den digitala vildmarken.',
  },
  faqPage: {
    meta: {
      title: 'Vanliga frågor',
      description:
        'Svar på vanliga frågor: tjänster, dataanalys, webbplatser, marknadsföring och SEO, stöd och utbildning, datasäkerhet samt projektledning.',
    },
    title: 'Vanliga frågor',
    lede: 'Svar på de vanligaste frågorna. Om något fortfarande är oklart, skriv till asiakaspalvelu@verkkolynx.fi.',
    search: 'Sök bland frågorna',
    searchPlaceholder: 'Sök t.ex. SEO, prissättning, GDPR',
    categories: 'Ämnen',
    all: 'Alla',
    none: 'Inga träffar.',
    noneHelp: 'Prova ett annat sökord eller skriv till oss.',
    expandAll: 'Öppna alla',
    collapseAll: 'Stäng alla',
    stillQuestions: 'Hittade du inte svaret?',
    resultsLabel: 'frågor',
    categoriesData: faqSv,
  },
  contactPage: {
    meta: {
      title: 'Kontakt',
      description:
        'Kontakta Verkkolynx Ratkaisut Oy: asiakaspalvelu@verkkolynx.fi. Tammerfors, Finland.',
    },
    title: 'Kontakta oss.',
    lede: 'E-post är det bästa sättet att nå oss. Berätta kort vad du håller på med eller vilket arbete du skulle vilja underlätta.',
    emailLabel: 'E-post',
    emailNote: 'Vi svarar på finska eller engelska, och på franska på begäran.',
    topicsTitle: 'Vad vill du prata om?',
    topics: [
      { label: 'Dataanalys', subject: 'Dataanalys och insikter' },
      { label: 'E-handel', subject: 'E-handelssystem och optimering' },
      { label: 'Webbplatser', subject: 'Webbplatser och digitala upplevelser' },
      { label: 'Marknadsföring och SEO', subject: 'Marknadsföring och SEO' },
      { label: 'Tjänster för egenföretagare', subject: 'Tjänster för egenföretagare' },
      { label: 'Något annat', subject: 'Förfrågan' },
    ],
    detailsTitle: 'Företagsuppgifter',
    details: [
      { k: 'Företag', v: 'Verkkolynx Ratkaisut Oy' },
      { k: 'FO-nummer', v: '3486845-7' },
      { k: 'Ort', v: 'Tammerfors, Finland' },
      { k: 'Språk', v: 'Finska; engelska och franska på begäran' },
    ],
    startTitle: 'Så kommer vi igång',
    start: [
      'Skicka e-post och beskriv kort din situation och dina mål.',
      'Vi bokar in ett första konsultationsmöte.',
      'Du får ett förslag med omfattning, tidsplan och pris.',
    ],
    hoursLabel: 'Tillgängliga',
    hours: 'Mån–fre kl. 9–17 finländsk tid. Möten kan även bokas flexibelt utanför de tiderna.',
  },
  legal: {
    languageNote: legalNote,
    privacy: {
      meta: {
        title: 'Dataskyddsbeskrivning',
        description:
          'Verkkolynx Ratkaisut Oy:s dataskyddsbeskrivning: vilka personuppgifter vi samlar in, varför och vilka rättigheter du har (finsk originaltext).',
      },
      title: 'Dataskyddsbeskrivning',
      updated: '13 november 2024',
      intro: privacyFi.intro,
      sections: privacyFi.sections,
    },
    terms: {
      meta: {
        title: 'Användarvillkor',
        description:
          'Verkkolynx Ratkaisut Oy:s användarvillkor: priser, betalning, leverans, dataskydd och ansvar (finsk originaltext).',
      },
      title: 'Användarvillkor',
      updated: '28 oktober 2024',
      intro: termsFi.intro,
      sections: termsFi.sections,
    },
  },
  footer: {
    tagline: 'Programvara, data och automation från Tammerfors.',
    explore: 'Webbplatsen',
    company: 'Företaget',
    legal: 'Villkor',
    privacy: 'Dataskyddsbeskrivning',
    terms: 'Användarvillkor',
    rights: 'Verkkolynx Ratkaisut Oy',
    location: 'Tammerfors, Finland',
    businessId: 'FO-nummer',
  },
  notFound: {
    title: 'Sidan hittades inte',
    text: 'Den här adressen leder ingenstans, vilket ibland händer i skogen också. Gå tillbaka till startsidan eller välj en tjänst.',
    back: 'Till startsidan',
  },
  homeMeta: {
    title: 'Programvara, data och automation',
    description:
      'Verkkolynx analyserar din data, planerar lösningen och bygger de program, automationer och e-handelssystem som ditt företag använder. Tammerfors, Finland.',
  },
  schemaDescription:
    'Verkkolynx Ratkaisut Oy är ett tekniskt digitalt företag i Tammerfors: programutveckling och automation, dataanalys, e-handelssystem, webbplatser samt marknadsföring och SEO.',
};
