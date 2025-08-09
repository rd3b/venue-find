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
    default: "venue-find | UK Venue Finding Experts",
    template: "%s | venue-find",
  },
  description: "UK-based venue finding for meetings, conferences, and events.",
  metadataBase: new URL("https://venue-find.example"),
  icons: { icon: [
    { url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.svg", type: "image/svg+xml" },
  ] },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://venue-find.example/",
    siteName: "venue-find",
    title: "venue-find | UK Venue Finding Experts",
    description: "UK-based venue finding for meetings, conferences, and events.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "venue-find",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "venue-find | UK Venue Finding Experts",
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
