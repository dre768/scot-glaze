import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

const windows = [
  {
    title: "Casement windows",
    copy: "Side-hinged openers with tight seals — the UK staple for wind and rain.",
    image: img.casement,
  },
  {
    title: "Tilt & turn",
    copy: "Tilt for secure ventilation, turn fully for cleaning — ideal for flats and family homes.",
    image: img.tiltTurn,
  },
  {
    title: "Sash windows",
    copy: "Classic sliding sash character with modern UPVC performance for period properties.",
    image: img.sash,
  },
];

const doors = [
  {
    title: "Fire doors",
    copy: "Certified fire-rated doors for flats, conversions, and regulated openings.",
    image: img.fireDoor,
  },
  {
    title: "Composite doors",
    copy: "Solid, secure entrance doors with multipoint locking and lasting kerb appeal.",
    image: img.frontDoor,
  },
  {
    title: "PVC doors",
    copy: "Durable UPVC entrance and back doors in white, anthracite, and woodgrain.",
    image: img.interiorDoor,
  },
  {
    title: "French doors",
    copy: "Paired glazed doors that open living rooms onto gardens and patios.",
    image: img.french,
  },
  {
    title: "Sliding doors",
    copy: "Smooth-running panels for wide openings with slim sightlines.",
    image: img.sliding,
  },
  {
    title: "Patio doors",
    copy: "Practical patio access with weather-tight seals for Scottish conditions.",
    image: img.patio,
  },
];

function ProductCard({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <article className="group flex h-full flex-col bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl text-black md:text-2xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {copy}
        </p>
        <a href="#quote" className="origin-link mt-4">
          Get a quote <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Product range
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            A style to suit every British home.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            From period terraces to new builds — windows and doors in the types
            Scottish and UK homeowners actually need, with sample finishes below.
          </p>
        </Reveal>

        <Reveal className="mt-16" delay={0.05}>
          <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
            <h3 className="font-display text-3xl text-black md:text-4xl">Windows</h3>
            <a href="#quote" className="origin-link hidden sm:inline-flex">
              Ask about windows <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {windows.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <ProductCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20" delay={0.05}>
          <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
            <h3 className="font-display text-3xl text-black md:text-4xl">Doors</h3>
            <a href="#quote" className="origin-link hidden sm:inline-flex">
              Ask about doors <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doors.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07}>
              <ProductCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
