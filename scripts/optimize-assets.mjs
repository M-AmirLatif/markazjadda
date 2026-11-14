import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const ffmpegBin = 'C:/Users/user/AppData/Local/Temp/node_modules/ffmpeg-static/ffmpeg.exe';

const shopImagesDir = path.join(rootDir, 'shopimages');
const workingVideosDir = path.join(rootDir, 'workingvideos');
const backupDir = path.join(rootDir, 'original_assets_backup');

const publicImagesDir = path.join(rootDir, 'public', 'assets', 'images');
const publicVideosDir = path.join(rootDir, 'public', 'assets', 'videos');
const publicPostersDir = path.join(rootDir, 'public', 'assets', 'posters');

// Ensure directories exist
[backupDir, publicImagesDir, publicVideosDir, publicPostersDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

console.log('--- 1. Backing up originals untouched ---');
const backupImgDir = path.join(backupDir, 'shopimages');
const backupVidDir = path.join(backupDir, 'workingvideos');
if (!fs.existsSync(backupImgDir)) fs.mkdirSync(backupImgDir, { recursive: true });
if (!fs.existsSync(backupVidDir)) fs.mkdirSync(backupVidDir, { recursive: true });

fs.readdirSync(shopImagesDir).forEach(f => {
  fs.copyFileSync(path.join(shopImagesDir, f), path.join(backupImgDir, f));
});
fs.readdirSync(workingVideosDir).forEach(f => {
  fs.copyFileSync(path.join(workingVideosDir, f), path.join(backupVidDir, f));
});
console.log('Backup complete.');

console.log('--- 2. Processing images with Sharp to WebP & multiple sizes ---');
const imageFiles = fs.readdirSync(shopImagesDir).filter(f => /\.(jpe?g|png)$/i.test(f));

const processedImages = [];

for (const f of imageFiles) {
  const fullPath = path.join(shopImagesDir, f);
  const baseName = path.parse(f).name.replace(/[^a-zA-Z0-9_-]/g, '_');
  
  // Standard WebP
  const webpPath = path.join(publicImagesDir, `${baseName}.webp`);
  const webpMedium = path.join(publicImagesDir, `${baseName}-800.webp`);
  const webpThumb = path.join(publicImagesDir, `${baseName}-400.webp`);

  const metadata = await sharp(fullPath).metadata();

  // Full size WebP
  await sharp(fullPath)
    .webp({ quality: 82, effort: 4 })
    .toFile(webpPath);

  // 800px width
  await sharp(fullPath)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webpMedium);

  // 400px thumb
  await sharp(fullPath)
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(webpThumb);

  processedImages.push({
    originalName: f,
    baseName,
    width: metadata.width,
    height: metadata.height,
    aspect: metadata.width && metadata.height ? (metadata.width / metadata.height).toFixed(2) : '1.33',
    src: `/assets/images/${baseName}.webp`,
    src800: `/assets/images/${baseName}-800.webp`,
    src400: `/assets/images/${baseName}-400.webp`,
  });

  console.log(`Processed image: ${f} -> ${baseName}.webp`);
}

console.log('--- 3. Compressing videos with FFmpeg & extracting posters ---');
const videoFiles = fs.readdirSync(workingVideosDir).filter(f => f.endsWith('.mp4'));

const processedVideos = [];

videoFiles.forEach((f, idx) => {
  const fullPath = path.join(workingVideosDir, f);
  const cleanId = `video_${idx + 1}`;
  const outMp4 = path.join(publicVideosDir, `${cleanId}.mp4`);
  const posterJpg = path.join(publicPostersDir, `${cleanId}.jpg`);
  const posterWebp = path.join(publicPostersDir, `${cleanId}.webp`);

  // 1. Extract poster at 1.5s
  try {
    execSync(`"${ffmpegBin}" -y -ss 00:00:01.50 -i "${fullPath}" -vframes 1 -q:v 2 "${posterJpg}"`, { stdio: 'pipe' });
    // Convert poster to webp via sharp
    sharp(posterJpg).webp({ quality: 82 }).toFile(posterWebp);
  } catch (e) {
    console.error(`Poster extract error on ${f}:`, e.message);
  }

  // 2. Compress video to optimized H.264 mp4 (crf 26, max width 720, faststart for streaming)
  try {
    console.log(`Compressing [${idx + 1}/${videoFiles.length}] ${f}...`);
    execSync(`"${ffmpegBin}" -y -i "${fullPath}" -vf "scale='min(720,iw)':-2" -c:v libx264 -crf 27 -preset fast -movflags +faststart -c:a aac -b:a 96k "${outMp4}"`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`Video compress error on ${f}:`, e.message);
    // If compress failed, copy original
    fs.copyFileSync(fullPath, outMp4);
  }

  const statOrig = fs.statSync(fullPath);
  const statOpt = fs.statSync(outMp4);

  processedVideos.push({
    id: cleanId,
    originalName: f,
    src: `/assets/videos/${cleanId}.mp4`,
    poster: `/assets/posters/${cleanId}.webp`,
    posterJpg: `/assets/posters/${cleanId}.jpg`,
    originalSizeMb: (statOrig.size / 1024 / 1024).toFixed(2),
    optimizedSizeMb: (statOpt.size / 1024 / 1024).toFixed(2),
  });
});

// Write metadata manifest
const manifest = {
  generatedAt: new Date().toISOString(),
  images: processedImages,
  videos: processedVideos,
};

fs.writeFileSync(path.join(rootDir, 'config', 'gallery-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Successfully generated config/gallery-manifest.json with all processed assets!');
