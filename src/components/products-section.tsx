import Image from "next/image";
import { Reveal } from "@/components/reveal";

const products = [
  {
    title: "Windows",
    copy: "Casement, tilt & turn, sliding sash, bay and bow — made to your openings.",
    href: "#quote",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Entrance doors",
    copy: "Secure composite and UPVC front doors with multipoint locking.",
    href: "#quote",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Patio & sliding",
    copy: "Smooth patio systems that open living rooms onto gardens.",
    href: "#quote",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bifold doors",
    copy: "Fold-back panels for almost wall-width openings to the outdoors.",
    href: "#quote",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-origin uppercase">
            Product range
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-black md:text-5xl lg:text-6xl">
            A style to suit every home.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            From a single replacement window to a full house refit — scroll through
            what we install.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.08}>
              <a href={product.href} className="group block bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <h3 className="font-display text-2xl text-black md:text-3xl">
                      {product.title}
                    </h3>
                    <p className="mt-2 max-w-md text-muted-foreground">
                      {product.copy}
                    </p>
                  </div>
                  <span className="origin-link shrink-0">
                    Explore
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
