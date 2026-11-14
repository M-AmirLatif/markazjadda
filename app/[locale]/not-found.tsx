import React from "react";
import Link from "next/link";
import { Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-shop-card border border-shop-border glossy-panel">
        <div className="w-16 h-16 rounded-2xl bg-shop-gold/15 text-shop-gold flex items-center justify-center mx-auto mb-4">
          <Wrench className="w-8 h-8" />
        </div>
        <span className="text-4xl font-extrabold text-shop-gold font-english block mb-2">404</span>
        <h1 className="text-xl font-bold text-white mb-2">الصفحة غير موجودة / Page Not Found</h1>
        <p className="text-xs sm:text-sm text-shop-muted mb-6">
          عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
        </p>
        <Link
          href="/ar/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-bold text-sm transition-all"
        >
          العودة للرئيسية / Back to Home
        </Link>
      </div>
    </div>
  );
}
