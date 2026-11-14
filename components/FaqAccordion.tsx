"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  locale: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, locale }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isArabic = locale === "ar";

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const q = isArabic ? faq.qAr : faq.qEn;
        const a = isArabic ? faq.aAr : faq.aEn;

        return (
          <div
            key={index}
            className="rounded-2xl border border-shop-border bg-shop-card overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-5 text-start flex items-center justify-between gap-4 text-white font-bold text-sm md:text-base hover:text-shop-gold transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{q}</span>
              <div
                className={`w-7 h-7 rounded-full bg-shop-charcoal flex items-center justify-center shrink-0 border border-white/5 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-shop-gold" : "text-shop-muted"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                <p>{a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
