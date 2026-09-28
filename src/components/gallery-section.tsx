import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

const studies = [
  {
    title: "Victorian terrace window refit",
    place: "Glasgow",
    meta: "Sash-look UPVC · white",
    image: img.terrace,
  },
  {
    title: "Suburban casement upgrade",
    place: "Edinburgh",
    meta: "Full house casements",
    image: img.suburban,
  },
  {
    title: "Brick semi with composite entrance",
    place: "Aberdeen",
    meta: "Front door + sidelights",
    image: img.brick,
  },
  {
    title: "Modern UK rear glazing",
    place: "Stirling",
    meta: "Sliding & patio access",
    image: img.modernUk,
  },
  {
    title: "Period bay restoration look",
    place: "Dundee",
    meta: "Bay + casements",
    image: img.bay,
  },
  {
    title: "Coastal cottage tilt & turn",
    place: "Highlands",
    meta: "Weather-rated hardware",
    image: img.cladding2,
  },
];

export function GallerySection() {
  return (
    <section id="work" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Case studies
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            British homes. Lunox installs.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <Reveal key={study.title} delay={(i % 3) * 0.08}>
              <article className="group bg-white">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-origin uppercase">
                    {study.place}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-black md:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{study.meta}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
