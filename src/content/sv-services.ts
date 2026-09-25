import type { Service } from './types';

export const servicesSv: Service[] = [
  {
    key: 'software',
    n: '01',
    name: 'Programutveckling och automation',
    nav: 'Programutveckling och automation',
    line: 'Interna verktyg, program och automation.',
    summary: 'Vi bygger de verktyg, system och automationer som färdig programvara inte erbjuder.',
    tags: ['Interna verktyg', 'Webbprogram', 'CMS', 'API-integrationer', 'Automation'],
    photo: 'tammerkoski',
    diagram: true,
    heroTitle: 'Vi bygger de verktyg som färdiga system inte erbjuder.',
    lede: 'Vi planerar och bygger programvara, interna verktyg och automationer kring företagets faktiska arbetsflöde: från webbprogram till skräddarsydda CMS-system och integrationer.',
    intro: [
      'I många företag görs arbetet mellan kalkylblad, e-post och frånkopplade system. Vi kan planera och bygga riktad programvara kring just det arbetsflödet, i stället för att processen ska anpassa sig efter programmet.',
      'Resultatet kan vara ett litet internt hjälpprogram eller ett omfattande skräddarsytt system. Utgångspunkten är datan, reglerna och de människor som ska använda verktyget.',
    ],
    groupsTitle: 'Vad vi kan bygga',
    groups: [
      {
        tag: 'Skräddarsydd affärsprogramvara',
        t: 'System för arbetsflöden som färdig programvara inte klarar',
        d: 'Specialbyggda system för processer som generell programvara inte hanterar ordentligt.',
        items: [
          'Order- och efterfrågeprocesser',
          'Branschspecifika beräknings- och regelmodeller',
          'System för uppföljning av verksamheten',
        ],
      },
      {
        tag: 'Interna verktyg',
        t: 'Verktyg som teamet använder för att hantera data och verksamhet',
        d: 'Gränssnitt och program som medarbetarna använder för att hantera produkter, innehåll, data, kunder och arbetsflöden.',
        items: [
          'Produkt- och katalogverktyg',
          'Hantering av innehåll och data',
          'Program som ersätter kalkylblad',
        ],
      },
      {
        tag: 'Automation',
        t: 'Upprepade arbetsmoment som pålitliga automationer',
        d: 'Vi ersätter manuell kopiering, uppdatering och rapportering med automatiska arbetsflöden.',
        items: [
          'Dataöverföringar och uppdateringar',
          'Automatisk rapportering',
          'Hantering av produktuppgifter',
          'Aviseringar och larm',
        ],
      },
      {
        tag: 'Skräddarsytt CMS och datahantering',
        t: 'Ett system för strukturerad information',
        d: 'Ett system byggt för att hantera strukturerad information när ett vanligt CMS för webbplatser inte räcker till.',
        items: [
          'Produkt- och katalogadministration',
          'Administrationsvyer över befintliga databaser',
          'Behörigheter och ändringshistorik',
        ],
      },
      {
        tag: 'Dataprodukter och analysprogram',
        t: 'Analys som ett verktyg som används om och om igen',
        d: 'Vi gör analysen till ett interaktivt program som används gång på gång, i stället för att ta fram ännu en statisk rapport.',
        items: [
          'Interaktiva analysverktyg',
          'Uppföljnings- och övervakningsvyer',
          'Rapporteringsprogram',
        ],
      },
      {
        tag: 'Integrationer',
        t: 'System som pratar med varandra',
        d: 'Vi kopplar ihop API:er, databaser, e-handelsplattformar, interna system och tredjepartstjänster.',
        items: [
          'API-integrationer',
          'Dataöverföring mellan befintliga system',
          'Automatiserade dataflöden',
        ],
      },
      {
        tag: 'Webbprogram',
        t: 'Program och portaler som körs i webbläsaren',
        d: 'Vi bygger webbprogram med riktig programlogik, inloggning, databehandling och arbetsflöden.',
        items: ['Kund- och personalportaler', 'Administrationsgränssnitt', 'Mobilvänliga program'],
      },
      {
        tag: 'Beslutsverktyg',
        t: 'Logik som hjälper till att fatta beslut',
        d: 'Prissättningsmotorer, rekommendations- och jämförelseverktyg, prognosverktyg, söksystem och poängmodeller.',
        items: [
          'Prissättningsverktyg',
          'Rekommendationer och jämförelser',
          'Prognoser',
          'Sökning och poängsättning',
        ],
      },
    ],
    scale: {
      title: 'Från ett litet hjälpprogram till ett omfattande system',
      items: [
        {
          t: 'Ett avgränsat verktyg',
          d: 'En tydlig uppgift, till exempel ett internt hjälpprogram som ersätter ett kalkylblad, eller en enskild automation. Tas snabbt i bruk.',
        },
        {
          t: 'Ett komplett program',
          d: 'Flera användargrupper, behörigheter och arbetsflöden i ett och samma webbprogram.',
        },
        {
          t: 'Ett omfattande skräddarsytt system',
          d: 'Flera integrationer, dataflöden och gränssnitt som utvecklas i etapper.',
        },
      ],
    },
    problemsTitle: 'Känner du igen något av det här?',
    problems: [
      {
        t: 'Uppgifter förs över för hand mellan system',
        d: 'Samma uppgift skrivs in på två eller tre ställen.',
      },
      {
        t: 'Invecklade kalkylblad håller verksamheten igång',
        d: 'Bara en person förstår hur de fungerar, och fel sprids obemärkt.',
      },
      {
        t: 'Samma administrativa moment upprepas',
        d: 'Rutinarbetet varje dag och vecka tar tid från det egentliga arbetet.',
      },
      {
        t: 'Plattformens begränsningar kringgås',
        d: 'Systemet som används saknar en funktion man behöver, så den löses med omvägar.',
      },
      {
        t: 'Rapporter sammanställs för hand',
        d: 'Siffrorna hämtas från flera källor och läggs ihop på nytt varje gång.',
      },
      {
        t: 'Produktinformationen underhålls ineffektivt',
        d: 'Produktuppgifterna finns i flera filer och system.',
      },
      {
        t: 'Flera verktyg som inte fungerar ihop',
        d: 'Arbetet fastnar varje gång det flyttas från ett verktyg till ett annat.',
      },
      {
        t: 'Analysen blir aldrig en del av arbetet',
        d: 'Resultaten blir liggande i en rapport i stället för att bli en del av arbetet.',
      },
      {
        t: 'Processen anpassar sig efter programmet',
        d: 'Programvaran ska stödja processen, inte tvärtom.',
      },
    ],
    capabilitiesTitle: 'Så bygger vi',
    capabilities: [
      {
        t: 'Förstå arbetsflödet',
        d: 'Vi går igenom hur arbetet görs i dag: datan, reglerna, människorna och de befintliga systemen.',
      },
      {
        t: 'Modellera och planera',
        d: 'Vi definierar datamodellen, logiken och gränssnittet innan vi bygger. Analysen och reglerna kan föras direkt in i programvaran.',
      },
      {
        t: 'Bygg i etapper',
        d: 'De delar som fungerar tas i bruk först, och användarna kan prova verktyget redan under utvecklingen.',
      },
      {
        t: 'Koppla ihop och automatisera',
        d: 'Vi integrerar verktyget med dina befintliga system och automatiserar de upprepade momenten.',
      },
      {
        t: 'Underhåll och optimera',
        d: 'Vi följer användningen och datan och vidareutvecklar verktyget utifrån vad som faktiskt behövs.',
      },
    ],
    outcomesTitle: 'Vad det leder till',
    outcomes: [
      { t: 'Mindre manuellt arbete', d: 'Upprepade moment sköts automatiskt.' },
      {
        t: 'Ett ställe för arbetet',
        d: 'Uppgifter och arbetsflöden finns i ett verktyg i stället för i en mängd spridda.',
      },
      {
        t: 'Analysen tas i bruk',
        d: 'Data och regler blir en del av arbetsflödet och stannar inte i en rapport.',
      },
      {
        t: 'Programvara som stödjer processen',
        d: 'Verktyget byggs på arbetsflödets villkor.',
      },
    ],
    edgeTitle: 'Vad som skiljer Verkkolynx',
    edge: [
      'Data, utveckling, e-handel och automation i samma team: vi analyserar arbetsflödet, modellerar det och bygger verktyget som driver det.',
      'Utvecklingen utgår från det verkliga arbetsflödet, inte från en generell programmall.',
      'Äganderätten och nyttjanderätten avtalas projektvis.',
      'Datasäkerhet och behörigheter planeras in från början.',
    ],
    extraTitle: 'Tekniskt',
    extra: [
      'Webbläsarbaserade, mobilvänliga gränssnitt',
      'Databaser, API:er och bakomliggande system',
      'Inloggning och rollbaserade behörigheter',
      'Integrationer med e-handelsplattformar, interna system och tredjepartstjänster',
      'Dokumentation och utbildning vid överlämningen samt underhåll och vidareutveckling',
      'Rapporteringsflöden, tidsstyrda processer och datasynkronisering mellan system',
      'Arbetsflöden för innehållshantering och digitalisering av processer som lätta affärsprogram',
    ],
    bridge: [
      { text: 'Behöver du bara en publik webbplats?', to: 'web' },
      { text: 'Är utgångspunkten dataanalys?', to: 'analytics' },
    ],
    related: ['analytics', 'ecommerce', 'web'],
    ctaTitle: 'Berätta vilket arbete du skulle vilja automatisera.',
    ctaText:
      'Beskriv det nuvarande arbetsflödet eller problemet kort. Vi berättar vad som går att bygga och i vilken omfattning.',
    meta: {
      title: 'Programutveckling och automation',
      description:
        'Skräddarsydda interna verktyg, webbprogram, CMS-system, API-integrationer och automation. Vi bygger de verktyg som färdiga system inte erbjuder. Tammerfors.',
    },
  },
  {
    key: 'analytics',
    n: '02',
    name: 'Dataanalys och insikter',
    nav: 'Dataanalys och insikter',
    line: 'Analys, prognoser och beslutsverktyg.',
    summary:
      'Vi analyserar data och gör vid behov resultatet till ett verktyg: en prognos, en uppföljning eller ett beslutsstöd.',
    tags: [
      'Rapportering och instrumentpaneler',
      'KPI:er',
      'Prognoser',
      'Dataintegration',
      'Beslutsverktyg',
    ],
    photo: 'sunset',
    heroTitle: 'Data som blir beslut och, vid behov, verktyg.',
    lede: 'Verkkolynx bygger analys av data om verksamheten, kunderna, försäljningen, lagret och processerna: från KPI:er och rapportering till prognoser och beslutsverktyg. När en analys behöver användas kontinuerligt kan den byggas in i ett program.',
    intro: [
      'Analys behöver inte sluta i en rapport. Vi identifierar de mönster och trender som förbättrar beslutsfattandet inom lagerhållning, kundsegmentering, prissättning och marknadsbedömning.',
      'Ofta räcker en tydlig rapport. När samma analys görs om och om igen kan den bli en prognos, ett uppföljningssystem eller ett beslutsverktyg som teamet använder själv.',
    ],
    problemsTitle: 'Vad analysen ger svar på',
    problems: [
      { t: 'Datan styr inte besluten', d: 'Information samlas, men blir aldrig åtgärder.' },
      {
        t: 'Lagret följer inte efterfrågan',
        d: 'Överskott binder kapital och underskott ger förlorad försäljning.',
      },
      { t: 'Kundgrupperna är oklara', d: 'De mest värdefulla segmenten identifieras inte.' },
      {
        t: 'Processerna är långsamma och kostsamma',
        d: 'Flaskhalsar från produktleverans till kundtjänst går obemärkta förbi.',
      },
      {
        t: 'Det finns för lite data',
        d: 'Databaser som anpassas efter dina behov kan byggas även utifrån en liten början.',
      },
    ],
    capabilitiesTitle: 'Vad vi analyserar',
    capabilities: [
      {
        t: 'Analys av försäljningstrender',
        d: 'Ta reda på vad som säljs, när och varför.',
        ex: 'Säsongsberoende efterfrågan, så att lagernivåerna stämmer.',
      },
      {
        t: 'Uppföljning av kundbeteende',
        d: 'Förstå din målgrupp och identifiera kundsegment med högt värde.',
        ex: 'Trender som ger underlag för personliga kampanjer och för att återaktivera passiva kunder.',
      },
      {
        t: 'Nyckeltal för effektivitet',
        d: 'Identifiera flaskhalsar från produktleverans till kundtjänst.',
        ex: 'Smidigare verksamhet, lägre kostnader och kortare leveranstider.',
      },
      {
        t: 'Marknadsanalys',
        d: 'Bedöm marknadsdynamiken i Finland och internationellt.',
        ex: 'Outnyttjade marknader, till exempel USA: konkurrensläge, regionala trender och kundpreferenser.',
      },
      {
        t: 'Från analys till verktyg',
        d: 'När en analys behövs återkommande kan den byggas till ett beslutsstödsprogram, ett uppföljningssystem eller en algoritm i arbetsflödet.',
        ex: 'Ett prognosverktyg, en poängmodell eller en automatisk övervakning som teamet använder dagligen.',
      },
      {
        t: 'Rapportering och business intelligence',
        d: 'Instrumentpaneler och rapporter som samlar data från flera källor och uppdateras automatiskt.',
        ex: 'Till exempel en månadsrapport för ledningen vars siffror hämtas direkt ur systemen.',
      },
      {
        t: 'Operativ analys',
        d: 'Uppföljning av processer, lager, prissättning och prestanda med pålitliga nyckeltal.',
        ex: 'Till exempel uppföljning av ledtider, lagersaldon eller effekten av prisändringar.',
      },
    ],
    outcomesTitle: 'Vad analysen kan leda till',
    outcomes: [
      {
        t: 'Välgrundade beslut',
        d: 'Rapporter, visualiseringar och rekommendationer som bygger på tillförlitlig data.',
      },
      {
        t: 'Beslutsstöd och prognoser',
        d: 'Beslutsstödsprogram, prognosverktyg och poängmodeller.',
      },
      {
        t: 'Automatisk uppföljning',
        d: 'Automatisk analys och övervakningssystem som upptäcker avvikelser.',
      },
      {
        t: 'En del av verksamheten',
        d: 'Operativa verktyg, interaktiva analysprogram och algoritmer i affärsprocesserna.',
      },
    ],
    edgeTitle: 'Vad som skiljer Verkkolynx',
    edge: [
      'Analytisk kompetens i kombination med erfarenhet av stora datamaterial från flera källor: produkt-, transaktions-, kund- och webbeteendedata. Erfarenheten är djupast inom data från sporthandel på nätet.',
      'Analysen kan föras in i programvara av samma team som gjorde den: modelleringen och genomförandet hålls samman.',
      'Rekommendationer som utgår från din situation, inte från generella antaganden.',
      'Tydliga rapporter och visualiseringar.',
    ],
    extraTitle: 'Metoder vi använder',
    extra: [
      'Prediktiv analys: statistiska modeller och maskininlärning för att förutse trender och risker',
      'Dynamisk prissättning: algoritmer som justerar priserna efter efterfrågan, konkurrens och marknadstrender',
      'Datakvalitet: rensning, ordning och standardisering',
      'Nyckeltal i realtid för försäljning, lager och webbplatsens prestanda',
      'Utbildning, så att ditt team själv kan tolka analysverktygen',
      'Utformning av KPI:er och instrumentpaneler',
      'Rensning, omvandling och modellering av data',
      'Sammanslagning av data från flera källor och API:er',
      'Segmentering, upptäckt av avvikelser och uppföljning av prestanda',
      'Automatisering av återkommande rapportering',
    ],
    bridge: [{ text: 'Vill du ha analysen som ett verktyg?', to: 'software' }],
    related: ['software', 'ecommerce', 'marketing'],
    ctaTitle: 'Vad borde datan berätta för dig?',
    ctaText:
      'Berätta vilken data du har och vad du vill ta reda på. Vi säger om en rapport räcker eller om det lönar sig att bygga ett verktyg.',
    meta: {
      title: 'Dataanalys och insikter',
      description:
        'Dataanalys, rapportering och instrumentpaneler, KPI:er, prognoser, segmentering och marknadsanalys. Analysen kan bli ett beslutsverktyg. Verkkolynx, Tammerfors.',
    },
  },
  {
    key: 'ecommerce',
    n: '03',
    name: 'E-handelssystem och optimering',
    nav: 'E-handelssystem och optimering',
    line: 'Produktdata, prissättning, sökning och integrationer.',
    summary:
      'Vi bygger och optimerar systemen bakom en webbutik: produktdata, katalogstruktur, prissättning, sökning och integrationer.',
    tags: [
      'Produktdata',
      'Taxonomi',
      'Prissättningsalgoritmer',
      'Sökning och rekommendationer',
      'Integrationer',
    ],
    photo: 'keskustori',
    heroTitle: 'En webbutik vars system fungerar.',
    lede: 'Vi utvecklar webbutikens produktdata, katalogstruktur, prissättning, sökning och integrationer och bygger vid behov interna verktyg för att hantera dem.',
    intro: [
      'En webbutiks resultat avgörs ofta bakom kulisserna: är produktdatan korrekt, går produkterna att hitta, följer prissättningen marknaden och rör sig informationen mellan systemen utan manuellt arbete?',
      'Arbetet bygger på erfarenhet av stora produkt-, pris- och transaktionsmaterial inom olika branscher. Erfarenheten är djupast inom sporthandel på nätet, men metoderna passar vilken produktkatalog som helst.',
    ],
    problemsTitle: 'Vad det här ger svar på',
    problems: [
      {
        t: 'Produkterna går inte att hitta',
        d: 'Svag taxonomi och sökning gömmer rätt produkter för kunden.',
      },
      {
        t: 'Produktinformationen är utspridd eller felaktig',
        d: 'Bristfälliga beskrivningar försämrar förtroendet och kvaliteten på försäljningsdatan.',
      },
      {
        t: 'Priserna följer inte marknaden',
        d: 'Kampanjer och säsonger utnyttjas inte för bättre lönsamhet.',
      },
      {
        t: 'Underhållet av produkter är manuellt arbete',
        d: 'Samma uppgifter uppdateras för hand på flera ställen.',
      },
      {
        t: 'Lagret motsvarar inte efterfrågan',
        d: 'Överlager och underlager äter upp marginalen.',
      },
      {
        t: 'Köpen lämnas ofullbordade',
        d: 'Invecklad navigering och kassa driver bort köparna.',
      },
    ],
    capabilitiesTitle: 'Vad vi bygger och optimerar',
    capabilities: [
      {
        t: 'Produktdata och strukturerad produktinformation',
        d: 'Tydlig och korrekt produktinformation som är strukturerad så att den går att söka, jämföra och uppdatera.',
      },
      {
        t: 'Taxonomi och katalogstruktur',
        d: 'Kategorier och egenskaper som gör produkterna sökbara och hanterbara.',
      },
      {
        t: 'Prissättningsalgoritmer',
        d: 'Automatiska prisändringar för att förbli konkurrenskraftig och hålla koll på lönsamheten under kampanjer och högsäsong.',
      },
      {
        t: 'Sökning och rekommendationer',
        d: 'Sökfunktioner och rekommendationer som hjälper kunden att hitta rätt produkt.',
        ex: 'Utrustningsjämförelse eller personliga produktrekommendationer.',
      },
      {
        t: 'Lagerrelaterad analys',
        d: 'Prognoser för efterfrågan och undvikande av överlager och underlager.',
      },
      {
        t: 'Automation av produktinformation',
        d: 'Import, omvandling, komplettering och uppdatering av produktdata som automatiska arbetsflöden.',
      },
      {
        t: 'Integrationer och arbetsflöden mot marknadsplatser',
        d: 'Webbutiken, lagersystemen, marknadsplatserna och de interna verktygen kopplas ihop via API:er.',
      },
      {
        t: 'Interna verktyg för sortimentshantering',
        d: 'Ett gränssnitt där teamet hanterar produkter, priser och innehåll utan manuellt arbete. Byggs vid behov.',
      },
      {
        t: 'Optimering av kundresan',
        d: 'Tydlig navigering, en smidig kassa och mobilvänlig utformning, så att färre köp lämnas ofullbordade.',
      },
      {
        t: 'Konverteringsanalys och mätning av kundresan',
        d: 'Vi tar reda på var köpprocessen bryts och vilka ändringar som påverkar konverteringen.',
      },
      {
        t: 'Marknadsplatsdata och prisuppföljning',
        d: 'Insamling och användning av pris- och produktdata från marknadsplatser och konkurrenter i prissättningen och sortimentet.',
      },
    ],
    outcomesTitle: 'Vad uppdaterad produktinformation ger',
    outcomes: [
      {
        t: 'Trovärdighet',
        d: 'Kunderna litar på plattformar som har de senaste produkterna och korrekta uppgifter.',
      },
      {
        t: 'Fördelar för SEO',
        d: 'Nya och välbeskrivna produkter förbättrar synligheten i sökresultaten.',
      },
      {
        t: 'Bättre försäljningsdata',
        d: 'Korrekt produktinformation hjälper dig att förstå trenderna.',
      },
    ],
    edgeTitle: 'Vad som skiljer Verkkolynx',
    edge: [
      'Taxonomi, produktdata och prissättning från ett team som också kan bygga verktygen och integrationerna kring dem.',
      'Databaserade beslut: analysen styr prissättning, sortiment och lager.',
      'Automation minskar det manuella arbetet i underhållet av produktinformation.',
    ],
    extraTitle: 'Vid behov också',
    extra: [
      'E-handelsfunktioner till en befintlig webbplats: varukorgar, betalningar, lagerhantering och kundkonton',
      'Innehållsproduktion för produktbeskrivningar och marknadsföringsmaterial',
      'Betalningssäkerhet och hänsyn till PCI DSS-kraven på e-handelsplattformar',
      'Produktrekommendationer, filtrering och jämförelsefunktioner',
      'Lagersignaler som stöd för prissättning och sortiment',
      'Operativa verktyg för den dagliga driften av webbutiken',
    ],
    bridge: [
      {
        text: 'Behöver du ett internt verktyg för produkthantering eller automation?',
        to: 'software',
      },
      { text: 'Vill du veta vad din försäljningsdata berättar?', to: 'analytics' },
    ],
    related: ['software', 'analytics', 'web'],
    ctaTitle: 'Vad tar mest tid i din webbutik?',
    ctaText:
      'Berätta vad som underhålls för hand i din webbutik eller vad som inte fungerar. Vi säger vad som går att optimera och vad som lönar sig att bygga.',
    meta: {
      title: 'E-handelssystem och optimering',
      description:
        'Produktinformationsarkitektur, taxonomi, prissättning, sökning, rekommendationer, marknadsplatsdata och integrationer. E-handelssystem och optimering från Tammerfors, Finland.',
    },
  },
  {
    key: 'web',
    n: '04',
    name: 'Webbplatser och digitala upplevelser',
    nav: 'Webbplatser och digitala upplevelser',
    line: 'Företagssidor, webbutikens gränssnitt och innehållsplattformar.',
    summary:
      'Vi planerar och bygger publika webbplatser och gränssnitt som är snabba, tillgängliga och läsbara för sökmotorer.',
    tags: [
      'Företagswebbplatser',
      'Flerspråkiga webbplatser',
      'Landningssidor',
      'Webbutikens gränssnitt',
      'Tillgänglighet',
      'Prestanda',
    ],
    photo: 'finlayson',
    heroTitle: 'Webbplatser som fungerar och går att hitta.',
    lede: 'Vi planerar och bygger företagswebbplatser, tjänste- och informationstunga webbplatser, flerspråkiga webbplatser, landningssidor och vid behov webbutikens gränssnitt. Webbplatserna fungerar på alla enheter, är tillgängliga och läsbara för sökmotorer.',
    intro: [
      'En webbplats är det första kunden ser. Vi förenar datadriven design, förståelse för användarnas beteende och teknisk kvalitet.',
      'Vi bygger webbplatsen enligt Googles E-E-A-T-principer (erfarenhet, expertis, auktoritet, trovärdighet) så att den förmedlar trovärdighet.',
    ],
    problemsTitle: 'Vad en webbplatsförnyelse ger svar på',
    problems: [
      {
        t: 'Webbplatsen ser bra ut men ger inget resultat',
        d: 'Strukturen leder inte besökaren mot handling.',
      },
      {
        t: 'Upplevelsen är sämre i mobilen',
        d: 'Webbplatsen fungerar inte ordentligt på alla enheter.',
      },
      {
        t: 'Webbplatsen är långsam eller föråldrad',
        d: 'Användbarheten, prestandan eller utseendet behöver uppdateras.',
      },
      {
        t: 'Webbplatsen syns inte i sökresultaten',
        d: 'Sökmotoroptimering beaktades inte när webbplatsen byggdes.',
      },
    ],
    capabilitiesTitle: 'Vad vi bygger',
    capabilities: [
      {
        t: 'Företagswebbplatser och innehållsplattformar',
        d: 'Tydlig struktur, tydligt innehåll och enkel hantering som stödjer företagets mål.',
      },
      {
        t: 'Webbutikens gränssnitt',
        d: 'Gränssnitt som leder kunden mot ett köpbeslut.',
      },
      {
        t: 'Kampanj- och landningssidor',
        d: 'Riktade sidor för ett visst syfte.',
        ex: 'Att lyfta fram kategorier med hög efterfrågan eller landningssidor som anpassas efter kundernas behov.',
      },
      {
        t: 'UX och konvertering',
        d: 'Vi analyserar användarnas beteende och skapar tydliga strukturer som förbättrar användarupplevelsen och gör kundresan smidigare.',
      },
      {
        t: 'Responsivitet och tillgänglighet',
        d: 'Webbplatsen fungerar på dator, surfplatta och telefon. Målet är tillgänglighet enligt WCAG-riktlinjerna.',
      },
      {
        t: 'Prestanda och sökmotorvänlig struktur',
        d: 'Snabba sidor och en teknisk struktur som från första början är redo för sökmotoroptimering.',
      },
    ],
    outcomesTitle: 'Vad webbplatsen ger',
    outcomes: [
      { t: 'Förtroende', d: 'Trovärdighet som bygger på E-E-A-T-principerna.' },
      {
        t: 'Konvertering',
        d: 'Tydliga, användarcentrerade lösningar hjälper till att göra besökare till kunder.',
      },
      { t: 'Engagemang', d: 'Smidiga upplevelser som får användarna att komma tillbaka.' },
      { t: 'Skalbarhet', d: 'En plattform som klarar mer innehåll och mer trafik.' },
    ],
    edgeTitle: 'Vad som skiljer Verkkolynx',
    edge: [
      'Webbdesign, e-handelskompetens och data i samma team.',
      'När en webbplats behöver programlogik, inloggning eller integrationer ingår programutveckling i samma team.',
      'En plattform som kan byggas ut i takt med behoven.',
    ],
    extraTitle: 'I praktiken',
    extra: [
      'Plattformar: WordPress, Shopify, Magento och skräddarsydda system; vi rekommenderar det som passar dina behov',
      'Flerspråkighet: finska och engelska, franska på begäran, samt sökmotoroptimering för varje språk',
      'Förnyelser, flytt till en ny plattform och underhåll efter lanseringen',
      'Tredjepartstjänster: betalningar, sociala medier och analysverktyg',
      'Webbhotell erbjuder vi inte själva, men vi hjälper dig att välja leverantör och ta i bruk professionell e-post',
      'Företags- och tjänstewebbplatser samt informationstunga webbplatser där innehållsstrukturen är viktig',
      'Skräddarsydda interaktiva funktioner, integrationer och analys',
      'Interna portaler vid behov',
    ],
    bridge: [{ text: 'Behöver du ett större system än en webbplats?', to: 'software' }],
    related: ['software', 'marketing', 'ecommerce'],
    ctaTitle: 'Vad ska webbplatsen åstadkomma?',
    ctaText:
      'Berätta vad du bygger eller förnyar. Vi föreslår struktur, teknisk lösning och tidsplan.',
    meta: {
      title: 'Webbplatser och digitala upplevelser',
      description:
        'Företagswebbplatser, flerspråkiga och informationstunga webbplatser, landningssidor och webbutikens gränssnitt: snabba, tillgängliga och sökmotorvänliga. Verkkolynx, Tammerfors.',
    },
  },
  {
    key: 'marketing',
    n: '05',
    name: 'Marknadsföring och SEO',
    nav: 'Marknadsföring och SEO',
    line: 'Synlighet i sökmotorer, kampanjer och innehåll.',
    summary:
      'Vi kompletterar de tekniska lösningarna med synlighet: sökmotoroptimering, riktade kampanjer och innehåll vars effekt mäts.',
    tags: [
      'Teknisk SEO och innehålls-SEO',
      'Innehållsstrategi',
      'Betalda kampanjer',
      'E-post och livscykelkommunikation',
      'Mätning och rapportering',
    ],
    photo: 'nasinneula',
    heroTitle: 'Synlighet för rätt personer.',
    lede: 'Vi kombinerar sökmotoroptimering, riktade kampanjer och innehåll, så att ditt företag hittas i rätt stund och effekten går att mäta.',
    intro: [
      'Marknadsföring och SEO görs i samma team, och utifrån samma data, som våra övriga tjänster.',
      'Det handlar inte bara om klick, utan om att göra besökare till kunder.',
    ],
    problemsTitle: 'Vad marknadsföring och SEO ger svar på',
    problems: [
      {
        t: 'Webbplatsen syns inte i sökresultaten',
        d: 'De rätta nyckelorden och innehållet saknas.',
      },
      {
        t: 'Kampanjerna är inte riktade',
        d: 'Betald synlighet når inte rätt målgrupp.',
      },
      {
        t: 'Innehållet är fyllnad',
        d: 'Texterna saknar de detaljer som målgruppen faktiskt har nytta av.',
      },
      {
        t: 'Effekten syns inte i siffrorna',
        d: 'Resultaten mäts inte, så verksamheten går inte att förbättra.',
      },
    ],
    capabilitiesTitle: 'Så görs arbetet',
    capabilities: [
      {
        t: 'Sökmotoroptimering (SEO)',
        d: 'Nyckelords- och sökintentionsanalys, teknisk SEO, optimering av enskilda sidor, innehållsarkitektur, metadata, strukturerad data och intern länkning.',
        ex: 'Till exempel ett tjänsteföretags webbplats där varje tjänst har en egen sida som motsvarar en sökintention.',
      },
      {
        t: 'Riktade digitala kampanjer',
        d: 'Betald sökning och betalda sociala medier: kampanjstruktur, målgruppssegmentering och löpande testning mot dina mål.',
        ex: 'Till exempel lansering av en ny tjänst eller produkt för olika målgruppssegment.',
      },
      {
        t: 'Innehållsmarknadsföring',
        d: 'Innehållsstrategi, landningssidor och konverteringsinriktat innehåll med grund i sökdata samt produkt- eller kundmaterial: artiklar, jämförelser och guider.',
      },
      {
        t: 'E-postmarknadsföring',
        d: 'E-post och livscykelkommunikation: segmentering, övergivna varukorgar, säsongskampanjer och kundengagemang.',
      },
      {
        t: 'Mätning, testning och rapportering',
        d: 'Uppföljning, konverteringsmätning, A/B-tester och bevakning av synligheten i sökmotorer, vilket ger regelbundna rapporter och förbättringsförslag.',
      },
    ],
    outcomesTitle: 'Varför synlighet är viktig',
    outcomes: [
      {
        t: 'Trovärdighet',
        d: 'Företag som placerar sig bra i sökresultaten uppfattas som pålitliga.',
      },
      {
        t: 'Leads av högre kvalitet',
        d: 'Bättre synlighet ger din webbplats mer passande besökare.',
      },
      {
        t: 'Hållbarhet',
        d: 'Organisk synlighet håller längre än betalda kampanjer.',
      },
    ],
    edgeTitle: 'Vad som skiljer Verkkolynx',
    edge: [
      'Analys, webbplats och innehåll i samma team: sökdata, användardata och produktdata styr samma beslut. Vi har också erfarenhet av stora datamaterial om sportprodukter.',
      'SEO är en del av den tekniska strukturen: webbplatsen, produktdatan och innehållet planeras tillsammans.',
      'Vi mäter det som påverkar verksamheten och optimerar fortlöpande.',
    ],
    extraTitle: 'I praktiken',
    extra: [
      'Flerspråkig SEO på finska och engelska, franska på begäran, samt lokal synlighet',
      'Betalda kampanjer på Google Ads, Facebook Ads och LinkedIn Ads',
      'Marknadsföring i sociala medier, influencersamarbeten och varumärkesstrategi',
      'Regelbundna rapporter: trafik, konverteringar, klick och engagemang',
      'Innehållsarkitektur, metadata och strukturerad data',
      'Bevakning och testning av synligheten i sökmotorer',
    ],
    bridge: [{ text: 'Behöver du automatisera rapportering eller datainsamling?', to: 'software' }],
    related: ['web', 'analytics', 'ecommerce'],
    ctaTitle: 'Hittas ditt företag vid rätt sökningar?',
    ctaText:
      'Berätta vem du vill nå och var. Vi går igenom nuläget och föreslår vad som är bäst att göra först.',
    meta: {
      title: 'Marknadsföring och SEO',
      description:
        'Teknisk SEO, innehållsstrategi, flerspråkig och lokal SEO, betalda kampanjer, e-post och mätning. Datadriven marknadsföring från Verkkolynx, Tammerfors.',
    },
  },
  {
    key: 'sole',
    n: '+',
    audience: true,
    name: 'Tjänster för egenföretagare',
    nav: 'Tjänster för egenföretagare',
    line: 'Webbplatser, synlighet och små verktyg.',
    summary:
      'Prisvärda och personliga tjänster för egenföretagare: webbplatser och webbutiker, rapportering och analys, automation och integrationer, innehåll, SEO och marknadsföring samt rådgivning.',
    tags: [
      'Webbplatser och webbutiker',
      'Rapportering',
      'Automation och integrationer',
      'SEO och innehåll',
      'Rådgivning',
    ],
    photo: 'lakePortrait',
    heroTitle: 'Tjänster som anpassas efter dig.',
    lede: 'Som egenföretagare har du fullt upp, och det finns sällan tid över för synlighet på nätet eller rutinuppgifter. Vi erbjuder personlig och prisvärd service utifrån just dina behov.',
    intro: [
      'För en egenföretagare spelar priset roll. Vi anpassar arbetet så att det förblir prisvärt.',
      'Ett litet företag har mycket praktiskt arbete att göra: webbplatser och webbutiker, rapportering och analys, automation och integrationer, innehåll, SEO och marknadsföring samt att lösa tekniska problem och förbättra processer. När en upprepad arbetsuppgift tar för mycket tid kan vi också bygga ett litet verktyg eller en automation.',
    ],
    problemsTitle: 'Välbekanta utmaningar',
    problems: [
      {
        t: 'Tiden räcker inte till',
        d: 'Det finns för lite tid att leta efter nya möjligheter och bygga upp synlighet på nätet.',
      },
      {
        t: 'Rutinerna äter arbetstid',
        d: 'Samma manuella arbete upprepas vecka efter vecka.',
      },
      {
        t: 'Tjänsterna känns dyra',
        d: 'De tjänster som verkligen för ett företag framåt är ofta för dyra för en småföretagare.',
      },
      {
        t: 'Den internationella synligheten saknas',
        d: 'Att nå finländska, kanadensiska eller amerikanska kunder kräver rätt språk och rätt nyckelord.',
      },
    ],
    capabilitiesTitle: 'Vad vi kan erbjuda dig',
    capabilities: [
      {
        t: 'Webbplatser och webbutiker',
        d: 'En webbplats eller webbutik som ser bra ut och fungerar.',
        ex: 'En egenföretagare som arbetar med digitalt innehåll eller produkter får en webbutik som lyfter fram produkterna.',
      },
      {
        t: 'Sökmotoroptimering (SEO)',
        d: 'De rätta nyckelorden och effektiva strategier, oavsett om målet är finländska, kanadensiska eller amerikanska kunder.',
        ex: 'Synlighet vid sökningar som ”digitala produkter i Finland”.',
      },
      {
        t: 'Flerspråkigt innehåll',
        d: 'Sakkunnig innehållsproduktion på finska och engelska, och på franska på begäran.',
        ex: 'Till exempel en flerspråkig tjänstewebbplats, bloggartiklar eller produktpresentationer.',
      },
      {
        t: 'Små verktyg och automationer',
        d: 'Vi kan bygga ett litet verktyg eller en automation när en upprepad arbetsuppgift tar för mycket tid.',
        ex: 'Ett program som ersätter ett kalkylblad, eller automatisk överföring av uppgifter från ett system till ett annat.',
      },
      {
        t: 'Varumärke och digital synlighet',
        d: 'Ett starkt varumärke, hantering av sociala medier och ett attraktivt domännamn.',
      },
      {
        t: 'Personlig rådgivning och handledning',
        d: 'Individuellt arbete med en expert är kärnan i den här tjänsten: vi vägleder dig och tar fram lösningar för just dina behov.',
      },
      {
        t: 'Rapportering och analys',
        d: 'En tydlig sammanställning av försäljning, besökare eller kostnader utan manuellt kalkylarbete.',
        ex: 'Till exempel en veckorapport över försäljning och besökare på webbplatsen.',
      },
      {
        t: 'Integrationer och processförbättring',
        d: 'Vi kopplar ihop de system du använder och tar bort onödiga arbetsmoment.',
        ex: 'Till exempel order, fakturering och lager i samma informationsflöde.',
      },
    ],
    outcomesTitle: 'Varför välja Verkkolynx',
    outcomes: [
      { t: 'Prisvärdhet', d: 'Prisvärda lösningar som anpassas efter dina behov.' },
      { t: 'Skräddarsytt', d: 'Tjänsterna utformas utifrån dina mål.' },
      {
        t: 'Kompetens',
        d: 'Stark kompetens inom programvara, SEO och data i kombination med ett internationellt perspektiv.',
      },
      { t: 'Personlig prägel', d: 'Vi ger dig råd och gör arbetet tillsammans med dig.' },
    ],
    edgeTitle: 'Varför våra tjänster är prisvärda',
    edge: [
      'Medlemmarna i vårt team har flera roller: där vissa byråer anställer separata specialister för data, utveckling och webbdesign har vi kompetens inom alla de här områdena.',
      'När kompetensen finns i samma team går genomförandet snabbare och blir mer enhetligt.',
    ],
    bridge: [{ text: 'Behöver du ett skräddarsytt verktyg?', to: 'software' }],
    related: ['web', 'software', 'marketing'],
    ctaTitle: 'Berätta var du behöver hjälp.',
    ctaText:
      'Berätta om din situation, så föreslår vi en lösning som passar företagets storlek och budget.',
    meta: {
      title: 'Tjänster för egenföretagare',
      description:
        'Prisvärda, skräddarsydda tjänster för egenföretagare: webbplatser, SEO, flerspråkigt innehåll, små verktyg och automationer samt personlig rådgivning.',
    },
  },
];
