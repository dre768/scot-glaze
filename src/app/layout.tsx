import type { Metadata } from "next";
import { Libre_Bodoni, Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ChatAgent } from "@/components/chat-agent";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lunoxservices.com"
  ),
  title: "Lunox Services | UPVC Windows & Doors Across Scotland",
  description:
    "Lunox Services installs UPVC windows and doors, flooring, tiling, cladding, conservatories, and house extensions for British homes across Scotland.",
  openGraph: {
    title: "Lunox Services",
    description:
      "Windows, doors, and home improvements — surveyed and fitted across Scotland.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <ChatAgent />
        <Analytics />
      </body>
    </html>
  );
}
