"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface HeroVideoProps {
  poster: string;
  src: string;
  locale: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ poster, src, locale }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isArabic = locale === "ar";

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-950">
      {/* High-priority Poster Image for immediate sub-second LCP */}
      <img
        src={poster}
        alt="Markaz Jadda Workshop"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 scale-105 pointer-events-none"
      />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 scale-105 pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Subtle Pause / Play Accessibility Control Button (Desktop/Tablet) */}
      <div className="hidden sm:flex absolute bottom-6 start-6 z-20">
        <button
          type="button"
          onClick={togglePlay}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-shop-dark/80 hover:bg-shop-charcoal text-slate-300 hover:text-white border border-white/10 text-xs backdrop-blur-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-shop-gold"
          aria-label={
            isPlaying
              ? isArabic
                ? "إيقاف مؤقت لحركة فيديو الخلفية"
                : "Pause background hero video"
              : isArabic
                ? "تشغيل فيديو الخلفية"
                : "Play background hero video"
          }
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-shop-gold" />
              <span className="text-[11px] font-medium">{isArabic ? "إيقاف الفيديو" : "Pause"}</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-shop-gold fill-current" />
              <span className="text-[11px] font-medium">{isArabic ? "تشغيل الفيديو" : "Play"}</span>
            </>
          )}
        </button>
      </div>

      {/* Gradients to blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-shop-dark via-shop-dark/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-shop-dark/90 via-transparent to-shop-dark/90 pointer-events-none" />
    </div>
  );
};
