import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const frontImgPath = path.join(rootDir, 'shopimages', 'frontimg.jpg');
const publicDir = path.join(rootDir, 'public');

// 1. Generate 1200x630 Open Graph Image
// Crop sign cleanly or fit on dark premium background
const ogPath = path.join(publicDir, 'og-image.jpg');

const signBuffer = await sharp(frontImgPath)
  .extract({ left: 160, top: 160, width: 640, height: 480 })
  .resize(700, 525, { fit: 'contain' })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: '#0F1115'
  }
})
.composite([
  {
    input: signBuffer,
    left: 450,
    top: 52
  }
])
.jpeg({ quality: 90 })
.toFile(ogPath);

console.log('Generated 1200x630 OG image at:', ogPath);

// 2. Generate Apple Touch Icon (180x180)
const appleIconPath = path.join(publicDir, 'apple-touch-icon.png');
await sharp(frontImgPath)
  .extract({ left: 340, top: 200, width: 420, height: 420 })
  .resize(180, 180)
  .png()
  .toFile(appleIconPath);

// Also copy to app/apple-icon.png for Next.js App Router
fs.copyFileSync(appleIconPath, path.join(rootDir, 'app', 'apple-icon.png'));
console.log('Generated Apple Touch Icon at:', appleIconPath);

// 3. Generate Favicons (32x32, 48x48, 192x192)
const icon32Path = path.join(publicDir, 'favicon-32x32.png');
const icon192Path = path.join(publicDir, 'icon-192.png');
const faviconIco = path.join(publicDir, 'favicon.ico');

await sharp(frontImgPath)
  .extract({ left: 340, top: 200, width: 420, height: 420 })
  .resize(32, 32)
  .png()
  .toFile(icon32Path);

await sharp(frontImgPath)
  .extract({ left: 340, top: 200, width: 420, height: 420 })
  .resize(192, 192)
  .png()
  .toFile(icon192Path);

// App Router icon.png
fs.copyFileSync(icon32Path, path.join(rootDir, 'app', 'icon.png'));
fs.copyFileSync(icon32Path, faviconIco);

console.log('Brand assets generated successfully!');
