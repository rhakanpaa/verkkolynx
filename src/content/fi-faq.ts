import type { FaqCategory, FaqItem } from './types';

const i = (id: string, q: string, a: string | string[], list?: string[]): FaqItem => ({
  id,
  q,
  a: Array.isArray(a) ? a : [a],
  ...(list ? { list } : {}),
});

export const faqFi: FaqCategory[] = [
  {
    id: 'yleista',
    title: 'Yleistä',
    items: [
      i(
        'palvelut',
        'Mitä palveluita Verkkolynx tarjoaa?',
        'Verkkolynx Ratkaisut Oy tarjoaa viisi osaamisaluetta:',
        [
          'Ohjelmistokehitys ja automaatio: sisäiset työkalut, web-sovellukset, CMS-järjestelmät, integraatiot ja automaatiot.',
          'Data-analytiikka ja oivallukset: analyysit, ennusteet ja päätöstyökalut.',
          'Verkkokaupan järjestelmät ja optimointi: tuotedata, taksonomia, hinnoittelualgoritmit, haku ja integraatiot.',
          'Verkkosivut ja digitaaliset kokemukset: yrityssivut, verkkokaupan käyttöliittymät ja kampanjasivut.',
          'Markkinointi ja SEO: hakukoneoptimointi, kampanjat ja sisältö.',
        ],
      ),
      i(
        'toiminimiyrittajat',
        'Mitä palveluita Verkkolynx tarjoaa yksinyrittäjille ja toiminimiyrittäjille?',
        'Palvelut mitoitetaan yksinyrittäjän tarpeisiin ja budjettiin. Niihin kuuluu:',
        [
          'Verkkosivut ja verkkokaupat: edullisia ja helppokäyttöisiä ratkaisuja.',
          'Hakukoneoptimointi (SEO) tärkeillä avainsanoilla.',
          'Monikielinen sisällöntuotanto suomeksi ja englanniksi, pyynnöstä myös ranskaksi.',
          'Brändäys ja digitaalinen läsnäolo: sosiaalisen median kanavat, verkkotunnukset ja brändin rakentaminen.',
          'Pienet työkalut ja automaatiot, kun toistuva työ vie liikaa aikaa.',
          'Henkilökohtainen sparraus ja tuki.',
        ],
      ),
      i('sijainti', 'Missä Verkkolynx sijaitsee?', 'Verkkolynx toimii Tampereelta, Suomesta.'),
      i(
        'yhteys',
        'Miten voin ottaa yhteyttä Verkkolynxiin?',
        'Voit ottaa yhteyttä sähköpostitse osoitteessa asiakaspalvelu@verkkolynx.fi.',
      ),
      i(
        'aloitus',
        'Miten voin aloittaa Verkkolynxin kanssa?',
        'Ota yhteyttä sähköpostitse osoitteessa asiakaspalvelu@verkkolynx.fi ja sovi aloituskonsultaatio.',
      ),
      i(
        'arvot',
        'Mitkä ovat Verkkolynxin arvot?',
        'Arvomme ovat suomalainen ylpeys ja globaali näkökulma, tarkkuus joka tuottaa tulosta, kaveria ei jätetä, muutos luo mahdollisuuksia sekä tarkkuus kohtaa yksilöllisyyden. Kerromme niistä lisää Meistä-sivulla.',
      ),
      i(
        'edullisuus',
        'Miksi Verkkolynxin palvelut ovat kohtuuhintaisia?',
        'Tiimimme jäsenillä on laaja-alainen osaaminen. Siinä missä jotkut toimistot palkkaavat erillisiä asiantuntijoita data-analytiikkaan, brändäykseen ja verkkosivusuunnitteluun, meillä on kokemusta kaikilta näiltä alueilta. Kun osaaminen on samassa tiimissä, toteutus sujuu nopeammin ja yhtenäisemmin.',
      ),
      i(
        'yritystyypit',
        'Minkä tyyppisille yrityksille Verkkolynxin palvelut sopivat?',
        'Kaiken kokoisille yrityksille, jotka haluavat parantaa digitaalista näkyvyyttään, optimoida verkkokauppatoimintojaan tai hyödyntää data-analytiikkaa liiketoimintansa kasvattamiseen.',
      ),
      i(
        'toimialat',
        'Mihin toimialoihin Verkkolynx on erikoistunut?',
        'Palvelut sopivat eri toimialoille, mutta kokemusta on erityisesti verkkokaupasta, vähittäiskaupasta, urheiludatasta ja digitaalisista palveluista. Erityisosaamistamme on urheiluverkkokauppa, kuten jääkiekkovarusteiden, baseball-tarvikkeiden ja jalkapallotarvikkeiden myynti.',
      ),
      i(
        'ulkomaat',
        'Voiko Verkkolynx työskennellä yritysten kanssa Suomen ulkopuolella?',
        'Kyllä. Meillä on kokemusta kansainvälisten asiakkaiden kanssa työskentelystä. Asiakkaitamme ja yhteistyökumppaneitamme on Suomessa, Kanadassa, Yhdysvalloissa ja Euroopassa, ja tunnemme näiden alueiden erityispiirteet.',
      ),
      i(
        'historia',
        'Mikä on Verkkolynxin historia?',
        'Verkkolynx perustettiin vuonna 2024 visiolla yhdistää edistynyt data-analytiikka käytännön liiketoimintaratkaisuihin. Tiimimme koostuu data-analytiikan, ohjelmistokehityksen, verkkokehityksen ja digitaalisen markkinoinnin asiantuntijoista.',
      ),
      i(
        'tiimi',
        'Keitä Verkkolynxin takana on?',
        'Tiimiimme kuuluu ammattilaisia, joilla on taustaa matematiikassa, tilastotieteessä, tietojenkäsittelytieteessä, urheilussa ja yrittäjyydessä.',
      ),
      i(
        'nimi',
        'Mitä nimi ”Verkkolynx” tarkoittaa?',
        '”Verkko” tarkoittaa suomeksi verkkoa tai internetiä, ja ”lynx” (ilves) symboloi ketteryyttä ja tarkkaa näkemystä. Yhdessä nimi kuvaa kykyämme navigoida datan monimutkaisissa verkostoissa.',
      ),
      i(
        'missio',
        'Mikä on Verkkolynxin missio?',
        'Autamme kaiken kokoisia yrityksiä muuttamaan datan käytännön oivalluksiksi ja käytännön työkaluiksi.',
      ),
      i(
        'aukioloajat',
        'Milloin Verkkolynx on tavoitettavissa?',
        'Työaikamme on maanantaista perjantaihin klo 9–17 Suomen aikaa. Sovimme tapaamisia joustavasti myös näiden aikojen ulkopuolelle, jotta voimme palvella asiakkaita Kanadassa ja Yhdysvalloissa.',
      ),
    ],
  },
  {
    id: 'ohjelmistot',
    title: 'Ohjelmistokehitys ja automaatio',
    items: [
      i(
        'mita-ohjelmistoja',
        'Mitä ohjelmistoja Verkkolynx voi rakentaa?',
        'Voimme rakentaa räätälöityjä ohjelmistoja työnkulun ympärille. Esimerkkejä:',
        [
          'Sisäiset työkalut ja hallintakäyttöliittymät',
          'Web-sovellukset ja asiakas- tai työntekijäportaalit',
          'Automaatiot ja automatisoidut datavirrat',
          'Räätälöidyt CMS- ja datanhallintajärjestelmät',
          'API-integraatiot ja järjestelmien väliset liitokset',
          'Päätöstyökalut: hinnoittelu, ennusteet, haku, suosittelu ja pisteytys',
        ],
      ),
      i(
        'sisaiset-tyokalut',
        'Mitä sisäisillä työkaluilla tarkoitetaan?',
        'Sovelluksia ja käyttöliittymiä, joilla työntekijät hallitsevat dataa, tuotteita, sisältöä, asiakkaita tai työnkulkuja. Ne korvaavat usein taulukoita ja käsin tehtävää työtä.',
      ),
      i(
        'sovellus-vai-sivusto',
        'Mitä eroa on web-sovelluksella ja verkkosivustolla?',
        'Verkkosivusto esittelee sisältöä kävijöille. Web-sovelluksessa on sovelluslogiikka, tunnistautuminen, datankäsittely ja työnkulut, ja sitä käytetään työn tekemiseen. Julkiset sivut kuuluvat palveluun Verkkosivut ja digitaaliset kokemukset.',
      ),
      i(
        'automaatio',
        'Mitä voi automatisoida?',
        'Toistuvia, sääntöihin perustuvia työvaiheita, kuten datan siirtoa järjestelmästä toiseen, tuotetietojen käsittelyä, raportointia ja ilmoituksia. Selvitämme ensin, kannattaako työvaihe automatisoida.',
      ),
      i(
        'oma-cms',
        'Milloin tarvitaan räätälöity CMS?',
        'Kun tavallinen verkkosivujen CMS ei sovi rakenteisen tiedon hallintaan, esimerkiksi tuote- tai katalogidatan, monimutkaisten käyttöoikeuksien tai olemassa olevan tietokannan hallintanäkymän tapauksessa.',
      ),
      i(
        'jarjestelmaintegraatiot',
        'Voiko olemassa olevia järjestelmiä yhdistää?',
        'Kyllä. Yhdistämme rajapintojen, tietokantojen ja tiedostojen kautta verkkokauppa-alustoja, sisäisiä järjestelmiä ja kolmannen osapuolen palveluja, kuten maksujärjestelmiä, sosiaalisen median alustoja ja analytiikkatyökaluja.',
      ),
      i(
        'data-sovellukset',
        'Voiko analyysista rakentaa sovelluksen?',
        'Kyllä, kun analyysiä tarvitaan toistuvasti. Siitä voi tulla ennustetyökalu, pisteytysmalli, seurantanäkymä tai interaktiivinen analyysisovellus. Kaikesta analyysistä ei tarvitse rakentaa ohjelmistoa: usein selkeä raportti riittää.',
      ),
      i(
        'kehitysprosessi',
        'Miten ohjelmistokehitys etenee?',
        'Alkuhaastattelussa ja työnkulun kartoituksessa selvitämme tavoitteet. Sen jälkeen suunnittelemme datamallin, logiikan ja käyttöliittymän, rakennamme ja testaamme vaiheittain ja otamme ratkaisun käyttöön. Työskentelemme vaiheittain, joten näet edistymisen ja voit antaa palautetta matkan varrella.',
      ),
      i(
        'omistus-ja-yllapito',
        'Kuka omistaa ohjelmiston, ja voiko sitä ylläpitää ja kehittää?',
        'Omistus- ja käyttöoikeudet sovitaan projektikohtaisesti. Toimitamme dokumentaation ja koulutamme tiimisi, ja tarjoamme ylläpitoa ja jatkokehitystä.',
      ),
      i(
        'laajuus-ja-turva',
        'Kuinka laajoja järjestelmiä voitte rakentaa, ja miten tietoturva hoidetaan?',
        'Pienestä yhden tehtävän työkalusta laajaan järjestelmään, jota kehitetään vaiheittain. Tietoturva ja käyttöoikeudet, kuten roolit ja tunnistautuminen, suunnitellaan mukaan alusta asti, ja noudatamme turvallisia koodauskäytäntöjä sekä GDPR-vaatimuksia.',
      ),
    ],
  },
  {
    id: 'data-analytiikka',
    title: 'Data-analytiikka',
    items: [
      i(
        'analytiikan-hyodyt',
        'Miten data-analytiikkapalvelut hyödyttävät yritystäni?',
        'Palvelumme perustuvat edistyneeseen matematiikan ja tilastotieteen osaamiseen. Etsimme piileviä mahdollisuuksia, optimoimme suorituskykyä ja autamme tekemään perusteltuja päätöksiä.',
      ),
      i(
        'verkkokaupan-optimointi',
        'Mitä verkkokaupan optimointi tarkoittaa Verkkolynxin näkökulmasta?',
        'Verkkokaupan optimointi sisältää tuotekategorioiden kehittämisen, tuotetietojen optimoinnin ja dynaamisten hinnoittelualgoritmien luomisen. Tavoitteena on sujuvoittaa asiakaspolkua, parantaa hakutoimintoja ja tukea myyntiä.',
      ),
      i(
        'vahan-dataa',
        'Minulla ei ole paljon dataa – voitteko auttaa saamaan lisää?',
        'Kyllä. Voimme rakentaa tarpeisiisi räätälöityjä aineistoja keräämällä, järjestämällä ja visualisoimalla dataa. Merkityksellisiä havaintoja voi saada, vaikka lähtökohtana olisi vain vähän dataa.',
      ),
      i(
        'miksi-data',
        'Miksi data on tärkeää?',
        'Hyvin organisoitu data helpottaa päätöksentekoa, kirjanpitoa ja liiketoiminnan hallintaa ja parantaa asiakaskokemusta. Rakenteinen data on perusta luotettaville raporteille ja automaatiolle.',
      ),
      i(
        'ennakoiva',
        'Miten Verkkolynx lähestyy ennakoivaa analytiikkaa?',
        'Kehitämme ja hyödynnämme tilastomalleja ja koneoppimistekniikoita, joilla ennustamme trendejä, tunnistamme riskejä ja löydämme kasvumahdollisuuksia.',
      ),
      i(
        'dynaaminen-hinnoittelu',
        'Mitä dynaaminen hinnoittelu on, ja miten Verkkolynx voi toteuttaa sen?',
        'Dynaaminen hinnoittelu mukauttaa tuotteiden tai palveluiden hintoja reaaliajassa kysynnän, kilpailun ja markkinatrendien perusteella. Kehitämme yrityksellesi räätälöityjä algoritmeja, joiden avulla hinnoittelu pysyy kilpailukykyisenä ja kannattavana.',
      ),
      i(
        'datan-laatu',
        'Voiko Verkkolynx parantaa datani laatua?',
        'Kyllä. Parannamme datan laatua puhdistamalla, järjestämällä ja standardoimalla tietokokonaisuuksia, jotta datasi on tarkkaa, luotettavaa ja valmista päätöksentekoon.',
      ),
      i(
        'asiakaskayttaytyminen',
        'Miten Verkkolynx voi auttaa ymmärtämään asiakaskäyttäytymistäni?',
        'Analysoimme asiakaskäyttäytymistä segmentointimenetelmien, tilastomallien ja trendianalyysin avulla. Tunnistamme ostotottumuksiin, mieltymyksiin ja sitoutumiseen liittyviä säännönmukaisuuksia, joita voi hyödyntää asiakaspysyvyyden ja myynnin kehittämisessä.',
      ),
      i(
        'reaaliaikainen',
        'Tarjoaako Verkkolynx reaaliaikaista analytiikkaa?',
        'Kyllä. Toteutamme reaaliaikaisia analytiikkaratkaisuja, joilla voit seurata keskeisiä mittareita esimerkiksi myynnistä, varastonhallinnasta tai verkkosivuston suorituskyvystä.',
      ),
      i(
        'analytiikan-toimialat',
        'Mitä toimialoja data-analytiikkapalvelut hyödyttävät eniten?',
        'Asiantuntemuksemme on erityisen hyödyllistä verkkokaupassa, vähittäiskaupassa, urheiludatassa ja digitaalisissa palveluissa. Menetelmämme ovat kuitenkin räätälöitävissä minkä tahansa toimialan tarpeisiin.',
      ),
      i(
        'tekoaly',
        'Voiko Verkkolynx auttaa tekoälyyn perustuvassa analytiikassa?',
        'Kyllä. Käytämme koneoppimista ja tekoälyä tarvittaessa esimerkiksi ennusteisiin, suosituksiin ja prosessien automatisointiin. Menetelmä valitaan tehtävän mukaan.',
      ),
      i(
        'suuret-datamaarat',
        'Miten Verkkolynx käsittelee suuria tietokokonaisuuksia?',
        'Meillä on kokemusta suurten tietokokonaisuuksien hallinnasta ja analysoinnista, esimerkiksi hajautetusta laskennasta ja pilvipohjaisista ratkaisuista.',
      ),
      i(
        'datan-turvallisuus',
        'Kuinka turvallista datani on analytiikkapalveluissa?',
        'Tietoturva huomioidaan analytiikkapalveluissa alusta asti. Suojaamme datasi asianmukaisilla toimenpiteillä, kuten käyttöoikeuksien rajaamisella ja tarvittaessa salauksella.',
      ),
      i(
        'analytiikkakoulutus',
        'Tarjoaako Verkkolynx koulutusta data-analytiikkatyökaluihin?',
        'Kyllä. Koulutusten avulla tiimisi oppii käyttämään ja tulkitsemaan data-analytiikkatyökaluja ja tekemään dataan perustuvia päätöksiä itsenäisesti.',
      ),
    ],
  },
  {
    id: 'verkkosivut',
    title: 'Verkkosivut',
    items: [
      i(
        'sivujen-ero',
        'Miten verkkosivujen suunnittelu- ja kehityspalvelumme eroavat muista?',
        'Keskitymme datalähtöiseen suunnitteluun, jotta käyttäjäkokemus ja toiminnallisuus tukevat mitattavia tavoitteita. Räätälöimme sivustot tarpeidesi mukaan, olipa kyse uuden alustan lanseerauksesta tai nykyisen päivittämisestä.',
      ),
      i(
        'monikielisyys',
        'Tarjoaako Verkkolynx monikielistä verkkosivusuunnittelua ja SEO:ta?',
        'Kyllä. Suunnittelemme monikielisiä verkkosivuja ja optimoimme ne hakukoneille eri alueille ja kielille. Pääkielemme ovat suomi ja englanti, ja ranskaksi työskentelemme pyynnöstä.',
      ),
      i(
        'alustat',
        'Millä alustoilla Verkkolynx työskentelee?',
        'Työskentelemme mm. WordPressin, Shopifyn, Magenton ja räätälöityjen järjestelmien parissa. Varmistamme, että valittu alusta sopii tarpeisiisi ja skaalautuvuusvaatimuksiisi.',
      ),
      i(
        'uudistus',
        'Voiko Verkkolynx uudistaa nykyisen verkkosivuni?',
        'Kyllä. Päivitämme ja parannamme nykyisiä sivustoja toiminnallisuuden, käyttäjäkokemuksen ja ilmeen osalta, olipa kyse pienestä päivityksestä tai täydellisestä uudistuksesta.',
      ),
      i(
        'saavutettavuus',
        'Miten varmistatte, että verkkosivut ovat käyttäjäystävällisiä ja saavutettavia?',
        'Painotamme käyttäjäkokemusta ja saavutettavuutta suunnitteluprosessissa. Tavoitteena on WCAG-ohjeiden (Web Content Accessibility Guidelines) mukainen saavutettavuus.',
      ),
      i(
        'mobiili',
        'Tarjoaako Verkkolynx mobiiliystävällistä verkkosivusuunnittelua?',
        'Kyllä. Kaikki kehittämämme verkkosivut optimoidaan mobiililaitteille responsiivisilla suunnittelutekniikoilla, jotta sivusto toimii älypuhelimilla, tableteilla ja tietokoneilla.',
      ),
      i(
        'verkkokauppatoiminnot',
        'Voiko Verkkolynx lisätä verkkosivulleni verkkokauppatoimintoja?',
        'Kyllä. Toteutamme verkkokauppaominaisuuksia ostoskoreista ja maksujärjestelmistä varastonhallintaan ja asiakastileihin.',
      ),
      i(
        'raataloity-vai-pohja',
        'Tarjoatteko räätälöityä verkkokehitystä vai käytättekö valmiita malleja?',
        'Molempia tarpeidesi ja budjettisi mukaan. Voimme luoda täysin räätälöidyn sivuston alusta alkaen tai mukauttaa olemassa olevia malleja brändiisi ja vaatimuksiisi.',
      ),
      i(
        'sivujen-turvallisuus',
        'Miten Verkkolynx varmistaa verkkosivujen turvallisuuden?',
        'Toteutamme alan yleisiä toimenpiteitä, kuten SSL-sertifikaatteja, turvallisia koodauskäytäntöjä ja säännöllisiä päivityksiä. Ylläpito ja seuranta sovitaan tarpeen mukaan.',
      ),
      i(
        'yllapito',
        'Voiko Verkkolynx auttaa ylläpidossa ja päivityksissä lanseerauksen jälkeen?',
        'Kyllä. Jatkuvat tukipalvelut ja ylläpito pitävät sivustosi ajan tasalla, turvallisena ja toimivana. Tämä sisältää sisällön päivitykset, teknisen tuen ja uusien ominaisuuksien lisäämisen tarpeen mukaan.',
      ),
      i(
        'sivun-kesto',
        'Kuinka kauan verkkosivun rakentaminen kestää?',
        'Aikataulu riippuu projektin monimutkaisuudesta. Yksinkertaiset sivut voivat valmistua muutamassa viikossa, monimutkaisemmat sivustot voivat kestää useita kuukausia. Suunnitteluvaiheessa toimitamme yksityiskohtaisen aikataulun.',
      ),
      i(
        'sivuprosessi',
        'Miten Verkkolynx toimii verkkosivujen kehitysprojekteissa?',
        'Prosessi alkaa alkuhaastattelulla, jossa selvitämme tavoitteesi. Sen jälkeen suunnittelemme wireframe-mallit ja käyttöliittymäluonnokset. Hyväksyntäsi jälkeen siirrymme kehitykseen, testaukseen ja julkaisuun. Pidämme sinut mukana jokaisessa vaiheessa.',
      ),
      i(
        'hosting',
        'Tarjoaako Verkkolynx hosting- ja verkkotunnuspalveluja?',
        'Emme tarjoa hosting-palveluja itse, mutta autamme valitsemaan luotettavan hosting-palveluntarjoajan ja varaamaan brändiäsi parhaiten edustavat verkkotunnukset. Hoidamme myös ammattimaisen sähköpostin käyttöönoton (esim. Google Workspace).',
      ),
      i(
        'sivujen-sisalto',
        'Miten Verkkolynx käsittelee verkkosivujen sisällöntuotantoa?',
        'Tarjoamme sisällöntuotantoa, kuten tekstien kirjoittamista ja multimediaa, suomeksi ja englanniksi, pyynnöstä myös ranskaksi.',
      ),
      i(
        'cms',
        'Mitä sisällönhallintajärjestelmiä (CMS) Verkkolynx suosittelee?',
        'Työskentelemme esimerkiksi WordPressin, Drupalin ja Joomlan parissa. Suosittelemme tarpeisiisi parhaiten sopivaa järjestelmää skaalautuvuuden, helppokäyttöisyyden ja toiminnallisuuden perusteella.',
      ),
      i(
        'seo-sivuissa',
        'Sisältyykö hakukoneoptimointi verkkosivujen kehitykseen?',
        'Kyllä. Tekninen SEO on mukana sivuston kehityksessä alusta asti, joten sivusto on hakukoneille valmis jo julkaisuhetkellä.',
      ),
      i(
        'sivuston-siirto',
        'Voiko Verkkolynx auttaa verkkosivuston siirtämisessä?',
        'Kyllä. Autamme siirtämään sivustosi uudelle alustalle tai hosting-palveluntarjoajalle mahdollisimman vähäisellä käyttökatkolla ja huolehdimme, että data ja toiminnallisuudet säilyvät.',
      ),
    ],
  },
  {
    id: 'markkinointi-seo',
    title: 'Markkinointi ja SEO',
    items: [
      i(
        'nakyvyys',
        'Miten markkinointi- ja SEO-palvelunne parantavat yritykseni näkyvyyttä?',
        'Suunnittelemme kohdennettuja markkinointistrategioita ja toteutamme SEO-tekniikoita, jotka parantavat hakukonenäkyvyyttä, tuovat sivustolle sopivia kävijöitä ja tukevat konversioita.',
      ),
      i(
        'some',
        'Tarjoaako Verkkolynx sosiaalisen median markkinointia?',
        'Kyllä. Suunnittelemme ja hoidamme sosiaalisen median sisältöä ja kampanjoita brändisi verkkonäkyvyyden vahvistamiseksi.',
      ),
      i(
        'sisaltomarkkinointi',
        'Miten Verkkolynx lähestyy sisältömarkkinointia ja sisällöntuotantoa?',
        'Kehitämme sisältöstrategioita ja tuotamme blogikirjoituksia, artikkeleita, infografiikkaa, videoita ja sosiaalisen median sisältöä. Sisältö kirjoitetaan brändisi äänellä kohderyhmälle ja tukee SEO:ta.',
      ),
      i(
        'maksetut-kampanjat',
        'Voiko Verkkolynx auttaa maksettujen mainoskampanjoiden kanssa?',
        'Kyllä. Hallinnoimme kampanjoita alustoilla kuten Google Ads, Facebook Ads ja LinkedIn Ads. Työhön kuuluvat avainsanatutkimus, yleisön kohdentaminen, mainosten luominen ja jatkuva optimointi.',
      ),
      i(
        'mittaaminen',
        'Miten Verkkolynx mittaa markkinointistrategioidensa onnistumista?',
        'Käytämme keskeisiä suorituskykymittareita (KPI), kuten verkkosivuston liikennettä, konversio- ja klikkausprosentteja sekä sitoutumismittareita. Säännölliset raportit pitävät sinut ajan tasalla.',
      ),
      i(
        'monikielinen-seo',
        'Tarjoaako Verkkolynx monikielisiä SEO-palveluja?',
        'Kyllä. Optimoimme sivustosi eri kielille ja alueille suomeksi ja englanniksi, pyynnöstä myös ranskaksi.',
      ),
      i(
        'paikallinen-seo',
        'Voiko Verkkolynx parantaa paikallista SEO-näkyvyyttä?',
        'Kyllä. Paikallinen näkyvyys sisältää muun muassa Google-yritysprofiilin optimoinnin, paikallisten hakemistojen rakentamisen ja aluekohtaisen sisällön luomisen.',
      ),
      i(
        'markkinoinnin-ero',
        'Mikä erottaa Verkkolynxin markkinointistrategiat muista?',
        'Datalähtöinen lähestymistapa. Kaikki toimet räätälöidään juuri sinun kohderyhmällesi ja liiketoimintatavoitteillesi, ja niiden vaikutus mitataan.',
      ),
      i(
        'sahkoposti',
        'Tarjoatteko sähköpostimarkkinointipalveluja?',
        'Kyllä. Luomme ja hallinnoimme sähköpostikampanjoita, joihin kuuluvat uutiskirjeiden suunnittelu, automaatioasetukset ja suorituskyvyn analysointi.',
      ),
      i(
        'kampanja-analytiikka',
        'Tarjoatteko analytiikkaa markkinointikampanjoille?',
        'Kyllä. Toimitamme yksityiskohtaisia analyyseja ja säännöllisiä raportteja, joissa on mm. sitoutumis- ja konversioprosentit sekä ROI.',
      ),
      i(
        'brandi',
        'Miten Verkkolynx lähestyy brändäystä ja brändistrategiaa?',
        'Autamme kehittämään yhtenäisen brändistrategian, joka kattaa identiteetin, viestinnän ja aseman. Se sisältää markkinatutkimusta, kilpailija-analyysia ja brändiohjeiden luomista.',
      ),
    ],
  },
  {
    id: 'tuki-koulutus',
    title: 'Tuki ja koulutus',
    items: [
      i(
        'raataloidyt-ratkaisut',
        'Miten Verkkolynx lähestyy yrityksille räätälöityjä ratkaisuja?',
        'Teemme tiivistä yhteistyötä asiakkaidemme kanssa ymmärtääksemme heidän tarpeensa ja haasteensa. Ratkaisut perustuvat dataan ja tukevat liiketoimintatavoitteitasi.',
      ),
      i(
        'ei-urheilua',
        'Minulla ei ole urheiluun liittyvää verkkokauppaa – sopiiko Verkkolynx silti?',
        'Kyllä. Data on dataa, ja osaamisemme data-analytiikassa, verkkosivustokehityksessä, SEO:ssa ja verkkokaupan optimoinnissa voidaan mukauttaa vähittäiskaupan, matkailun, digitaalisten palvelujen tai minkä tahansa muun alan tarpeisiin.',
      ),
      i(
        'tulokset',
        'Minkälaisia tuloksia voin odottaa?',
        'Tulokset vaihtelevat projektin mukaan. Tyypillisiä tavoitteita ovat parempi verkkosivuston suorituskyky, kasvava liikenne ja konversio, parempi asiakaskokemus sekä sujuvammat verkkokaupan prosessit. Painotamme mitattavia tuloksia.',
      ),
      i(
        'projektin-jalkeen',
        'Tarjoaako Verkkolynx tukea projektin valmistumisen jälkeen?',
        'Kyllä. Jatkuva tuki ja ylläpito kattavat säännölliset sivustopäivitykset ja SEO-strategioiden mukauttamisen uusiin trendeihin.',
      ),
      i(
        'tiimikoulutus',
        'Tarjoaako Verkkolynx koulutusta yrityksen omille tiimeille?',
        'Kyllä. Koulutuksen aiheita voivat olla esimerkiksi data-analytiikan tulkinta, verkkokaupan parhaat käytännöt tai SEO:n hallinta.',
      ),
      i(
        'koulutuksen-sisalto',
        'Millaista koulutusta Verkkolynx tarjoaa?',
        'Koulutusta data-analytiikkatyökalujen käyttöön, verkkosivuston sisällönhallintaan, SEO:n parhaisiin käytäntöihin, sosiaalisen median hallintaan ja digitaalisiin markkinointistrategioihin. Koulutukset räätälöidään tiimisi tarpeiden mukaan.',
      ),
      i(
        'tekninen-tuki',
        'Tarjoatteko teknistä tukea toteuttamillenne ratkaisuille?',
        'Kyllä. Tarjoamme teknistä tukea toteuttamillemme ratkaisuille, ja ongelmat käsitellään mahdollisimman nopeasti.',
      ),
      i(
        'muutosjohtaminen',
        'Voiko Verkkolynx auttaa muutosjohtamisessa käyttöönoton aikana?',
        'Kyllä. Uusien järjestelmien käyttöönotto voi olla haastavaa, joten tarjoamme muutosjohtamisen tukea, mukaan lukien henkilöstön koulutus ja prosessien dokumentointi.',
      ),
    ],
  },
  {
    id: 'tietoturva',
    title: 'Tietoturva',
    items: [
      i(
        'tietoturva',
        'Miten Verkkolynx varmistaa tietoturvan palveluissaan?',
        'Tietoturva huomioidaan alusta asti. Noudatamme alan hyviä käytäntöjä ja GDPR-säädöksiä.',
      ),
      i(
        'varmuuskopiot',
        'Tarjoaako Verkkolynx varmuuskopiointi- ja palautuspalveluja?',
        'Kyllä. Varmuuskopiointi ja palautus suunnitellaan projektin tarpeiden mukaan, jotta tiedot voidaan palauttaa tietojen katoamisen tai vahingoittumisen sattuessa.',
      ),
      i(
        'tietosuojalait',
        'Miten Verkkolynx noudattaa kansainvälisiä tietosuojalakeja?',
        'Olemme perehtyneet kansainvälisiin tietosuojasäädöksiin, mukaan lukien GDPR EU:ssa ja CCPA Yhdysvalloissa.',
      ),
      i(
        'tietomurrot',
        'Mitä toimenpiteitä Verkkolynx tekee tietomurtojen estämiseksi?',
        'Suojaamme ratkaisut asianmukaisilla teknisillä ja organisatorisilla toimenpiteillä. Suojaustoimet valitaan projektin tarpeiden ja käsiteltävien tietojen arkaluonteisuuden mukaan.',
      ),
      i(
        'pci-dss',
        'Onko Verkkolynxillä kokemusta PCI DSS -vaatimustenmukaisuudesta verkkokaupoissa?',
        'Kyllä. Autamme verkkokauppa-alustoilla huomioimaan PCI DSS -vaatimukset luottokorttitietojen turvallisessa käsittelyssä.',
      ),
      i(
        'turvallinen-koodaus',
        'Miten varmistatte kehittämienne verkkosivustojen ja sovellusten turvallisuuden?',
        'Noudatamme turvallisia koodauskäytäntöjä ja testaamme ratkaisut huolellisesti. Tietoturva huomioidaan kehitysprosessin jokaisessa vaiheessa.',
      ),
      i(
        'tietosuojakaytanto',
        'Voiko Verkkolynx auttaa tietosuojakäytännön laatimisessa sivustolleni?',
        'Kyllä. Autamme laatimaan tietosuojakäytännöt ja käyttöehdot, jotka noudattavat lakisääteisiä vaatimuksia ja kertovat selkeästi tietojen käsittelystä.',
      ),
      i(
        'kayttooikeudet',
        'Miten Verkkolynx hallitsee käyttäjäoikeuksia ja pääsynvalvontaa?',
        'Suunnittelemme käyttöoikeudet niin, että arkaluonteisiin tietoihin on pääsy vain valtuutetuilla henkilöillä, esimerkiksi roolipohjaisilla käyttöoikeuksilla ja tunnistautumisella. Tarkemmat vaatimukset sovitaan projektikohtaisesti.',
      ),
      i(
        'gdpr',
        'Voiko Verkkolynx auttaa GDPR-vaatimustenmukaisuudessa?',
        'Kyllä. Autamme sovittamaan tietojen käsittelykäytännöt GDPR-vaatimuksiin, mukaan lukien käsittelyprosessit, suostumusten hallinta ja käytäntöjen dokumentointi.',
      ),
    ],
  },
  {
    id: 'projektinhallinta',
    title: 'Projektinhallinta',
    items: [
      i(
        'pienyritykset',
        'Voiko Verkkolynx auttaa pieniä yrityksiä, vai onko se suunnattu suurille?',
        'Palvelumme ovat skaalautuvia ja suunniteltu kaiken kokoisille yrityksille. Olitpa suuri yritys tai toiminimi, työskentelemme kanssasi tavoitteidesi saavuttamiseksi.',
      ),
      i(
        'projektin-kesto',
        'Kuinka kauan tyypillinen projekti kestää?',
        'Aikataulu vaihtelee laajuuden mukaan. Pienet tehtävät, kuten SEO-auditoinnit, voivat kestää muutamia viikkoja, kun taas sivustouudistukset tai algoritmien kehitys voivat kestää useita kuukausia. Suunnitteluvaiheessa toimitamme selkeän aikataulun.',
      ),
      i(
        'hinnoittelu',
        'Miten Verkkolynx hinnoittelee ja budjetoi projektinsa?',
        'Hinta räätälöidään projektin laajuuden mukaan. Alkukonsultaation jälkeen saat ehdotuksen laajuudesta, aikataulusta ja hinnasta.',
      ),
      i(
        'skaalautuvuus',
        'Voiko Verkkolynx skaalata ratkaisuja liiketoimintani kasvaessa?',
        'Kyllä. Suunnittelemme järjestelmät niin, että ne kasvavat yrityksesi mukana ja käsittelevät lisääntyvää liikennettä, tietomäärää ja operatiivista monimutkaisuutta.',
      ),
      i(
        'menetelmat',
        'Mitä projektinhallintamenetelmiä Verkkolynx käyttää?',
        'Työskentelemme lyhyissä vaiheissa ja sovimme seuraavasta askeleesta kanssasi sitä mukaa, joten projekti pysyy joustavana.',
      ),
      i(
        'viestinta',
        'Miten Verkkolynx viestii projektin aikana?',
        'Viestimme säännöllisesti ja avoimesti. Työskentelet suoraan ratkaisua rakentavien ihmisten kanssa, ja annamme päivityksiä, keräämme palautetta ja vastaamme kysymyksiisi sähköpostitse ja videokokouksissa.',
      ),
      i(
        'yhteistyomallit',
        'Millaisia yhteistyömalleja on tarjolla (esim. kiinteä hinta, tuntiperusteinen)?',
        'Kiinteähintaisia sopimuksia tarkasti määritellyille projekteille ja tuntiperusteisia sopimuksia joustavuutta vaativille projekteille sekä tilaus- ja projektipohjaisia malleja.',
      ),
      i(
        'useita-projekteja',
        'Voiko Verkkolynx hoitaa useita projekteja samanaikaisesti?',
        'Kyllä. Resurssit jaetaan niin, että jokainen projekti saa tarvitsemansa huomion ja aikataulut pitävät.',
      ),
      i(
        'aikataulu-budjetti',
        'Miten projektit pysyvät aikataulussa ja budjetissa?',
        'Määritämme selkeät aikataulut ja budjetit suunnitteluvaiheessa ja seuraamme edistymistä projektinhallintatyökaluilla. Säännölliset tarkistuspisteet auttavat ratkaisemaan poikkeamat nopeasti.',
      ),
      i(
        'muuttuvat-tarpeet',
        'Mitä tapahtuu, jos tarpeeni muuttuvat projektin aikana?',
        'Yksi ydinarvoistamme on ”Muutos luo mahdollisuuksia”. Keskustelemme muutoksista, arvioimme vaikutukset aikatauluun ja budjettiin ja mukautamme projektisuunnitelmaa, jotta projekti pysyy linjassa tavoitteidesi kanssa.',
      ),
      i(
        'skaalautuvuustuki',
        'Tarjoaako Verkkolynx tukea projektin jälkeen skaalautuvuuskysymyksissä?',
        'Kyllä. Jatkuva tuki ja ylläpito kattavat suorituskyvyn seurannan, tarvittavat säädöt ja päivitykset liiketoimintasi kasvaessa.',
      ),
      i(
        'kansainvalinen-kokemus',
        'Kuinka kokenut Verkkolynx on kansainvälisten projektien hallinnassa?',
        'Meillä on kokemusta projektien hallinnasta eri maissa ja aikavyöhykkeillä. Koordinoimme kansainvälisten sidosryhmien kanssa ja huomioimme kulttuuriset erityispiirteet. Asiakkaitamme on Suomessa, Kanadassa, Yhdysvalloissa ja Euroopassa.',
      ),
      i(
        'tiimin-koko',
        'Kuinka suuri Verkkolynxin tiimi on?',
        'Olemme pieni, monialainen tiimi: data-analytiikka, ohjelmistokehitys, verkkokehitys ja digitaalinen markkinointi. Pienessä tiimissä työskentelet suoraan tekijöiden kanssa.',
      ),
      i(
        'referenssit',
        'Voiko Verkkolynx tarjota referenssejä tai asiakastutkimuksia?',
        'Referenssejä ja esimerkkejä työstämme voi pyytää sähköpostitse.',
      ),
      i(
        'dokumentaatio',
        'Tarjoatteko projektidokumentaatiota ja tietojen siirtoa projektin jälkeen?',
        'Kyllä. Toimitamme projektidokumentaation ja huolehdimme tiedonsiirrosta koulutuksen ja tuen avulla, jotta tiimisi voi hallita ja ylläpitää ratkaisuja.',
      ),
    ],
  },
];
