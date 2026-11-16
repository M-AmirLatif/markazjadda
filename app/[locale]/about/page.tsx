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

      {/* Meet Our Master Craftsmen & Specialists (2 Dedicated Technicians with 5 Years Experience) */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20 inline-block">
            {dict.aboutPage.teamBadge || (isArabic ? "طاقم العمل والخبرات" : "Master Craftsmen")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-3">
            {dict.aboutPage.teamTitle || (isArabic ? "تعرف على الفنيين المعتمدين في مركز جدة" : "Meet Our Certified Technicians")}
          </h2>
          <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
            {dict.aboutPage.teamSubtitle || (isArabic
              ? "فنيون متمرسون بخبرة 5 سنوات في سمكرة وبوية وفرن وروغن السيارات لضمان عودة سيارتك لحالة الوكالة."
              : "Dedicated specialists with 5 years of proven hands-on experience in auto body dent repair, oven-baked painting, and Rogan coating.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.team.map((member) => {
            const role = isArabic ? member.roleAr : member.roleEn;
            const specialty = isArabic ? member.specialtyAr : member.specialtyEn;
            const exp = isArabic ? member.experienceAr : member.experienceEn;
            const bio = isArabic ? member.bioAr : member.bioEn;
            const skills = isArabic ? member.skillsAr : member.skillsEn;

            const whatsappConsultUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
              isArabic
                ? `السلام عليكم، أود استشارة ${role} بخصوص سيارتي وإرسال الصور.`
                : `Hello Markaz Jadda, I want to consult your ${role} regarding my car.`
            )}`;

            return (
              <div
                key={member.id}
                className="rounded-3xl bg-shop-card border border-shop-border overflow-hidden glossy-panel flex flex-col justify-between shadow-2xl hover:border-shop-gold/40 transition-all group"
              >
                <div>
                  {/* Photo Header with Badge Overlay */}
                  <div className="relative aspect-[4/3] w-full bg-neutral-950 overflow-hidden">
                    <picture>
                      <source type="image/webp" srcSet={`${member.imageThumb} 400w, ${member.image} 800w`} />
                      <img
                        src={member.image}
                        alt={role}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </picture>

                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-shop-gold/30 text-shop-gold text-xs font-bold shadow-md">
                        <Award className="w-3.5 h-3.5 text-shop-gold shrink-0" />
                        <span>{exp}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase backdrop-blur-md shadow-md">
                        {isArabic ? "معتمد بالورشة" : "Certified"}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 group-hover:text-shop-gold transition-colors">
                        {role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-shop-gold">
                        {specialty}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {bio}
                    </p>

                    {/* Skills Checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-shop-gold mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{isArabic ? "المهام والخبرات التخصصية:" : "Core Technical Mastery:"}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-xl bg-shop-charcoal/80 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                          >
                            <span className="w-4 h-4 rounded-full bg-shop-gold/15 text-shop-gold font-bold flex items-center justify-center text-[9px] shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="leading-snug">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={whatsappConsultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-shop-gold/20 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>
                      {isArabic ? `تواصل واستشر ${role}` : `Consult ${role}`}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
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
