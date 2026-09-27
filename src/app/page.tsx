import { AboutSection } from "@/components/about-section";
import { DoorsSection } from "@/components/doors-section";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { QuoteForm } from "@/components/quote-form";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhySection } from "@/components/why-section";
import { WindowsSection } from "@/components/windows-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WindowsSection />
        <DoorsSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <WhySection />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  );
}
