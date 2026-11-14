"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  titleAr?: string;
  titleEn?: string;
  locale: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "قبل السمكرة",
  afterLabel = "بعد التعديل والتجهيز",
  titleAr,
  titleEn,
  locale,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isArabic = locale === "ar";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    // For RTL, if desired or standard, slider percentage represents division
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-shop-card border border-shop-border shadow-2xl">
      {(titleAr || titleEn) && (
        <div className="px-5 py-3 border-b border-shop-border bg-shop-charcoal flex items-center justify-between">
          <h3 className="text-sm md:text-base font-bold text-white">
            {isArabic ? titleAr : titleEn}
          </h3>
          <span className="text-xs text-shop-gold bg-shop-gold/10 px-2 py-0.5 rounded border border-shop-gold/30">
            {isArabic ? "مقارنة حقيقية" : "Real Case"}
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none cursor-ew-resize overflow-hidden bg-neutral-900"
      >
        {/* "After" Image (Underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterSrc}
            alt={afterLabel}
            className="w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <span className="absolute bottom-3 end-3 px-3 py-1 rounded-lg text-xs font-bold bg-neutral-900/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>

        {/* "Before" Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeLabel}
            className="w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <span className="absolute bottom-3 start-3 px-3 py-1 rounded-lg text-xs font-bold bg-neutral-900/80 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-shop-gold shadow-[0_0_10px_rgba(245,184,0,0.8)] z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-shop-gold text-neutral-950 font-bold flex items-center justify-center shadow-lg border-2 border-white cursor-grab active:cursor-grabbing">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
              <path d="M8 7 L3 12 L8 17 M16 7 L21 12 L16 17" />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 text-center bg-shop-charcoal/80 border-t border-white/5 text-[11px] text-shop-muted">
        {isArabic
          ? "اسحب المقبض يميناً ويساراً للمقارنة بين حالة الصدمة والنتيجة بعد الإصلاح والتأسيس"
          : "Drag slider left or right to compare vehicle collision damage before and after repair"}
      </div>
    </div>
  );
};
