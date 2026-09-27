"use client";

import { Reveal } from "@/components/reveal";

export function ValueStrip() {
  return (
    <section className="bg-alice px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal direction="scale">
          <h2 className="font-display text-3xl font-semibold text-midnight md:text-5xl">
            We manufacture. We install.{" "}
            <span className="text-sky">You save.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            One Lunox team handles survey, supply, and fitting — so you get the
            right UPVC windows and doors at a clear price, without reseller
            mark-ups or day-of surprises.
          </p>
          <a
            href="#quote"
            className="pill btn-glow mt-8 inline-flex bg-lime px-6 py-3.5 font-semibold text-midnight transition duration-300 hover:bg-sky hover:text-white"
          >
            Get your free estimate
          </a>
        </Reveal>
      </div>
    </section>
  );
}
