import React from "react";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { GalleryGrid } from "@/components/GalleryGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Camera, Sparkles, ShieldCheck } from "lucide-react";

export default function GalleryPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
          {dict.galleryPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.galleryPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.galleryPage.subtitle}
        </p>
      </div>

      {/* Featured Before/After Interactive Section */}
      <div className="mb-20">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-shop-gold bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20 inline-block">
            {dict.common.beforeAfter}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
            {isArabic ? "مقارنة حقيقية: صدمة الشاسيه والرفرف قبل وبعد السمكرة" : "Real Comparison: Collision Damage Before & After Restoration"}
          </h2>
        </div>

        <BeforeAfterSlider
          beforeSrc="/assets/posters/video_12.webp"
          afterSrc="/assets/posters/video_14.webp"
          beforeLabel={dict.galleryPage.before}
          afterLabel={dict.galleryPage.after}
          titleAr="إصلاح سمكرة صدمة خلفية وتعديل استقامة الشاسيه"
          titleEn="Rear Collision Repair & Unibody Straightening"
          locale={locale}
        />
      </div>

      {/* Full Real Works Filterable Gallery */}
      <GalleryGrid items={siteConfig.gallery} locale={locale} dict={dict} />
    </div>
  );
}
