import type { StaticImageData } from 'next/image';
import type { PhotoKey } from '@/content/types';
import type { Locale } from '@/lib/site';
import tammerkoski from '@/assets/photo/tammerkoski-dusk.jpg';
import finlayson from '@/assets/photo/finlayson-dusk.jpg';
import nasinneula from '@/assets/photo/nasinneula-wide.jpg';
import nasijarvi from '@/assets/photo/nasijarvi-path.jpg';
import lake from '@/assets/photo/lake-blue.jpg';
import lakePortrait from '@/assets/photo/lake-portrait.jpg';
import swing from '@/assets/photo/lake-swing.jpg';
import sunset from '@/assets/photo/sunset-ice.jpg';
import keskustori from '@/assets/photo/keskustori.jpg';

export const PHOTOS: Record<PhotoKey, { src: StaticImageData; alt: Record<Locale, string> }> = {
  tammerkoski: {
    src: tammerkoski,
    alt: {
      fi: 'Tammerkosken rantaa ja tehtaan piippu illan hämärässä',
      en: 'The Tammerkoski rapids bank and a factory chimney at dusk',
      sv: 'Stranden vid Tammerforsen och en fabriksskorsten i skymningen',
    },
  },
  finlayson: {
    src: finlayson,
    alt: {
      fi: 'Tampereen tehdasmiljöö illalla',
      en: 'Tampere’s industrial riverside in the evening',
      sv: 'Tammerfors industrimiljö en kväll',
    },
  },
  nasinneula: {
    src: nasinneula,
    alt: {
      fi: 'Näsinneula ja Särkänniemi Näsijärven yllä',
      en: 'Näsinneula tower and Särkänniemi across Lake Näsijärvi',
      sv: 'Näsinneula och Särkänniemi vid Näsijärvi',
    },
  },
  nasijarvi: {
    src: nasijarvi,
    alt: {
      fi: 'Kävelytie Näsijärven rannalla ja Näsinneula kaukana',
      en: 'A path by Lake Näsijärvi with Näsinneula in the distance',
      sv: 'En stig vid Näsijärvi med Näsinneula i fjärran',
    },
  },
  lake: {
    src: lake,
    alt: {
      fi: 'Suomalainen järvimaisema sinisen hetken aikaan',
      en: 'A Finnish lake landscape at the blue hour',
      sv: 'Ett finländskt sjölandskap i blå timmen',
    },
  },
  lakePortrait: {
    src: lakePortrait,
    alt: {
      fi: 'Järvi ja puiden lehvästö',
      en: 'A lake framed by tree branches',
      sv: 'En sjö inramad av trädgrenar',
    },
  },
  swing: {
    src: swing,
    alt: {
      fi: 'Riippukeinu järven rannalla',
      en: 'A swing seat by the lakeshore',
      sv: 'En hängbänk vid sjöstranden',
    },
  },
  sunset: {
    src: sunset,
    alt: {
      fi: 'Auringonlasku jäätyneen järven yllä',
      en: 'Sunset over a frozen lake',
      sv: 'Solnedgång över en isbelagd sjö',
    },
  },
  keskustori: {
    src: keskustori,
    alt: {
      fi: 'Tampereen Keskustori',
      en: 'Keskustori, the central square of Tampere',
      sv: 'Centraltorget i Tammerfors',
    },
  },
};
