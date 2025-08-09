import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Erland Events | UK Venue Finding Experts",
    template: "%s | Erland Events",
  },
  description: "UK-based venue finding for meetings, conferences, and events.",
  metadataBase: new URL("https://erlandevents.example"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    other: [
      { rel: "icon", url: "/erlandevents/logo.webp", type: "image/webp", media: "(prefers-reduced-data: no-preference)" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://erlandevents.example/",
    siteName: "Erland Events",
    title: "Erland Events | UK Venue Finding Experts",
    description: "UK-based venue finding for meetings, conferences, and events.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Erland Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erland Events | UK Venue Finding Experts",
    description: "UK-based venue finding for meetings, conferences, and events.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
