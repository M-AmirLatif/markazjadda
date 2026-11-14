import React from "react";
import Link from "next/link";

interface LogoProps {
  locale: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ locale, className = "", size = "md" }) => {
  return (
    <Link
      href={`/${locale}/`}
      prefetch={true}
      className={`inline-flex items-center gap-3 group transition-transform active:scale-95 shrink-0 ${className}`}
    >
      {/* Automotive Brand Emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-shop-gold to-yellow-500 shadow-md shadow-amber-500/20 border border-amber-300/40 shrink-0">
        <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-7 sm:h-7 text-neutral-950 fill-current drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized Car Front Silhouette & Accents */}
          <path d="M15 62 L22 38 C24 33, 28 30, 34 30 L66 30 C72 30, 76 33, 78 38 L85 62 C88 66, 85 72, 80 72 L72 72 C68 72, 66 68, 66 64 C66 60, 68 56, 72 56 L76 56 L71 40 L29 40 L24 56 L28 56 C32 56, 34 60, 34 64 C34 68, 32 72, 28 72 L20 72 C15 72, 12 66, 15 62 Z" />
          <circle cx="33" cy="63" r="5" fill="#DC2626" />
          <circle cx="67" cy="63" r="5" fill="#DC2626" />
          <path d="M42 22 L50 14 L58 22 Z" fill="#DC2626" />
        </svg>
      </div>

      {/* Typography Wordmark - Clean, Luxury Automotive Lockup */}
      <div className="flex flex-col text-start justify-center">
        <span className="font-extrabold text-base sm:text-xl tracking-tight text-white group-hover:text-shop-gold transition-colors font-arabic leading-none">
          مركز جدة
        </span>
        <span className="text-[9px] sm:text-[11px] font-semibold text-shop-muted tracking-wider uppercase font-english leading-none mt-1">
          Markaz Jadda Auto Shop
        </span>
      </div>
    </Link>
  );
};
