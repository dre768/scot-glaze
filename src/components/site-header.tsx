"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#windows", label: "Windows" },
  { href: "#doors", label: "Doors" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Quote" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-midnight/95 text-white shadow-lg shadow-midnight/20 backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Lunox <span className="text-lime">Services</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-90 transition hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+441412000000"
            className="hidden text-sm font-semibold sm:block"
          >
            0141 200 0000
          </a>
          <a
            href="#quote"
            className="pill inline-flex items-center bg-lime px-4 py-2.5 text-sm font-semibold text-midnight transition hover:bg-sky hover:text-white"
          >
            Free quote
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-white/25 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-midnight px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
