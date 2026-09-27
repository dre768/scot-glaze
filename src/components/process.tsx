const steps = [
  {
    n: "01",
    title: "Free home survey",
    copy: "We measure openings, check lintels and reveal depths, and talk through glass, finish, and budget.",
  },
  {
    n: "02",
    title: "Made in our workshop",
    copy: "Frames are manufactured to your survey — no off-the-shelf guesswork, no weeks of chasing suppliers.",
  },
  {
    n: "03",
    title: "Fitted and finished",
    copy: "Install day is planned around you. We remove old units, fit new ones, seal, trim, and clear away.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-[0.18em] text-primary uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink text-balance md:text-5xl">
          A clear path from first call to finished rooms.
        </h2>

        <ol className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="font-display text-5xl text-mist md:text-6xl">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
