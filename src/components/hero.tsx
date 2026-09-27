import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
          alt="Contemporary home with large glazed openings"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
            Lunox Services · Scotland
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-3xl font-display-italic text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Engineering beauty in every detail.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            UPVC windows and doors for homeowners across Scotland — surveyed,
            supplied, and fitted by one local team.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#quote" className="origin-btn bg-white text-origin hover:bg-mist hover:text-ink">
              Get a free quote
            </a>
            <a href="#work" className="origin-btn-outline">
              Explore case studies
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
