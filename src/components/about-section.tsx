"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const points = [
  {
    title: "We install, end to end",
    copy: "Survey, supply, and fitting handled by one local team — no hand-offs between strangers.",
  },
  {
    title: "Every UPVC type",
    copy: "Windows and doors in the styles Scottish homes actually need, finished to match your property.",
  },
  {
    title: "Across Scotland",
    copy: "From Glasgow and Edinburgh to the Highlands and Borders — we travel to you.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="overflow-visible bg-midnight px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-visible">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.18em] text-lime uppercase">
              About Lunox
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Lunox Services is Scottish through and through.
            </h2>
            <p className="mt-5 max-w-2xl text-white/75 md:text-lg">
              We’re a local installation business focused on UPVC windows and
              doors for homeowners. We don’t push catalogue leftovers — we measure
              your openings, help you choose the right system, and fit it cleanly
              so rooms feel warmer, quieter, and finished.
            </p>
          </Reveal>

          <Reveal delay={0.15} direction="right">
            <p className="font-display text-2xl leading-snug text-alice md:text-3xl">
              “We manufacture relationships the same way we fit frames — carefully,
              on time, and built to last.”
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" delay={0.1}>
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <h3 className="font-display text-xl font-semibold text-lime">
                  {point.title}
                </h3>
                <p className="mt-3 text-white/70">{point.copy}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
