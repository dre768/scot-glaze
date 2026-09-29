import type { Metadata } from "next";
import { Libre_Bodoni, Barlow } from "next/font/google";
import { ChatAgent } from "@/components/chat-agent";
import { GoogleTag } from "@/components/google-tag";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const display = Libre_Bodoni({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lunox.services";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UPVC Windows & Doors Scotland | Lunox Services",
    template: "%s | Lunox Services",
  },
  description:
    "A-rated UPVC windows and doors, home solar systems with 3D visualisation, flooring, tiling, cladding, conservatories and extensions — fitted across Scotland. Free survey.",
  keywords: [
    "UPVC windows Scotland",
    "UPVC doors Scotland",
    "solar panels Scotland",
    "home solar installation",
    "solar 3D visualisation",
    "window fitter Glasgow",
    "window fitter Edinburgh",
    "double glazing Scotland",
    "composite doors Scotland",
    "free window survey",
    "Lunox Services",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lunox Services | UPVC Windows & Doors Across Scotland",
    description:
      "Windows, doors, and home improvements — surveyed and fitted across Scotland.",
    locale: "en_GB",
    type: "website",
    url: siteUrl,
    siteName: "Lunox Services",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunox Services | UPVC Windows & Doors Across Scotland",
    description:
      "Free survey. A-rated UPVC windows and doors fitted across Scotland.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <GoogleTag />
        <JsonLd />
        {children}
        <ChatAgent />
      </body>
    </html>
  );
}
