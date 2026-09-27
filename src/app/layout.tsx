import type { Metadata } from "next";
import { Libre_Bodoni, Barlow } from "next/font/google";
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
  title: "Lunox Services | UPVC Windows & Doors Across Scotland",
  description:
    "Lunox Services installs UPVC windows and doors for homes across Scotland. Explore our work, read reviews, and request a free quote.",
  openGraph: {
    title: "Lunox Services",
    description:
      "UPVC windows and doors — surveyed, supplied, and fitted across Scotland.",
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
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
