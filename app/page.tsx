"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootIndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      // 1. Check saved preference in localStorage
      const saved = localStorage.getItem("markaz_locale");
      if (saved === "ar" || saved === "en") {
        router.replace(`/${saved}/`);
        return;
      }

      // 2. Check browser language
      const browserLang = navigator.language?.toLowerCase() || "";
      if (browserLang.startsWith("en")) {
        router.replace("/en/");
        return;
      }
    } catch (e) {
      // Fallback
    }

    // 3. Default to Arabic
    router.replace("/ar/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shop-dark text-white p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-shop-gold flex items-center justify-center text-neutral-950 font-bold animate-pulse">
          MJ
        </div>
        <p className="text-sm text-shop-muted">جاري التحويل إلى مركز جدة...</p>
        <div className="flex gap-4 text-xs pt-2">
          <a href="/ar/" className="text-shop-gold hover:underline">العربية (Arabic)</a>
          <span>·</span>
          <a href="/en/" className="text-shop-gold hover:underline">English</a>
        </div>
      </div>
    </div>
  );
}
