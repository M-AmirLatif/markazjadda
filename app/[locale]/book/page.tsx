import React from "react";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { BookingForm } from "@/components/BookingForm";
import { MessageCircle, Phone, Calendar, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function BookPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  const directWhatsAppUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
    isArabic ? siteConfig.contact.defaultWhatsAppMsgAr : siteConfig.contact.defaultWhatsAppMsgEn
  )}`;

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20">
          {dict.bookPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.bookPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.bookPage.subtitle}
        </p>
      </div>

      {/* Two Column Layout: Direct WhatsApp Quick Action + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left / Info Side */}
        <div className="lg:col-span-5 space-y-6">
          {/* Big Direct WhatsApp Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 text-white shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 fill-current" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              {dict.bookPage.directWhatsAppTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {dict.bookPage.directWhatsAppDesc}
            </p>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/60 active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{dict.bookPage.directWhatsAppBtn}</span>
            </a>
          </div>

          {/* Quick Info Points */}
          <div className="p-6 rounded-3xl bg-shop-card border border-shop-border space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-shop-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-0.5">{dict.common.workingHours}</strong>
                <p className="text-shop-muted leading-relaxed">
                  {isArabic ? siteConfig.hours.displayAr : siteConfig.hours.displayEn}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-white/5">
              <MapPin className="w-4 h-4 text-shop-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-0.5">{dict.common.location}</strong>
                <p className="text-shop-muted leading-relaxed">
                  {isArabic ? siteConfig.location.addressAr : siteConfig.location.addressEn}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-0.5">
                  {isArabic ? "استفسار مباشر بالصور" : "Direct Photo Inquiry"}
                </strong>
                <p className="text-shop-muted leading-relaxed">
                  {isArabic
                    ? "أرسل صور الصدمة عبر واتساب للاستفسار عن سيارتك ومناقشة تفاصيل العمل مع الفني."
                    : "Send damage photos on WhatsApp to ask about your car and discuss repair options."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right / Form Side */}
        <div className="lg:col-span-7">
          <BookingForm locale={locale} dict={dict} />
        </div>
      </div>
    </div>
  );
}
