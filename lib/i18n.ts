import arMessages from "@/messages/ar.json";
import enMessages from "@/messages/en.json";

export type Locale = "ar" | "en";
export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

const dictionaries = {
  ar: arMessages,
  en: enMessages,
};

export function getDictionary(locale: string) {
  if (locale === "en") return dictionaries.en;
  return dictionaries.ar;
}

export function isRtl(locale: string): boolean {
  return locale === "ar";
}

export function getOtherLocale(locale: string): Locale {
  return locale === "ar" ? "en" : "ar";
}
