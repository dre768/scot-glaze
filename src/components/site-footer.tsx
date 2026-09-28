import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#111] px-5 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandLogo size="lg" />
          <p className="mt-3 max-w-md text-white/60">
            UPVC windows and doors, plus flooring, tiling, cladding,
            conservatories, and house extensions — fitted for British homes across
            Scotland.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <WhatsAppIcon className="size-5 text-[#25D366]" />
            {company.phoneDisplay}
            <span className="text-white/45">WhatsApp</span>
          </a>
          <p>
            <a href={`tel:${company.phoneTel}`} className="hover:text-white">
              Call {company.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${company.email}`} className="hover:text-white">
              {company.email}
            </a>
          </p>
          <p>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </p>
          <p className="pt-3 text-white/40">
            © {new Date().getFullYear()} {company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
