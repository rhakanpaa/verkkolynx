import type { LegalSection } from './types';

export const privacyFi: { intro: string; sections: LegalSection[] } = {
  intro:
    'Tämä tietosuojaseloste selittää, miten Verkkolynx Ratkaisut Oy (Y-tunnus: 3486845-7, Tampere, Suomi) kerää, käyttää, säilyttää ja suojaa henkilötietojasi yleisen tietosuoja-asetuksen (GDPR) ja sovellettavan suomalaisen lainsäädännön mukaisesti.',
  sections: [
    {
      h: '1. Rekisterinpitäjä',
      p: [
        'Henkilötietojesi rekisterinpitäjä on:',
        'Verkkolynx Ratkaisut Oy, Takamaanrinne 9B 59, Tampere, Suomi. Sähköposti: asiakaspalvelu@verkkolynx.fi',
      ],
    },
    {
      h: '2. Mitä henkilötietoja keräämme',
      p: ['Saatamme kerätä seuraavia henkilötietotyyppejä:'],
      list: [
        'Identiteettitiedot: nimi, sähköpostiosoite, puhelinnumero ja yrityksen tiedot.',
        'Tekniset tiedot: IP-osoite, selaintyyppi, käyttöjärjestelmä ja verkkosivuston käyttötiedot.',
        'Tapahtumatiedot: laskutustiedot, ostohistoria ja maksutiedot.',
        'Markkinointiasetukset: viestintäasetukset ja vuorovaikutus markkinointisisällön kanssa.',
      ],
    },
    {
      h: '3. Miten keräämme tietojasi',
      p: ['Keräämme tietoja seuraavilla tavoilla:'],
      list: [
        'Suorat vuorovaikutukset: esimerkiksi kun otat meihin yhteyttä, rekisteröidyt palveluihimme tai teet ostoksen.',
        'Automaattiset teknologiat: kuten evästeet ja vastaavat seurantatekniikat verkkosivustollamme.',
        'Kolmannen osapuolen lähteet: esimerkiksi analytiikkapalveluntarjoajat ja maksujen käsittelijät.',
      ],
    },
    {
      h: '4. Miksi käsittelemme tietojasi',
      p: ['Käsittelemme henkilötietoja seuraaviin tarkoituksiin:'],
      list: [
        'Palvelujemme tarjoaminen ja hallinta.',
        'Viestiminen kanssasi päivityksistä, tarjouksista ja tuesta.',
        'Lainmukaisiin velvoitteisiin vastaaminen (esim. verotus ja kirjanpito).',
        'Verkkosivuston ja palveluiden parantaminen analytiikan avulla.',
        'Markkinointiviestien lähettäminen (suostumuksellasi).',
      ],
    },
    {
      h: '5. Käsittelyn oikeusperuste',
      p: ['Käsittelemme tietojasi seuraavien perusteiden mukaisesti:'],
      list: [
        'Sopimusvelvoitteet: esimerkiksi palvelusopimuksen täyttäminen.',
        'Lakisääteiset velvoitteet: esimerkiksi kirjanpitoon liittyvät määräykset.',
        'Oikeutetut edut: esimerkiksi palveluiden kehittäminen tai yhteydenottoihin vastaaminen.',
        'Suostumus: esimerkiksi markkinointiviestit, joissa suostumus vaaditaan.',
      ],
    },
    {
      h: '6. Miten jaamme tietojasi',
      p: ['Jaamme henkilötietojasi vain:'],
      list: [
        'Palveluntarjoajille, jotka auttavat palveluidemme toimittamisessa (esim. maksujen käsittelijät, IT-palveluntarjoajat).',
        'Viranomaisille, kun laki niin edellyttää.',
        'Kun annat nimenomaisen suostumuksen tietojen jakamiseen.',
      ],
      sub: [{ h: '', p: ['Emme myy henkilötietojasi kolmansille osapuolille.'] }],
    },
    {
      h: '7. Tietojen säilytys',
      p: ['Säilytämme henkilötietojasi vain niin kauan kuin:'],
      list: [
        'Tämä tietosuojaseloste edellyttää.',
        'Lainsäädäntö ja viranomaisvaatimukset edellyttävät.',
        'Tarvitaan riitojen ratkaisuun tai sopimusten täytäntöönpanoon.',
      ],
    },
    {
      h: '8. GDPR-oikeutesi',
      p: ['Sinulla on seuraavat oikeudet liittyen henkilötietoihisi:'],
      list: [
        'Pääsy: pyydä kopio tiedoista, joita säilytämme sinusta.',
        'Korjaus: pyydä virheellisten tai puutteellisten tietojen korjaamista.',
        'Poistaminen: pyydä tietojesi poistamista (”oikeus tulla unohdetuksi”).',
        'Rajoitus: pyydä käsittelyn rajoittamista tietyissä tilanteissa.',
        'Siirrettävyys: vastaanota tietosi rakenteellisessa ja yleisesti käytetyssä muodossa.',
        'Vastustaminen: vastusta käsittelyä, joka perustuu oikeutettuihin etuihin tai suoramarkkinointiin.',
        'Suostumuksen peruuttaminen: peruuta suostumus milloin tahansa.',
      ],
      sub: [
        { h: '', p: ['Oikeuksiesi käyttämiseksi ota yhteyttä: asiakaspalvelu@verkkolynx.fi.'] },
      ],
    },
    {
      h: '9. Tietoturva',
      p: [
        'Käytämme asianmukaisia teknisiä ja organisatorisia toimenpiteitä suojataksemme henkilötietosi luvattomalta käytöltä, menetykseltä tai väärinkäytöltä. Näitä ovat esimerkiksi salaus, turvalliset palvelimet ja säännölliset tietoturvatarkastukset.',
      ],
    },
    {
      h: '10. Evästeet ja seurantateknologiat',
      p: [
        'Verkkosivustomme käyttää evästeitä ja vastaavia teknologioita käyttäjäkokemuksen parantamiseen ja verkkosivuston käytön analysointiin. Voit hallita evästeasetuksia selaimesi asetuksista.',
      ],
    },
    {
      h: '11. Kansainväliset tietosiirrot',
      p: [
        'Jos siirrämme henkilötietoja EU-/ETA-alueen ulkopuolelle, varmistamme, että käytössä on asianmukaiset suojatoimet, kuten EU:n mallisopimuslausekkeet tai muut lailliset mekanismit.',
      ],
    },
    {
      h: '12. Tietosuojaselosteen päivitykset',
      p: [
        'Saatamme päivittää tätä tietosuojaselostetta aika ajoin heijastamaan käytäntöjemme tai lainsäädännön muutoksia. Päivitetty seloste julkaistaan verkkosivustollamme uudella voimaantulopäivällä.',
      ],
    },
    {
      h: '13. Ota yhteyttä',
      p: [
        'Jos sinulla on kysyttävää tai huolenaiheita tästä tietosuojaselosteesta tai tietojesi käsittelystä, ota yhteyttä: Verkkolynx Ratkaisut Oy, Takamaanrinne 9B 59, Tampere, Suomi. Sähköposti: asiakaspalvelu@verkkolynx.fi.',
        'Jos et ole tyytyväinen vastaukseemme, sinulla on oikeus tehdä valitus tietosuojavaltuutetulle: tietosuoja.fi.',
      ],
    },
  ],
};

