# مركز جدة | Markaz Jadda - Auto Body, Dent Repair & Oven Paint Shop
**الموقع الرسمي لمركز جدة لصيانة وسمكرة وبوية فرن السيارات بجدة**

A complete, production-ready, bilingual (Arabic + English), **frontend-only static website** built for **مركز جدة (Markaz Jadda)**, located in Jeddah, Saudi Arabia.

---

## 🌟 Architecture & Tech Stack

- **Framework:** Next.js 14 (App Router) configured with `output: 'export'` (100% static HTML/CSS/JS export).
- **Styling:** Tailwind CSS with logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`) for bidirectional (RTL/LTR) mirroring.
- **Language & Routing:**
  - `/ar/`: Arabic version with `dir="rtl"` and Gulf Modern Standard Arabic copy.
  - `/en/`: English version with `dir="ltr"` and accessible automotive terminology.
  - `/`: Static root redirect checking saved `localStorage` preference, then browser language, defaulting to `/ar/`.
  - Zero runtime server or database dependencies.
- **Components & Icons:** Lucide React icons & Framer Motion.
- **Static Actions:** All CTAs, service requests, and bookings generate formatted WhatsApp message links (`wa.me`) or direct phone links (`tel:`).
- **Embedded Map:** Plain Google Maps iframe embed for Plus Code `C7V9+P79` (no API key required).
- **Privacy First:** No cookies, no trackers. Optional Google Analytics ID slot in config (disabled by default).

---

## 📁 Project Structure

```
d:\markazJadda\
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx         # Localized HTML shell (dir, lang, Header, Footer)
│   │   ├── page.tsx           # Home page
│   │   ├── services/          # Services detailed page
│   │   ├── gallery/           # Our Work (Filterable grid & Before/After slider)
│   │   ├── about/             # About Us, Equipment & Team (Master Najib)
│   │   ├── book/              # Booking form & WhatsApp generator
│   │   ├── contact/           # Contact, embedded map, directions
│   │   ├── faq/               # Frequently Asked Questions accordion
│   │   ├── privacy/           # Zero-cookie Privacy Policy
│   │   └── not-found.tsx      # 404 handler
│   ├── globals.css            # Automotive design tokens & typography resets
│   ├── layout.tsx             # Root layout with viewport configuration
│   ├── page.tsx               # Root client redirect (/ar or /en)
│   ├── robots.ts              # Build-time robots.txt generator
│   └── sitemap.ts             # Build-time sitemap.xml generator
├── components/
│   ├── BeforeAfterSlider.tsx  # Interactive drag comparison slider
│   ├── BookingForm.tsx        # Client-side form with WhatsApp builder
│   ├── FaqAccordion.tsx       # Accessible FAQ accordion
│   ├── FloatingWhatsApp.tsx   # Floating WhatsApp button (mirrors in RTL)
│   ├── Footer.tsx             # Bilingual footer with landmarks & hours
│   ├── GalleryGrid.tsx        # Filterable media grid with modal lightbox
│   ├── Header.tsx             # Sticky navigation, logo, language switcher
│   ├── JsonLd.tsx             # LocalBusiness / AutoBodyShop structured data
│   ├── LanguageSwitcher.tsx   # AR | EN switcher maintaining active path
│   └── Logo.tsx               # Official SVG wordmark in shop sign style
├── config/
│   ├── site.ts                # Centralized business config (phone, address, services, reviews)
│   └── gallery-manifest.json  # Metadata manifest for all processed assets
├── messages/
│   ├── ar.json                # Arabic copy dictionary
│   └── en.json                # English copy dictionary
├── public/
│   └── assets/                # Optimized WebP images & compressed H.264 videos
├── scripts/
│   └── optimize-assets.mjs    # Sharp + FFmpeg build-time optimization script
├── shopimages/                # Original shop photos (backed up untouched)
├── workingvideos/             # Original shop videos (backed up untouched)
├── original_assets_backup/    # Safe untouched copy of original raw assets
├── out/                       # Production static export directory
├── tailwind.config.ts         # Tailwind design system configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Export Static Files
```bash
npm run build
```
This generates the pure static `out/` folder containing all pre-rendered HTML, CSS, JavaScript, and assets.

### 4. Test the Static Build Locally
You can test the static export with any static server:
```bash
npx serve out
# Or using Python:
python -m http.server 3333 --directory out
```

---

## 🖼️ How to Add a New Gallery Photo or Video

Follow these step-by-step instructions whenever you take new photos or record new work in the shop:

### Step 1: Add Raw Media Files
- **For Photos:** Save your image file (JPEG, PNG) into `shopimages/` (e.g. `shopimages/new-repair.jpg`).
- **For Videos:** Save your MP4/MOV file into `workingvideos/` (e.g. `workingvideos/new-spray.mp4`).

### Step 2: Run the Optimization Script
In your terminal, execute:
```bash
npm run optimize-assets
```
This automated local script:
- Backs up your untouched original into `original_assets_backup/`.
- Converts images into responsive WebP formats (`-1200.webp`, `-800.webp`, `-400.webp`).
- Compresses videos into web-optimized, faststart H.264 MP4 format.
- Extracts a high-quality WebP poster thumbnail from the video.
- Automatically generates metadata in `config/gallery-manifest.json`.

