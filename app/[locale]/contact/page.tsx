import React from "react";
import { getDictionary, isRtl } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation } from "lucide-react";

export default function ContactPage({ params }: { params: { locale: string } }) {
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
          {dict.contactPage.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
          {dict.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-shop-muted leading-relaxed">
          {dict.contactPage.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Phone & WhatsApp */}
          <div className="p-6 rounded-3xl bg-shop-card border border-shop-border glossy-panel">
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-shop-gold" />
              <span>{dict.contactPage.phoneTitle}</span>
            </h2>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-shop-muted block mb-1">
                  {isArabic ? "الاتصال المباشر:" : "Direct Call:"}
                </span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-lg font-bold text-white hover:text-shop-gold phone-number"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-xs text-shop-muted block mb-2">
                  {isArabic ? "محادثة واتساب الفورية:" : "Instant WhatsApp Chat:"}
                </span>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isArabic ? "تحدث عبر واتساب الآن" : "Chat on WhatsApp Now"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Address & Landmarks */}
          <div className="p-6 rounded-3xl bg-shop-card border border-shop-border glossy-panel">
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-shop-gold" />
              <span>{dict.contactPage.addressTitle}</span>
            </h2>

            <p className="text-sm text-white font-medium mb-3">
              {isArabic ? siteConfig.location.addressAr : siteConfig.location.addressEn}
            </p>

            <div className="p-3.5 rounded-xl bg-shop-charcoal/80 border border-white/5 text-xs text-shop-muted space-y-1 mb-5">
              <strong className="text-shop-gold block mb-1">
                {dict.common.landmarks}:
              </strong>
              {isArabic ? (
                <>
                  <p>• {siteConfig.location.landmarksAr[0]}</p>
                  <p>• {siteConfig.location.landmarksAr[1]}</p>
                </>
              ) : (
                <>
                  <p>• {siteConfig.location.landmarksEn[0]}</p>
                  <p>• {siteConfig.location.landmarksEn[1]}</p>
                </>
              )}
            </div>

            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-bold text-sm shadow-md"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>{dict.contactPage.directionsBtn}</span>
            </a>
          </div>

          {/* Card 3: Hours */}
          <div className="p-6 rounded-3xl bg-shop-card border border-shop-border glossy-panel">
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-shop-gold" />
              <span>{dict.contactPage.hoursTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic ? siteConfig.hours.displayAr : siteConfig.hours.displayEn}
            </p>
          </div>
        </div>

        {/* Embedded Google Map Iframe (No API key, plain embed) */}
        <div className="lg:col-span-7 h-[550px] rounded-3xl overflow-hidden bg-shop-card border border-shop-border shadow-2xl relative">
          <iframe
            src={siteConfig.location.googleMapsEmbedIframe}
            title="Markaz Jadda Location"
            className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute top-4 start-4 bg-neutral-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-shop-border text-xs text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-shop-gold"></span>
            <span>Plus Code: {siteConfig.location.plusCode} (Jeddah)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
