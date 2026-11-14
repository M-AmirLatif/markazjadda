import React from "react";
import Link from "next/link";
import { getDictionary, isRtl } from "@/lib/i18n";
import { ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const isArabic = isRtl(locale);

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-shop-gold uppercase tracking-wider bg-shop-gold/10 px-3 py-1 rounded-full border border-shop-gold/20 inline-block mb-3">
          {dict.common.privacy}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
          {isArabic ? "سياسة الخصوصية وحماية البيانات" : "Privacy Policy & Data Transparency"}
        </h1>
      </div>

      <div className="p-6 sm:p-10 rounded-3xl bg-shop-card border border-shop-border space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed glossy-panel">
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 shrink-0" />
          <p className="font-semibold">
            {dict.common.noCookies}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">
            {isArabic ? "1. طبيعة الموقع الثابت (Static Architecture)" : "1. Static Architecture"}
          </h2>
          <p>
            {isArabic
              ? "موقع مركز جدة مصمم كصفحات ثابتة بدون خادم (Frontend-Only Static Website). لا نقوم بجمع أو تسجيل بيانات زوار الموقع على خوادم أو قواعد بيانات خلفية على الإطلاق."
              : "Markaz Jadda's website is built as a pure static frontend site. We do not store or collect user data on any server or database."}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">
            {isArabic ? "2. التخزين المحلي (Local Storage)" : "2. Local Browser Storage"}
          </h2>
          <p>
            {isArabic
              ? "يستخدم الموقع ميزة التخزين المحلي للمتصفح (localStorage) حصرياً لحفظ خيارك المفضل للغة (العربية أو الإنجليزية) لضمان بقائك على لغتك المفضلة عند تصفحك للموقع. لا يتم استخدام ملفات تعريف الارتباط (Cookies)."
              : "We only use the browser's localStorage strictly to preserve your selected language preference (Arabic or English) across page visits. No tracking cookies are set."}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">
            {isArabic ? "3. التواصل وطلب الخدمات" : "3. Communications & Contact"}
          </h2>
          <p>
            {isArabic
              ? "تتم جميع طلبات الحجز والاستفسارات وإرسال صور الصدمات مباشرة عبر تطبيق واتساب (WhatsApp) المشفر من طرف إلى طرف أو عبر الاتصال الهاتفي المباشر."
              : "All booking inquiries, quote requests, and damage photo submissions operate directly through end-to-end encrypted WhatsApp chats or direct telephone phone calls."}
          </p>
        </section>

        <div className="pt-6 border-t border-white/5">
          <Link
            href={`/${locale}/`}
            className="inline-flex items-center gap-2 text-shop-gold hover:underline font-bold"
          >
            {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{dict.notFound.backHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
