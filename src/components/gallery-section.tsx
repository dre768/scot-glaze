"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const projects = [
  {
    title: "Full house refit — Glasgow",
    meta: "12 casement windows · anthracite grey",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bifold opening — Edinburgh",
    meta: "4.2m bifold · white UPVC",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bay window upgrade — Aberdeen",
    meta: "Bay + two side casements",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Front door & sidelights — Dundee",
    meta: "Composite entrance · multipoint lock",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Patio replacement — Stirling",
    meta: "Sliding patio · low threshold",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cottage windows — Highlands",
    meta: "Tilt & turn · woodgrain finish",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-smoke px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            Our work
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-midnight md:text-5xl">
            Real homes. Real installs.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            A sample of UPVC window and door projects we’ve completed for
            homeowners across Scotland. Replace these with your own photos when
            ready.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.article
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_#00000014]"
                whileHover={{ y: -8, scale: 0.985 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-midnight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.meta}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
