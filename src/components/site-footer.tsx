export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-ink px-5 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">Kinloch Windows</p>
          <p className="mt-2 max-w-sm text-white/65">
            PVC window manufacture and installation for homeowners across
            Scotland.
          </p>
        </div>
        <div className="space-y-1 text-sm text-white/75">
          <p>
            <a href="tel:+441412000000" className="hover:text-white">
              0141 200 0000
            </a>
          </p>
          <p>
            <a
              href="mailto:hello@kinlochwindows.co.uk"
              className="hover:text-white"
            >
              hello@kinlochwindows.co.uk
            </a>
          </p>
          <p className="pt-2 text-white/45">
            © {new Date().getFullYear()} Kinloch Windows
          </p>
        </div>
      </div>
    </footer>
  );
}
