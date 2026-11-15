import React from "react";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Wrench, PaintBucket, Sparkles, Cog, Zap, MessageCircle, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Tag, Award } from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-8 h-8 text-shop-gold" />,
  PaintBucket: <PaintBucket className="w-8 h-8 text-shop-gold" />,
  Sparkles: <Sparkles className="w-8 h-8 text-shop-gold" />,
  Cog: <Cog className="w-8 h-8 text-shop-gold" />,
  Zap: <Zap className="w-8 h-8 text-shop-gold" />,
};

// Map each service to authentic photo/video from our assets
const serviceMediaMap: Record<string, { type: "image" | "video"; src: string; poster?: string; alt: string }> = {
  dent_repair: {
    type: "image",
    src: "/assets/images/efb82417-e126-49d5-8a81-cfb4ad4662d2.webp",
    alt: "سمكرة وتعديل صدمات سيارة دفع رباعي وتجهيز الرفرف والباب",
  },
  oven_paint: {
    type: "video",
    src: "/assets/videos/video_18.mp4",
    poster: "/assets/posters/video_18.webp",
    alt: "رش بوية داخل كبينة بوية فرن الدهان بمركز جدة",
  },
  mechanical: {
    type: "image",
    src: "/assets/images/40bfa9c0-a5d6-44e1-87f3-ea5535803094.webp",
    alt: "صيانة ميكانيكية ومعدات الورشة المعتمدة",
  },
  electrical: {
    type: "video",
    src: "/assets/videos/video_16.mp4",
    poster: "/assets/posters/video_16.webp",
    alt: "صيانة وتوصيل كهرباء وإسطبات السيارة بعد الإصلاح",
  },
};

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
          {dict.servicesPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.servicesPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.servicesPage.subtitle}
        </p>
      </div>

      {/* Pricing, Warranty & Experience Verified Guarantee Banner */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-shop-card border border-shop-gold/30 shadow-2xl glossy-panel">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-shop-gold/15 text-shop-gold flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-shop-gold" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-shop-gold uppercase tracking-wider block mb-1">
              {isArabic ? "ضمان معتمد" : "Official Guarantee"}
            </span>
            <h3 className="text-base font-bold text-white mb-1.5">
              {isArabic ? "ضمان سنتين على بوية الفرن" : "2-Year Oven Paint Warranty"}
            </h3>
            <p className="text-xs text-shop-muted leading-relaxed">
              {isArabic
                ? "نقدم ضماناً معتمداً لمدة سنتين ضد التقشير وتغير اللون وانطفاء اللمعة لراحة بالك التامة."
                : "Full 2-year warranty on oven-baked paint against peeling, color fading, and clear coat failure."}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 md:border-s md:border-white/10 md:ps-6">
          <div className="w-12 h-12 rounded-2xl bg-shop-gold/15 text-shop-gold flex items-center justify-center shrink-0">
            <Tag className="w-6 h-6 text-shop-gold" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-shop-gold uppercase tracking-wider block mb-1">
              {isArabic ? "وضوح وشفافية" : "Fair Pricing"}
            </span>
            <h3 className="text-base font-bold text-white mb-1.5">
              {isArabic ? "الأسعار تبدأ من 2,000 ريال" : "Starts from ~2,000 SAR"}
            </h3>
            <p className="text-xs text-shop-muted leading-relaxed">
              {isArabic
                ? "تبدأ أسعار السمكرة والبوية من 2,000 ريال، وتعتمد التكلفة الدقيقة على حالة ونظافة السيارة ونوعها وحجم وعمق الصدمة."
                : "Denting and oven paint starts from ~2,000 SAR; exact pricing depends on vehicle condition, car model, and damage depth."}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 md:border-s md:border-white/10 md:ps-6">
          <div className="w-12 h-12 rounded-2xl bg-shop-gold/15 text-shop-gold flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-shop-gold" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-shop-gold uppercase tracking-wider block mb-1">
              {isArabic ? "حرفية وإتقان" : "Master Craftsmen"}
            </span>
            <h3 className="text-base font-bold text-white mb-1.5">
              {isArabic ? "خبرة 3-4 سنوات بأشهر ورش جدة" : "3-4 Years in Top Jeddah Shops"}
            </h3>
            <p className="text-xs text-shop-muted leading-relaxed">
              {isArabic
                ? "فنيون متمرسون مارسوا سمكرة وبوية السيارات في أعرق ورش جدة مع أكثر من 5 سنوات خبرة شاملة."
                : "Master technicians with 3-4 years specialized expertise in Jeddah's top workshops, backed by 5+ years overall background."}
            </p>
          </div>
        </div>
      </div>

      {/* Services List (Alternating Layout) */}
      <div className="space-y-24">
        {siteConfig.services.map((svc, index) => {
          const title = isArabic ? svc.titleAr : svc.titleEn;
          const description = isArabic ? svc.descriptionAr : svc.descriptionEn;
          const steps = isArabic ? svc.stepsAr : svc.stepsEn;
          const signName = isArabic ? svc.signNameAr : svc.signNameEn;
          const badge = isArabic ? svc.badgeAr : svc.badgeEn;
          const media = serviceMediaMap[svc.id] || {
            type: "image",
            src: "/assets/images/frontimg.webp",
            alt: title,
          };

          const prefilledMsg = isArabic
            ? `السلام عليكم، أرغب في حجز والاستفسار عن خدمة: "${svc.titleAr}" في مركز جدة.`
            : `Hello Markaz Jadda, I want to book and inquire about: "${svc.titleEn}".`;
          const whatsappUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(prefilledMsg)}`;

          const isEven = index % 2 === 1;

          return (
            <section
              key={svc.id}
              id={svc.slug}
              className={`p-6 sm:p-10 rounded-3xl bg-shop-card border border-shop-border glossy-panel scroll-mt-28 flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-14 items-center`}
            >
              {/* Text side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-shop-charcoal border border-shop-border flex items-center justify-center shrink-0">
                    {serviceIcons[svc.icon] || <Wrench className="w-7 h-7 text-shop-gold" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-shop-muted block">
                      {isArabic ? `الاسم في لافتة الورشة: ${signName}` : `Shop Sign: ${signName}`}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      {title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {description}
                </p>

                {/* Process Steps */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-shop-gold mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{dict.servicesPage.stepsTitle}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-shop-charcoal/80 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-shop-gold/15 text-shop-gold font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges for Pricing / Warranty / Experience if defined */}
                {((isArabic ? svc.priceNoteAr : svc.priceNoteEn) || (isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn) || (isArabic ? svc.experienceBadgeAr : svc.experienceBadgeEn)) && (
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {(isArabic ? svc.priceNoteAr : svc.priceNoteEn) && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-shop-gold/15 border border-shop-gold/30 text-shop-gold text-xs font-bold">
                        <Tag className="w-3.5 h-3.5 shrink-0" />
                        <span>{isArabic ? svc.priceNoteAr : svc.priceNoteEn}</span>
                      </span>
                    )}
                    {(isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn) && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>{isArabic ? svc.warrantyBadgeAr : svc.warrantyBadgeEn}</span>
                      </span>
                    )}
                    {(isArabic ? svc.experienceBadgeAr : svc.experienceBadgeEn) && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-shop-charcoal border border-white/10 text-slate-300 text-xs font-bold">
                        <Award className="w-3.5 h-3.5 text-shop-gold shrink-0" />
                        <span>{isArabic ? svc.experienceBadgeAr : svc.experienceBadgeEn}</span>
                      </span>
                    )}
                  </div>
                )}

                {/* WhatsApp Request CTA */}
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-shop-gold/20 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{dict.common.requestService}</span>
                  </a>
                </div>
              </div>

              {/* Media side */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-shop-border relative shadow-xl shrink-0">
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    poster={media.poster}
                    preload="none"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-3 start-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-neutral-900/80 text-white border border-white/10 backdrop-blur-md">
                    {title}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
