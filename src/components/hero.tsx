"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InstallationScene } from "@/components/installation-scene";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#eef3f7] text-midnight"
    >
      <InstallationScene />

      {/* Soft center wash so text stays readable over the illustration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,243,247,0.92)_0%,rgba(238,243,247,0.72)_38%,transparent_68%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center md:px-8 md:pb-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <span className="grid size-12 place-items-center rounded-full bg-midnight text-lg font-bold text-lime shadow-[0_8px_24px_#051e3622]">
            L
          </span>
          <p className="mt-3 text-sm font-semibold tracking-[0.16em] text-sky uppercase">
            Fitted across Scotland
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            By local craftsmen, for local homes
          </p>
        </motion.div>

        <motion.h1
          className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-balance text-midnight sm:text-5xl md:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.22 }}
        >
          Upgrade your home with Scotland’s trusted UPVC windows &amp; doors
        </motion.h1>

        <motion.div
          className="mt-8"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.4 }}
        >
          <a
            href="#quote"
            className="pill btn-glow inline-flex items-center gap-2 bg-lime px-7 py-4 text-base font-semibold text-midnight shadow-[0_12px_30px_#d6df2166] transition duration-300 hover:bg-sky hover:text-white hover:shadow-[0_12px_30px_#00aeef44]"
          >
            Book a free consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
