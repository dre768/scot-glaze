import Image from "next/image";
import { Reveal } from "@/components/reveal";

const doorTypes = [
  {
    title: "Front entrance",
    copy: "Secure composite and UPVC entrance doors with multipoint locking.",
  },
  {
    title: "French doors",
    copy: "Wide glazed pairs that open living rooms onto gardens and patios.",
  },
  {
    title: "Patio & sliding",
    copy: "Smooth-running patio systems for easy access and more natural light.",
  },
  {
    title: "Bifold doors",
    copy: "Fold-back panels that open almost the full width of a rear wall.",
  },
];

export function DoorsSection() {
  return (
    <section id="doors" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
              alt="UPVC and composite door installation on a modern home"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
              Doors
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-midnight md:text-5xl">
              Doors that make every entrance memorable
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              From the front door to a full bifold opening, Lunox fits UPVC and
              composite doors built for Scottish weather and everyday family use.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-5">
            {doorTypes.map((door, i) => (
              <Reveal key={door.title} delay={(i % 3) as 0 | 1 | 2}>
                <li className="border-b border-border pb-5">
                  <h3 className="font-display text-xl font-semibold text-midnight">
                    {door.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{door.copy}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8">
            <a
              href="#quote"
              className="pill inline-flex bg-midnight px-6 py-3.5 font-semibold text-white transition hover:bg-sky"
            >
              Explore doors — get a quote
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
