import React from "react";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function FaqPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  const whatsappInquireUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
    isArabic
      ? "السلام عليكم، لدي استفسار إضافي بخصوص خدمات مركز جدة."
      : "Hello, I have an additional question about Markaz Jadda services."
  )}`;

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
          {dict.faqPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.faqPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.faqPage.subtitle}
        </p>
      </div>

      {/* Accordion Component */}
      <div className="mb-20">
        <FaqAccordion faqs={siteConfig.faqs} locale={locale} />
      </div>

      {/* Didn't find your answer? CTA */}
      <div className="max-w-2xl mx-auto text-center p-8 rounded-3xl bg-shop-card border border-shop-border glossy-panel">
        <HelpCircle className="w-10 h-10 text-shop-gold mx-auto mb-3" />
        <h2 className="text-lg font-bold text-white mb-2">
          {isArabic ? "هل لديك سؤال أو استفسار آخر؟" : "Have Another Question?"}
        </h2>
        <p className="text-xs sm:text-sm text-shop-muted mb-6">
          {isArabic
            ? "فريقنا الفني جاهز للرد على جميع تساؤلاتك ومساعدتك على الفور عبر واتساب."
            : "Our team is available to assist you with any custom inquiries directly on WhatsApp."}
        </p>

        <a
          href={whatsappInquireUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{isArabic ? "تحدث معنا مباشرة عبر واتساب" : "Ask Us on WhatsApp"}</span>
        </a>
      </div>
    </div>
  );
}
