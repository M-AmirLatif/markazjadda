import React from "react";
import Link from "next/link";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { HeroVideo } from "@/components/HeroVideo";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  Wrench,
  PaintBucket,
  Sparkles,
  Cog,
  Zap,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Camera,
  CheckCircle2,
  Clock,
  Award,
  Tag,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  MapPin,
  ExternalLink,
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-shop-gold" />,
  PaintBucket: <PaintBucket className="w-6 h-6 text-shop-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-shop-gold" />,
  Cog: <Cog className="w-6 h-6 text-shop-gold" />,
  Zap: <Zap className="w-6 h-6 text-shop-gold" />,
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  const defaultMsg = isArabic
    ? siteConfig.contact.defaultWhatsAppMsgAr
    : siteConfig.contact.defaultWhatsAppMsgEn;
  const whatsappHeroUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION WITH PROMINENT REAL SHOP SHOWCASE & AMBIENT VIDEO BACKDROP */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden border-b border-shop-border">
        {/* Accessible Background Video with Pause Control & Prefers-Reduced-Motion */}
        <HeroVideo
          poster="/assets/images/frontimg.webp"
          src="/assets/videos/video_18.mp4"
          locale={locale}
        />

        {/* Hero Content - Bilingual Luxury Split Showcase */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Column 1: Value Proposition, Headline, Action CTAs (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-shop-gold/15 border border-shop-gold/40 text-shop-gold text-xs sm:text-sm font-bold mb-6 backdrop-blur-md animate-in fade-in duration-500">
                <span className="w-2 h-2 rounded-full bg-shop-gold animate-ping"></span>
                <span>{dict.hero.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                {dict.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {dict.hero.subtitle}
              </p>

              {/* Photo WhatsApp Callout Banner */}
              <div className="w-full max-w-xl mb-8 p-4 rounded-2xl bg-shop-charcoal/90 border border-shop-gold/40 backdrop-blur-lg flex items-center gap-3 text-start shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-shop-gold/20 flex items-center justify-center text-shop-gold shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {dict.hero.photoQuoteBadge}
                  </p>
                  <p className="text-[11px] text-shop-muted">
                    {isArabic
                      ? "صوّر الصدمة وتواصل مع الفني مباشرة لمناقشة حالة سيارتك والحلول المناسبة"
                      : "Take damage photos and message our technician directly to discuss your car and repair options"}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-extrabold text-base transition-all shadow-xl shadow-shop-gold/25 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{dict.hero.ctaWhatsApp}</span>
                </a>

                <Link
                  href={`/${locale}/gallery/`}
                  prefetch={true}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-shop-card/90 hover:bg-shop-charcoal border border-shop-border hover:border-shop-gold/50 text-white font-bold text-base transition-all shadow-lg active:scale-95 whitespace-nowrap"
                >
                  <span>{dict.hero.ctaGallery}</span>
                  {isArabic ? <ArrowLeft className="w-4 h-4 text-shop-gold" /> : <ArrowRight className="w-4 h-4 text-shop-gold" />}
                </Link>
              </div>

              {/* Trust & Guarantee Highlights: Warranty, Starting Price, Experience */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-shop-card/90 border border-shop-gold/30 text-shop-gold font-bold backdrop-blur-md shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-shop-gold shrink-0" />
                  <span>{isArabic ? "ضمان سنتين على بوية الفرن" : "2-Year Oven Paint Warranty"}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-shop-card/90 border border-shop-gold/30 text-slate-200 font-bold backdrop-blur-md shadow-sm">
                  <Tag className="w-4 h-4 text-shop-gold shrink-0" />
                  <span>{isArabic ? "تبدأ من 2,000 ريال (حسب حالة السيارة)" : "Starts from ~2,000 SAR (Based on Condition)"}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-shop-card/90 border border-shop-gold/30 text-slate-200 font-bold backdrop-blur-md shadow-sm">
                  <Award className="w-4 h-4 text-shop-gold shrink-0" />
                  <span>{isArabic ? "خبرة 3-4 سنوات بأشهر ورش جدة" : "3–4 Yrs in Top Jeddah Shops"}</span>
                </span>
              </div>
            </div>

            {/* Column 2: Prominent Real Shop Front Image Showcase (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-shop-gold/40 shadow-2xl shadow-shop-gold/20 bg-shop-card group">
                {/* Top Floating Glass Badge */}
                <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-shop-gold/30 text-shop-gold text-xs font-bold shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-shop-gold shrink-0" />
                    <span>{dict.hero.shopFrontBadge}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {isArabic ? "موقع معتمد" : "Verified Shop"}
                  </span>
                </div>

                {/* Real Shop Front Photograph with Responsive WebP */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/assets/images/frontimg-400.webp 400w, /assets/images/frontimg-800.webp 800w, /assets/images/frontimg.webp 960w"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    />
                    <img
                      src="/assets/images/frontimg.webp"
                      alt={
                        isArabic
                          ? "واجهة ورشة مركز جدة الرسمية - سمكرة وبوية فرن وميكانيك وكهرباء"
                          : "Official Markaz Jadda workshop storefront and signboard in Jeddah"
                      }
                      fetchPriority="high"
                      width={960}
                      height={1280}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  {/* Subtle gradient overlay at bottom for maximum legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Informational Bar Over Shop Photo */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
                  <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-shop-gold">
                        {dict.hero.shopFrontServices}
                      </span>
                      <a
                        href={siteConfig.location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-shop-gold transition-colors shrink-0"
                      >
                        <span>{isArabic ? "الخريطة" : "Map"}</span>
                        <ExternalLink className="w-3 h-3 text-shop-gold" />
                      </a>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{dict.hero.shopFrontLocation}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (VERIFIED FACTS: RATING, WARRANTY, STARTING PRICE, EXPERIENCE) */}
      <section className="relative z-20 mt-6 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 rounded-3xl bg-shop-card border border-shop-border shadow-2xl glossy-panel">
          {/* Stat 1: Google Rating */}
          <div className="text-center p-3">
            <div className="flex items-center justify-center gap-1 text-shop-gold mb-1">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white ltr-number">
                {siteConfig.stats.ratingValue}
              </span>
            </div>
            <p className="text-xs text-shop-muted">
              {isArabic ? "تقييم العملاء (7 مراجعات على جوجل)" : "Google Maps (7 reviews)"}
            </p>
          </div>

          {/* Stat 2: 2-Year Warranty on Oven Paint */}
          <div className="text-center p-3 border-s border-white/5">
            <div className="flex items-center justify-center gap-1.5 text-shop-gold mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-2xl sm:text-3xl font-extrabold text-shop-gold">
                {isArabic ? "سنتين" : "2 Yrs"}
              </span>
            </div>
            <p className="text-xs text-shop-muted">
              {isArabic ? "ضمان معتمد على بوية الفرن" : "Warranty on Oven Paint"}
            </p>
          </div>

          {/* Stat 3: Pricing starting from ~2,000 SAR */}
          <div className="text-center p-3 border-s border-white/5">
            <span className="block text-xl sm:text-2xl font-extrabold text-shop-gold mb-1">
              {isArabic ? "2,000 ريال" : "2,000 SAR"}
            </span>
            <p className="text-xs text-shop-muted">
              {isArabic ? "تبدأ من 2,000 ر.س (حسب حالة السيارة)" : "Starts ~2,000 SAR (Condition based)"}
            </p>
          </div>

          {/* Stat 4: 3-4 Years Specialized Experience in famous Jeddah shops */}
          <div className="text-center p-3 border-s border-white/5">
            <span className="block text-2xl sm:text-3xl font-extrabold text-shop-gold mb-1">
              {isArabic ? "3-4 سنوات" : "3-4 Years"}
            </span>
            <p className="text-xs text-shop-muted">
              {isArabic ? "خبرة بأشهر ورش صيانة بجدة" : "In Famous Jeddah Body Shops"}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
            {isArabic ? "خدمات الورشة" : "Our Core Capabilities"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            {dict.home.servicesHeadline}
          </h2>
          <p className="text-sm sm:text-base text-shop-muted">
            {dict.home.servicesSubheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc) => {
            const title = isArabic ? svc.titleAr : svc.titleEn;
            const shortDesc = isArabic ? svc.shortDescAr : svc.shortDescEn;
            const signName = isArabic ? svc.signNameAr : svc.signNameEn;
            const badge = isArabic ? svc.badgeAr : svc.badgeEn;
            const iconElement = serviceIcons[svc.icon] || <Wrench className="w-6 h-6 text-shop-gold" />;

            return (
              <div
                key={svc.id}
                className="group relative rounded-3xl bg-shop-card border border-shop-border p-6 flex flex-col justify-between glossy-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-shop-charcoal border border-shop-border flex items-center justify-center group-hover:border-shop-gold/40 transition-colors">
                      {iconElement}
                    </div>
                    {badge && (
                      <span className="text-[11px] font-bold text-shop-gold bg-shop-gold/10 px-2.5 py-1 rounded-full border border-shop-gold/30">
                        {badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-semibold text-shop-muted block mb-1">
                      {isArabic ? `اللافتة: ${signName}` : `Sign: ${signName}`}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-shop-gold transition-colors">
                      {title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {shortDesc}
                  </p>

                  {/* Pricing or Warranty highlights if available */}
                  {((isArabic ? svc.priceNoteAr : svc.priceNoteEn) || (isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn)) && (
                    <div className="mb-4 space-y-1.5">
                      {(isArabic ? svc.priceNoteAr : svc.priceNoteEn) && (
                        <div className="text-[11px] font-semibold text-shop-gold bg-shop-gold/10 px-2.5 py-1 rounded-lg border border-shop-gold/25 inline-block w-full">
                          🏷️ {isArabic ? svc.priceNoteAr : svc.priceNoteEn}
                        </div>
                      )}
                      {(isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn) && (
                        <div className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/25 inline-block w-full">
                          🛡️ {isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/${locale}/services/#${svc.slug}`}
                    className="text-xs font-bold text-white hover:text-shop-gold flex items-center gap-1 transition-colors"
                  >
                    <span>{dict.common.learnMore}</span>
                    <span className="sr-only"> {isArabic ? `عن ${title}` : `about ${title}`}</span>
                    {isArabic ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </Link>

                  <a
                    href={`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
                      isArabic
                        ? `السلام عليكم، أرغب في حجز خدمة: ${svc.titleAr}`
                        : `Hello Markaz Jadda, I'd like to book: ${svc.titleEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-shop-gold/10 hover:bg-shop-gold text-shop-gold hover:text-neutral-950 border border-shop-gold/30 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{isArabic ? "طلب الخدمة" : "Book"}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-shop-charcoal/60 border-y border-shop-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
              {isArabic ? "مميزاتنا" : "Key Advantages"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
              {dict.home.whyTitle}
            </h2>
            <p className="text-sm sm:text-base text-shop-muted">
              {dict.home.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.home.features.map((feat: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-shop-card border border-shop-border relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-shop-gold/15 text-shop-gold flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-shop-muted leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
            {isArabic ? "دقة الصنعة" : "Precision Craftsmanship"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            {isArabic ? "شاهد الفارق قبل وبعد السمكرة والتأسيس" : "Compare Before & After Collision Repair"}
          </h2>
          <p className="text-sm sm:text-base text-shop-muted">
            {dict.galleryPage.dragSlider}
          </p>
        </div>

        <BeforeAfterSlider
          beforeSrc="/assets/posters/video_12.webp"
          afterSrc="/assets/posters/video_14.webp"
          beforeLabel={dict.galleryPage.before}
          afterLabel={dict.galleryPage.after}
          titleAr="إصلاح صدمة خلفية عميقة للرفرف ومطابقة خطوط الشاسيه"
          titleEn="Rear Quarter Panel Collision Realignment & Surface Smoothing"
          locale={locale}
        />
      </section>

      {/* 6. REAL WORKSHOP VIDEO SPOTLIGHT (PRELOAD="NONE" ON NON-HERO VIDEOS) */}
      <section className="py-20 bg-shop-dark border-t border-shop-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
                {isArabic ? "فيديوهات حصرية" : "Authentic Video Clips"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {dict.home.workTitle}
              </h2>
              <p className="text-xs sm:text-sm text-shop-muted mt-1">
                {dict.home.workSubtitle}
              </p>
            </div>

            <Link
              href={`/${locale}/gallery/`}
              className="px-5 py-2.5 rounded-xl bg-shop-charcoal border border-shop-border hover:border-shop-gold text-xs sm:text-sm font-bold text-white transition-colors flex items-center gap-2 shrink-0"
            >
              <span>{dict.common.viewAll} ({siteConfig.gallery.length} {isArabic ? "عمل موثق" : "items"})</span>
              {isArabic ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spotlight 1: Oven paint */}
            <div className="rounded-2xl overflow-hidden bg-shop-card border border-shop-border">
              <div className="relative aspect-video bg-neutral-950">
                <video
                  src="/assets/videos/video_18.mp4"
                  poster="/assets/posters/video_18.webp"
                  preload="none"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-shop-gold bg-shop-gold/10 px-2 py-0.5 rounded">
                  {isArabic ? "كبينة بوية فرن" : "Oven Baking Booth"}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">
                  {isArabic
                    ? "رش الطلاء داخل كبينة بوية الفرن المعزولة تماماً"
                    : "Spray painting inside the oven baking booth"}
                </h3>
              </div>
            </div>

            {/* Spotlight 2: Workshop Technician at work */}
            <div className="rounded-2xl overflow-hidden bg-shop-card border border-shop-border">
              <div className="relative aspect-video bg-neutral-950">
                <img
                  src="/assets/images/6ad67255-42f1-45ff-badb-6edb019e3035.webp"
                  alt={isArabic ? "فني الورشة" : "Workshop Technician"}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-shop-gold bg-shop-gold/10 px-2 py-0.5 rounded">
                  {isArabic ? "فني الورشة" : "Workshop Technician"}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">
                  {isArabic
                    ? "رش وتجهيز الصدام الأمامي للسيارة"
                    : "Spray-painting and preparing front bumper"}
                </h3>
              </div>
            </div>

            {/* Spotlight 3: Camry Finished inspection */}
            <div className="rounded-2xl overflow-hidden bg-shop-card border border-shop-border">
              <div className="relative aspect-video bg-neutral-950">
                <video
                  src="/assets/videos/video_15.mp4"
                  poster="/assets/posters/video_15.webp"
                  preload="none"
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-shop-gold bg-shop-gold/10 px-2 py-0.5 rounded">
                  {isArabic ? "تسليم السيارة" : "Handover Quality"}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">
                  {isArabic
                    ? "معاينة اللمعة ومطابقة اللون عند تسليم سيارة كامري بيضاء"
                    : "Final gloss & exact color matching on Toyota Camry"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS (REAL GOOGLE REVIEWS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{isArabic ? "تقييم 4.1 من 7 مراجعات على جوجل" : "4.1 Rating from 7 Google reviews"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {dict.home.reviewsTitle}
          </h2>
          <p className="text-sm sm:text-base text-shop-muted mt-2">
            {dict.home.reviewsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.reviews.map((rev) => {
            const author = isArabic ? rev.authorAr : rev.authorEn;
            const comment = isArabic ? rev.commentAr : rev.commentEn;
            const highlight = isArabic ? rev.highlightAr : rev.highlightEn;
            const date = isArabic ? rev.dateAr : rev.dateEn;

            return (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-shop-card border border-shop-border flex flex-col justify-between glossy-panel"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-shop-gold">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-shop-muted">{date}</span>
                  </div>

                  <span className="block text-xs font-bold text-shop-gold mb-2">
                    &ldquo;{highlight}&rdquo;
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {comment}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{author}</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {dict.common.verified}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-shop-gold to-yellow-600 p-8 sm:p-14 text-neutral-950 shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-950 text-shop-gold text-xs font-extrabold mb-4">
              {isArabic ? "استفسار مباشر وسريع" : "Quick Direct Inquiry"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-snug">
              {dict.home.ctaBannerTitle}
            </h2>
            <p className="text-sm sm:text-lg font-medium opacity-90 mb-8 max-w-2xl leading-relaxed">
              {dict.home.ctaBannerSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-neutral-950 hover:bg-neutral-900 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current text-shop-gold" />
                <span>{dict.home.ctaBannerBtn}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/20 hover:bg-white/30 text-neutral-950 font-bold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="phone-number">{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
