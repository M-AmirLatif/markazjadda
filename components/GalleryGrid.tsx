"use client";

import React, { useState } from "react";
import { GalleryItem, siteConfig } from "@/config/site";
import { Play, Image as ImageIcon, MessageCircle, X, ChevronRight, ChevronLeft, Filter } from "lucide-react";

interface GalleryGridProps {
  items: GalleryItem[];
  locale: string;
  dict: any;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, locale, dict }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const isArabic = locale === "ar";

  const filters = [
    { id: "all", label: dict.galleryPage.filterAll },
    { id: "video", label: dict.galleryPage.filterVideos },
    { id: "image", label: dict.galleryPage.filterPhotos },
    { id: "dent_repair", label: dict.galleryPage.filterDent },
    { id: "oven_paint", label: dict.galleryPage.filterPaint },
    { id: "electrical", label: isArabic ? "كهرباء وميكانيكا" : "Electrical & Mechanical" },
    { id: "workshop", label: isArabic ? "معدات الورشة" : "Workshop & Gear" },
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "video") return item.type === "video";
    if (activeFilter === "image") return item.type === "image";
    return item.category === activeFilter;
  });

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-shop-gold text-neutral-950 shadow-md shadow-shop-gold/20 scale-105"
                  : "bg-shop-card border border-shop-border text-slate-300 hover:text-white hover:border-shop-gold/40"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const title = isArabic ? item.titleAr : item.titleEn;
          const isVideo = item.type === "video";
          const whatsappAskUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
            isArabic
              ? `السلام عليكم، أود الاستفسار عن تفاصيل وتكلفة عمل مشابه لـ: "${title}"`
              : `Hello, I want to inquire about repair work similar to: "${title}"`
          )}`;

          return (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-shop-card border border-shop-border/80 glossy-card-hover flex flex-col"
            >
              {/* Media Thumbnail Container */}
              <div
                onClick={() => setSelectedItemIndex(index)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 cursor-pointer"
              >
                <img
                  src={isVideo ? item.poster : item.src}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 start-3">
                  {isVideo ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-neutral-900/80 text-shop-gold border border-shop-gold/30 backdrop-blur-md">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{dict.common.videos}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-neutral-900/80 text-slate-200 border border-white/20 backdrop-blur-md">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>{dict.common.photos}</span>
                    </span>
                  )}
                </div>

                {/* Big Center Play Icon for Video */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-shop-gold/90 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ms-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Title & WhatsApp Inquire Action */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-3 bg-shop-charcoal/50">
                <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                  {title}
                </h3>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItemIndex(index)}
                    className="text-xs text-shop-gold hover:underline font-semibold"
                  >
                    {isVideo ? dict.common.playVideo : dict.common.learnMore}
                  </button>

                  <a
                    href={whatsappAskUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{dict.common.askSimilar}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={() => setSelectedItemIndex(null)}
            className="absolute top-4 end-4 z-50 p-2.5 rounded-full bg-shop-charcoal text-white hover:text-shop-gold border border-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 start-4 -translate-y-1/2 p-3 rounded-full bg-shop-charcoal/80 text-white hover:text-shop-gold border border-white/10 z-40 hidden md:block"
            aria-label="Previous item"
          >
            {isArabic ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 end-4 -translate-y-1/2 p-3 rounded-full bg-shop-charcoal/80 text-white hover:text-shop-gold border border-white/10 z-40 hidden md:block"
            aria-label="Next item"
          >
            {isArabic ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Modal Content */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden bg-shop-card border border-shop-border shadow-2xl flex flex-col">
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    preload="none"
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={isArabic ? selectedItem.titleAr : selectedItem.titleEn}
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Caption & Inquire button */}
              <div className="p-4 md:p-6 bg-shop-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-shop-border">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {isArabic ? selectedItem.titleAr : selectedItem.titleEn}
                  </h3>
                  <p className="text-xs text-shop-muted mt-0.5">
                    {isArabic ? "توثيق حقيقي من ورشة مركز جدة" : "Authentic documentation from Markaz Jadda workshop"}
                  </p>
                </div>

                <a
                  href={`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
                    isArabic
                      ? `السلام عليكم، أود السؤال عن هذا العمل: "${selectedItem.titleAr}" وتقدير تكلفة عمل مماثل لسيارتي.`
                      : `Hello, I'm inquiring about this work: "${selectedItem.titleEn}" and an estimate for my vehicle.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/50"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{dict.common.askSimilar}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