### Step 3: Register Item in `config/site.ts`
Open `config/site.ts` and add your entry to the `gallery` array:

**Example for an Image:**
```typescript
{
  id: "img-new-repair",
  type: "image",
  titleAr: "سمكرة وتعديل صدمة رفرف أمامي لسيارة تويوتا",
  titleEn: "Front Fender Dent Repair & Realignment on Toyota",
  category: "dent_repair", // Options: "dent_repair" | "oven_paint" | "mechanical" | "electrical" | "workshop"
  src: "/assets/images/new-repair.webp",
  aspect: "0.75",
  featured: false
},
```

**Example for a Video:**
```typescript
{
  id: "vid-new-spray",
  type: "video",
  titleAr: "رش وتجفيف بوية فرن داخل الكبينة المعزولة",
  titleEn: "Oven Spray Painting & Curing Inside Enclosed Booth",
  category: "oven_paint",
  src: "/assets/videos/new-spray.mp4",
  poster: "/assets/posters/new-spray.webp",
  aspect: "1.77",
  featured: true
},
```

### Step 4: Rebuild the Static Website
Re-run the build to generate the updated static HTML files:
```bash
npm run build
```
Your new photo or video will now be live in the filterable gallery, complete with lazy-loading, thumbnail posters, and direct WhatsApp inquiry buttons!

---

## 🚢 How to Deploy as a Static Website

Because the output is 100% static, you can deploy the `out/` folder to any static hosting service with zero server setup:

### Netlify
- Build command: `npm run build`
- Publish directory: `out`
- Or simply drag-and-drop the `out` folder into Netlify Drop.

### Cloudflare Pages
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`

### GitHub Pages
- Set up a GitHub Action to run `npm run build` and deploy the `out` folder to `gh-pages` branch.

### Vercel
- Framework preset: `Other` (or configure as Static)
- Output directory: `out`

---

## 📝 Owner Checklist: Placeholders to Customize (TODOs)

All unverified claims have been removed from the public site and collected in `OWNER_TODO_CHECKLIST` inside `config/site.ts`. The owner can fill in verified numbers and re-enable them anytime:

| Item | Location | Current State on Public Site | Status |
| :--- | :--- | :--- | :--- |
| **Free Estimate Claims** | `config/site.ts` (`OWNER_TODO_CHECKLIST.freeEstimate`) | Replaced with neutral WhatsApp photo inquiry | ⚠️ **TODO: Confirm whether photo assessment is free** |
| **Polishing Service** | `config/site.ts` (`OWNER_TODO_CHECKLIST.polishingService`) | Hidden (only 4 sign services active) | ⚠️ **TODO: Confirm if detailing/polishing is offered** |
| **Operating Hours** | `config/site.ts` (`hours`) | "Call or WhatsApp to confirm current hours" | ⚠️ **TODO: Confirm exact daily schedule with owner** |
| **Years of Experience** | `config/site.ts` (`OWNER_TODO_CHECKLIST.statistics`) | Hidden from public view | ⚠️ **TODO: Confirm founding year** |
| **Repaired Cars Counter** | `config/site.ts` (`OWNER_TODO_CHECKLIST.statistics`) | Hidden from public view | ⚠️ **TODO: Confirm count** |
| **Warranty Terms** | `config/site.ts` (`OWNER_TODO_CHECKLIST.statistics`) | Hidden from public view | ⚠️ **TODO: Confirm paint warranty policy** |
| **Payment Options** | `config/site.ts` (`OWNER_TODO_CHECKLIST.paymentMethods`) | Direct contact via WhatsApp/Call | ⚠️ **TODO: Confirm Mada / Card POS / Cash only** |
| **Booth Details** | `config/site.ts` (`OWNER_TODO_CHECKLIST.equipmentDetails`) | Neutralized to "Oven Baking Booth" | ⚠️ **TODO: Optional to specify booth make/origin** |
| **Social Media Links** | `config/site.ts` (`OWNER_TODO_CHECKLIST.socialMedia`) | Hidden | ⚠️ **TODO: Add official handles if available** |
| **Google Analytics** | `config/site.ts` (`analytics.googleAnalyticsId`) | Disabled (Zero cookies / Zero tracking) | ℹ️ Optional |

---

## 🛡️ Verified Business Information

- **Business Name:** مركز جدة / Markaz Jadda
- **Services on Physical Sign:** سمكرة (Dent & Body Repair), بوية فرن (Oven-Baked Spray Painting), ميكانيكي (Mechanical Repair), كهربائي (Auto Electrical)
- **Phone / WhatsApp:** `+966 50 902 5410` (wa.me/966509025410)
- **Experience:** 5+ years of verified hands-on experience across multiple major automotive workshops
- **Location:** `C7V9+P79, Prince Abdulmajeed, Jeddah 22431, Saudi Arabia`
- **Landmarks:** Near Tamees House restaurant & Motor Vehicles Periodic Inspection (الفحص الدوري)
- **Customer Rating:** 4.1 from 7 Google reviews
