import React from "react";
import { siteConfig } from "@/config/site";

interface JsonLdProps {
  locale: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({ locale }) => {
  const isArabic = locale === "ar";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": isArabic ? siteConfig.name.ar : siteConfig.name.en,
    "alternateName": isArabic ? siteConfig.name.en : siteConfig.name.ar,
    "description": isArabic ? siteConfig.tagline.ar : siteConfig.tagline.en,
    "url": "https://markazjadda.com", // Canonical placeholder
    "telephone": siteConfig.contact.phoneRaw,
    "priceRange": "$$",
    "image": [
      "https://markazjadda.com/assets/images/frontimg.webp",
      "https://markazjadda.com/assets/images/6ad67255-42f1-45ff-badb-6edb019e3035.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prince Abdulmajeed",
      "addressLocality": "Jeddah",
      "postalCode": siteConfig.location.postalCode,
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4858,
      "longitude": 39.1925
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.stats.ratingValue,
      "reviewCount": siteConfig.stats.ratingCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
