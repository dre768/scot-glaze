import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Lunox Services",
  description: "How Lunox Services handles enquiries and personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-mist px-5 py-28 md:px-8">
        <article className="mx-auto max-w-3xl space-y-6 text-ink">
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Legal
          </p>
          <h1 className="font-display-italic text-4xl text-black md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
          <p>
            {company.name} (“we”) uses this website to take enquiries about
            windows, doors, and home improvements across Scotland.
          </p>
          <h2 className="font-display text-2xl text-black">What we collect</h2>
          <p>
            When you use the quote form, chat, WhatsApp, phone, or email, we may
            receive your name, phone number, email, postcode, and project
            details.
          </p>
          <h2 className="font-display text-2xl text-black">How we use it</h2>
          <p>
            We use this information only to respond to your enquiry, arrange a
            survey or quote, and provide our services. We do not sell your
            details.
          </p>
          <h2 className="font-display text-2xl text-black">Advertising &amp; analytics</h2>
          <p>
            We may use Google Analytics and Google Ads to understand website
            traffic and show relevant adverts. Google may process device and
            usage data under their own policies.
          </p>
          <h2 className="font-display text-2xl text-black">Contact</h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${company.email}`} className="text-origin hover:underline">
              {company.email}
            </a>{" "}
            or WhatsApp {company.phoneDisplay}.
          </p>
          <p>
            <Link href="/terms" className="text-origin hover:underline">
              Terms &amp; Conditions
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
