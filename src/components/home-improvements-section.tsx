import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

const services = [
  {
    title: "Flooring",
    copy: "Laminate, engineered wood, and luxury vinyl — prepared, laid, and finished room by room.",
    samples: [
      { label: "Engineered oak lounge", image: img.flooring1 },
      { label: "Light wood open-plan", image: img.flooring2 },
      { label: "Modern living finish", image: img.flooring3 },
    ],
  },
  {
    title: "Tiling",
    copy: "Kitchen, bathroom, and utility tiling — walls and floors with neat edges and waterproof detailing.",
    samples: [
      { label: "Bathroom wall & floor", image: img.tiling1 },
      { label: "Kitchen splashback", image: img.tiling2 },
      { label: "Feature tiled space", image: img.tiling3 },
    ],
  },
  {
    title: "Cladding",
    copy: "External cladding upgrades that refresh façades and improve weather protection.",
    samples: [
      { label: "Contemporary façade", image: img.cladding },
      { label: "Finished elevation", image: img.cladding2 },
    ],
  },
  {
    title: "Conservatories",
    copy: "Light-filled conservatories and orangery-style rooms linked to the main house.",
    samples: [
      { label: "Garden room glazing", image: img.conservatory },
      { label: "Bright rear extension feel", image: img.conservatory2 },
    ],
  },
  {
    title: "House extensions",
    copy: "Rear and side extensions planned with matching windows, doors, and finishing trades.",
    samples: [
      { label: "Structural build stage", image: img.extension },
      { label: "Completed living extension", image: img.extension2 },
    ],
  },
];

export function HomeImprovementsSection() {
  return (
    <section id="improvements" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Home improvements
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            Beyond windows — a wider Lunox assortment.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We also deliver flooring, tiling, cladding, conservatories, and house
            extensions — so one local team can take more of your project from
            survey to finish.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {services.map((service, sIndex) => (
            <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, "-")}>
              <Reveal delay={0.04}>
                <div className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                  <div>
                    <p className="font-display text-4xl text-origin">
                      0{sIndex + 1}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-black md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      {service.copy}
                    </p>
                    <a href="#quote" className="origin-btn origin-btn-dark mt-6">
                      Enquire about {service.title.toLowerCase()}
                    </a>
                  </div>
                  <div
                    className={`grid gap-4 ${
                      service.samples.length > 2
                        ? "sm:grid-cols-3"
                        : "sm:grid-cols-2"
                    }`}
                  >
                    {service.samples.map((sample, i) => (
                      <Reveal key={sample.label} delay={0.08 + i * 0.06}>
                        <figure className="bg-mist">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={sample.image}
                              alt={sample.label}
                              fill
                              sizes="(max-width:768px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="px-3 py-3 text-sm text-ink">
                            {sample.label}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
