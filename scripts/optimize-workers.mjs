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

// Backup originals untouched
fs.readdirSync(inputDir).forEach(f => {
  fs.copyFileSync(path.join(inputDir, f), path.join(backupDir, f));
});

// Map key images
const workers = [
  {
    key: 'worker-dent-primary',
    file: 'ff0ade6f-a313-4e20-b97f-525d3acaea47.jpg',
    role: 'dent',
  },
  {
    key: 'worker-dent-standing',
    file: '097004af-304b-4122-b9fa-9e089490a577.jpg',
    role: 'dent',
  },
  {
    key: 'worker-paint-primary',
    file: 'd542e466-c69a-4328-a590-e50e5108934d.jpg',
    role: 'paint',
  },
  {
    key: 'worker-paint-car',
    file: '1f0c43f0-7b73-4bf4-aa41-df9211fd3604.jpg',
    role: 'paint',
  },
  {
    key: 'worker-paint-profile',
    file: 'e5674a9e-010f-4bf8-861d-0cf70aba0f7e.jpg',
    role: 'paint',
  },
  {
    key: 'worker-dent-portrait',
    file: '58ca836c-aca8-4842-b1b4-6af6a4acc8c5.jpg',
    role: 'dent',
  },
];

console.log('Optimizing worker images with Sharp...');

for (const w of workers) {
  const fullPath = path.join(inputDir, w.file);
  if (!fs.existsSync(fullPath)) continue;

  const destBase = path.join(outDir, w.key);

  // Full WebP
  await sharp(fullPath)
    .webp({ quality: 85, effort: 4 })
    .toFile(`${destBase}.webp`);

  // 800px width
  await sharp(fullPath)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${destBase}-800.webp`);

  // 400px thumb
  await sharp(fullPath)
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${destBase}-400.webp`);

  console.log(`✓ Processed ${w.key} from ${w.file}`);
}

console.log('Worker images successfully optimized!');
