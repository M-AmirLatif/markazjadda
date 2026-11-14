"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageSquare, Calendar, Car, Wrench, Send, AlertCircle, Camera, CheckCircle2 } from "lucide-react";

interface BookingFormProps {
  locale: string;
  dict: any;
}

export const BookingForm: React.FC<BookingFormProps> = ({ locale, dict }) => {
  const isArabic = locale === "ar";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carDetails: "",
    serviceType: "",
    date: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.carDetails.trim()) {
      setError(dict.bookPage.validationError);
      return;
    }

    // Saudi phone format check (optional friendly validation)
    const phoneClean = formData.phone.replace(/[\s-]/g, "");
    if (phoneClean.length < 8) {
      setError(isArabic ? "يرجى كتابة رقم جوال صحيح." : "Please enter a valid phone number.");
      return;
    }

    // Build WhatsApp message
    const msg = isArabic
      ? `*طلب حجز موعد وتقدير صدمة - مركز جدة*\n` +
        `👤 *الاسم:* ${formData.name}\n` +
        `📱 *رقم الجوال:* ${formData.phone}\n` +
        `🚗 *السيارة (النوع / الموديل):* ${formData.carDetails}\n` +
        `🔧 *الخدمة المطلوبة:* ${formData.serviceType || "سمكرة وبوية"}\n` +
        `📅 *الموعد المفضل:* ${formData.date || "في أقرب وقت"}\n` +
        `📝 *ملاحظات وتفاصيل:* ${formData.message || "لا توجد ملاحظات إضافية"}\n\n` +
        `*(ملاحظة: سأقوم بإرفاق صور الصدمة هنا في المحادثة لتقدير التكلفة)*`
      : `*Appointment & Quote Request - Markaz Jadda*\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Phone:* ${formData.phone}\n` +
        `🚗 *Car Make/Model/Year:* ${formData.carDetails}\n` +
        `🔧 *Service:* ${formData.serviceType || "Body & Paint"}\n` +
        `📅 *Preferred Date:* ${formData.date || "As soon as possible"}\n` +
        `📝 *Details:* ${formData.message || "None"}\n\n` +
        `*(Note: I will attach car damage photos here in this chat for assessment)*`;

    const waLink = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(msg)}`;

    setIsSuccess(true);
    // Open WhatsApp
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-2xl mx-auto bg-shop-card border border-shop-border rounded-3xl p-6 sm:p-10 shadow-2xl glossy-panel">
      {/* Top Banner Notice about Photos */}
      <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-shop-gold/30 text-amber-200 flex items-start gap-3">
        <Camera className="w-5 h-5 text-shop-gold shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="block text-shop-gold font-bold mb-1">
            {dict.bookPage.photoUploadNoticeTitle}
          </strong>
          <span>{dict.bookPage.photoUploadNotice}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            {dict.bookPage.nameLabel} <span className="text-shop-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={dict.bookPage.namePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm placeholder:text-slate-500 focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            {dict.bookPage.phoneLabel} <span className="text-shop-gold">*</span>
          </label>
          <input
            type="tel"
            required
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={dict.bookPage.phonePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm placeholder:text-slate-500 focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors text-start"
          />
        </div>

        {/* Car Details */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
            <Car className="w-4 h-4 text-shop-gold" />
            <span>{dict.bookPage.carMakeLabel}</span>
            <span className="text-shop-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.carDetails}
            onChange={(e) => setFormData({ ...formData, carDetails: e.target.value })}
            placeholder={dict.bookPage.carMakePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm placeholder:text-slate-500 focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors"
          />
        </div>

        {/* Service Type Selection */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
            <Wrench className="w-4 h-4 text-shop-gold" />
            <span>{dict.bookPage.serviceLabel}</span>
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors"
          >
            <option value="">{dict.bookPage.serviceSelect}</option>
            {siteConfig.services.map((svc) => (
              <option key={svc.id} value={isArabic ? svc.titleAr : svc.titleEn}>
                {isArabic ? `${svc.signNameAr} - ${svc.titleAr}` : `${svc.signNameEn} - ${svc.titleEn}`}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-shop-gold" />
            <span>{dict.bookPage.dateLabel}</span>
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-1.5">
            {dict.bookPage.messageLabel}
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={dict.bookPage.messagePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-shop-charcoal border border-shop-border text-white text-sm placeholder:text-slate-500 focus:border-shop-gold focus:ring-1 focus:ring-shop-gold transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 px-6 rounded-2xl bg-shop-gold hover:bg-shop-gold-hover text-neutral-950 font-bold text-base transition-all shadow-lg shadow-shop-gold/20 flex items-center justify-center gap-2 active:scale-98"
        >
          <Send className="w-5 h-5 rtl:rotate-180" />
          <span>{dict.bookPage.submitBtn}</span>
        </button>

        {isSuccess && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              {isArabic
                ? "تم تجهيز الرسالة وفتح واتساب! يرجى إرسال الصور في الشات الآن."
                : "Message formatted and WhatsApp opened! Please attach damage photos in chat."}
            </span>
          </div>
        )}
      </form>
    </div>
  );
};
