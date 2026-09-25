import type { FaqCategory, FaqItem } from './types';

const i = (id: string, q: string, a: string | string[], list?: string[]): FaqItem => ({
  id,
  q,
  a: Array.isArray(a) ? a : [a],
  ...(list ? { list } : {}),
});

export const faqSv: FaqCategory[] = [
  {
    id: 'allmant',
    title: 'Allmänt',
    items: [
      i(
        'tjanster',
        'Vilka tjänster erbjuder Verkkolynx?',
        'Verkkolynx Ratkaisut Oy erbjuder fem kompetensområden:',
        [
          'Programutveckling och automation: interna verktyg, webbprogram, CMS-system, integrationer och automationer.',
          'Dataanalys och insikter: analyser, prognoser och beslutsverktyg.',
          'E-handelssystem och optimering: produktdata, taxonomi, prissättningsalgoritmer, sökning och integrationer.',
          'Webbplatser och digitala upplevelser: företagswebbplatser, webbutikens gränssnitt och kampanjsidor.',
          'Marknadsföring och SEO: sökmotoroptimering, kampanjer och innehåll.',
        ],
      ),
      i(
        'egenforetagare',
        'Vilka tjänster erbjuder Verkkolynx egenföretagare?',
        'Våra tjänster anpassas efter en egenföretagares behov och budget. Hit hör:',
        [
          'Webbplatser och webbutiker: prisvärda och lättanvända lösningar.',
          'Sökmotoroptimering (SEO) för de nyckelord som är viktiga.',
          'Flerspråkig innehållsproduktion på finska och engelska, och på franska på begäran.',
          'Varumärke och digital närvaro: kanaler i sociala medier, domännamn och uppbyggnad av varumärket.',
          'Små verktyg och automationer när upprepat arbete tar för mycket tid.',
          'Personlig rådgivning och stöd.',
        ],
      ),
      i('plats', 'Var finns Verkkolynx?', 'Verkkolynx verkar från Tammerfors i Finland.'),
      i(
        'kontakt',
        'Hur kontaktar jag Verkkolynx?',
        'Du når oss per e-post på asiakaspalvelu@verkkolynx.fi.',
      ),
      i(
        'komma-igang',
        'Hur kommer jag igång med Verkkolynx?',
        'Skicka e-post till asiakaspalvelu@verkkolynx.fi, så bokar vi in ett första konsultationsmöte.',
      ),
      i(
        'vardering',
        'Vilka är Verkkolynx värderingar?',
        'Våra värderingar är finländsk stolthet med ett globalt perspektiv, precision som ger resultat, ingen lämnas efter, förändring skapar möjligheter samt precision möter individualitet. Du kan läsa mer på sidan Om oss.',
      ),
      i(
        'prisvardhet',
        'Varför är Verkkolynx tjänster prisvärda?',
        'Medlemmarna i vårt team har bred kompetens. Där vissa byråer anställer separata specialister för dataanalys, varumärke och webbdesign har vi erfarenhet av alla de här områdena. När kompetensen finns i samma team går genomförandet snabbare och blir mer enhetligt.',
      ),
      i(
        'foretagstyper',
        'Vilka slags företag passar Verkkolynx tjänster för?',
        'Företag av alla storlekar som vill förbättra sin digitala synlighet, optimera sin e-handel eller använda dataanalys för att växa.',
      ),
      i(
        'branscher',
        'Vilka branscher är Verkkolynx specialiserat på?',
        'Våra tjänster passar många slags företag och branscher: tjänsteföretag, webbutiker och informationstunga webbplatser samt utveckling av interna processer och rapportering. Erfarenheten är starkast inom e-handel, detaljhandel, sportdata och digitala tjänster, och sporthandel på nätet är ett av våra djupaste kompetensområden.',
      ),
      i(
        'utomlands',
        'Kan Verkkolynx arbeta med företag utanför Finland?',
        'Ja. Vi har erfarenhet av att arbeta med internationella kunder. Våra kunder och samarbetspartner finns i Finland, Kanada, USA och Europa, och vi känner till särdragen i de här områdena.',
      ),
      i(
        'historia',
        'Vad är Verkkolynx historia?',
        'Verkkolynx grundades 2024 med visionen att förena avancerad dataanalys med praktiska affärslösningar. Vårt team består av experter inom dataanalys, programutveckling, webbutveckling och digital marknadsföring.',
      ),
      i(
        'team',
        'Vilka står bakom Verkkolynx?',
        'I vårt team finns experter med bakgrund inom matematik, statistik, datateknik, idrott och företagande.',
      ),
      i(
        'namn',
        'Vad betyder namnet ”Verkkolynx”?',
        '”Verkko” betyder nät eller webben på finska, och ”lynx” (lodjur, på finska ilves) symboliserar smidighet och skarp syn. Tillsammans speglar namnet vår förmåga att hitta rätt i datans komplexa nätverk.',
      ),
      i(
        'uppdrag',
        'Vilket är Verkkolynx uppdrag?',
        'Vi hjälper företag av alla storlekar att göra data till praktiska insikter och praktiska verktyg.',
      ),
      i(
        'tider',
        'När är Verkkolynx tillgängligt?',
        'Vår arbetstid är måndag till fredag kl. 9–17 finländsk tid. Vi bokar möten även utanför de tiderna, så att vi kan betjäna kunder i Kanada och USA.',
      ),
    ],
  },
  {
    id: 'programvara',
    title: 'Programutveckling och automation',
    items: [
      i(
        'vilken-programvara',
        'Vilken programvara kan Verkkolynx bygga?',
        'Vi kan bygga skräddarsydd programvara kring ert arbetsflöde. Exempel:',
        [
          'Interna verktyg och administrationsgränssnitt',
          'Webbprogram och kund- eller personalportaler',
          'Automationer och automatiserade dataflöden',
          'Skräddarsydda CMS- och datahanteringssystem',
          'API-integrationer och kopplingar mellan system',
          'Beslutsverktyg: prissättning, prognoser, sökning, rekommendationer och poängsättning',
        ],
      ),
      i(
        'interna-verktyg',
        'Vad menas med interna verktyg?',
        'Program och gränssnitt som medarbetarna använder för att hantera data, produkter, innehåll, kunder eller arbetsflöden. De ersätter ofta kalkylblad och manuellt arbete.',
      ),
      i(
        'program-eller-webbplats',
        'Vad är skillnaden mellan ett webbprogram och en webbplats?',
        'En webbplats presenterar innehåll för besökarna. Ett webbprogram har programlogik, inloggning, databehandling och arbetsflöden och används för att få arbete gjort. Publika webbplatser hör till tjänsten Webbplatser och digitala upplevelser.',
      ),
      i(
        'automation',
        'Vad kan automatiseras?',
        'Upprepade, regelstyrda arbetsmoment, till exempel att flytta data mellan system, hantera produktuppgifter, rapportera och skicka aviseringar. Vi bedömer först om det lönar sig att automatisera ett moment.',
      ),
      i(
        'eget-cms',
        'När behövs ett skräddarsytt CMS?',
        'När ett vanligt CMS för webbplatser inte passar för hantering av strukturerad information, till exempel produkt- eller katalogdata, komplicerade behörigheter eller en administrationsvy över en befintlig databas.',
      ),
      i(
        'systemintegrationer',
        'Går det att koppla ihop befintliga system?',
        'Ja. Vi kopplar ihop e-handelsplattformar, interna system och tredjepartstjänster, till exempel betalningssystem, plattformar för sociala medier och analysverktyg, via API:er, databaser och filer.',
      ),
      i(
        'dataprogram',
        'Kan en analys göras till ett program?',
        'Ja, när analysen behövs återkommande. Den kan bli ett prognosverktyg, en poängmodell, en uppföljningsvy eller ett interaktivt analysprogram. Alla analyser behöver inte bli programvara: ofta räcker en tydlig rapport.',
      ),
      i(
        'utvecklingsprocess',
        'Hur går programutvecklingen till?',
        'I det inledande samtalet och genomgången av arbetsflödet reder vi ut målen. Sedan planerar vi datamodellen, logiken och gränssnittet, bygger och testar i etapper och tar lösningen i bruk. Vi arbetar i etapper, så du ser hur arbetet framskrider och kan ge respons längs vägen.',
      ),
      i(
        'agande-och-underhall',
        'Vem äger programvaran, och går den att underhålla och vidareutveckla?',
        'Äganderätten och nyttjanderätten avtalas projektvis. Vi levererar dokumentation och utbildar ert team, och erbjuder underhåll och vidareutveckling.',
      ),
      i(
        'omfattning-och-sakerhet',
        'Hur omfattande system kan ni bygga, och hur sköts datasäkerheten?',
        'Från ett litet verktyg för en enda uppgift till ett omfattande system som utvecklas i etapper. Datasäkerhet och behörigheter, till exempel roller och inloggning, planeras in från början, och vi följer säkra kodningsmetoder och GDPR-kraven.',
      ),
    ],
  },
  {
    id: 'dataanalys',
    title: 'Dataanalys',
    items: [
      i(
        'analysens-nytta',
        'Vilken nytta har mitt företag av dataanalystjänster?',
        'Våra tjänster bygger på avancerad kompetens inom matematik och statistik. Vi letar efter dolda möjligheter, optimerar prestanda och hjälper dig att fatta välgrundade beslut.',
      ),
      i(
        'e-handelsoptimering',
        'Vad innebär optimering av e-handel hos Verkkolynx?',
        'Optimering av e-handel omfattar utveckling av produktkategorier, optimering av produktinformation och skapande av dynamiska prissättningsalgoritmer. Målet är att göra kundresan smidigare, förbättra sökfunktionerna och stödja försäljningen.',
      ),
      i(
        'lite-data',
        'Jag har inte mycket data. Kan ni hjälpa mig att få mer?',
        'Ja. Vi kan bygga datamaterial som är anpassade efter dina behov genom att samla in, ordna och visualisera data. Det går att göra meningsfulla iakttagelser även utifrån en liten början.',
      ),
      i(
        'varfor-data',
        'Varför är data viktig?',
        'Välordnad data stöder beslutsfattandet, förenklar bokföringen och företagsledningen och förbättrar kundupplevelsen. Strukturerad data är grunden för pålitliga rapporter och automation.',
      ),
      i(
        'prediktiv',
        'Hur förhåller sig Verkkolynx till prediktiv analys?',
        'Vi utvecklar och använder statistiska modeller och maskininlärningsmetoder för att förutse trender, identifiera risker och hitta tillväxtmöjligheter.',
      ),
      i(
        'dynamisk-prissattning',
        'Vad är dynamisk prissättning, och hur kan Verkkolynx genomföra den?',
        'Dynamisk prissättning justerar priserna på produkter eller tjänster i realtid utifrån efterfrågan, konkurrens och marknadstrender. Vi utvecklar algoritmer som är anpassade efter ditt företag, så att prissättningen förblir konkurrenskraftig och lönsam.',
      ),
      i(
        'datakvalitet',
        'Kan Verkkolynx förbättra kvaliteten på min data?',
        'Ja. Vi förbättrar datakvaliteten genom att rensa, ordna och standardisera datamaterial, så att din data är korrekt, tillförlitlig och redo att ligga till grund för beslut.',
      ),
      i(
        'kundbeteende',
        'Hur kan Verkkolynx hjälpa mig att förstå mina kunders beteende?',
        'Vi analyserar kundbeteende med segmenteringsmetoder, statistiska modeller och trendanalys. Vi identifierar mönster i köpvanor, preferenser och engagemang som kan användas för att utveckla kundlojalitet och försäljning.',
      ),
      i(
        'realtid',
        'Erbjuder Verkkolynx analys i realtid?',
        'Ja. Vi genomför analyslösningar i realtid som låter dig följa centrala nyckeltal, till exempel för försäljning, lager eller webbplatsens prestanda.',
      ),
      i(
        'analysens-branscher',
        'Vilka branscher har mest nytta av era dataanalystjänster?',
        'Analys passar vilken bransch som helst som har data om försäljning, kunder, lager eller processer. Erfarenheten är starkast inom e-handel, detaljhandel, sportdata och digitala tjänster.',
      ),
      i(
        'ai',
        'Kan Verkkolynx hjälpa till med AI-baserad analys?',
        'Ja. Vid behov använder vi maskininlärning och AI för prognoser, rekommendationer och automation av processer. Metoden väljs efter uppgiften.',
      ),
      i(
        'stora-datamangder',
        'Hur hanterar Verkkolynx stora datamängder?',
        'Vi har erfarenhet av att hantera och analysera stora datamängder, bland annat med distribuerad beräkning och molnbaserade lösningar.',
      ),
      i(
        'datans-sakerhet',
        'Hur säker är min data i era analystjänster?',
        'Datasäkerhet beaktas i våra analystjänster från början. Vi skyddar din data med lämpliga åtgärder, till exempel begränsad åtkomst och, vid behov, kryptering.',
      ),
      i(
        'analysutbildning',
        'Erbjuder Verkkolynx utbildning i verktyg för dataanalys?',
        'Ja. Med utbildning lär sig ditt team använda och tolka verktygen för dataanalys och fatta databaserade beslut på egen hand.',
      ),
    ],
  },
  {
    id: 'webbplatser',
    title: 'Webbplatser',
    items: [
      i(
        'webb-skillnad',
        'Hur skiljer sig era tjänster för webbdesign och webbutveckling från andras?',
        'Vi fokuserar på datadriven design, så att användarupplevelsen och funktionaliteten stödjer mätbara mål. Vi anpassar webbplatserna efter dina behov, oavsett om det gäller att lansera en ny plattform eller uppdatera en befintlig.',
      ),
      i(
        'flersprakighet',
        'Erbjuder Verkkolynx flerspråkig webbdesign och SEO?',
        'Ja. Vi utformar flerspråkiga webbplatser och optimerar dem för sökmotorer i olika regioner och på olika språk. Våra huvudspråk är finska och engelska, och på franska arbetar vi på begäran.',
      ),
      i(
        'plattformar',
        'Vilka plattformar arbetar Verkkolynx med?',
        'Vi arbetar bland annat med WordPress, Shopify, Magento och skräddarsydda system. Vi ser till att den valda plattformen passar dina behov och krav på skalbarhet.',
      ),
      i(
        'fornyelse',
        'Kan Verkkolynx förnya min befintliga webbplats?',
        'Ja. Vi uppdaterar och förbättrar befintliga webbplatser när det gäller funktionalitet, användarupplevelse och utseende, oavsett om det gäller en liten uppdatering eller en fullständig förnyelse.',
      ),
      i(
        'tillganglighet',
        'Hur ser ni till att webbplatser är användarvänliga och tillgängliga?',
        'Vi betonar användarupplevelse och tillgänglighet i designprocessen. Målet är tillgänglighet enligt WCAG (Web Content Accessibility Guidelines).',
      ),
      i(
        'mobil',
        'Erbjuder Verkkolynx mobilvänlig webbdesign?',
        'Ja. Varje webbplats vi bygger optimeras för mobila enheter med responsiv design, så att den fungerar på smarttelefoner, surfplattor och datorer.',
      ),
      i(
        'e-handelsfunktioner',
        'Kan Verkkolynx lägga till e-handelsfunktioner på min webbplats?',
        'Ja. Vi genomför e-handelsfunktioner från varukorgar och betalningssystem till lagerhantering och kundkonton.',
      ),
      i(
        'skraddarsytt-eller-mall',
        'Erbjuder ni skräddarsydd webbutveckling eller använder ni färdiga mallar?',
        'Båda, beroende på dina behov och din budget. Vi kan skapa en helt skräddarsydd webbplats från grunden eller anpassa befintliga mallar efter ditt varumärke och dina krav.',
      ),
      i(
        'webbplatsens-sakerhet',
        'Hur säkerställer Verkkolynx webbplatsers säkerhet?',
        'Vi tillämpar gängse branschåtgärder, till exempel SSL-certifikat, säkra kodningsmetoder och regelbundna uppdateringar. Underhåll och uppföljning avtalas efter behov.',
      ),
      i(
        'underhall',
        'Kan Verkkolynx hjälpa till med underhåll och uppdateringar efter lanseringen?',
        'Ja. Löpande stöd och underhåll håller din webbplats aktuell, säker och välfungerande. Det omfattar uppdatering av innehåll, teknisk support och nya funktioner efter behov.',
      ),
      i(
        'byggtid',
        'Hur lång tid tar det att bygga en webbplats?',
        'Tidsplanen beror på projektets komplexitet. Enkla webbplatser kan bli klara på några veckor, mer komplexa kan ta flera månader. I planeringsskedet lämnar vi en detaljerad tidsplan.',
      ),
      i(
        'webbprocess',
        'Hur driver Verkkolynx projekt för webbutveckling?',
        'Processen börjar med ett inledande samtal där vi reder ut dina mål. Sedan gör vi wireframes och skisser av användargränssnittet. Efter ditt godkännande går vi vidare till utveckling, testning och lansering. Vi håller dig med i varje skede.',
      ),
      i(
        'webbhotell',
        'Erbjuder Verkkolynx webbhotell och domäntjänster?',
        'Vi erbjuder inte webbhotell själva, men vi hjälper dig att välja en pålitlig leverantör och registrera domännamn som bäst representerar ditt varumärke. Vi ordnar också professionell e-post (till exempel Google Workspace).',
      ),
      i(
        'webbinnehall',
        'Hur hanterar Verkkolynx innehållsproduktion för webbplatser?',
        'Vi erbjuder innehållsproduktion, till exempel copywriting och multimedia, på finska och engelska, och på franska på begäran.',
      ),
      i(
        'cms',
        'Vilka innehållshanteringssystem (CMS) rekommenderar Verkkolynx?',
        'Vi arbetar bland annat med WordPress, Drupal och Joomla. Vi rekommenderar det system som bäst passar dina behov utifrån skalbarhet, användarvänlighet och funktionalitet.',
      ),
      i(
        'seo-i-webb',
        'Ingår sökmotoroptimering i webbutvecklingen?',
        'Ja. Teknisk SEO ingår i utvecklingen av webbplatsen från början, så webbplatsen är redo för sökmotorer redan när den lanseras.',
      ),
      i(
        'flytt',
        'Kan Verkkolynx hjälpa till med flytt av en webbplats?',
        'Ja. Vi hjälper till att flytta din webbplats till en ny plattform eller en ny webbhotellsleverantör med minsta möjliga avbrott och ser till att data och funktioner bevaras.',
      ),
    ],
  },
  {
    id: 'marknadsforing-seo',
    title: 'Marknadsföring och SEO',
    items: [
      i(
        'synlighet',
        'Hur förbättrar era tjänster för marknadsföring och SEO mitt företags synlighet?',
        'Vi utformar riktade marknadsföringsstrategier och tillämpar SEO-metoder som förbättrar synligheten i sökmotorerna, ger din webbplats passande besökare och stödjer konverteringen.',
      ),
      i(
        'sociala-medier',
        'Erbjuder Verkkolynx marknadsföring i sociala medier?',
        'Ja. Vi planerar och sköter innehåll och kampanjer i sociala medier för att stärka ditt varumärkes synlighet på nätet.',
      ),
      i(
        'innehallsmarknadsforing',
        'Hur förhåller sig Verkkolynx till innehållsmarknadsföring och innehållsproduktion?',
        'Vi utvecklar innehållsstrategier och producerar blogginlägg, artiklar, infografik, videor och innehåll för sociala medier. Innehållet skrivs med ditt varumärkes röst för din målgrupp och stödjer SEO.',
      ),
      i(
        'betalda-kampanjer',
        'Kan Verkkolynx hjälpa till med betalda annonskampanjer?',
        'Ja. Vi driver kampanjer på plattformar som Google Ads, Facebook Ads och LinkedIn Ads. I arbetet ingår nyckelordsanalys, målgruppsinriktning, skapande av annonser och löpande optimering.',
      ),
      i(
        'matning',
        'Hur mäter Verkkolynx framgången i sina marknadsföringsstrategier?',
        'Vi använder centrala nyckeltal (KPI), till exempel webbplatsens trafik, konverterings- och klickfrekvens samt mått på engagemang. Regelbundna rapporter håller dig uppdaterad.',
      ),
      i(
        'flersprakig-seo',
        'Erbjuder Verkkolynx flerspråkiga SEO-tjänster?',
        'Ja. Vi optimerar din webbplats för olika språk och regioner på finska och engelska, och på franska på begäran.',
      ),
      i(
        'lokal-seo',
        'Kan Verkkolynx förbättra min lokala SEO-synlighet?',
        'Ja. Lokal synlighet omfattar bland annat optimering av företagsprofilen på Google, byggande av lokala kataloger och skapande av regionspecifikt innehåll.',
      ),
      i(
        'marknadsforingens-skillnad',
        'Vad skiljer Verkkolynx marknadsföringsstrategier från andras?',
        'Ett datadrivet arbetssätt. Varje åtgärd anpassas efter din målgrupp och dina affärsmål, och dess effekt mäts.',
      ),
      i(
        'e-post',
        'Erbjuder ni e-postmarknadsföring?',
        'Ja. Vi skapar och driver e-postkampanjer som omfattar utformning av nyhetsbrev, automationsinställningar och analys av resultaten.',
      ),
      i(
        'kampanjanalys',
        'Erbjuder ni analys av marknadsföringskampanjer?',
        'Ja. Vi levererar detaljerade analyser och regelbundna rapporter som bland annat visar engagemangs- och konverteringsfrekvens samt ROI.',
      ),
      i(
        'varumarke',
        'Hur förhåller sig Verkkolynx till varumärkesbyggande och varumärkesstrategi?',
        'Vi hjälper till att utveckla en enhetlig varumärkesstrategi som omfattar identitet, kommunikation och positionering. Det innefattar marknadsundersökningar, konkurrentanalys och framtagning av varumärkesriktlinjer.',
      ),
    ],
  },
  {
    id: 'stod-utbildning',
    title: 'Stöd och utbildning',
    items: [
      i(
        'skraddarsydda-losningar',
        'Hur går Verkkolynx tillväga när det gäller skräddarsydda lösningar för företag?',
        'Vi arbetar nära våra kunder för att förstå deras behov och utmaningar. Lösningarna bygger på data och stödjer dina affärsmål.',
      ),
      i(
        'inte-sport',
        'Jag har ingen sportrelaterad webbutik. Passar Verkkolynx ändå?',
        'Ja. Dataanalys, programutveckling, automation, webbplatser, SEO och e-handel fungerar också inom andra områden, till exempel för tjänsteföretag, informationstunga webbplatser och utveckling av interna processer.',
      ),
      i(
        'resultat',
        'Vilka resultat kan jag förvänta mig?',
        'Resultaten varierar mellan projekten. Typiska mål är bättre prestanda på webbplatsen, ökande trafik och konvertering, en bättre kundupplevelse och smidigare processer i e-handeln. Vi lägger vikt vid mätbara resultat.',
      ),
      i(
        'efter-projektet',
        'Erbjuder Verkkolynx stöd efter att ett projekt är klart?',
        'Ja. Löpande stöd och underhåll omfattar regelbundna uppdateringar av webbplatsen och anpassning av SEO-strategierna till nya trender.',
      ),
      i(
        'teamutbildning',
        'Erbjuder Verkkolynx utbildning för företagets egna team?',
        'Ja. Utbildningsämnen kan till exempel vara tolkning av dataanalys, bästa praxis för e-handel eller hantering av SEO.',
      ),
      i(
        'utbildningens-innehall',
        'Vilken slags utbildning erbjuder Verkkolynx?',
        'Utbildning i användning av verktyg för dataanalys, innehållshantering på webbplatser, bästa praxis för SEO, hantering av sociala medier och strategier för digital marknadsföring. Utbildningen anpassas efter ditt teams behov.',
      ),
      i(
        'teknisk-support',
        'Erbjuder ni teknisk support för de lösningar ni levererar?',
        'Ja. Vi erbjuder teknisk support för de lösningar vi levererar, och problem hanteras så snabbt som möjligt.',
      ),
      i(
        'forandringsledning',
        'Kan Verkkolynx hjälpa till med förändringsledning under införandet?',
        'Ja. Att införa nya system kan vara krävande, så vi erbjuder stöd vid förändringen, bland annat utbildning av personalen och dokumentation av processer.',
      ),
    ],
  },
  {
    id: 'datasakerhet',
    title: 'Datasäkerhet',
    items: [
      i(
        'datasakerhet',
        'Hur säkerställer Verkkolynx datasäkerheten i sina tjänster?',
        'Datasäkerhet beaktas från början. Vi följer bästa praxis i branschen och GDPR-bestämmelserna.',
      ),
      i(
        'sakerhetskopior',
        'Erbjuder Verkkolynx säkerhetskopiering och återställning?',
        'Ja. Säkerhetskopiering och återställning planeras efter projektets behov, så att uppgifterna kan återställas om de går förlorade eller skadas.',
      ),
      i(
        'dataskyddslagar',
        'Hur följer Verkkolynx internationella dataskyddslagar?',
        'Vi är förtrogna med internationella dataskyddsbestämmelser, bland annat GDPR i EU och CCPA i USA.',
      ),
      i(
        'dataintrang',
        'Vilka åtgärder vidtar Verkkolynx för att förhindra dataintrång?',
        'Vi skyddar lösningarna med lämpliga tekniska och organisatoriska åtgärder. Skyddsåtgärderna väljs utifrån projektet och hur känsliga de uppgifter är som behandlas.',
      ),
      i(
        'pci-dss',
        'Har Verkkolynx erfarenhet av PCI DSS-efterlevnad i webbutiker?',
        'Ja. Vi hjälper e-handelsplattformar att beakta PCI DSS-kraven när kortuppgifter hanteras på ett säkert sätt.',
      ),
      i(
        'sakert-kodande',
        'Hur säkerställer ni säkerheten i de webbplatser och program ni bygger?',
        'Vi följer säkra kodningsmetoder och testar lösningarna noggrant. Datasäkerhet beaktas i varje skede av utvecklingen.',
      ),
      i(
        'dataskyddspolicy',
        'Kan Verkkolynx hjälpa till att ta fram en dataskyddspolicy för min webbplats?',
        'Ja. Vi hjälper till att ta fram dataskyddspolicyer och användarvillkor som uppfyller lagkraven och tydligt beskriver hur uppgifter hanteras.',
      ),
      i(
        'behorigheter',
        'Hur hanterar Verkkolynx användarrättigheter och åtkomstkontroll?',
        'Vi utformar åtkomstkontrollen så att bara behöriga personer har tillgång till känsliga uppgifter, till exempel med rollbaserade behörigheter och inloggning. Närmare krav avtalas projektvis.',
      ),
      i(
        'gdpr',
        'Kan Verkkolynx hjälpa till med att uppfylla GDPR?',
        'Ja. Vi hjälper till att anpassa rutinerna för databehandling till GDPR-kraven, bland annat behandlingsprocesser, hantering av samtycken och dokumentation av rutinerna.',
      ),
    ],
  },
  {
    id: 'projektledning',
    title: 'Projektledning',
    items: [
      i(
        'smaforetag',
        'Kan Verkkolynx hjälpa små företag, eller riktar det sig till stora?',
        'Våra tjänster är skalbara och avsedda för företag av alla storlekar. Oavsett om du är ett stort företag eller egenföretagare arbetar vi tillsammans med dig för att nå dina mål.',
      ),
      i(
        'projektets-langd',
        'Hur lång tid tar ett typiskt projekt?',
        'Det varierar med omfattningen. Små uppdrag, till exempel SEO-granskningar, kan ta några veckor, medan förnyelser av webbplatser eller utveckling av algoritmer kan ta flera månader. I planeringsskedet lämnar vi en tydlig tidsplan.',
      ),
      i(
        'prissattning',
        'Hur prissätter och budgeterar Verkkolynx sina projekt?',
        'Priset anpassas efter projektets omfattning. Efter det första konsultationsmötet får du ett förslag med omfattning, tidsplan och pris.',
      ),
      i(
        'skalning',
        'Kan Verkkolynx skala lösningarna när mitt företag växer?',
        'Ja. Vi utformar systemen så att de växer med ditt företag och klarar mer trafik, större datamängder och större operativ komplexitet.',
      ),
      i(
        'metoder',
        'Vilka metoder för projektledning använder Verkkolynx?',
        'Vi arbetar i korta etapper och kommer överens med dig om nästa steg efter hand, så att projektet förblir flexibelt.',
      ),
      i(
        'kommunikation',
        'Hur kommunicerar Verkkolynx under ett projekt?',
        'Vi kommunicerar regelbundet och öppet. Du arbetar direkt med de personer som bygger lösningen, och vi ger lägesrapporter, samlar in respons och svarar på dina frågor per e-post och i videomöten.',
      ),
      i(
        'samarbetsformer',
        'Vilka samarbetsformer finns (till exempel fast pris eller timpris)?',
        'Avtal till fast pris för tydligt definierade projekt och avtal på timbasis för projekt som kräver flexibilitet, samt abonnemangs- och projektbaserade modeller.',
      ),
      i(
        'flera-projekt',
        'Kan Verkkolynx hantera flera projekt samtidigt?',
        'Ja. Resurserna fördelas så att varje projekt får den uppmärksamhet det behöver och tidsplanerna håller.',
      ),
      i(
        'tidsplan-budget',
        'Hur håller projekten tidsplanen och budgeten?',
        'Vi fastställer tydliga tidsplaner och budgetar i planeringsskedet och följer upp framstegen med projektverktyg. Regelbundna kontrollpunkter hjälper oss att snabbt reda ut avvikelser.',
      ),
      i(
        'andrade-behov',
        'Vad händer om mina behov ändras under projektet?',
        'Ett av våra kärnvärden är ”Förändring skapar möjligheter”. Vi diskuterar ändringarna, bedömer effekten på tidsplan och budget och justerar projektplanen så att projektet förblir i linje med dina mål.',
      ),
      i(
        'skalningsstod',
        'Erbjuder Verkkolynx stöd efter ett projekt när det gäller skalbarhet?',
        'Ja. Löpande stöd och underhåll omfattar uppföljning av prestandan, nödvändiga justeringar och uppdateringar när ditt företag växer.',
      ),
      i(
        'internationell-erfarenhet',
        'Hur erfaret är Verkkolynx när det gäller att leda internationella projekt?',
        'Vi har erfarenhet av att leda projekt i olika länder och över tidszoner. Vi samordnar med internationella intressenter och beaktar kulturella skillnader. Våra kunder finns i Finland, Kanada, USA och Europa.',
      ),
      i(
        'teamets-storlek',
        'Hur stort är Verkkolynx team?',
        'Vi är ett litet team med bred kompetens: dataanalys, programutveckling, webbutveckling och digital marknadsföring. I ett litet team arbetar du direkt med dem som gör jobbet.',
      ),
      i(
        'referenser',
        'Kan Verkkolynx lämna referenser?',
        'Referenser och exempel på vårt arbete kan begäras per e-post.',
      ),
      i(
        'dokumentation',
        'Erbjuder ni projektdokumentation och överlämning efter att projektet är klart?',
        'Ja. Vi levererar projektdokumentation och sköter överlämningen med hjälp av utbildning och stöd, så att ditt team kan hantera och underhålla lösningarna.',
      ),
    ],
  },
];
