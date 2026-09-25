import type { NextConfig } from 'next';
import { REDIRECTS } from './src/lib/routes';

const config: NextConfig = {
  reactStrictMode: true,
  experimental: { globalNotFound: true },
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [420, 640, 828, 1080, 1440, 1920, 2400],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.verkkolynx.fi' }],
        destination: 'https://verkkolynx.fi/:path*',
        permanent: true,
      },
      ...REDIRECTS.map((r) => ({ ...r, permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default config;
