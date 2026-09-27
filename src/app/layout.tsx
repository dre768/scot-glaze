import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinloch Windows | PVC windows made & fitted across Scotland",
  description:
    "Kinloch Windows designs, manufactures, and installs made-to-measure PVC windows for homes across Scotland. Free surveys and clear quotes.",
  openGraph: {
    title: "Kinloch Windows",
    description:
      "Made-to-measure PVC windows — manufactured and fitted for homes across Scotland.",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
