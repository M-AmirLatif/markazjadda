import React from "react";
import Link from "next/link";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Award, Wrench, Clock, CheckCircle2, MessageCircle } from "lucide-react";

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
          {dict.aboutPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.aboutPage.subtitle}
        </p>
      </div>

      {/* Story & Workshop Front Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shop-gold/10 text-shop-gold text-xs font-bold border border-shop-gold/30">
            <Award className="w-4 h-4" />
            <span>{isArabic ? "أمانة مهنية وخبرة ميدانية" : "Meticulous Craftsmanship"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {dict.aboutPage.storyTitle}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {dict.aboutPage.storyP1}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {dict.aboutPage.storyP2}
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-shop-gold">
            <span className="p-3 rounded-xl bg-shop-card border border-shop-border">
              {isArabic ? "✓ خبرة 3-4 سنوات بأشهر ورش ومراكز صيانة جدة" : "✓ 3–4 Years in Top Jeddah Body Shops"}
            </span>
            <span className="p-3 rounded-xl bg-shop-card border border-shop-border text-emerald-400">
              {isArabic ? "✓ ضمان سنتين على بوية الفرن" : "✓ 2-Year Oven Paint Warranty"}
            </span>
            <span className="p-3 rounded-xl bg-shop-card border border-shop-border">
              {isArabic ? "✓ أسعار تبدأ من 2,000 ريال (حسب حالة السيارة)" : "✓ Pricing from ~2,000 SAR (Condition Based)"}
            </span>
            <span className="p-3 rounded-xl bg-shop-card border border-shop-border">
              {isArabic ? "✓ كبينة بوية فرن معزولة ومجهزة" : "✓ Sealed Oven Baking Booth"}
            </span>
          </div>
        </div>

        {/* Real Front Signboard Image */}
        <div className="rounded-3xl overflow-hidden bg-shop-card border border-shop-border shadow-2xl relative aspect-[4/3]">
          <img
            src="/assets/images/frontimg.webp"
            alt="لوحة واجهة مركز جدة"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span className="text-shop-gold text-xs font-bold block mb-1">
                {isArabic ? "اللافتة الرسمية المعتمدة" : "Official Signboard"}
              </span>
              <p className="text-white text-sm font-bold">
                {isArabic ? "مركز جدة · سمكرة · بوية فرن · ميكانيكي · كهربائي" : "Markaz Jadda · Body Repair · Oven Paint · Mechanic · Electrical"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Crew Section */}
      <section className="py-16 mb-24 rounded-3xl bg-shop-card border border-shop-border p-8 sm:p-12 glossy-panel">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950 border border-shop-border shadow-xl">
            <img
              src="/assets/images/6ad67255-42f1-45ff-badb-6edb019e3035.webp"
              alt={isArabic ? "فني الورشة أثناء العمل" : "Workshop Technician"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-2 space-y-5">
            <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20 inline-block">
              {isArabic ? "طاقم الفنيين" : "Workshop Technicians"}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isArabic ? "طاقم فني متخصص في السمكرة والدهان" : "Experienced Technical Crew in Jeddah"}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isArabic
                ? "يمتلك طاقمنا الفني في مركز جدة خبرة عملية دقيقة في التعامل مع مختلف أنواع الصدمات وتعديل الهياكل المعدنية ومطابقة دهانات السيارات. يحرص الفنيون على فحص كل سيارة والتأكد من مطابقة اللون والخطوط الأصلية قبل التسليم."
                : "Our technicians at Markaz Jadda possess hands-on expertise handling diverse auto collision repairs, sheet metal alignment, and vehicle paint formulation. Every car is thoroughly inspected to guarantee seamless contours and exact finish matching before handover."}
            </p>

            <div className="p-4 rounded-2xl bg-shop-charcoal/80 border border-white/5 text-xs text-shop-muted leading-relaxed">
              <strong className="text-white block mb-1">
                {isArabic ? "شهادة عميل من خرائط جوجل:" : "Google Review Quote:"}
              </strong>
              <span className="italic text-slate-300">
                &ldquo;{siteConfig.reviews[0].commentAr}&rdquo;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
            {isArabic ? "التجهيزات الفنية" : "Shop Capabilities"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
            {dict.aboutPage.equipmentTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.aboutPage.equipments.map((eq: any, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-shop-card border border-shop-border flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-shop-gold/15 text-shop-gold flex items-center justify-center shrink-0 font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{eq.title}</h3>
                <p className="text-xs sm:text-sm text-shop-muted leading-relaxed">{eq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="rounded-3xl bg-gradient-to-br from-shop-charcoal via-shop-card to-shop-charcoal border border-shop-border p-8 sm:p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
          {dict.aboutPage.valuesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.aboutPage.values.map((val: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-shop-gold/20 text-shop-gold flex items-center justify-center font-bold mx-auto mb-3">
                {idx + 1}
              </div>
              <h3 className="text-base font-bold text-white">{val.title}</h3>
              <p className="text-xs sm:text-sm text-shop-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
