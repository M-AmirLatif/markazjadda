import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputDir = path.join(rootDir, 'workersimages');
const outDir = path.join(rootDir, 'public', 'assets', 'workers');
const backupDir = path.join(rootDir, 'original_assets_backup', 'workersimages');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Ensure originals are backed up untouched
fs.readdirSync(inputDir).forEach(f => {
  fs.copyFileSync(path.join(inputDir, f), path.join(backupDir, f));
});

console.log('Generating perfectly centered 4:3 worker photos with 100% face visibility...');

// Calibrated 4:3 crops:
// Worker 1: 097004af (571x1280) -> { left: 35, top: 160, width: 500, height: 375 } (4:3)
// Worker 1 Standing: 097004af -> { left: 5, top: 140, width: 560, height: 420 } (4:3)
// Worker 2: d542e466 (900x1600) -> { left: 50, top: 200, width: 800, height: 600 } (4:3)
// Worker 2 at car: 1f0c43f0 (720x1280) -> { left: 10, top: 200, width: 700, height: 525 } (4:3)

const crops = [
  {
    key: 'worker-dent-primary',
    src: '097004af-304b-4122-b9fa-9e089490a577.jpg',
    extract: { left: 35, top: 160, width: 500, height: 375 },
  },
  {
    key: 'worker-dent-standing',
    src: '097004af-304b-4122-b9fa-9e089490a577.jpg',
    extract: { left: 5, top: 140, width: 560, height: 420 },
  },
  {
    key: 'worker-paint-primary',
    src: 'd542e466-c69a-4328-a590-e50e5108934d.jpg',
    extract: { left: 50, top: 200, width: 800, height: 600 },
  },
  {
    key: 'worker-paint-car',
    src: '1f0c43f0-7b73-4bf4-aa41-df9211fd3604.jpg',
    extract: { left: 10, top: 200, width: 700, height: 525 },
  },
];

for (const c of crops) {
  const fullPath = path.join(inputDir, c.src);
  if (!fs.existsSync(fullPath)) {
    console.error(`Source not found: ${fullPath}`);
    continue;
  }

  const destBase = path.join(outDir, c.key);

  // 1. High-res WebP (800x600)
  await sharp(fullPath)
    .extract(c.extract)
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 88, effort: 4 })
    .toFile(`${destBase}.webp`);

  // 2. 800px WebP
  await sharp(fullPath)
    .extract(c.extract)
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(`${destBase}-800.webp`);

  // 3. 400px thumb WebP (400x300)
  await sharp(fullPath)
    .extract(c.extract)
    .resize(400, 300, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(`${destBase}-400.webp`);

  console.log(`✓ Generated face-centered 4:3 crop for ${c.key}`);
}

console.log('Worker images successfully generated and optimized!');
