export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.verkkolynx.fi',
  name: 'Verkkolynx',
  legalName: 'Verkkolynx Ratkaisut Oy',
  businessId: '3486845-7',
  email: 'asiakaspalvelu@verkkolynx.fi',
  city: 'Tampere',
  founded: 2024,
  // Tampere city centre, used only as a decorative map coordinate.
  lat: '61.498',
  lon: '23.761',
} as const;

export type Locale = 'fi' | 'en';
export const LOCALES: Locale[] = ['fi', 'en'];
