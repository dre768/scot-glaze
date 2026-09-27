"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const doorTypes = [
  {
    title: "Front entrance",
    copy: "Secure composite and UPVC entrance doors with multipoint locking.",
  },
  {
    title: "French doors",
    copy: "Wide glazed pairs that open living rooms onto gardens and patios.",
  },
  {
    title: "Patio & sliding",
    copy: "Smooth-running patio systems for easy access and more natural light.",
  },
  {
    title: "Bifold doors",
    copy: "Fold-back panels that open almost the full width of a rear wall.",
  },
];

export function DoorsSection() {
  return (
    <section id="doors" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <motion.div
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/4] lg:aspect-[4/5]"
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
              alt="UPVC and composite door installation on a modern home"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
          </motion.div>
        </Reveal>

        <div>
          <Reveal direction="right">
            <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
              Doors
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-midnight md:text-5xl">
              Doors that make every entrance memorable
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              From the front door to a full bifold opening, Lunox fits UPVC and
              composite doors built for Scottish weather and everyday family use.
            </p>
          </Reveal>

          <Stagger className="mt-8 space-y-5" delay={0.1}>
            {doorTypes.map((door) => (
              <StaggerItem key={door.title}>
                <div className="border-b border-border pb-5">
                  <h3 className="font-display text-xl font-semibold text-midnight">
                    {door.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{door.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-8" delay={0.2}>
            <a
              href="#quote"
              className="pill inline-flex bg-midnight px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-sky"
            >
              Explore doors — get a quote
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
