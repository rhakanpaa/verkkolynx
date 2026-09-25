// Prepares the Tampere photographs from the existing Verkkolynx site for web use.
// The originals on the old site are darkened by an overlay; the exposure is restored so they read as photographs. (Keskustori is toned separately: scripts/tone-keskustori.py.)
import sharp from 'sharp';
import path from 'node:path';

const src = process.argv[2]; // folder holding the original downloads
const out = path.resolve(import.meta.dirname, '../src/assets/photo');
const jobs = [
  ['28f91d.jpg', 'tammerkoski-dusk', 'lift'],
  ['551c72.jpg', 'finlayson-dusk', 'lift'],
  ['c40028.jpg', 'nasinneula-wide', 'lift'],
  ['6495b7.jpg', 'nasijarvi-path', 'lift'],
  ['6bd93f.jpg', 'lake-blue', 'lift'],
  ['79c292.jpg', 'lake-portrait', 'lift'],
  ['7a2abe.jpg', 'lake-swing', 'lift'],
  ['f627f3.jpg', 'sunset-ice', 'lift'],
];
for (const [file, name, mode] of jobs) {
  let img = sharp(path.join(src, file)).resize({ width: 2400, withoutEnlargement: true });
  if (mode === 'lift') img = img.linear(1.9, 0).gamma(1.1).modulate({ saturation: 1.05 });
  await img.jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  console.log(name);
}
