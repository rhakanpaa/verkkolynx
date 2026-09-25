import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Verkkolynx Ratkaisut Oy',
    short_name: 'Verkkolynx',
    start_url: '/',
    display: 'browser',
    background_color: '#04142f',
    theme_color: '#04142f',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
