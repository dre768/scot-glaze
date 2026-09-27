export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-smoke px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-midnight">
            Lunox <span className="text-sky">Services</span>
          </p>
          <p className="mt-2 max-w-md text-muted-foreground">
            UPVC windows and doors — surveyed, supplied, and fitted for homeowners
            across Scotland.
          </p>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            <a href="tel:+441412000000" className="hover:text-midnight">
              0141 200 0000
            </a>
          </p>
          <p>
            <a
              href="mailto:hello@lunoxservices.co.uk"
              className="hover:text-midnight"
            >
              hello@lunoxservices.co.uk
            </a>
          </p>
          <p className="pt-2 text-muted-foreground/70">
            © {new Date().getFullYear()} Lunox Services
          </p>
        </div>
      </div>
    </footer>
  );
}