export const termsFi: { intro: string; sections: LegalSection[] } = {
  intro:
    'Nämä käyttöehdot (”Käyttöehdot”) säätelevät Verkkolynx Ratkaisut Oy:n, Y-tunnus: 3486845-7, suomalaisen osakeyhtiön, ja sen asiakkaiden (”Käyttäjä” tai ”Asiakas”) välistä suhdetta. Käyttämällä Verkkolynxin palveluita hyväksyt seuraavat ehdot:',
  sections: [
    {
      h: '1. Yleiset tiedot',
      sub: [
        {
          h: '1.1 Yrityksen tiedot',
          list: [
            'Yrityksen nimi: Verkkolynx Ratkaisut Oy',
            'Y-tunnus: 3486845-7',
            'Toimiala: Tietojenkäsittely, palvelintilan vuokraus ja niihin liittyvät palvelut (63110).',
            'Pääkielet: Suomi. Palveluita saatavilla myös englanniksi ja ranskaksi pyynnöstä.',
          ],
        },
        {
          h: '1.2 Palveluiden laajuus',
          p: [
            'Verkkolynx erikoistuu tietoanalytiikkaan ja sisällöntuotantoon yrityksille, erityisesti verkkokaupan ja urheiluvälinemarkkinoiden aloilla.',
          ],
          list: [
            'Palveluihin kuuluvat muun muassa verkkosuunnittelu, hakukoneoptimointi (SEO), digitaalisten markkinapaikkojen hallinta ja konsultointi.',
          ],
        },
        {
          h: '1.3 Maantieteellinen toiminta-alue',
          p: [
            'Verkkolynx toimii pääasiassa Suomessa, mutta palvelee myös asiakkaita EU:n alueella ja globaalisti.',
          ],
        },
      ],
    },
    {
      h: '2. Asiakkaan sitoutuminen',
      sub: [
        {
          h: '2.1 Kelpoisuus',
          p: ['Asiakkaan tulee:'],
          list: [
            'Hyväksyä nämä käyttöehdot sekä mahdolliset sopimuksessa määritellyt ehdot.',
            'Varautua maksamaan palvelut ajallaan yksilöllisissä sopimuksissa määritetyn mukaisesti.',
          ],
        },
      ],
    },
    {
      h: '3. Hinnat ja maksut',
      sub: [
        {
          h: '3.1 Hinnoittelumalli',
          p: [
            'Hinnat määritellään asiakaskohtaisesti palveluiden laajuuden, tiheyden ja tyypin perusteella.',
          ],
        },
        {
          h: '3.2 Maksuehdot',
          p: [
            'Laskut toimitetaan kuukausittain, ja maksut erääntyvät kuukauden 1. päivänä tilisiirrolla Verkkolynxin pankkitilille.',
          ],
        },
        {
          h: '3.3 Palautusehdot',
          list: [
            'Palveluista ei pääsääntöisesti myönnetä hyvityksiä.',
            'Mikäli palvelut eivät täytä sovittuja mittareita, Verkkolynx korjaa puutteet ilman lisäkuluja.',
            'Pitkittyneistä viivästyksistä tai ongelmista voidaan Verkkolynxin harkinnan mukaan myöntää hyvityksiä tuleviin laskutuksiin.',
          ],
        },
      ],
    },
    {
      h: '4. Palveluiden toimitus',
      sub: [
        {
          h: '4.1 Räätälöinti',
          p: [
            'Palvelut räätälöidään asiakkaan tarpeisiin. Vaikka menetelmät voivat olla samankaltaisia, kaikki sisällöt ja lopputuotteet ovat uniikkeja, ellei muuta erikseen sovita.',
          ],
        },
        {
          h: '4.2 Kolmannen osapuolen työkalut ja integraatiot',
          p: [
            'Jos palveluissa käytetään kolmannen osapuolen työkaluja, alustoja tai rajapintoja, Asiakas hyväksyy kyseisten kolmansien osapuolten ehdot.',
          ],
        },
      ],
    },
    {
      h: '5. Asiakkaan velvollisuudet ja rajoitukset',
      sub: [
        {
          h: '5.1 Sallittu käyttö',
          p: [
            'Asiakkaat eivät saa esittää Verkkolynxin tuottamaa sisältöä tai palveluita omanaan kolmansille osapuolille tai käyttää niitä laittomasti tai luvattomasti.',
          ],
        },
        {
          h: '5.2 Immateriaalioikeudet',
          p: [
            'Verkkolynx omistaa logonsa ja menetelmänsä. Asiakkaalle luotu räätälöity sisältö voidaan lisensoida tai siirtää asiakkaalle yksilöllisten sopimusten mukaisesti.',
          ],
        },
      ],
    },
    {
      h: '6. Tietosuoja ja yksityisyys',
      sub: [
        {
          h: '6.1 Tietojen kerääminen ja käyttö',
          p: [
            'Verkkolynx kerää ja käyttää asiakkaiden tietoja yksinomaan sopimusvelvoitteiden täyttämiseksi.',
          ],
        },
        {
          h: '6.2 Yhteensopivuus',
          p: [
            'Verkkolynx noudattaa GDPR-asetusta ja muita sovellettavia Suomen ja EU:n tietosuojalakeja.',
          ],
        },
        {
          h: '6.3 Tietojen jakaminen',
          p: [
            'Asiakkaan tietoja ei jaeta kolmansille osapuolille, ellei se ole tarpeen palveluiden toteuttamiseksi tai lakisääteisten velvoitteiden täyttämiseksi.',
          ],
        },
      ],
    },
    {
      h: '7. Vastuu ja riidanratkaisu',
      sub: [
        {
          h: '7.1 Vastuunrajoitukset',
          p: [
            'Verkkolynx ei vastaa epäsuorista vahingoista, hallitsemattomista teknisistä ongelmista tai viivästyksistä, jotka johtuvat kolmansien osapuolten katkoksista, hakukonealgoritmien muutoksista tai muista ulkoisista tekijöistä.',
          ],
        },
        {
          h: '7.2 Sovellettava laki',
          p: [
            'Näitä ehtoja säätelee Suomen laki, ja EU:n kauppa- ja tietosuojasäädökset ovat sovellettavissa.',
          ],
        },
        {
          h: '7.3 Riidanratkaisu',
          p: [
            'Kaikki erimielisyydet tulee ensisijaisesti ratkaista suoraan Verkkolynxin kanssa. Jos ratkaisua ei löydy, riidat ratkaistaan Suomen tuomioistuimissa.',
          ],
        },
        {
          h: '7.4 Vahingonkorvausvelvollisuus',
          p: [
            'Asiakas sitoutuu korvaamaan Verkkolynxille kaikki vahingot ja kustannukset, jotka aiheutuvat palveluiden väärinkäytöstä tai kolmansien osapuolten oikeuksien loukkaamisesta.',
          ],
        },
      ],
    },
    {
      h: '8. Päivitykset ja sopimuksen päättäminen',
      sub: [
        {
          h: '8.1 Käyttöehtojen päivitykset',
          p: [
            'Asiakkaita tiedotetaan päivityksistä sähköpostitse tai ohjataan Verkkolynxin verkkosivuille, jossa ajantasaiset käyttöehdot ovat saatavilla.',
          ],
        },
        {
          h: '8.2 Sopimuksen päättäminen',
          p: [
            'Sopimusta ei voi päättää, jos maksurästejä on avoinna. Verkkolynx voi harkintansa mukaan hyväksyä kesken laskutuskauden tapahtuvan sopimuksen päättämisen ja laskuttaa toteutuneista palveluista.',
          ],
        },
      ],
    },
    {
      h: '9. Ylivoimainen este',
      p: [
        'Verkkolynx ei vastaa palvelukatkoksista, jotka johtuvat kohtuullisen hallintansa ulkopuolisista syistä, kuten luonnonkatastrofeista, lakoista tai viranomaistoimista.',
      ],
    },
    {
      h: '10. Yhteystiedot',
      p: [
        'Kysymyksissä tai ongelmatilanteissa ota yhteyttä: Verkkolynx Ratkaisut Oy, Takamaanrinne 9B 59, Tampere, Suomi. Sähköposti: asiakaspalvelu@verkkolynx.fi',
      ],
    },
  ],
};
