import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://markazjadda.com";
  const routes = ["", "/services", "/gallery", "/about", "/book", "/contact", "/faq", "/privacy"];
  const locales = ["ar", "en"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const url = `${baseUrl}/${locale}${route ? `${route}/` : "/"}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route ? `${route}/` : "/"}`,
            en: `${baseUrl}/en${route ? `${route}/` : "/"}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
