"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#solar", label: "Solar" },
  { href: "/#improvements", label: "Home improvements" },
  { href: "/#about", label: "About us" },
  { href: "/#process", label: "How to buy" },
  { href: "/terms", label: "Terms" },
  { href: "/#quote", label: "Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 text-white">
      <div className="hidden border-b border-white/10 bg-[#121a22] text-[11px] font-semibold tracking-[0.14em] uppercase sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-5 py-2.5 md:px-8">
          <div className="flex items-center gap-6">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            >
              <WhatsAppIcon className="size-3.5 text-[#25D366]" />
              {company.phoneDisplay}
            </a>
            <a href="/#quote" className="text-white/85 hover:text-white">
              Request a survey
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-white/10 bg-[#1a2530]/90 backdrop-blur-md",
          open && "bg-[#1a2530]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a
            href="/#top"
            className="group text-white transition-opacity hover:opacity-90"
            aria-label="Lunox Services home"
          >
            <BrandLogo size="sm" />
          </a>

          <nav className="hidden items-center gap-7 text-[12px] font-semibold tracking-[0.16em] uppercase lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/#quote" className="origin-btn !px-4 !py-2.5 !text-[11px]">
              Free quote
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center border border-white/25 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-white/10 px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-3 text-sm font-semibold tracking-[0.14em] uppercase">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-white/90"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 normal-case tracking-normal text-white/70"
              >
                <WhatsAppIcon className="size-4 text-[#25D366]" />
                {company.phoneDisplay}
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
