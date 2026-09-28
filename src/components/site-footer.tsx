export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#111] px-5 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-tight">
            Lunox <span className="font-display-italic">Services</span>
          </p>
          <p className="mt-3 max-w-md text-white/60">
            UPVC windows and doors, plus flooring, tiling, cladding,
            conservatories, and house extensions — fitted for British homes across
            Scotland.
          </p>
        </div>
        <div className="space-y-2 text-sm text-white/70">
          <p>
            <a href="tel:+441412000000" className="hover:text-white">
              0141 200 0000
            </a>
          </p>
          <p>
            <a href="mailto:hello@lunoxservices.co.uk" className="hover:text-white">
              hello@lunoxservices.co.uk
            </a>
          </p>
          <p className="pt-3 text-white/40">
            © {new Date().getFullYear()} Lunox Services
          </p>
        </div>
      </div>
    </footer>
  );
}
