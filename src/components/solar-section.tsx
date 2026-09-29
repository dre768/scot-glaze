import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

const offerings = [
  {
    title: "Home solar systems",
    copy: "Roof-mounted solar PV designed for British homes — sized for your usage, roof orientation, and Scottish daylight.",
    image: img.solarHome,
    label: "Residential solar on a brick home",
  },
  {
    title: "3D project visualisation",
    copy: "See your system before we fit it. We prepare clear 3D visualisations of panel layout on your roof so you can approve the look and coverage with confidence.",
    image: img.solarViz,
    label: "3D solar roof visualisation",
  },
  {
    title: "Survey, install & handover",
    copy: "From roof survey and design to professional installation, electrics, and a clean handover — one Lunox team from first WhatsApp to switch-on.",
    image: img.solarInstall,
    label: "Solar panel installation on site",
  },
];

const steps = [
  {
    n: "01",
    title: "Roof survey",
    copy: "We check pitch, orientation, shading, and electrical capacity.",
  },
  {
    n: "02",
    title: "3D design",
    copy: "You receive a visualisation and system proposal for your home.",
  },
  {
    n: "03",
    title: "Installation",
    copy: "Panels, mounting, and inverter fitted by our installation team.",
  },
  {
    n: "04",
    title: "Switch-on",
    copy: "Testing, handover, and guidance on monitoring your system.",
  },
];

export function SolarSection() {
  return (
    <section id="solar" className="relative overflow-hidden bg-[#0f1a24] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#023f8740,_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
            Solar systems
          </p>
          <h2 className="mt-4 max-w-3xl font-display-italic text-4xl text-white md:text-5xl lg:text-6xl">
            Solar for your home — designed in 3D, fitted with care.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Lunox now designs and installs home solar projects across Scotland:
            system sizing, 3D roof visualisations, professional fitting, and
            full handover — so you can see the finished look before work begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="origin-btn bg-white text-origin hover:bg-mist">
              Get a solar quote
            </a>
            <a
              href="#solar-visual"
              className="origin-btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-origin"
            >
              See 3D visualisation
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <article
                id={item.title.includes("3D") ? "solar-visual" : undefined}
                className="flex h-full flex-col bg-white/5 ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
              How a solar project works
            </p>
            <h3 className="mt-4 font-display text-3xl text-white md:text-4xl">
              From first survey to switch-on.
            </h3>
            <ol className="mt-8 space-y-5">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-4 border-t border-white/10 pt-5">
                  <span className="font-display text-xl text-origin">{step.n}</span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm text-white/60">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5 ring-1 ring-white/10">
              <Image
                src={img.solarFit}
                alt="Solar installation detail — panels being fitted"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-white/55">
              Ask for a free solar consultation — share your postcode and a roof
              photo on WhatsApp or the quote form.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
