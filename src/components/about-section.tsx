import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/company";
import { img } from "@/lib/media";

export function AboutSection() {
  return (
    <section id="about" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={img.about}
              alt="British terrace homes — the properties Lunox Services fits every day"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
              About us
            </p>
            <h2 className="mt-4 font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
              A local team for warmer, quieter British homes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Lunox Services is a Scottish home-improvement company specialising
              in UPVC windows and doors — plus flooring, tiling, cladding,
              conservatories, and extensions. We survey, supply, and fit so you
              deal with one team from the first call to the final clean-up.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We work across {company.area}: terraces, semis, flats, bungalows,
              and new builds. Free no-obligation quotes, clear timelines, and
              installs built for Scottish weather.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 space-y-4 border-t border-border pt-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-origin uppercase">
                Talk to us
              </p>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-semibold text-ink transition hover:text-origin"
              >
                <WhatsAppIcon className="size-7 shrink-0 text-[#25D366]" />
                <span>{company.phoneDisplay}</span>
                <span className="text-sm font-medium text-muted-foreground">
                  WhatsApp
                </span>
              </a>
              <p>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="text-muted-foreground transition hover:text-origin"
                >
                  Call or message · {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-muted-foreground transition hover:text-origin"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
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
                  <p className="font-semibold">Free survey &amp; quote</p>
                  <p className="text-muted-foreground">
                    Message us on WhatsApp — we travel to you.
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              See our{" "}
              <Link href="/terms" className="origin-link">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
