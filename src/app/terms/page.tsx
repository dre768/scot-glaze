import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lunox Services",
  description:
    "Terms and conditions for Lunox Services window, door, and home improvement work across Scotland.",
};

const sections = [
  {
    title: "1. Who we are",
    body: `These Terms & Conditions apply to services supplied by ${company.name} (“we”, “us”, “our”) to homeowners and residential customers in ${company.area}. By requesting a quote, booking a survey, or accepting our work, you agree to these terms.`,
  },
  {
    title: "2. Quotes and surveys",
    body: `Quotes are free and without obligation. Prices are based on the information you provide and on our survey. If site conditions differ from what was surveyed, we will confirm any change in writing before proceeding. Quotes are valid for 30 days unless otherwise stated.`,
  },
  {
    title: "3. Orders and deposits",
    body: `An order is confirmed when you accept our written quotation and pay any deposit we request. Deposits are used toward materials and manufacturing. Manufacture typically begins after deposit clearance. Balance is due on completion unless we agree another schedule in writing.`,
  },
  {
    title: "4. Installation",
    body: `We aim to fit on the agreed date. Delays can occur due to weather, access, manufacturing, or circumstances outside our control — we will keep you informed. You must provide safe access, clear working areas, and accurate information about utilities and restrictions. We leave the work area tidy; making good of decoration beyond normal fitting disturbance is not included unless quoted.`,
  },
  {
    title: "5. Products and standards",
    body: `Windows, doors, and related products are supplied to the specification in your quote. Natural materials and finishes can vary slightly. We fit to industry good practice for UK residential glazing. Any guarantees from manufacturers are passed on in addition to your statutory rights.`,
  },
  {
    title: "6. Cancellations",
    body: `If you cancel after manufacture has started, we may charge for materials and work already committed. Cooling-off rights for distance contracts apply where the law requires. Contact us promptly if you need to change or cancel a booking.`,
  },
  {
    title: "7. Liability",
    body: `We are responsible for carrying out work with reasonable care and skill. We are not liable for pre-existing building defects, hidden conditions we could not reasonably discover at survey, or consequential losses beyond what the law allows. Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.`,
  },
  {
    title: "8. Privacy",
    body: `We use your contact details only to provide quotes, surveys, installations, and related customer service (including WhatsApp and phone). We do not sell your data. Message us if you want details removed from our active contact list.`,
  },
  {
    title: "9. Contact",
    body: `Questions about these terms: call or WhatsApp ${company.phoneDisplay}, or email ${company.email}.`,
  },
  {
    title: "10. Governing law",
    body: `These terms are governed by the laws of Scotland. Courts in Scotland have exclusive jurisdiction, except where consumer law gives you a right to bring proceedings elsewhere in the UK.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white pt-28 md:pt-32">
        <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Legal
          </p>
          <h1 className="mt-4 font-display-italic text-4xl text-black md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}. Please read
            carefully before confirming any work with {company.name}.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl text-black md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
            <Link href="/" className="origin-link">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
