"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, Phone, Camera, X } from "lucide-react";

interface FloatingWhatsAppProps {
  locale: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ locale }) => {
  const isArabic = locale === "ar";
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = isArabic
    ? siteConfig.contact.defaultWhatsAppMsgAr
    : siteConfig.contact.defaultWhatsAppMsgEn;
  
  const whatsappUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <>
      {/* Floating Action Button on Desktop & Tablet (mirrors side automatically via end-6) */}
      <div className="fixed bottom-6 end-6 z-40 hidden sm:flex flex-col items-end gap-2">
        {/* Subtle prompt tooltip */}
        {showTooltip && (
          <div className="relative max-w-xs bg-shop-card/95 backdrop-blur-md text-white text-xs p-3 rounded-2xl border border-shop-gold/40 shadow-xl shadow-black/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 end-1.5 p-1 text-slate-400 hover:text-white"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1 text-shop-gold font-bold">
              <Camera className="w-3.5 h-3.5 text-shop-gold shrink-0" />
              <span>{isArabic ? "استفسر عن سيارتك" : "Ask About Your Car"}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed pe-3">
              {isArabic
                ? "صوّر صدمة السيارة وأرسلها عبر واتساب للاستفسار ومناقشة تفاصيل الإصلاح مع الفني مباشرة."
                : "Send car damage photos on WhatsApp to ask about your car and discuss repair options."}
            </p>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold whitespace-nowrap">
            {isArabic ? "تواصل واتساب" : "WhatsApp Us"}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar at bottom with safe area insets */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-shop-dark/95 backdrop-blur-lg border-t border-white/[0.08] px-4 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] flex items-center gap-2.5 shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>{isArabic ? "واتساب للاستفسار" : "WhatsApp Inquiry"}</span>
        </a>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center p-3 rounded-xl bg-shop-charcoal border border-shop-border active:border-shop-gold text-shop-gold"
          aria-label="Call Markaz Jadda"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};
