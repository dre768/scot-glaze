"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const reasons = [
  {
    title: "One team, start to finish",
    copy: "We don’t buy-and-resell mystery frames. Lunox manages survey, supply, and fitting so quality stays consistent.",
  },
  {
    title: "Built for Scottish weather",
    copy: "Hardware, seals, and glazing options chosen for wind, rain, and coastal exposure — not just brochure photos.",
  },
  {
    title: "Clear pricing",
    copy: "Itemised quotes after a free survey. No surprise day-of add-ons for standard openings we already measured.",
  },
  {
    title: "Respect for your home",
    copy: "Dust sheets, careful removal, finished trims, and a clean handover before we leave.",
  },
];

export function WhySection() {
  return (
    <section className="bg-smoke px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            Why Lunox
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-midnight md:text-5xl">
            Why choose Lunox Services
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" delay={0.08}>
          {reasons.map((reason, i) => (
            <StaggerItem key={reason.title}>
              <motion.article
                className="h-full rounded-2xl border border-border bg-white p-7 shadow-[0_10px_24px_#0000000f]"
                whileHover={{ y: -6, scale: 0.985 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-display text-4xl font-semibold text-lime">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-midnight">
                  {reason.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{reason.copy}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
