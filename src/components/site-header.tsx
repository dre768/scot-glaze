import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#scotland", label: "Scotland" },
  { href: "#process", label: "Process" },
  { href: "#quote", label: "Quote" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-6">
        <Link
          href="#top"
          className="font-display text-lg tracking-tight text-white md:text-xl"
        >
          Kinloch Windows
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/85 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+441412000000"
          className="text-sm text-white/90 transition-colors hover:text-white"
        >
          0141 200 0000
        </a>
      </div>
    </header>
  );
}
