"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const stats = [
  { value: "All Scotland", label: "Survey & install cover" },
  { value: "UPVC", label: "Windows & doors, every type" },
  { value: "Free", label: "No-obligation home quote" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modern home with large UPVC windows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/40" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-24"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="text-sm font-semibold tracking-[0.2em] text-lime uppercase"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          Lunox Services · Scotland
        </motion.p>

        <motion.h1
          className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease, delay: 0.28 }}
        >
          Upgrade your home with UPVC windows &amp; doors
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base text-white/80 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
        >
          We supply and fit every type of UPVC window and door for homeowners
          across Scotland — clear quotes, tidy installs, lasting finishes.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.58 }}
        >
          <a
            href="#quote"
            className="pill btn-glow inline-flex items-center bg-lime px-6 py-3.5 text-base font-semibold text-midnight transition duration-300 hover:bg-sky hover:text-white"
          >
            Book a free consultation
          </a>
          <a
            href="#gallery"
            className="pill inline-flex items-center border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:border-midnight hover:bg-midnight"
          >
            See our work
          </a>
        </motion.div>

        <Stagger className="mt-14 grid max-w-3xl gap-6 border-t border-white/20 pt-8 sm:grid-cols-3" delay={0.7}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-2xl font-semibold text-lime">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </motion.div>

      <Reveal className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex" delay={1.1} direction="fade">
        <a
          href="#windows"
          className="flex flex-col items-center gap-2 text-xs tracking-[0.2em] text-white/70 uppercase"
        >
          Scroll
          <span className="scroll-pulse h-8 w-px bg-lime" />
        </a>
      </Reveal>
    </section>
  );
}
