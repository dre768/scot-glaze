import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

export function AboutSection() {
  return (
    <section id="about" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={img.about}
              alt="Kensington Park Gardens terrace with classic British sash windows"
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
              Built around British homes and Scottish weather.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Lunox Services installs windows and doors made for UK housing stock —
              terraces, semis, bungalows, and new builds — and expands into flooring,
              tiling, cladding, conservatories, and house extensions when you want
              one team to carry the project further.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-8 space-y-4 border-t border-border pt-8 text-ink">
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">01</span>
                <div>
                  <p className="font-semibold">Windows &amp; doors</p>
                  <p className="text-muted-foreground">
                    Casement, tilt &amp; turn, sash, fire, composite, PVC, French,
                    sliding, and patio.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">02</span>
                <div>
                  <p className="font-semibold">Home improvements</p>
                  <p className="text-muted-foreground">
                    Floors, tiles, cladding, conservatories, and extensions.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-display text-2xl text-origin">03</span>
                <div>
                  <p className="font-semibold">Across Scotland</p>
                  <p className="text-muted-foreground">
                    Survey to finish — we travel to you.
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
