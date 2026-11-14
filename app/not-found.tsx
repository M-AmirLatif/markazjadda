import React from "react";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-shop-dark text-white p-6">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-shop-card border border-shop-border">
        <h1 className="text-3xl font-extrabold text-shop-gold mb-2">404</h1>
        <p className="text-sm text-shop-muted mb-6">Page Not Found / الصفحة غير موجودة</p>
        <Link
          href="/ar/"
          className="px-6 py-2.5 rounded-xl bg-shop-gold text-neutral-950 font-bold text-sm"
        >
          مركز جدة (العربية)
        </Link>
      </div>
    </div>
  );
}
