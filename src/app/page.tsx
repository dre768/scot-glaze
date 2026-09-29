import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { HomeImprovementsSection } from "@/components/home-improvements-section";
import { IntroSection } from "@/components/intro-section";
import { ProcessSection } from "@/components/process-section";
import { ProductsSection } from "@/components/products-section";
import { QuoteForm } from "@/components/quote-form";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolarSection } from "@/components/solar-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <ProductsSection />
        <SolarSection />
        <HomeImprovementsSection />
        <AboutSection />
        <ProcessSection />
        <ReviewsSection />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  );
}
