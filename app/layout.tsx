import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinnie",
  description: "Vincent Omondi",
  metadataBase: new URL("https://vincent-website.vercel.app"), // ✅ Add your deployed URL here
  icons: {
    icon: "/favicon.ico",          // for browsers
    shortcut: "/favicon.ico",      // for Safari pinned tabs
    apple: "/logo.png",            // for Apple touch icon
  },
  openGraph: {
    title: "Vinnie",
    description: "Welcome to my digital portfolio — showcasing creativity, tech skills, and innovation.",
    images: ["/Vin_logo.png"],     // ✅ Automatically resolved from metadataBase
    url: "https://vincent-website.vercel.app",
    siteName: "Vinnie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinnie",
    description: "Discover who I am and what I build — Vincent Omondi’s official portfolio.",
    images: ["/Vin_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics /> {/* ✅ Vercel analytics integration */}
      </body>
    </html>
  );
}
