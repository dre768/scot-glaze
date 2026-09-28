import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { HomeImprovementsSection } from "@/components/home-improvements-section";
import { IntroSection } from "@/components/intro-section";
import { ProcessSection } from "@/components/process-section";
import { ProductsSection } from "@/components/products-section";
import { QuoteForm } from "@/components/quote-form";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <ProductsSection />
        <HomeImprovementsSection />
        <AboutSection />
        <GallerySection />
        <ProcessSection />
        <ReviewsSection />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  );
}
