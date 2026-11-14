import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1115",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://markazjadda.com"),
  title: {
    template: "%s | مركز جدة - Markaz Jadda",
    default: "مركز جدة | ورشة سمكرة وبوية فرن وصيانة سيارات بجدة",
  },
  description: "مركز جدة لصيانة وسمكرة السيارات ورش بوية فرن، وميكانيكا وكهرباء بإشراف فنيين متمرسين بجدة.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "مركز جدة | ورشة سمكرة وبوية فرن وصيانة سيارات",
    description: "سمكرة متقنة، بوية فرن، وميكانيكا وكهرباء سيارات بجدة.",
    url: "https://markazjadda.com",
    siteName: "مركز جدة - Markaz Jadda",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "لوحة واجهة ورشة مركز جدة",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز جدة | ورشة سمكرة وبوية فرن وصيانة سيارات",
    description: "سمكرة متقنة، بوية فرن، وميكانيكا وكهرباء سيارات بجدة.",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "مركز جدة",
    "سمكرة وبوية جدة",
    "بوية فرن",
    "إصلاح صدمات السيارات",
    "Markaz Jadda",
    "car dent repair Jeddah",
    "car painting Jeddah",
    "auto body shop Jeddah",
    "الفحص الدوري جدة"
  ],
  authors: [{ name: "Markaz Jadda" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/assets/posters/video_18.webp" fetchPriority="high" />
      </head>
      <body className="bg-shop-dark text-slate-100 antialiased selection:bg-shop-gold selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
