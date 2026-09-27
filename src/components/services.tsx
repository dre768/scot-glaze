const services = [
  {
    title: "Manufacture",
    copy: "uPVC frames cut and assembled in our workshop to your exact openings — white, anthracite, and woodgrain finishes.",
  },
  {
    title: "Installation",
    copy: "Qualified fitters who protect your home, seal every joint, and leave rooms tidy the same day.",
  },
  {
    title: "Replacement",
    copy: "Swap tired single-glazed or failing units for quieter, warmer double or triple glazing without the sales pressure.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-[0.18em] text-primary uppercase">
          What we offer
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink text-balance md:text-5xl">
          From workshop to window opening.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
          One team handles design, manufacture, and fitting so the windows that
          arrive are the ones that belong in your walls.
        </p>

        <ul className="mt-14 grid gap-10 border-t border-border/80 pt-10 md:grid-cols-3 md:gap-12">
          {services.map((service) => (
            <li key={service.title}>
              <h3 className="font-display text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
