import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80"
              alt="Precision-fitted glazing on a Scottish home"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
              About Lunox
            </p>
            <h2 className="mt-4 font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
              For those with an impeccable vision for their home.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Lunox Services is a Scottish installation company focused on UPVC
              windows and doors. We manage your project from first survey to final
              seal — so the frames that arrive are the ones that belong in your
              walls.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-8 space-y-4 border-t border-border pt-8 text-ink">
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">01</span>
                <div>
                  <p className="font-semibold">Surveyed properly</p>
                  <p className="text-muted-foreground">
                    Accurate measurements and clear, itemised quotes.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">02</span>
                <div>
                  <p className="font-semibold">Fitted with care</p>
                  <p className="text-muted-foreground">
                    Protected floors, tidy reveals, and a clean handover.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">03</span>
                <div>
                  <p className="font-semibold">Across Scotland</p>
                  <p className="text-muted-foreground">
                    City, coast, and countryside — we travel to you.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
