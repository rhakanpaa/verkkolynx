// Generates raster brand assets (favicon, app icons, Open Graph image) from the supplied SVG logos.
// The logos themselves are never redrawn or recoloured; they are only placed and rasterised.
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const brand = (f) => path.join(root, 'public/assets/brand', f);
const NAVY = '#04142f';

async function markOnNavy(size, file, scale = 0.62) {
  const h = Math.round(size * scale);
  const mark = await sharp(await readFile(brand('verkkolynx-mark-white.svg')), { density: 600 })
    .resize({ height: h })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: NAVY } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(path.join(root, 'public', file));
}

await markOnNavy(48, 'favicon.png', 0.72);
await markOnNavy(180, 'apple-touch-icon.png');
await markOnNavy(192, 'icon-192.png');
await markOnNavy(512, 'icon-512.png');

// Open Graph: authentic Tampere photograph, navy wash, white wordmark.
await mkdir(path.join(root, 'public/assets/og'), { recursive: true });
const W = 1200;
const H = 630;
const photo = await sharp(path.join(root, 'src/assets/photo/nasinneula-wide.jpg'))
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 1.15 })
  .toBuffer();
const wash = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${NAVY}" stop-opacity="0.96"/><stop offset="0.55" stop-color="${NAVY}" stop-opacity="0.7"/><stop offset="1" stop-color="${NAVY}" stop-opacity="0.15"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
);
const wordmark = await sharp(await readFile(brand('verkkolynx-wordmark-white.svg')), {
  density: 300,
})
  .resize({ width: 520 })
  .png()
  .toBuffer();
await sharp(photo)
  .composite([
    { input: wash },
    { input: wordmark, left: 80, top: H - 80 - Math.round((520 * 314.95) / 1132.53) },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public/assets/og/og-default.png'));
console.log('assets built');
