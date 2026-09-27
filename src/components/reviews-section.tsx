"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";

const reviews = [
  {
    quote:
      "Lunox replaced every upstairs window in two days. The house is quieter, warmer, and the finish around the reveals is spotless.",
    name: "Claire M.",
    place: "Glasgow",
  },
  {
    quote:
      "Clear quote, no pressure, and the bifolds open exactly as promised. They protected the floors and left everything tidy.",
    name: "James R.",
    place: "Edinburgh",
  },
  {
    quote:
      "We needed tilt-and-turn units for a coastal house. Lunox specified the right hardware and the install has held up through winter storms.",
    name: "Fiona K.",
    place: "Aberdeenshire",
  },
  {
    quote:
      "From the first survey call to the final seal, communication was excellent. Would use them again for the front door.",
    name: "Omar S.",
    place: "Dundee",
  },
];

export function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const active = reviews[index];

  return (
    <section id="reviews" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            Reviews
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-midnight md:text-5xl">
            Hear what Lunox customers have to say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-3xl bg-alice p-8 md:p-10">
              <p className="font-display text-5xl font-semibold text-midnight">4.9</p>
              <p className="mt-2 text-muted-foreground">Average customer rating</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Based on recent homeowners who booked a Lunox survey and install
                across Scotland. Swap in your live Google / Checkatrade scores
                when you connect them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-[0_10px_30px_#00000014] md:p-10">
              <div
                key={active.name}
                className="flex h-full flex-col justify-between transition-opacity duration-500"
              >
                <p className="font-display text-2xl leading-snug text-midnight md:text-3xl">
                  “{active.quote}”
                </p>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-semibold text-midnight">{active.name}</p>
                    <p className="text-sm text-muted-foreground">{active.place}</p>
                  </div>
                  <div className="flex gap-2">
                    {reviews.map((review, i) => (
                      <button
                        key={review.name}
                        type="button"
                        aria-label={`Show review from ${review.name}`}
                        onClick={() => setIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          i === index ? "bg-sky" : "bg-midnight/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
