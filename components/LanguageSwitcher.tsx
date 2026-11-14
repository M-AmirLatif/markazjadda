"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
  size?: "sm" | "md";
  variant?: "segmented" | "compact";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  size = "md",
  variant = "segmented",
}) => {
  const pathname = usePathname() || `/${currentLocale}/`;
  const router = useRouter();

  const handleSwitch = (newLocale: "ar" | "en") => {
    if (newLocale === currentLocale) return;

    try {
      localStorage.setItem("markaz_locale", newLocale);
    } catch (e) {
      // Ignore
    }

    let newPath = pathname;
    if (pathname.startsWith(`/${currentLocale}/`)) {
      newPath = pathname.replace(`/${currentLocale}/`, `/${newLocale}/`);
    } else if (pathname === `/${currentLocale}`) {
      newPath = `/${newLocale}/`;
    } else {
      newPath = `/${newLocale}/`;
    }

    router.push(newPath);
  };

  if (variant === "compact") {
    const targetLocale = currentLocale === "ar" ? "en" : "ar";
    return (
      <button
        type="button"
        onClick={() => handleSwitch(targetLocale)}
        className="h-9 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-shop-gold transition-all flex items-center justify-center text-xs font-bold whitespace-nowrap active:scale-95"
        aria-label={targetLocale === "ar" ? "التحويل إلى اللغة العربية" : "Switch to English"}
      >
        <span className={targetLocale === "ar" ? "font-arabic" : "font-english"}>
          {targetLocale === "ar" ? "عربي" : "EN"}
        </span>
      </button>
    );
  }

  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-sm ${
        isSmall ? "h-9" : "h-10"
      }`}
    >
      <button
        type="button"
        onClick={() => handleSwitch("ar")}
        className={`h-full px-3 rounded-lg transition-all flex items-center justify-center text-xs whitespace-nowrap ${
          currentLocale === "ar"
            ? "bg-shop-gold text-neutral-950 font-extrabold shadow-sm"
            : "text-slate-400 hover:text-white font-medium"
        }`}
        aria-label="العربية - التحويل إلى اللغة العربية"
      >
        <span className="font-arabic leading-none">العربية</span>
      </button>

      <button
        type="button"
        onClick={() => handleSwitch("en")}
        className={`h-full px-3 rounded-lg transition-all flex items-center justify-center text-xs whitespace-nowrap font-english ${
          currentLocale === "en"
            ? "bg-shop-gold text-neutral-950 font-extrabold shadow-sm"
            : "text-slate-400 hover:text-white font-medium"
        }`}
        aria-label="EN - Switch to English"
      >
        <span className="leading-none">English</span>
      </button>
    </div>
  );
};
