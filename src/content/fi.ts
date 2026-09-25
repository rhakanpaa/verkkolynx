import type { Dict } from './types';
import { servicesFi } from './fi-services';
import { faqFi } from './fi-faq';
import { privacyFi, termsFi } from './legal-fi';

export const fi: Dict = {
  lang: 'fi',
  htmlLang: 'fi',
  ogLocale: 'fi_FI',
  skip: 'Siirry sisältöön',
  nav: {
    items: [
      { key: 'home', label: 'Etusivu' },
      { key: 'services', label: 'Palvelut' },
      { key: 'why', label: 'Miksi Verkkolynx' },
      { key: 'about', label: 'Meistä' },
      { key: 'faq', label: 'UKK' },
      { key: 'contact', label: 'Ota yhteyttä' },
    ],
    servicesMenuTitle: 'Palvelut',
    allServices: 'Kaikki palvelut',
    contact: 'Ota yhteyttä',
    menu: 'Valikko',
    close: 'Sulje',
    language: 'Kieli',
    primary: 'Päävalikko',
    breadcrumb: 'Polku',
    switchTo: 'Vaihda kieleksi englanti',
  },
  hero: {
    eyebrow: 'Tampere · Suomi',
    title: 'Rakennamme työkalut, jotka tekevät työn.',
    lede: 'Verkkolynx analysoi datan, suunnittelee ratkaisun ja rakentaa ohjelmistot ja automaatiot, joita yrityksesi käyttää.',
    primary: 'Ota yhteyttä',
    secondary: 'Tutustu palveluihin',
    mapLabel: 'Osaamiskartta: data, ohjelmistot, automaatio, verkkokauppa, web ja SEO',
    mapHint: 'Valitse piste kartalta',
    nodes: [
      {
        id: 'data',
        label: 'Data',
        ref: 'A4',
        line: 'Analysoimme datan ja löydämme sen, mikä ohjaa päätöksiä.',
        to: 'analytics',
        cta: 'Data-analytiikka',
      },
      {
        id: 'software',
        label: 'Ohjelmistot',
        ref: 'B3',
        line: 'Rakennamme työkalut ja sovellukset, joita valmiit järjestelmät eivät tarjoa.',
        to: 'software',
        cta: 'Ohjelmistokehitys',
      },
      {
        id: 'automation',
        label: 'Automaatio',
        ref: 'C4',
        line: 'Korvaamme toistuvat käsityövaiheet luotettavilla työnkuluilla.',
        to: 'software',
        cta: 'Automaatio',
      },
      {
        id: 'commerce',
        label: 'Verkkokauppa',
        ref: 'D2',
        line: 'Tuotedata, hinnoittelu ja integraatiot toimivat yhdessä.',
        to: 'ecommerce',
        cta: 'Verkkokaupan järjestelmät',
      },
      {
        id: 'web',
        label: 'Web',
        ref: 'C2',
        line: 'Sivusto tai sovellus, joka toimii kaikilla laitteilla.',
        to: 'web',
        cta: 'Verkkosivut',
      },
      {
        id: 'seo',
        label: 'SEO',
        ref: 'E1',
        line: 'Löydettävyys ja kohdennettu näkyvyys oikeille ihmisille.',
        to: 'marketing',
        cta: 'Markkinointi ja SEO',
      },
    ],
    edges: [
      { a: 'data', b: 'software', text: 'Analyysistä tulee sovelluksen logiikkaa.' },
      {
        a: 'software',
        b: 'automation',
        text: 'Ohjelmistot ajavat automaatioita, jotka korvaavat käsityön.',
      },
      {
        a: 'automation',
        b: 'commerce',
        text: 'Automaatio päivittää tuotedataa ja hintoja verkkokaupassa.',
      },
      {
        a: 'software',
        b: 'web',
        text: 'Verkkosivusta voi tulla sovellus, jossa on oikea logiikka.',
      },
      {
        a: 'commerce',
        b: 'web',
        text: 'Verkkokaupan järjestelmät liitetään käyttöliittymään rajapinnoilla.',
      },
      { a: 'web', b: 'seo', text: 'Tekninen rakenne on alusta asti hakukoneiden luettavissa.' },
      { a: 'data', b: 'commerce', text: 'Myyntianalyysi ohjaa hinnoittelua ja valikoimaa.' },
    ],
    steps: ['Ymmärrä', 'Analysoi', 'Suunnittele', 'Rakenna', 'Automatisoi', 'Optimoi'],
  },
  capabilities: {
    title: 'Viisi osaamisaluetta, yksi tiimi.',
    more: 'Lue lisää',
  },
  system: {
    title: 'Data sisään, työkalu ulos.',
    lede: 'Jokainen järjestelmä koostuu syötteistä, logiikasta, sovelluksesta ja lopputuloksesta. Valitse osa nähdäksesi, mihin se liittyy.',
    cols: [
      {
        title: 'Syötteet',
        nodes: [
          {
            id: 'data',
            label: 'Data',
            text: 'Myynti-, tuote-, asiakas- ja käyttödata sekä tiedostot ja tietokannat.',
          },
          {
            id: 'apis',
            label: 'API-rajapinnat',
            text: 'Ulkoiset palvelut, verkkokauppa-alustat ja markkinapaikat.',
          },
          {
            id: 'existing',
            label: 'Nykyiset järjestelmät',
            text: 'Käytössä olevat ohjelmistot: varasto, laskutus, tuotetietojärjestelmät.',
          },
          {
            id: 'human',
            label: 'Käyttäjän syöte',
            text: 'Lomakkeet, päätökset ja korjaukset, jotka käyttäjä tekee työkalussa.',
          },
        ],
      },
      {
        title: 'Logiikka',
        nodes: [
          {
            id: 'rules',
            label: 'Säännöt',
            text: 'Liiketoimintasäännöt, tarkistukset ja ehdot koodattuna.',
          },
          {
            id: 'automation',
            label: 'Automaatio',
            text: 'Ajastetut ja tapahtumaohjatut työnkulut.',
          },
          {
            id: 'algorithms',
            label: 'Algoritmit',
            text: 'Hinnoittelu, pisteytys, haku ja suosittelu.',
          },
          {
            id: 'analysis',
            label: 'Analyysi',
            text: 'Tilastomallit, ennusteet ja poikkeamien havaitseminen.',
          },
        ],
      },
      {
        title: 'Sovellus',
        nodes: [
          {
            id: 'ui',
            label: 'Käyttöliittymä',
            text: 'Selaimessa toimiva, mobiiliystävällinen näkymä työhön.',
          },
          { id: 'workflow', label: 'Työnkulku', text: 'Vaiheet, tilat ja hyväksynnät.' },
          { id: 'permissions', label: 'Käyttöoikeudet', text: 'Roolit ja tunnistautuminen.' },
          {
            id: 'cms',
            label: 'CMS / sisäinen työkalu',
            text: 'Rakenteisen tiedon hallinta ja ylläpito.',
          },
        ],
      },
      {
        title: 'Lopputulos',
        nodes: [
          { id: 'action', label: 'Toimenpide', text: 'Työvaihe hoituu automaattisesti.' },
          { id: 'decision', label: 'Päätös', text: 'Suositus tai pisteytys päätöksen pohjaksi.' },
          { id: 'update', label: 'Päivitys', text: 'Tieto päivittyy oikeisiin järjestelmiin.' },
          { id: 'report', label: 'Raportti', text: 'Ajantasainen raportti ilman käsityötä.' },
          {
            id: 'experience',
            label: 'Asiakaskokemus',
            text: 'Asiakkaalle näkyvä sivusto, haku tai palvelu paranee.',
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
    title: 'Rakennamme työkalut, joita valmiit järjestelmät eivät tarjoa.',
    lede: 'Monessa yrityksessä työ tehdään taulukoiden ja irrallisten järjestelmien välissä. Rakennamme ohjelmiston työnkulun ympärille: pienestä sisäisestä työkalusta laajaan järjestelmään.',
    kinds: [
      { t: 'Sisäiset työkalut', d: 'Sovellukset datan, tuotteiden ja työnkulkujen hallintaan.' },
      { t: 'Automaatiot', d: 'Toistuvat työvaiheet hoituvat itsestään.' },
      { t: 'Räätälöity CMS', d: 'Järjestelmä rakenteisen tiedon hallintaan.' },
      { t: 'API-integraatiot', d: 'Järjestelmät, jotka keskustelevat keskenään.' },
      { t: 'Web-sovellukset', d: 'Portaalit ja sovellukset, joissa on oikea sovelluslogiikka.' },
      { t: 'Päätöstyökalut', d: 'Hinnoittelu, ennusteet, haku ja suosittelu.' },
    ],
    cta: 'Tutustu ohjelmistokehitykseen',
  },
  why: {
    title: 'Analysoimme, rakennamme ja automatisoimme samalta tiimiltä.',
    intro:
      'Ero syntyy yhteydestä: data, ohjelmistot, automaatio, verkkokauppa, web ja näkyvyys ovat samassa tiimissä, joten työ ei katkea toimijoiden välillä.',
    items: [
      {
        t: 'Analyysistä työkaluksi',
        d: 'Analysoimme työnkulun, mallinnamme sen ja rakennamme työkalun sen ajamiseen.',
      },
      {
        t: 'Ohjelmistokehitys',
        d: 'Räätälöidyt sisäiset työkalut, web-sovellukset, CMS-järjestelmät ja integraatiot.',
      },
      {
        t: 'Analytiikkaosaaminen',
        d: 'Tilastotiede ja data-analytiikka päätöksenteon tueksi.',
      },
      {
        t: 'Tuote- ja verkkokauppadata',
        d: 'Kokemusta laajoista tuote- ja verkkokauppa-aineistoista hinnoittelun, analytiikan ja sisältöjen pohjaksi.',
      },
      {
        t: 'Verkkokauppaosaaminen',
        d: 'Taksonomiat, tuotedata, hinnoittelualgoritmit ja integraatiot.',
      },
      {
        t: 'Tampereelta, kansainvälisesti',
        d: 'Asiakkaita ja yhteistyökumppaneita Suomessa, Kanadassa, Yhdysvalloissa ja Euroopassa.',
      },
      {
        t: 'Monikielisyys',
        d: 'Sisältöä ja hakukoneoptimointia suomeksi ja englanniksi, pyynnöstä myös ranskaksi.',
      },
      {
        t: 'Suurille ja pienille',
        d: 'Palvelut sopivat sekä yrityksille että toiminimiyrittäjille.',
      },
    ],
    facts: [
      { k: 'Y-tunnus', v: '3486845-7' },
      { k: 'Perustettu', v: '2024' },
      { k: 'Toiminta', v: 'Tampere, Suomi' },
      { k: 'Palvelumallit', v: 'Tilaus ja projekti' },
    ],
    more: 'Lue, miten toimimme',
  },
  values: {
    title: 'Viisi merkkiä polulla.',
    intro:
      'Arvomme määrittelevät, keitä olemme ja miten toimimme. Ne pohjautuvat suomalaiseen laatuun sekä ilveksen ketteryyteen ja tarkkuuteen.',
    items: [
      {
        n: '01',
        title: 'Suomalainen ylpeys, globaali näkökulma',
        short: 'Suomalainen tarkkuus ja käytännönläheisyys palvelevat globaaleja markkinoita.',
        long: 'Olemme ylpeitä suomalaisuudestamme ja tuemme paikallisia yrityksiä sekä yrittäjiä, jotka vahvistavat Suomea. Palvelemme asiakkaita Suomessa, Kanadassa, Yhdysvalloissa ja Euroopassa ja tuomme suomalaisen osaamisen jokaiseen projektiin.',
        photo: 'nasinneula',
      },
      {
        n: '02',
        title: 'Tarkkuus, joka tuottaa tulosta',
        short: 'Kaikki projektit toteutetaan huolella ja asiakaslähtöisesti.',
        long: 'Huomio yksityiskohtiin tekee eron. Dataan perustuvista oivalluksista verkkokauppajärjestelmiin tarkkuus on meille lupaus eikä vain standardi: tavoitteena ovat mitattavat tulokset.',
        photo: 'tammerkoski',
      },
      {
        n: '03',
        title: 'Kaveria ei jätetä',
        short: 'Kumppanuus on toimintamme ytimessä: tuki ja jaettu menestys.',
        long: 'Näemme itsemme kumppaneina asiakkaidemme matkassa ja työskentelemme yhdessä heidän menestyksensä eteen. Kun asiakkaamme menestyvät, me menestymme.',
        photo: 'swing',
      },
      {
        n: '04',
        title: 'Muutos luo mahdollisuuksia',
        short: 'Digitaalinen muutos on mahdollisuus, ei uhka.',
        long: 'Digitaalinen maailma muuttuu jatkuvasti. Autamme asiakkaitamme navigoimaan muuttuvissa ympäristöissä ketteryydellä ja luovuudella ja muuttamaan haasteet kasvuksi.',
        photo: 'sunset',
      },
      {
        n: '05',
        title: 'Tarkkuus kohtaa yksilöllisyyden',
        short: 'Räätälöityjä ratkaisuja asiantuntevalla huolenpidolla.',
        long: 'Jokainen asiakas ja haaste on ainutlaatuinen. Pienen mutta taitavan tiimin avulla annamme tarvittavan huomion. Tarkkuus ei tarkoita vain täsmällisyyttä vaan sitä, että jokainen yksityiskohta palvelee asiakkaan tarpeita.',
        photo: 'lake',
      },
    ],
  },
  sole: {
    title: 'Yksin yrittäjänä ei tarvitse tehdä kaikkea yksin.',
    text: 'Aikaa verkkonäkyvyyden ja rutiinien hoitamiseen on harvoin, ja hyvät palvelut tuntuvat usein liian kalliilta. Tarjoamme henkilökohtaista ja kohtuuhintaista tukea verkkosivuista hakukonenäkyvyyteen, pieniin työkaluihin ja sparraukseen.',
    items: [
      'Verkkosivustot ja verkkokaupat',
      'Pienet työkalut ja automaatiot',
      'Hakukoneoptimointi',
      'Sisältö suomeksi ja englanniksi, pyynnöstä ranskaksi',
      'Henkilökohtainen sparraus',
    ],
    cta: 'Palvelut toiminimiyrittäjille',
  },
  cta: {
    title: 'Kerro, mitä olet rakentamassa.',
    text: 'Paras tapa tavoittaa meidät on sähköposti. Kerro lyhyesti tilanteesi, niin vastaamme.',
    button: 'Ota yhteyttä',
    or: 'tai lue ensin usein kysytyt kysymykset',
  },
  services: servicesFi,
  servicesPage: {
    title: 'Palvelut',
    lede: 'Viisi osaamisaluetta ja erillinen palvelukokonaisuus toiminimiyrittäjille. Ne toimivat yhdessä: data ohjaa ohjelmistoja, ohjelmistot automatisoivat verkkokaupan, ja sekä kauppa että sivusto tarvitsevat näkyvyyttä.',
    overview: 'Valitse palvelu',
    meta: {
      title: 'Palvelut',
      description:
        'Ohjelmistokehitys ja automaatio, data-analytiikka, verkkokaupan järjestelmät, verkkosivut ja digitaaliset kokemukset, markkinointi ja SEO sekä palvelut toiminimiyrittäjille.',
    },
  },
  labels: {
    example: 'Esimerkki',
    related: 'Liittyvät palvelut',
    home: 'Etusivu',
    contactUs: 'Ota yhteyttä',
    services: 'Palvelut',
    audience: 'Yrityksille',
    mail: 'Lähetä sähköpostia',
    updated: 'Voimaantulopäivä',
  },
  whyPage: {
    meta: {
      title: 'Miksi Verkkolynx',
      description:
        'Tamperelainen tekninen digitaalinen yritys: ohjelmistokehitys, data, automaatio, verkkokauppajärjestelmät, verkkosivut ja SEO samalta tiimiltä.',
    },
    title: 'Kumppani, joka yhdistää datan, ohjelmistot ja verkon.',
    lede: 'Verkkolynx on tamperelainen tekninen digitaalinen yritys. Analysoimme, rakennamme ja automatisoimme samalta tiimiltä.',
    intro: [
      'Useimmat yritykset joutuvat yhdistelemään erillisiä toimijoita: analyytikkoa, ohjelmistokehittäjää, verkkotoimistoa ja markkinoijaa. Meillä nämä ovat samassa tiimissä, joten työ ei katkea rajapinnoissa.',
      'Suomessa arvostamme laatua mutta myös hyvää vastinetta rahoille.',
    ],
    itemsTitle: 'Seitsemän syytä',
    meansForYou: 'Mitä tämä tarkoittaa sinulle',
    items: [
      {
        t: 'Yhteys analyysin ja toteutuksen välillä',
        d: 'Analyysi, säännöt ja työnkulku voidaan viedä suoraan ohjelmistoon ilman, että vaatimukset katoavat toimijoiden välissä.',
        you: 'Työkalu, joka vastaa todellista työtä, ja vähemmän välikäsiä.',
      },
      {
        t: 'Räätälöity ohjelmistokehitys ja automaatio',
        d: 'Sisäiset työkalut, web-sovellukset, räätälöidyt CMS-järjestelmät ja integraatiot pienistä apuohjelmista laajoihin järjestelmiin.',
        you: 'Työkalut, joita valmiit järjestelmät eivät tarjoa, ja vähemmän käsityötä.',
      },
      {
        t: 'Analytiikkaosaaminen ja data',
        d: 'Tilastollinen osaaminen ja kokemus laajoista, historiallisista ja ajantasaisista verkkokauppa-aineistoista.',
        you: 'Päätökset perustuvat dataan, ja ennusteet ovat käytettävissä.',
      },
      {
        t: 'Verkkokauppajärjestelmät',
        d: 'Taksonomiat, tuotedata, hinnoittelualgoritmit, haku ja integraatiot.',
        you: 'Verkkokauppa, jonka taustajärjestelmät toimivat yhdessä.',
      },
      {
        t: 'Verkkosivut ja näkyvyys',
        d: 'Nopeat ja saavutettavat sivut sekä SEO ja markkinointi täydentävinä osaamisina.',
        you: 'Sivusto, joka toimii ja löytyy.',
      },
      {
        t: 'Joustavat yhteistyömallit',
        d: 'Tarjoamme sekä tilauspohjaisia että projektipohjaisia sopimuksia kaiken kokoisille yrityksille.',
        you: 'Palvelut mukautetaan tarpeisiisi ja yrityksesi kokoon.',
      },
      {
        t: 'Suomesta käsin, kansainvälistä kokemusta',
        d: 'Suomi on kotimme, ja asiakkaita sekä yhteistyökumppaneita on Kanadassa, Yhdysvalloissa ja Euroopassa.',
        you: 'Suomalainen tarkkuus ja kansainvälinen kokemus samassa tiimissä.',
      },
    ],
    modelsTitle: 'Yhteistyömallit',
    models: [
      { t: 'Tilauspohjainen', d: 'Jatkuva tuki, ylläpito ja kehitys sovitulla kuukausimallilla.' },
      {
        t: 'Projektipohjainen',
        d: 'Selkeästi rajattu kokonaisuus kiinteällä tai tuntiperusteisella hinnalla.',
      },
    ],
    closing: 'Kerro, mitä työtä haluaisit helpottaa.',
  },
  aboutPage: {
    meta: {
      title: 'Meistä',
      description:
        'Verkkolynx Ratkaisut Oy on tamperelainen tekninen digitaalinen yritys: ohjelmistokehitys, data, automaatio, verkkokauppa ja web. Tarina, toimintatapa ja arvot.',
    },
    title: 'Suomalainen tarkkuus, globaali näkökulma.',
    lede: 'Verkkolynx Ratkaisut Oy on tamperelainen tekninen yritys, joka rakentaa ohjelmistoja, automaatioita ja dataratkaisuja.',
    chapters: [
      {
        id: 'kuka',
        n: '01',
        t: 'Kuka Verkkolynx on',
        p: [
          'Yritys perustettiin vuonna 2024 visiolla yhdistää edistynyt data-analytiikka käytännön liiketoimintaratkaisuihin. Olemme tamperelainen tekninen digitaalinen yritys, joka yhdistää ohjelmistokehityksen, datan, automaation, verkkokauppajärjestelmät, verkkosivut ja näkyvyyden.',
          'Missiomme on auttaa kaiken kokoisia yrityksiä muuttamaan data käytännön oivalluksiksi ja käytännön työkaluiksi.',
        ],
      },
      {
        id: 'tampere',
        n: '02',
        t: 'Tampereelta, Suomesta',
        p: [
          'Toimimme Tampereelta ja yhdistämme suomalaisen tarkkuuden ja globaalin näkökulman. Tuemme paikallisia yrityksiä ja yrittäjiä, jotka vahvistavat Suomea, ja olemme ylpeitä saadessamme olla osa paikallista taloutta ja yhteisöä.',
        ],
      },
      {
        id: 'ero',
        n: '03',
        t: 'Mikä meissä on teknisesti erilaista',
        p: [
          'Talon sisältä löytyvät ohjelmistokehitys, data-analytiikka, verkkokauppa, automaatio ja SEO. Tiimiimme kuuluu ammattilaisia, joilla on taustaa matematiikassa, tilastotieteessä, tietojenkäsittelytieteessä, urheilussa ja yrittäjyydessä.',
          'Ero syntyy yhteydestä. Sen sijaan, että työ pysähtyisi analyysiin, analysoimme työnkulun, mallinnamme sen, automatisoimme sen ja rakennamme työkalun sen ajamiseen.',
        ],
      },
      {
        id: 'kansainvalisyys',
        n: '04',
        t: 'Kansainvälinen näkökulma',
        p: [
          'Asiakkaitamme ja yhteistyökumppaneitamme on Suomessa, Kanadassa, Yhdysvalloissa ja Euroopassa. Tunnemme eri markkinoiden erityispiirteet ja sovimme tapaamiset joustavasti eri aikavyöhykkeille. Sisältöä ja hakukoneoptimointia tuotamme suomeksi ja englanniksi, pyynnöstä myös ranskaksi.',
        ],
      },
    ],
    nameTitle: 'Nimen taustalla',
    nameText:
      '”Verkko” tarkoittaa verkkoa tai internetiä, ja ”lynx” eli ilves symboloi ketteryyttä ja tarkkaa näkemystä. Yhdessä ne kuvaavat kykyämme navigoida datan monimutkaisissa verkostoissa.',
    processTitle: 'Miten työskentelemme',
    process: [
      { t: 'Alkuhaastattelu', d: 'Selvitämme tavoitteesi ja lähtötilanteesi.' },
      {
        t: 'Suunnittelu',
        d: 'Aikataulu ja budjetti sekä tarvittaessa wireframe-mallit ja käyttöliittymäluonnokset.',
      },
      { t: 'Toteutus', d: 'Kehitys ja testaus vaiheittain, ja sinä pysyt mukana.' },
      { t: 'Julkaisu', d: 'Käyttöönotto, dokumentaatio ja tarvittaessa koulutus.' },
      { t: 'Tuki', d: 'Ylläpito ja jatkokehitys liiketoimintasi kasvaessa.' },
    ],
    valuesTitle: 'Arvomme',
    valuesIntro:
      'Arvomme eivät ole pelkkiä sanoja. Ne ohjaavat kaikkea tekemistämme, yritysten tukemisesta digitaalisen viidakon haasteiden hallintaan.',
  },
  faqPage: {
    meta: {
      title: 'Usein kysytyt kysymykset',
      description:
        'Vastauksia yleisimpiin kysymyksiin: palvelut, data-analytiikka, verkkosivut, markkinointi ja SEO, tuki ja koulutus, tietoturva sekä projektinhallinta.',
    },
    title: 'Usein kysytyt kysymykset',
    lede: 'Vastauksia yleisimpiin kysymyksiin. Jos jokin jää epäselväksi, kirjoita osoitteeseen asiakaspalvelu@verkkolynx.fi.',
    search: 'Hae kysymyksistä',
    searchPlaceholder: 'Hae esim. SEO, hinnoittelu, GDPR',
    categories: 'Aiheet',
    all: 'Kaikki',
    none: 'Ei osumia.',
    noneHelp: 'Kokeile toista hakusanaa tai kirjoita meille.',
    expandAll: 'Avaa kaikki',
    collapseAll: 'Sulje kaikki',
    stillQuestions: 'Etkö löytänyt vastausta?',
    resultsLabel: 'kysymystä',
    categoriesData: faqFi,
  },
  contactPage: {
    meta: {
      title: 'Yhteystiedot',
      description:
        'Ota yhteyttä: asiakaspalvelu@verkkolynx.fi. Verkkolynx Ratkaisut Oy, Tampere, Suomi.',
    },
    title: 'Ota yhteyttä.',
    lede: 'Sähköposti on paras tapa tavoittaa meidät. Kerro lyhyesti, mitä olet tekemässä tai mitä työtä haluaisit helpottaa.',
    emailLabel: 'Sähköposti',
    emailNote: 'Vastaamme suomeksi tai englanniksi, pyynnöstä myös ranskaksi.',
    topicsTitle: 'Mistä haluat puhua?',
    topics: [
      { label: 'Data-analytiikka', subject: 'Data-analytiikka ja oivallukset' },
      { label: 'Verkkokauppa', subject: 'Verkkokaupan järjestelmät ja optimointi' },
      { label: 'Verkkosivut', subject: 'Verkkosivut ja digitaaliset kokemukset' },
      { label: 'Markkinointi ja SEO', subject: 'Markkinointi ja SEO' },
      { label: 'Toiminimiyrittäjän palvelut', subject: 'Palvelut toiminimiyrittäjille' },
      { label: 'Jokin muu', subject: 'Yhteydenotto' },
    ],
    detailsTitle: 'Yhtiön tiedot',
    details: [
      { k: 'Yritys', v: 'Verkkolynx Ratkaisut Oy' },
      { k: 'Y-tunnus', v: '3486845-7' },
      { k: 'Sijainti', v: 'Tampere, Suomi' },
      { k: 'Kielet', v: 'Suomi; englanti ja ranska pyynnöstä' },
    ],
    startTitle: 'Näin aloitetaan',
    start: [
      'Lähetä sähköpostia ja kerro lyhyesti tilanteestasi ja tavoitteistasi.',
      'Sovimme aloituskonsultaation.',
      'Saat ehdotuksen laajuudesta, aikataulusta ja hinnasta.',
    ],
    hoursLabel: 'Tavoitettavissa',
    hours: 'Ma–pe klo 9–17 Suomen aikaa. Tapaamisia sovitaan joustavasti myös muina aikoina.',
  },
  legal: {
    privacy: {
      meta: {
        title: 'Tietosuojaseloste',
        description:
          'Verkkolynx Ratkaisut Oy:n tietosuojaseloste: mitä henkilötietoja keräämme, miksi ja mitkä ovat oikeutesi.',
      },
      title: 'Tietosuojaseloste',
      updated: '13. marraskuuta 2024',
      intro: privacyFi.intro,
      sections: privacyFi.sections,
    },
    terms: {
      meta: {
        title: 'Käyttöehdot',
        description:
          'Verkkolynx Ratkaisut Oy:n palveluiden käyttöehdot: hinnat, maksut, toimitus, tietosuoja ja vastuu.',
      },
      title: 'Käyttöehdot',
      updated: '28. lokakuuta 2024',
      intro: termsFi.intro,
      sections: termsFi.sections,
    },
  },
  footer: {
    tagline: 'Ohjelmistot, data ja automaatio Tampereelta.',
    explore: 'Sivusto',
    company: 'Yhtiö',
    legal: 'Ehdot',
    privacy: 'Tietosuojaseloste',
    terms: 'Käyttöehdot',
    rights: 'Verkkolynx Ratkaisut Oy',
    location: 'Tampere, Suomi',
    businessId: 'Y-tunnus',
  },
  notFound: {
    title: 'Sivua ei löytynyt',
    text: 'Osoite ei vie mihinkään, kuten joskus metsässäkin. Palaa etusivulle tai valitse palvelu.',
    back: 'Etusivulle',
  },
  homeMeta: {
    title: 'Ohjelmistokehitys, data ja automaatio',
    description:
      'Verkkolynx analysoi datan, suunnittelee ratkaisun ja rakentaa ohjelmistot, automaatiot ja verkkokauppajärjestelmät, joita yrityksesi käyttää. Tampere, Suomi.',
  },
  schemaDescription:
    'Verkkolynx Ratkaisut Oy on tamperelainen tekninen digitaalinen yritys: ohjelmistokehitys ja automaatio, data-analytiikka, verkkokauppajärjestelmät, verkkosivut sekä markkinointi ja SEO.',
};
