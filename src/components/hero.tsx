import Image from "next/image";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "All Scotland", label: "Survey & install cover" },
  { value: "UPVC", label: "Windows & doors, every type" },
  { value: "Free", label: "No-obligation home quote" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modern home with large UPVC windows"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover"
        />
        <div className="absolute inset-0 bg-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/75 to-midnight/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-lime uppercase">
            Lunox Services · Scotland
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Upgrade your home with UPVC windows &amp; doors
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
            We supply and fit every type of UPVC window and door for homeowners
            across Scotland — clear quotes, tidy installs, lasting finishes.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="pill inline-flex items-center bg-lime px-6 py-3.5 text-base font-semibold text-midnight transition hover:bg-sky hover:text-white"
            >
              Book a free consultation
            </a>
            <a
              href="#gallery"
              className="pill inline-flex items-center border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition hover:border-midnight hover:bg-midnight"
            >
              See our work
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid max-w-3xl gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) as 0 | 1 | 2}>
              <p className="font-display text-2xl font-semibold text-lime">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
