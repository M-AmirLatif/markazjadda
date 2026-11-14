"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

interface HeaderProps {
  locale: string;
  dict: any;
}

export const Header: React.FC<HeaderProps> = ({ locale, dict }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "";
  const router = useRouter();
  const isArabic = locale === "ar";

  const navLinks = [
    { href: `/${locale}/`, label: dict.nav.home },
    { href: `/${locale}/services/`, label: dict.nav.services },
    { href: `/${locale}/gallery/`, label: dict.nav.gallery },
    { href: `/${locale}/about/`, label: dict.nav.about },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
    { href: `/${locale}/faq/`, label: dict.nav.faq },
  ];

  // Eagerly prefetch all pages immediately when header mounts so transitions are instant (0ms)
  useEffect(() => {
    navLinks.forEach((link) => {
      try {
        router.prefetch(link.href);
      } catch {}
    });
    try {
      router.prefetch(`/${locale}/book/`);
    } catch {}
  }, [locale, router]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === `/${locale}/`) {
      return pathname === `/${locale}/` || pathname === `/${locale}`;
    }
    return pathname.startsWith(path);
  };

  const handleWarmup = (href: string) => {
    try {
      router.prefetch(href);
    } catch {}
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0B0D12] border-b border-white/[0.08] shadow-lg shadow-black/40 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          {/* 1. Brand Logo */}
          <Logo locale={locale} />

          {/* 2. Desktop Navigation Links (>= 1280px: single row, elegant underline, zero wrapping) */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onMouseEnter={() => handleWarmup(link.href)}
                  onTouchStart={() => handleWarmup(link.href)}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap rounded-lg ${
                    active
                      ? "text-shop-gold font-bold after:absolute after:bottom-0 after:inset-x-3.5 after:h-[2px] after:bg-shop-gold after:rounded-full after:shadow-[0_0_8px_rgba(245,184,0,0.8)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Desktop Action Cluster (>= 1280px: unified 40px height) */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} size="md" />

            {/* Click-to-Call Phone Button (Single line, tabular nums) */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="h-10 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-shop-gold transition-all flex items-center gap-2 text-xs font-bold whitespace-nowrap active:scale-95"
              aria-label="Call Markaz Jadda"
            >
              <Phone className="w-3.5 h-3.5 text-shop-gold shrink-0" />
              <span className="phone-number ltr-number font-mono tracking-wide whitespace-nowrap">
                {siteConfig.contact.phoneDisplay}
              </span>
            </a>

            {/* Book Now Primary CTA */}
            <Link
              href={`/${locale}/book/`}
              prefetch={true}
              onMouseEnter={() => handleWarmup(`/${locale}/book/`)}
              className="h-10 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-shop-gold to-yellow-500 hover:brightness-105 active:scale-95 text-neutral-950 font-extrabold text-sm transition-all shadow-md shadow-amber-500/20 flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{dict.nav.bookNow}</span>
            </Link>
          </div>

          {/* 4. Tablet & Mobile Controls (< 1280px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden shrink-0">
            {/* Compact Single-button Language Switcher on mobile */}
            <LanguageSwitcher currentLocale={locale} variant="compact" />

            {/* Quick Direct Call Button */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-shop-gold flex items-center justify-center active:scale-95 transition-all"
              aria-label="Call Markaz Jadda"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white hover:text-shop-gold flex items-center justify-center active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 5. Full Mobile & Tablet Drawer Modal (< 1280px, Solid Opaque #0B0D12, Zero Bleed-Through, z-50) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#0B0D12] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          {/* Drawer Top Header Bar */}
          <div className="h-18 sm:h-20 px-4 sm:px-6 flex items-center justify-between border-b border-white/[0.08] bg-[#0B0D12] shrink-0">
            <Logo locale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white hover:text-shop-gold flex items-center justify-center active:scale-95 transition-all"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-shop-gold" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="p-5 sm:p-8 flex-1 flex flex-col justify-start max-w-md mx-auto w-full">
            {/* Language Selector in Drawer */}
            <div className="mb-6 pb-5 border-b border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-bold text-shop-muted">
                {isArabic ? "لغة الموقع" : "Language"}
              </span>
              <LanguageSwitcher currentLocale={locale} size="sm" variant="segmented" />
            </div>

            <nav className="flex flex-col w-full">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between py-3.5 border-b border-white/[0.06] transition-all ${
                      active
                        ? "text-shop-gold font-extrabold text-base sm:text-lg"
                        : "text-slate-300 hover:text-white font-semibold text-sm sm:text-base"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {active ? (
                        <span className="w-1.5 h-4 rounded-full bg-shop-gold shadow-[0_0_8px_rgba(245,184,0,0.8)]" />
                      ) : (
                        <span className="w-1.5 h-4 rounded-full bg-transparent group-hover:bg-white/20 transition-colors" />
                      )}
                      <span>{link.label}</span>
                    </div>
                    {isArabic ? (
                      <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${active ? "text-shop-gold" : "text-slate-500"}`} />
                    ) : (
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${active ? "text-shop-gold" : "text-slate-500"}`} />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Action CTAs */}
          <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-[#0B0D12] shrink-0">
            <div className="flex flex-col gap-3 max-w-md mx-auto w-full">
              <Link
                href={`/${locale}/book/`}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-extrabold bg-gradient-to-r from-amber-400 via-shop-gold to-yellow-500 text-neutral-950 shadow-xl shadow-shop-gold/25 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{dict.nav.bookNow}</span>
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-xl text-sm font-bold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-shop-gold" />
                <span className="phone-number ltr-number font-mono">{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
