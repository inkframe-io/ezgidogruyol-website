import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LocaleProvider } from "@/lib/locale-context";
import { Toaster } from "@/components/ui/sonner";
import { content } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const { meta } = content.en;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: `${meta.name} — ${meta.role}`,
  description: meta.description,
  openGraph: {
    title: `${meta.name} — ${meta.role}`,
    description: meta.description,
    url: meta.siteUrl,
    siteName: meta.name,
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <LocaleProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          {children}
          <Toaster position="bottom-center" />
        </LocaleProvider>
      </body>
    </html>
  );
}
