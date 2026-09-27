import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Contemporary Scottish home with floor-to-ceiling windows"
          fill
          priority
          sizes="100vw"
          className="hero-pan object-cover"
        />
        <div className="atmosphere absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="reveal font-display text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          Kinloch Windows
        </p>
        <div className="line-draw mt-5 h-px w-24 bg-brass md:mt-7 md:w-32" />
        <h1 className="reveal reveal-delay-1 mt-6 max-w-2xl font-display text-2xl leading-snug text-balance text-white/95 sm:text-3xl md:mt-8 md:text-4xl">
          Made-to-measure PVC windows for homes across Scotland.
        </h1>
        <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          We manufacture and fit quiet, warm, weather-tight windows — from a
          single replacement to a full house refit.
        </p>
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3 md:mt-10">
          <Button
            render={<a href="#quote" />}
            size="lg"
            className="h-12 rounded-md bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
          >
            Book a free survey
          </Button>
          <Button
            render={<a href="#services" />}
            variant="outline"
            size="lg"
            className="h-12 rounded-md border-white/40 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
          >
            See what we do
          </Button>
        </div>
      </div>
    </section>
  );
}
