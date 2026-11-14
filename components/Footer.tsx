import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, ExternalLink } from "lucide-react";

interface FooterProps {
  locale: string;
  dict: any;
}

export const Footer: React.FC<FooterProps> = ({ locale, dict }) => {
  const isArabic = locale === "ar";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090A0D] border-t border-shop-border/80 text-slate-300 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Logo locale={locale} />
            <p className="text-sm text-shop-muted leading-relaxed">
              {isArabic ? siteConfig.tagline.ar : siteConfig.tagline.en}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isArabic ? "ورشة معتمدة بجدة · أسعار منافسة" : "Certified Workshop · Honest Pricing"}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shop-gold"></span>
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${locale}/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/book/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.book}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq/`} prefetch={true} className="hover:text-shop-gold transition-colors">
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy/`} className="hover:text-shop-gold transition-colors text-xs text-shop-muted">
                  {dict.common.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shop-gold"></span>
              {isArabic ? "خدمات الورشة" : "Our Services"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/${locale}/services/#${svc.slug}`}
                    className="hover:text-shop-gold transition-colors flex items-center gap-2"
                  >
                    <span>{isArabic ? svc.titleAr : svc.titleEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shop-gold"></span>
              {dict.nav.contact}
            </h3>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-shop-gold shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">
                  {isArabic ? siteConfig.location.addressAr : siteConfig.location.addressEn}
                </p>
                <p className="text-xs text-shop-muted mt-1">
                  {isArabic
                    ? siteConfig.location.landmarksAr.join(" · ")
                    : siteConfig.location.landmarksEn.join(" · ")}
                </p>
                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-shop-gold hover:underline mt-1.5"
                >
                  <span>{dict.common.openMap}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-shop-gold shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-white hover:text-shop-gold phone-number font-semibold">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-shop-gold shrink-0 mt-0.5" />
              <div className="text-xs text-shop-muted leading-relaxed">
                <p>{isArabic ? siteConfig.hours.displayAr : siteConfig.hours.displayEn}</p>
              </div>
            </div>

            <div className="pt-2">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-shop-muted">
          <p>
            {dict.common.copyright.replace("{year}", currentYear.toString())}
          </p>
          <p className="text-center md:text-end">
            {dict.common.noCookies}
          </p>
        </div>
      </div>
    </footer>
  );
};
