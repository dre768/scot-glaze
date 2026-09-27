import { Coverage } from "@/components/coverage";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { QuoteForm } from "@/components/quote-form";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Coverage />
        <Process />
        <QuoteForm />
      </main>
      <SiteFooter />
    </>
  );
}
