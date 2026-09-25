import type { StaticImageData } from 'next/image';
import type { PhotoKey } from '@/content/types';
import tammerkoski from '@/assets/photo/tammerkoski-dusk.jpg';
import finlayson from '@/assets/photo/finlayson-dusk.jpg';
import nasinneula from '@/assets/photo/nasinneula-wide.jpg';
import nasijarvi from '@/assets/photo/nasijarvi-path.jpg';
import lake from '@/assets/photo/lake-blue.jpg';
import lakePortrait from '@/assets/photo/lake-portrait.jpg';
import swing from '@/assets/photo/lake-swing.jpg';
import sunset from '@/assets/photo/sunset-ice.jpg';
import keskustori from '@/assets/photo/keskustori.jpg';

export const PHOTOS: Record<PhotoKey, { src: StaticImageData; alt: { fi: string; en: string } }> = {
  tammerkoski: {
    src: tammerkoski,
    alt: {
      fi: 'Tammerkosken rantaa ja tehtaan piippu illan hämärässä',
      en: 'The Tammerkoski rapids bank and a factory chimney at dusk',
    },
  },
  finlayson: {
    src: finlayson,
    alt: {
      fi: 'Tampereen tehdasmiljöö illalla',
      en: 'Tampere’s industrial riverside in the evening',
    },
  },
  nasinneula: {
    src: nasinneula,
    alt: {
      fi: 'Näsinneula ja Särkänniemi Näsijärven yllä',
      en: 'Näsinneula tower and Särkänniemi across Lake Näsijärvi',
    },
  },
  nasijarvi: {
    src: nasijarvi,
    alt: {
      fi: 'Kävelytie Näsijärven rannalla ja Näsinneula kaukana',
      en: 'A path by Lake Näsijärvi with Näsinneula in the distance',
    },
  },
  lake: {
    src: lake,
    alt: {
      fi: 'Suomalainen järvimaisema sinisen hetken aikaan',
      en: 'A Finnish lake landscape at the blue hour',
    },
  },
  lakePortrait: {
    src: lakePortrait,
    alt: { fi: 'Järvi ja puiden lehvästö', en: 'A lake framed by tree branches' },
  },
  swing: {
    src: swing,
    alt: { fi: 'Riippukeinu järven rannalla', en: 'A swing seat by the lakeshore' },
  },
  sunset: {
    src: sunset,
    alt: { fi: 'Auringonlasku jäätyneen järven yllä', en: 'Sunset over a frozen lake' },
  },
  keskustori: {
    src: keskustori,
    alt: { fi: 'Tampereen Keskustori', en: 'Keskustori, the central square of Tampere' },
  },
};
