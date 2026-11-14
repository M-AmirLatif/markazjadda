import React from "react";
import { notFound } from "next/navigation";
import { locales, getDictionary, isRtl } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const rtl = isRtl(locale);

  return (
    <div
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`min-h-screen flex flex-col font-sans ${rtl ? "font-arabic" : "font-english"}`}
    >
      <JsonLd locale={locale} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1 w-full">{children}</main>
      <Footer locale={locale} dict={dict} />
      <FloatingWhatsApp locale={locale} />
    </div>
  );
}
