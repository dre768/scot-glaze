"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "How to buy" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Quote" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "border-b border-black/5 bg-white/95 text-ink shadow-sm backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Lunox <span className="font-display-italic">Services</span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-semibold tracking-wide uppercase lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="opacity-90 hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+441412000000"
            className="hidden text-sm font-medium sm:block"
          >
            0141 200 0000
          </a>
          <a
            href="#quote"
            className={cn(
              "origin-btn !px-4 !py-2.5 !text-xs",
              !scrolled && !open && "bg-white text-origin hover:bg-mist hover:text-ink"
            )}
          >
            Free quote
          </a>
          <button
            type="button"
            className={cn(
              "grid size-10 place-items-center border lg:hidden",
              scrolled || open ? "border-ink/20" : "border-white/40"
            )}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5", scrolled || open ? "bg-ink" : "bg-white")} />
              <span className={cn("block h-0.5 w-5", scrolled || open ? "bg-ink" : "bg-white")} />
              <span className={cn("block h-0.5 w-5", scrolled || open ? "bg-ink" : "bg-white")} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-5 py-4 text-ink lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold tracking-wide uppercase">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
