"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#products", label: "Products" },
  { href: "#improvements", label: "Home improvements" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "How to buy" },
  { href: "#quote", label: "Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 text-white">
      {/* Utility bar — Origin-style */}
      <div className="hidden border-b border-white/10 bg-[#121a22] text-[11px] font-semibold tracking-[0.14em] uppercase sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 md:px-8">
          <p className="text-white/65">Homeowners across Scotland</p>
          <div className="flex items-center gap-6">
            <a href="tel:+441412000000" className="text-white/85 hover:text-white">
              0141 200 0000
            </a>
            <a href="#quote" className="text-white/85 hover:text-white">
              Request a survey
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b border-white/10 bg-[#1a2530]/90 backdrop-blur-md",
          open && "bg-[#1a2530]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-2xl font-normal tracking-tight lowercase">
            lunox <span className="font-display-italic">services</span>
          </a>

          <nav className="hidden items-center gap-8 text-[12px] font-semibold tracking-[0.16em] uppercase lg:flex">
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
            <a href="#quote" className="origin-btn !px-4 !py-2.5 !text-[11px]">
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
              <a href="tel:+441412000000" className="py-1 text-white/70">
                0141 200 0000
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
