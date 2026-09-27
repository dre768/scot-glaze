import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Request a survey",
    copy: "Tell us about your home. We’ll arrange a free, no-obligation visit anywhere in Scotland.",
  },
  {
    n: "02",
    title: "Receive a clear quote",
    copy: "Itemised pricing after accurate measurements — glass, finish, and hardware spelled out.",
  },
  {
    n: "03",
    title: "We manufacture & fit",
    copy: "Frames made to your openings, then installed by our team with a tidy, finished handover.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            How to buy
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            Getting expertly fitted products from Lunox couldn’t be easier.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <p className="font-display text-4xl text-origin">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl text-black">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
            <a href="#quote" className="origin-btn origin-btn-dark">
              Speak to us today
            </a>
        </Reveal>
      </div>
    </section>
  );
}
