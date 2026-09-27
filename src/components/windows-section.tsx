"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const windowTypes = [
  {
    title: "Casement",
    copy: "Side-hinged openers with tight seals — ideal for Scottish wind and rain.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Tilt & turn",
    copy: "Tilt for secure ventilation, turn for a full clean — versatile and safe.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Sliding sash",
    copy: "Classic look with modern UPVC performance for period and city homes.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bay & bow",
    copy: "Wide openings that pull in light and reshape the front of your home.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function WindowsSection() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % windowTypes.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const active = windowTypes[index];

  return (
    <section id="windows" className="bg-smoke px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            Windows
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-midnight md:text-5xl">
            Custom UPVC windows you’ll love living with
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We manufacture and install every common UPVC style — measured to your
            openings, finished in white, anthracite, or woodgrain.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal direction="scale">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-midnight shadow-[0_20px_50px_#051e3626]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                    <p className="font-display text-3xl font-semibold">
                      {active.title}
                    </p>
                    <p className="mt-2 max-w-md text-white/80">{active.copy}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="space-y-3">
            {windowTypes.map((item, i) => {
              const selected = i === index;
              return (
                <Reveal key={item.title} delay={i * 0.08} direction="right">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`group w-full rounded-2xl border px-5 py-4 text-left transition duration-300 ${
                      selected
                        ? "border-sky bg-white shadow-[0_12px_30px_#051e3614]"
                        : "border-transparent bg-white/50 hover:border-border hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-midnight">
                        {item.title}
                      </h3>
                      <span
                        className={`h-2 w-2 rounded-full transition ${
                          selected ? "bg-sky scale-125" : "bg-midnight/20"
                        }`}
                      />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.copy}
                    </p>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-10" delay={0.15}>
          <a
            href="#quote"
            className="pill btn-glow inline-flex bg-lime px-6 py-3.5 font-semibold text-midnight transition duration-300 hover:bg-sky hover:text-white"
          >
            Explore windows — get a quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
