import Image from "next/image";
import { Reveal } from "@/components/reveal";

const windowTypes = [
  {
    title: "Casement",
    copy: "Side-hinged openers with tight seals — ideal for Scottish wind and rain.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tilt & turn",
    copy: "Tilt for secure ventilation, turn for a full clean — versatile and safe.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sliding sash",
    copy: "Classic look with modern UPVC performance for period and city homes.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bay & bow",
    copy: "Wide openings that pull in light and reshape the front of your home.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
];

export function WindowsSection() {
  return (
    <section id="windows" className="bg-smoke px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            Windows
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-midnight md:text-5xl">
            Custom UPVC windows you’ll love living with
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We manufacture and install every common UPVC style — measured to your
            openings, finished in white, anthracite, or woodgrain.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {windowTypes.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4 === 3 ? 3 : i % 4) as 0 | 1 | 2 | 3}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_#00000014]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href="#quote"
            className="pill inline-flex bg-lime px-6 py-3.5 font-semibold text-midnight transition hover:bg-sky hover:text-white"
          >
            Explore windows — get a quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
