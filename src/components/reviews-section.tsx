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
];

export function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const active = reviews[index];

  return (
    <section id="reviews" className="bg-origin px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
            Reviews
          </p>
          <h2 className="mt-4 font-display-italic text-4xl md:text-5xl lg:text-6xl">
            Hear what homeowners have to say.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <blockquote className="mt-12">
            <p
              key={active.name}
              className="font-display-italic text-2xl leading-snug md:text-3xl lg:text-4xl"
            >
              “{active.quote}”
            </p>
            <footer className="mt-8 text-sm tracking-wide text-white/75 uppercase">
              {active.name} · {active.place}
            </footer>
          </blockquote>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                aria-label={`Show review from ${review.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
