import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

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
icons: {
    icon: "/favicon.ico",          // for browsers
    shortcut: "/favicon.ico",      // for Safari pinned tabs
    apple: "/logo.png",            // for Apple touch icon
  },
  openGraph: {
    title: "Vinnie",
    description: " ",
    images: ["/Vin_logo.png"],         // shows your logo when shared on social media
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

        <Analytics />

      </body>
    </html>
  );
}
