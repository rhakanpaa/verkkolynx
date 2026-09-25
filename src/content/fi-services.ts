import type { Service } from './types';

export const servicesFi: Service[] = [
  {
    key: 'software',
    n: '01',
    name: 'Ohjelmistokehitys ja automaatio',
    nav: 'Ohjelmistokehitys ja automaatio',
    line: 'Sisäiset työkalut, sovellukset ja automaatio.',
    summary:
      'Rakennamme yrityksellesi työkalut, järjestelmät ja automaatiot, joita valmiit ohjelmistot eivät tarjoa.',
    tags: ['Sisäiset työkalut', 'Web-sovellukset', 'CMS', 'API-integraatiot', 'Automaatio'],
    photo: 'tammerkoski',
    diagram: true,
    heroTitle: 'Rakennamme työkalut, joita valmiit järjestelmät eivät tarjoa.',
    lede: 'Suunnittelemme ja rakennamme ohjelmistot, sisäiset työkalut ja automaatiot yrityksesi todellisen työnkulun ympärille: web-sovelluksista räätälöityihin CMS-järjestelmiin ja integraatioihin.',
    intro: [
      'Monessa yrityksessä työ tehdään taulukoiden, sähköpostien ja irrallisten järjestelmien välissä. Voimme suunnitella ja rakentaa kohdennetun ohjelmiston juuri sen työnkulun ympärille, sen sijaan että prosessi joutuu mukautumaan ohjelmistoon.',
      'Toteutus voi olla pieni sisäinen apuohjelma tai laaja räätälöity järjestelmä. Lähtökohtana ovat data, säännöt ja ihmiset, jotka työkalua käyttävät.',
    ],
    groupsTitle: 'Mitä voimme rakentaa',
    groups: [
      {
        tag: 'Räätälöity liiketoimintaohjelmisto',
        t: 'Järjestelmät työnkuluille, joihin valmisohjelmisto ei taivu',
        d: 'Tarkoitukseen rakennettuja järjestelmiä prosesseihin, joita yleiset ohjelmistot eivät hoida kunnolla.',
        items: [
          'Tilaus- ja kysyntäprosessit',
          'Toimialakohtaiset laskenta- ja sääntömallit',
          'Operatiiviset seurantajärjestelmät',
        ],
      },
      {
        tag: 'Sisäiset työkalut',
        t: 'Työkalut, joilla tiimi hallitsee dataa ja toimintaa',
        d: 'Käyttöliittymiä ja sovelluksia, joilla työntekijät hallitsevat tuotteita, sisältöä, dataa, asiakkaita ja työnkulkuja.',
        items: [
          'Tuote- ja katalogityökalut',
          'Sisällön ja datan hallinta',
          'Taulukoita korvaavat sovellukset',
        ],
      },
      {
        tag: 'Automaatio',
        t: 'Toistuvat työvaiheet luotettaviksi automaatioiksi',
        d: 'Korvaamme manuaalisen kopioinnin, päivittämisen ja raportoinnin automaattisilla työnkuluilla.',
        items: [
          'Datan siirrot ja päivitykset',
          'Automaattinen raportointi',
          'Tuotetietojen käsittely',
          'Ilmoitukset ja hälytykset',
        ],
      },
      {
        tag: 'Räätälöity CMS ja datanhallinta',
        t: 'Järjestelmä rakenteiselle tiedolle',
        d: 'Rakenteisen tiedon hallintaan tehty järjestelmä silloin, kun tavallinen verkkosivujen CMS ei riitä.',
        items: [
          'Tuote- ja katalogihallinta',
          'Hallintanäkymät olemassa oleviin tietokantoihin',
          'Käyttöoikeudet ja muutoshistoria',
        ],
      },
      {
        tag: 'Datatuotteet ja analytiikkasovellukset',
        t: 'Analyysistä työkalu, jota käytetään toistuvasti',
        d: 'Muutamme analyysin interaktiiviseksi sovellukseksi, jota käytetään yhä uudelleen sen sijaan, että tehtäisiin taas uusi staattinen raportti.',
        items: [
          'Interaktiiviset analyysityökalut',
          'Seuranta- ja monitorointinäkymät',
          'Raportointisovellukset',
        ],
      },
      {
        tag: 'Integraatiot',
        t: 'Järjestelmät puhumaan keskenään',
        d: 'Yhdistämme rajapinnat, tietokannat, verkkokauppa-alustat, sisäiset järjestelmät ja kolmannen osapuolen palvelut.',
        items: [
          'API-integraatiot',
          'Olemassa olevien järjestelmien väliset tiedonsiirrot',
          'Automatisoidut datavirrat',
        ],
      },
      {
        tag: 'Web-sovellukset',
        t: 'Selaimessa toimivat sovellukset ja portaalit',
        d: 'Rakennamme web-sovelluksia, joissa on oikea sovelluslogiikka, tunnistautuminen, datankäsittely ja työnkulut.',
        items: [
          'Asiakas- ja työntekijäportaalit',
          'Hallintakäyttöliittymät',
          'Mobiiliystävälliset sovellukset',
        ],
      },
      {
        tag: 'Päätöstyökalut',
        t: 'Logiikka, joka auttaa päättämään',
        d: 'Hinnoittelumoottoreita, suosittelu- ja vertailutyökaluja, ennustetyökaluja, hakujärjestelmiä ja pisteytysmalleja.',
        items: ['Hinnoittelutyökalut', 'Suosittelu ja vertailu', 'Ennusteet', 'Haku ja pisteytys'],
      },
    ],
    scale: {
      title: 'Pienestä apuohjelmasta laajaan järjestelmään',
      items: [
        {
          t: 'Rajattu työkalu',
          d: 'Yksi selkeä tehtävä, esimerkiksi taulukon korvaava sisäinen apuohjelma tai yksittäinen automaatio. Otetaan käyttöön nopeasti.',
        },
        {
          t: 'Kokonainen sovellus',
          d: 'Useita käyttäjäryhmiä, käyttöoikeuksia ja työnkulkuja yhdessä web-sovelluksessa.',
        },
        {
          t: 'Laaja räätälöity järjestelmä',
          d: 'Useita integraatioita, dataputkia ja käyttöliittymiä, joita kehitetään vaiheittain.',
        },
      ],
    },
    problemsTitle: 'Tunnistatko jonkin näistä?',
    problems: [
      {
        t: 'Tietoa siirretään käsin järjestelmästä toiseen',
        d: 'Sama tieto kirjoitetaan kahteen tai kolmeen paikkaan.',
      },
      {
        t: 'Monimutkaiset taulukot pitävät toiminnan pystyssä',
        d: 'Yksi ihminen ymmärtää, miten ne toimivat, ja virheet leviävät huomaamatta.',
      },
      {
        t: 'Samat hallinnolliset työvaiheet toistuvat',
        d: 'Päivittäinen ja viikoittainen rutiinityö vie aikaa oikealta työltä.',
      },
      {
        t: 'Alustan rajoja kierretään',
        d: 'Käytössä oleva järjestelmä ei tue tarvittavaa toimintoa, joten se tehdään kiertoteitse.',
      },
      {
        t: 'Raportit kootaan käsin',
        d: 'Luvut haetaan eri lähteistä ja yhdistetään joka kerta uudelleen.',
      },
      {
        t: 'Tuotetietoja ylläpidetään tehottomasti',
        d: 'Tuotetiedot elävät useissa tiedostoissa ja järjestelmissä.',
      },
      {
        t: 'Työkaluja on monta, eivätkä ne keskustele keskenään',
        d: 'Toiminta rikkoutuu työkalusta toiseen siirryttäessä.',
      },
      {
        t: 'Analyysi ei muutu toiminnaksi',
        d: 'Tulokset jäävät raporttiin eivätkä pääse osaksi työtä.',
      },
      {
        t: 'Prosessi mukautuu ohjelmistoon',
        d: 'Ohjelmiston pitäisi tukea prosessia, ei päinvastoin.',
      },
    ],
    capabilitiesTitle: 'Näin rakennamme',
    capabilities: [
      {
        t: 'Ymmärrä työnkulku',
        d: 'Käymme läpi, miten työ tehdään nyt: data, säännöt, ihmiset ja nykyiset järjestelmät.',
      },
      {
        t: 'Mallinna ja suunnittele',
        d: 'Määrittelemme datamallin, logiikan ja käyttöliittymän ennen rakentamista. Analyysi ja säännöt voidaan viedä suoraan ohjelmistoon.',
      },
      {
        t: 'Rakenna vaiheittain',
        d: 'Toimivat osat otetaan käyttöön ensin, ja käyttäjät pääsevät kokeilemaan työkalua jo kehityksen aikana.',
      },
      {
        t: 'Yhdistä ja automatisoi',
        d: 'Integroimme työkalun olemassa oleviin järjestelmiin ja automatisoimme toistuvat vaiheet.',
      },
      {
        t: 'Ylläpidä ja optimoi',
        d: 'Seuraamme käyttöä ja dataa ja kehitämme työkalua sen mukaan, mitä oikeasti tarvitaan.',
      },
    ],
    outcomesTitle: 'Mitä tästä seuraa',
    outcomes: [
      { t: 'Vähemmän käsityötä', d: 'Toistuvat vaiheet hoituvat automaattisesti.' },
      {
        t: 'Yksi paikka työlle',
        d: 'Tiedot ja työnkulut ovat yhdessä työkalussa hajanaisten välineiden sijaan.',
      },
      { t: 'Analyysi käyttöön', d: 'Data ja säännöt ovat osa työnkulkua eivätkä jää raportiksi.' },
      { t: 'Ohjelmisto tukee prosessia', d: 'Työkalu rakennetaan työnkulun ehdoilla.' },
    ],
    edgeTitle: 'Verkkolynxin ero',
    edge: [
      'Data, kehitys, verkkokauppa ja automaatio samalla tiimillä: analysoimme työnkulun, mallinnamme sen ja rakennamme työkalun sen ajamiseen.',
      'Kehitys lähtee todellisesta työnkulusta, ei yleisestä ohjelmistomallista.',
      'Omistus- ja käyttöoikeudet sovitaan projektikohtaisesti.',
      'Tietoturva ja käyttöoikeudet suunnitellaan mukaan alusta asti.',
    ],
    extraTitle: 'Teknisesti',
    extra: [
      'Selaimessa toimivat ja mobiiliystävälliset käyttöliittymät',
      'Tietokannat, rajapinnat ja taustajärjestelmät',
      'Tunnistautuminen ja roolipohjaiset käyttöoikeudet',
      'Integraatiot verkkokauppa-alustoihin, sisäisiin järjestelmiin ja kolmansien osapuolten palveluihin',
      'Dokumentaatio ja koulutus käyttöönoton yhteydessä sekä ylläpito ja jatkokehitys',
    ],
    bridge: [
      { text: 'Tarvitsetko vain julkisen verkkosivuston?', to: 'web' },
      { text: 'Onko lähtökohtana data-analyysi?', to: 'analytics' },
    ],
    related: ['analytics', 'ecommerce', 'web'],
    ctaTitle: 'Kerro, mitä työtä haluaisit automatisoida.',
    ctaText:
      'Kuvaa nykyinen työnkulku tai ongelma lyhyesti. Kerromme, mitä siitä voi rakentaa ja millaisella laajuudella.',
    meta: {
      title: 'Ohjelmistokehitys ja automaatio',
      description:
        'Räätälöidyt sisäiset työkalut, web-sovellukset, CMS-järjestelmät, API-integraatiot ja automaatiot. Rakennamme työkalut, joita valmiit järjestelmät eivät tarjoa. Tampere.',
    },
  },
  {
    key: 'analytics',
    n: '02',
    name: 'Data-analytiikka ja oivallukset',
    nav: 'Data-analytiikka ja oivallukset',
    line: 'Analyysi, ennusteet ja päätöstyökalut.',
    summary:
      'Analysoimme datan ja muutamme tuloksen tarvittaessa työkaluksi: ennusteeksi, seurannaksi tai päätöstueksi.',
    tags: ['Myyntitrendit', 'Ennusteet', 'Päätöstyökalut', 'Automaattinen analyysi'],
    photo: 'sunset',
    heroTitle: 'Data, josta tulee päätöksiä ja tarvittaessa työkaluja.',
    lede: 'Verkkolynx analysoi dataa myyntitrendeistä asiakaskäyttäytymiseen ja auttaa löytämään piileviä mahdollisuuksia. Kun analyysi tarvitsee jatkuvaa käyttöä, siitä voidaan rakentaa sovellus.',
    intro: [
      'Analyysi ei tarkoita vain raporttia. Tunnistamme kuviot ja trendit, jotka parantavat päätöksentekoa varastonhallinnassa, asiakassegmentoinnissa, hinnoittelussa ja markkinoiden arvioinnissa.',
      'Usein selkeä raportti riittää. Kun sama analyysi tehdään yhä uudelleen, se voi muuttua ennusteeksi, seurantajärjestelmäksi tai päätöstyökaluksi, jota tiimi käyttää itse.',
    ],
    problemsTitle: 'Mihin analytiikka vastaa',
    problems: [
      { t: 'Data ei ohjaa päätöksiä', d: 'Tietoa kertyy, mutta se ei muutu toimenpiteiksi.' },
      {
        t: 'Varasto ei seuraa kysyntää',
        d: 'Ylitarjonta sitoo pääomaa ja alitarjonta menettää myyntiä.',
      },
      { t: 'Asiakasryhmät ovat hämärän peitossa', d: 'Arvokkaimpia segmenttejä ei tunnisteta.' },
      {
        t: 'Prosessit hidastavat ja maksavat',
        d: 'Pullonkaulat tuotetoimituksesta asiakaspalveluun jäävät huomaamatta.',
      },
      {
        t: 'Dataa on liian vähän',
        d: 'Tarpeisiisi räätälöityjä tietokantoja voidaan rakentaa myös pienestä lähtökohdasta.',
      },
    ],
    capabilitiesTitle: 'Mitä analysoimme',
    capabilities: [
      {
        t: 'Myyntitrendien analyysi',
        d: 'Tunnista, mitä myydään, milloin ja miksi.',
        ex: 'Sesonkikysyntä, jotta varastotasot ovat kohdallaan.',
      },
      {
        t: 'Asiakaskäyttäytymisen seuranta',
        d: 'Ymmärrä yleisösi ja tunnista korkean arvon asiakassegmentit.',
        ex: 'Trendit, jotka ruokkivat personoituja kampanjoita ja passiivisten asiakkaiden aktivointia.',
      },
      {
        t: 'Toiminnan tehokkuusmittarit',
        d: 'Tunnista pullonkaulat tuotetoimituksesta asiakaspalveluun.',
        ex: 'Sujuvammat toiminnot, pienemmät kustannukset ja lyhyemmät toimitusajat.',
      },
      {
        t: 'Markkina-analyysi',
        d: 'Arvioi markkinadynamiikkaa Suomessa ja kansainvälisesti.',
        ex: 'Hyödyntämättömät markkinat esimerkiksi Yhdysvalloissa: kilpailutilanne, alueelliset trendit ja asiakaspreferenssit.',
      },
      {
        t: 'Analyysistä työkaluksi',
        d: 'Kun analyysiä tarvitaan toistuvasti, siitä voidaan rakentaa päätöstukisovellus, seurantajärjestelmä tai algoritmi osaksi työnkulkua.',
        ex: 'Ennustetyökalu, pisteytysmalli tai automaattinen valvonta, jota tiimi käyttää päivittäin.',
      },
    ],
    outcomesTitle: 'Mihin analyysi voi johtaa',
    outcomes: [
      {
        t: 'Perustellut päätökset',
        d: 'Raportit, visualisoinnit ja suositukset luotettavan datan pohjalta.',
      },
      {
        t: 'Päätöstuki ja ennusteet',
        d: 'Päätöstukisovellukset, ennustetyökalut ja pisteytysmallit.',
      },
      {
        t: 'Automaattinen seuranta',
        d: 'Automaattinen analyysi ja monitorointijärjestelmät poikkeamien havaitsemiseen.',
      },
      {
        t: 'Osa liiketoimintaa',
        d: 'Operatiiviset työkalut, interaktiiviset analyysisovellukset ja algoritmit liiketoimintaprosesseissa.',
      },
    ],
    edgeTitle: 'Verkkolynxin ero',
    edge: [
      'Analytiikkaosaaminen yhdistettynä kokemukseen laajoista urheilutuoteaineistoista.',
      'Analyysi voidaan viedä ohjelmistoksi samalla tiimillä, joka sen teki: mallinnus ja toteutus pysyvät yhdessä.',
      'Suositukset perustuvat sinun tilanteeseesi, eivät yleisiin oletuksiin.',
      'Selkeät raportit ja visualisoinnit.',
    ],
    extraTitle: 'Menetelmiä, joita käytämme',
    extra: [
      'Ennakoiva analytiikka: tilastomallit ja koneoppiminen trendien ja riskien ennustamiseen',
      'Dynaaminen hinnoittelu: algoritmit, jotka mukauttavat hintoja kysynnän, kilpailun ja markkinatrendien mukaan',
      'Datan laadun parantaminen: puhdistus, järjestäminen ja standardointi',
      'Reaaliaikaiset mittarit myynnistä, varastosta ja verkkosivuston suorituskyvystä',
      'Koulutus, jonka jälkeen tiimisi tulkitsee analytiikkatyökaluja itsenäisesti',
    ],
    bridge: [{ text: 'Haluatko analyysin käyttöön työkaluna?', to: 'software' }],
    related: ['software', 'ecommerce', 'marketing'],
    ctaTitle: 'Mitä datasta pitäisi saada selville?',
    ctaText:
      'Kerro, millaista dataa sinulla on ja mitä haluaisit siitä selvittää. Sanomme, riittääkö raportti vai kannattaako siitä rakentaa työkalu.',
    meta: {
      title: 'Data-analytiikka ja oivallukset',
      description:
        'Myyntitrendit, asiakaskäyttäytyminen, ennusteet ja markkina-analyysi. Analyysi voidaan tarvittaessa muuttaa päätöstueksi tai työkaluksi. Verkkolynx, Tampere.',
    },
  },
  {
    key: 'ecommerce',
    n: '03',
    name: 'Verkkokaupan järjestelmät ja optimointi',
    nav: 'Verkkokaupan järjestelmät ja optimointi',
    line: 'Tuotedata, hinnoittelu, haku ja integraatiot.',
    summary:
      'Rakennamme ja optimoimme verkkokaupan taustajärjestelmät: tuotedatan, katalogin rakenteen, hinnoittelun, haun ja integraatiot.',
    tags: [
      'Tuotedata',
      'Taksonomia',
      'Hinnoittelualgoritmit',
      'Haku ja suositukset',
      'Integraatiot',
    ],
    photo: 'keskustori',
    heroTitle: 'Verkkokauppa, jonka järjestelmät toimivat.',
    lede: 'Kehitämme verkkokaupan tuotedatan, katalogirakenteen, hinnoittelun, haun ja integraatiot ja rakennamme tarvittaessa sisäiset työkalut niiden hallintaan.',
    intro: [
      'Verkkokaupan tulos ratkeaa usein taustalla: onko tuotedata tarkkaa, löytyvätkö tuotteet, seuraako hinnoittelu markkinaa ja liikkuuko tieto järjestelmien välillä ilman käsityötä.',
      'Työmme tukena on laajoja historiallisia ja ajantasaisia tietoaineistoja useilta toimialoilta, kuten urheilusta, vähittäiskaupasta ja teknologiasta.',
    ],
    problemsTitle: 'Mihin tämä vastaa',
    problems: [
      {
        t: 'Tuotteet eivät löydy',
        d: 'Heikko taksonomia ja haku piilottavat sopivat tuotteet asiakkaalta.',
      },
      {
        t: 'Tuotetiedot ovat hajallaan tai epätarkkoja',
        d: 'Puutteelliset kuvaukset heikentävät luottamusta ja myyntidatan laatua.',
      },
      {
        t: 'Hinnat eivät seuraa markkinaa',
        d: 'Kampanjat ja sesongit jäävät kannattavuuden osalta hyödyntämättä.',
      },
      { t: 'Tuotteiden ylläpito on käsityötä', d: 'Sama tieto päivitetään käsin useaan paikkaan.' },
      { t: 'Varasto ei vastaa kysyntää', d: 'Ylivarastointi ja alivarastointi syövät katetta.' },
      {
        t: 'Ostokset jäävät kesken',
        d: 'Monimutkainen navigointi ja kassaprosessi karkottavat ostajia.',
      },
    ],
    capabilitiesTitle: 'Mitä rakennamme ja optimoimme',
    capabilities: [
      {
        t: 'Tuotedata ja rakenteinen tuotetieto',
        d: 'Selkeät ja tarkat tuotetiedot, jotka on jäsennelty niin, että niitä voi hakea, vertailla ja päivittää.',
      },
      {
        t: 'Taksonomia ja katalogirakenne',
        d: 'Kategoriat ja ominaisuudet, jotka tekevät tuotteista löydettäviä ja hallittavia.',
      },
      {
        t: 'Hinnoittelualgoritmit',
        d: 'Automaattiset hinnanmuutokset kilpailukyvyn säilyttämiseksi ja kannattavuuden hallintaan kampanjoissa ja sesonkiaikoina.',
      },
      {
        t: 'Haku ja suositukset',
        d: 'Hakutoiminnot ja suositukset, jotka auttavat asiakasta löytämään oikean tuotteen.',
        ex: 'Varustevertailu tai personoidut tuotesuositukset.',
      },
      {
        t: 'Varastoon liittyvä analyysi',
        d: 'Kysynnän ennustaminen ja ylivarastoinnin tai alivarastoinnin välttäminen.',
      },
      {
        t: 'Tuotetietojen automaatio',
        d: 'Tuotetiedon tuonti, muunnos, rikastus ja päivitys automaattisina työnkulkuina.',
      },
      {
        t: 'Integraatiot ja markkinapaikkojen työnkulut',
        d: 'Verkkokaupan, varastojärjestelmien, markkinapaikkojen ja sisäisten työkalujen yhdistäminen rajapinnoilla.',
      },
      {
        t: 'Sisäiset valikoiman hallinnan työkalut',
        d: 'Käyttöliittymä, jolla tiimi hallitsee tuotteita, hintoja ja sisältöjä ilman käsityötä. Rakennetaan tarpeen mukaan.',
      },
      {
        t: 'Asiakaspolun optimointi',
        d: 'Selkeä navigointi, sujuva kassa ja mobiiliystävällinen suunnittelu, jotta ostoksia jää vähemmän kesken.',
      },
    ],
    outcomesTitle: 'Mitä ajantasainen tuotetieto tuo',
    outcomes: [
      {
        t: 'Uskottavuus',
        d: 'Asiakkaat luottavat alustoihin, joilla on uusimmat tuotteet ja tarkat tiedot.',
      },
      { t: 'SEO-edut', d: 'Uudet ja hyvin kuvatut tuotteet parantavat näkyvyyttä hakutuloksissa.' },
      { t: 'Parempi myyntidata', d: 'Tarkat tuotetiedot auttavat ymmärtämään trendejä.' },
    ],
    edgeTitle: 'Verkkolynxin ero',
    edge: [
      'Taksonomia, tuotedata ja hinnoittelu samalla tiimillä, joka osaa rakentaa myös työkalut ja integraatiot niiden ympärille.',
      'Datapohjaiset päätökset: analyysi ohjaa hinnoittelua, valikoimaa ja varastoa.',
      'Automaatio vähentää käsityötä tuotetietojen ylläpidossa.',
    ],
    extraTitle: 'Tarvittaessa myös',
    extra: [
      'Verkkokauppaominaisuuksien lisääminen olemassa olevalle sivustolle: ostoskorit, maksut, varastonhallinta ja asiakastilit',
      'Sisällöntuotanto tuotekuvauksiin ja markkinointimateriaaleihin',
      'Maksuturvallisuus ja PCI DSS -vaatimusten huomiointi verkkokauppa-alustoilla',
    ],
    bridge: [
      { text: 'Tarvitsetko sisäisen tuotehallintatyökalun tai automaation?', to: 'software' },
      { text: 'Haluatko selvittää, mitä myyntidata kertoo?', to: 'analytics' },
    ],
    related: ['software', 'analytics', 'web'],
    ctaTitle: 'Mikä verkkokaupassasi vie eniten aikaa?',
    ctaText:
      'Kerro, mitä verkkokaupassasi ylläpidetään käsin tai mikä ei toimi. Kerromme, mitä voidaan optimoida ja mitä kannattaa rakentaa.',
    meta: {
      title: 'Verkkokaupan järjestelmät ja optimointi',
      description:
        'Tuotedata, taksonomia, hinnoittelualgoritmit, haku, suositukset ja integraatiot. Verkkokaupan järjestelmiä ja optimointia Tampereelta.',
    },
  },
  {
    key: 'web',
    n: '04',
    name: 'Verkkosivut ja digitaaliset kokemukset',
    nav: 'Verkkosivut ja digitaaliset kokemukset',
    line: 'Yrityssivut, verkkokaupan käyttöliittymät ja sisältöalustat.',
    summary:
      'Suunnittelemme ja toteutamme julkiset verkkosivut ja käyttöliittymät, jotka ovat nopeita, saavutettavia ja hakukoneille luettavia.',
    tags: [
      'Yrityssivut',
      'Verkkokaupan käyttöliittymä',
      'Kampanjasivut',
      'Saavutettavuus',
      'Suorituskyky',
    ],
    photo: 'finlayson',
    heroTitle: 'Verkkosivut, jotka toimivat ja löytyvät.',
    lede: 'Suunnittelemme ja toteutamme yrityssivustot, verkkokaupan käyttöliittymät, kampanjasivut ja sisältöalustat. Sivustot toimivat kaikilla laitteilla, ovat saavutettavia ja hakukoneiden luettavissa.',
    intro: [
      'Verkkosivusto on ensimmäinen asia, jonka asiakas näkee. Yhdistämme datalähtöisen suunnittelun, käyttäjäkäyttäytymisen ymmärtämisen ja teknisen laadun.',
      'Rakennamme sivuston Googlen E-E-A-T-periaatteiden (kokemus, asiantuntemus, auktoriteetti, luotettavuus) mukaisesti, jotta se välittää uskottavuutta.',
    ],
    problemsTitle: 'Mihin sivustouudistus vastaa',
    problems: [
      {
        t: 'Sivusto näyttää hyvältä mutta ei tuota',
        d: 'Rakenne ei ohjaa kävijää kohti toimintaa.',
      },
      { t: 'Kokemus kärsii mobiilissa', d: 'Sivusto ei toimi kunnolla kaikilla laitteilla.' },
      {
        t: 'Sivusto on hidas tai vanhentunut',
        d: 'Käytettävyys, suorituskyky tai ilme kaipaa päivitystä.',
      },
      {
        t: 'Sivusto ei löydy hauista',
        d: 'Hakukoneoptimointia ei ole huomioitu rakennusvaiheessa.',
      },
    ],
    capabilitiesTitle: 'Mitä toteutamme',
    capabilities: [
      {
        t: 'Yrityssivustot ja sisältöalustat',
        d: 'Selkeä rakenne, sisältö ja hallinta, jotka tukevat yrityksen tavoitteita.',
      },
      {
        t: 'Verkkokaupan käyttöliittymät',
        d: 'Käyttöliittymät, jotka ohjaavat asiakasta kohti ostopäätöstä.',
      },
      {
        t: 'Kampanja- ja laskeutumissivut',
        d: 'Kohdennetut sivut tiettyyn tarkoitukseen.',
        ex: 'Korkean kysynnän kategorioiden korostaminen tai asiakastarpeisiin räätälöidyt laskeutumissivut.',
      },
      {
        t: 'UX ja konversio',
        d: 'Analysoimme käyttäjäkäyttäytymistä ja luomme selkeät rakenteet, jotka parantavat käyttökokemusta ja virtaviivaistavat asiakaspolkuja.',
      },
      {
        t: 'Responsiivisuus ja saavutettavuus',
        d: 'Sivusto toimii työpöydällä, tabletilla ja puhelimella. Tavoitteena on WCAG-ohjeiden mukainen saavutettavuus.',
      },
      {
        t: 'Suorituskyky ja hakukoneystävällinen rakenne',
        d: 'Nopeat sivut ja tekninen rakenne, joka on valmiina hakukoneoptimointiin alusta asti.',
      },
    ],
    outcomesTitle: 'Mitä sivustolta saadaan',
    outcomes: [
      { t: 'Luottamus', d: 'Uskottavuus rakentuu E-E-A-T-periaatteiden varaan.' },
      {
        t: 'Konversiot',
        d: 'Selkeät, käyttäjälähtöiset ratkaisut auttavat muuttamaan vierailijat asiakkaiksi.',
      },
      { t: 'Sitoutuminen', d: 'Sujuvat käyttökokemukset houkuttelevat käyttäjiä palaamaan.' },
      { t: 'Skaalautuvuus', d: 'Alusta kestää sisällön ja liikenteen lisääntymisen.' },
    ],
    edgeTitle: 'Verkkolynxin ero',
    edge: [
      'Verkkosuunnittelu, verkkokauppaosaaminen ja data samassa tiimissä.',
      'Kun sivusto tarvitsee sovelluslogiikkaa, tunnistautumista tai integraatioita, samaan tiimiin kuuluu ohjelmistokehitys.',
      'Alusta, jota voi laajentaa tarpeen mukaan.',
    ],
    extraTitle: 'Käytännössä',
    extra: [
      'Alustat: WordPress, Shopify, Magento ja räätälöidyt järjestelmät; suositus tehdään tarpeidesi mukaan',
      'Monikielisyys: suomi, englanti ja ranska sekä hakukoneoptimointi eri kielille',
      'Uudistukset, siirrot uudelle alustalle ja ylläpito julkaisun jälkeen',
      'Kolmannen osapuolen palvelut: maksut, sosiaalinen media ja analytiikkatyökalut',
      'Hostingia emme tarjoa itse, mutta autamme valitsemaan palveluntarjoajan ja ottamaan käyttöön ammattimaisen sähköpostin',
    ],
    bridge: [{ text: 'Tarvitsetko verkkosivustoa laajemman järjestelmän?', to: 'software' }],
    related: ['software', 'marketing', 'ecommerce'],
    ctaTitle: 'Mitä sivustolta pitäisi saada aikaan?',
    ctaText:
      'Kerro, mitä olet rakentamassa tai uudistamassa. Ehdotamme rakennetta, teknistä toteutusta ja aikataulua.',
    meta: {
      title: 'Verkkosivut ja digitaaliset kokemukset',
      description:
        'Yrityssivut, verkkokaupan käyttöliittymät ja kampanjasivut: nopeat, saavutettavat ja hakukoneystävälliset. Verkkolynx, Tampere.',
    },
  },
  {
    key: 'marketing',
    n: '05',
    name: 'Markkinointi ja SEO',
    nav: 'Markkinointi ja SEO',
    line: 'Hakukonenäkyvyys, kampanjat ja sisältö.',
    summary:
      'Täydennämme tekniset ratkaisut näkyvyydellä: hakukoneoptimointi, kohdennetut kampanjat ja sisältö, jonka vaikutus mitataan.',
    tags: ['SEO', 'Digikampanjat', 'Sisältömarkkinointi', 'Sähköposti'],
    photo: 'nasinneula',
    heroTitle: 'Näkyvyyttä oikeille ihmisille.',
    lede: 'Yhdistämme hakukoneoptimoinnin, kohdennetut kampanjat ja sisällön, jotta yrityksesi löytyy oikealla hetkellä ja vaikutus on mitattavissa.',
    intro: [
      'Markkinointi ja SEO tehdään samassa tiimissä ja samasta datasta kuin muutkin palvelumme.',
      'Kyse ei ole vain klikeistä vaan siitä, että vierailijoista tulee asiakkaita.',
    ],
    problemsTitle: 'Mihin markkinointi ja SEO vastaavat',
    problems: [
      { t: 'Sivusto ei löydy hauista', d: 'Oikeat avainsanat ja sisällöt puuttuvat.' },
      { t: 'Kampanjat eivät kohdistu', d: 'Maksettu näkyvyys ei tavoita oikeaa yleisöä.' },
      {
        t: 'Sisältö on täytettä',
        d: 'Teksteistä puuttuu se yksityiskohtaisuus, josta kohdeyleisö oikeasti hyötyy.',
      },
      { t: 'Vaikutus ei näy luvuissa', d: 'Tuloksia ei mitata, joten toimintaa ei voi parantaa.' },
    ],
    capabilitiesTitle: 'Miten työ tehdään',
    capabilities: [
      {
        t: 'Hakukoneoptimointi (SEO)',
        d: 'Paranna näkyvyyttä kohdennetuilla avainsanastrategioilla.',
        ex: 'Esimerkiksi urheiluvälinekauppa, jonka tuotteiden halutaan löytyvän hauilla kuten ”jääkiekkoluistimet”.',
      },
      {
        t: 'Kohdennetut digikampanjat',
        d: 'Maksetut haku- ja sosiaalisen median kampanjat, jotka vastaavat tavoitteitasi.',
        ex: 'Rajoitetun ajan jääkiekkovarustetarjoukset oikealle yleisölle.',
      },
      {
        t: 'Sisältömarkkinointi',
        d: 'Datalähtöistä ja yksityiskohtaista sisältöä urheilutuoteaineistojen pohjalta: blogiartikkeleita, tuotevertailuja ja tarkasti kohdennettuja oppaita.',
      },
      {
        t: 'Sähköpostimarkkinointi',
        d: 'Prosessit hylättyihin ostoskoreihin, kausikampanjoihin ja kanta-asiakkaiden sitouttamiseen.',
      },
    ],
    outcomesTitle: 'Miksi näkyvyys on tärkeää',
    outcomes: [
      { t: 'Uskottavuus', d: 'Hakutuloksissa hyvin sijoittuvia yrityksiä pidetään luotettavina.' },
      { t: 'Laadukkaammat liidit', d: 'Parempi näkyvyys tuo sivustolle sopivampia kävijöitä.' },
      {
        t: 'Kestävyys',
        d: 'Orgaaninen näkyvyys kestää pidempään kuin maksetut kampanjat.',
      },
    ],
    edgeTitle: 'Verkkolynxin ero',
    edge: [
      'Kokemus laajoista urheilutuoteaineistoista tuo sisältöön ja kampanjoihin konkreettisia oivalluksia.',
      'SEO on osa teknistä rakennetta: sivusto, tuotedata ja sisältö suunnitellaan yhdessä.',
      'Mittaamme sitä, mikä vaikuttaa liiketoimintaan, ja optimoimme jatkuvasti.',
    ],
    extraTitle: 'Käytännössä',
    extra: [
      'Monikielinen SEO suomeksi, englanniksi ja ranskaksi sekä paikallinen näkyvyys',
      'Maksetut kampanjat Google Ads-, Facebook Ads- ja LinkedIn Ads -alustoilla',
      'Sosiaalisen median markkinointi, vaikuttajayhteistyö ja brändistrategia',
      'Säännölliset raportit: liikenne, konversiot, klikkaukset ja sitoutuminen',
    ],
    bridge: [{ text: 'Tarvitsetko raportoinnin tai datankeruun automaation?', to: 'software' }],
    related: ['web', 'analytics', 'ecommerce'],
    ctaTitle: 'Löytyykö yrityksesi oikeilla hauilla?',
    ctaText:
      'Kerro, keitä haluat tavoittaa ja missä. Käymme läpi nykytilanteen ja ehdotamme, mitä kannattaa tehdä ensin.',
    meta: {
      title: 'Markkinointi ja SEO',
      description:
        'Hakukoneoptimointi, kohdennetut digikampanjat, sisältömarkkinointi ja sähköpostimarkkinointi datalähtöisesti. Verkkolynx, Tampere.',
    },
  },
  {
    key: 'sole',
    n: '+',
    audience: true,
    name: 'Palvelut toiminimiyrittäjille',
    nav: 'Palvelut toiminimiyrittäjille',
    line: 'Verkkosivut, näkyvyys ja pienet työkalut.',
    summary:
      'Edullisia ja henkilökohtaisia palveluita toiminimiyrittäjälle: verkkosivut, hakukonenäkyvyys, monikielinen sisältö, sparraus ja tarvittaessa pieni työkalu tai automaatio.',
    tags: ['Verkkosivut', 'SEO', 'Sisältö kolmella kielellä', 'Pienet automaatiot', 'Sparraus'],
    photo: 'lakePortrait',
    heroTitle: 'Palvelut, jotka mitoitetaan sinulle.',
    lede: 'Toiminimiyrittäjänä sinulla on kädet täynnä töitä, eikä aikaa verkkonäkyvyyden tai rutiinitöiden hoitamiseen ole usein tarpeeksi. Tarjoamme yksilöllistä ja kohtuuhintaista palvelua juuri sinun tarpeisiisi.',
    intro: [
      'Toiminimiyrittäjälle hinnalla on väliä. Mitoitamme työn niin, että se pysyy kohtuuhintaisena.',
      'Olitpa perustamassa omaa verkkokauppaa, haluamassa modernia verkkosivustoa tai etsimässä keinoja Pohjois-Amerikan markkinoille, olemme rinnallasi. Kun toistuva työvaihe syö aikaasi, voimme rakentaa myös pienen työkalun tai automaation.',
    ],
    problemsTitle: 'Tuttuja haasteita',
    problems: [
      {
        t: 'Aika ei riitä',
        d: 'Uusien mahdollisuuksien etsimiseen ja verkkonäkyvyyteen jää liian vähän aikaa.',
      },
      { t: 'Rutiinit syövät työaikaa', d: 'Sama käsityö toistuu viikosta toiseen.' },
      {
        t: 'Palvelut tuntuvat kalliilta',
        d: 'Yritystä eteenpäin vievät palvelut ovat usein pienyrittäjälle liian kalliita.',
      },
      {
        t: 'Kansainvälinen näkyvyys puuttuu',
        d: 'Suomalaisten, kanadalaisten tai amerikkalaisten asiakkaiden tavoittaminen vaatii oikeat kielet ja avainsanat.',
      },
    ],
    capabilitiesTitle: 'Mitä voimme tarjota sinulle',
    capabilities: [
      {
        t: 'Verkkosivustot ja verkkokaupat',
        d: 'Sivusto tai verkkokauppa, joka näyttää hyvältä ja toimii.',
        ex: 'Digitaalisen sisällön tai tuotteiden parissa toimiva toiminimi saa verkkokaupan, joka nostaa tuotteet esiin.',
      },
      {
        t: 'Hakukoneoptimointi (SEO)',
        d: 'Oikeat avainsanat ja tehokkaat strategiat, olipa tavoitteena suomalaiset, kanadalaiset tai amerikkalaiset asiakkaat.',
        ex: 'Näkyminen hauilla kuten ”digituotteet Suomessa”.',
      },
      {
        t: 'Sisältö kolmella kielellä',
        d: 'Asiantunteva sisällöntuotanto suomeksi, englanniksi ja ranskaksi.',
        ex: 'Blogiartikkeleita, tuote-esittelyjä tai kohdennettua mainossisältöä esimerkiksi Pohjois-Amerikan yleisölle.',
      },
      {
        t: 'Pienet työkalut ja automaatiot',
        d: 'Voimme rakentaa pienen työkalun tai automaation, kun toistuva työvaihe vie liikaa aikaa.',
        ex: 'Taulukon korvaava sovellus tai tietojen automaattinen siirto järjestelmästä toiseen.',
      },
      {
        t: 'Brändäys ja digitaalinen näkyvyys',
        d: 'Vahva brändi, sosiaalisen median kanavien hallinta ja houkutteleva verkkotunnus.',
      },
      {
        t: 'Henkilökohtainen sparraus ja opastus',
        d: 'Kahdenkeskinen asiantuntijatyö on tämän palvelun ydin: opastamme ja tarjoamme ratkaisuja juuri sinun tarpeisiisi.',
      },
    ],
    outcomesTitle: 'Miksi valita Verkkolynx',
    outcomes: [
      { t: 'Edullisuus', d: 'Kohtuuhintaisia ratkaisuja, jotka mitoitetaan tarpeen mukaan.' },
      { t: 'Räätälöitävyys', d: 'Palvelut suunnitellaan sinun tavoitteidesi mukaan.' },
      {
        t: 'Asiantuntemus',
        d: 'Vahva ohjelmisto-, SEO- ja dataosaaminen yhdistettynä kansainväliseen näkökulmaan.',
      },
      { t: 'Henkilökohtainen ote', d: 'Olemme rinnallasi, sparraamme ja teemme yhdessä.' },
    ],
    edgeTitle: 'Miksi palvelumme ovat edullisia',
    edge: [
      'Tiimimme jäsenet hallitsevat monia rooleja: siinä missä jotkut toimistot palkkaavat erillisiä asiantuntijoita dataan, kehitykseen ja verkkosuunnitteluun, meillä on osaaminen kaikilla näillä alueilla.',
      'Kun osaaminen on samassa tiimissä, toteutus sujuu nopeammin ja yhtenäisemmin.',
    ],
    bridge: [{ text: 'Tarvitsetko räätälöidyn työkalun?', to: 'software' }],
    related: ['web', 'software', 'marketing'],
    ctaTitle: 'Kerro, missä tarvitset apua.',
    ctaText:
      'Kerro tilanteesi, niin ehdotamme ratkaisua, joka sopii yrityksesi kokoon ja budjettiin.',
    meta: {
      title: 'Palvelut toiminimiyrittäjille',
      description:
        'Edullisia ja räätälöityjä palveluita toiminimiyrittäjille: verkkosivut, SEO, monikielinen sisältö, pienet työkalut ja automaatiot sekä henkilökohtainen sparraus.',
    },
  },
];
