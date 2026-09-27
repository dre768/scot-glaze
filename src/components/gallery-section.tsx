import Image from "next/image";
import { Reveal } from "@/components/reveal";

const studies = [
  {
    title: "Full house refit in anthracite",
    place: "Glasgow",
    meta: "12 casement windows",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "A bold bifold opening to the garden",
    place: "Edinburgh",
    meta: "4.2m white UPVC bifold",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bay window upgrade on a period terrace",
    place: "Aberdeen",
    meta: "Bay + side casements",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Front door & sidelights, multipoint locked",
    place: "Dundee",
    meta: "Composite entrance",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Sliding patio with a low threshold",
    place: "Stirling",
    meta: "Patio replacement",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Coastal cottage tilt & turn",
    place: "Highlands",
    meta: "Woodgrain finish",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
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
            Explore our recent installs.
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
