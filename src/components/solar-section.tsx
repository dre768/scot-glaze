import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/media";

const offerings = [
  {
    id: "solar-design",
    title: "Solar system design",
    copy: "Full project engineering for your home: load assessment, panel string design, inverter sizing, mounting layout, and cable routes — prepared before anything goes on the roof.",
    image: img.solarHome,
    label: "Designed residential solar system on a brick home",
  },
  {
    id: "solar-cad",
    title: "CAD drawings",
    copy: "Detailed CAD drawings for every project: roof array plans, elevations, mounting details, and electrical schematics — clear documents for installers, clients, and compliance.",
    image: img.solarCad,
    label: "CAD drawing of a home solar array layout",
  },
  {
    id: "solar-visual",
    title: "3D visualisation",
    copy: "Photoreal 3D visualisations of the finished roof so you can approve panel placement, coverage, and appearance before installation begins.",
    image: img.solarViz,
    label: "3D solar roof visualisation",
  },
  {
    id: "solar-install",
    title: "Survey, install & handover",
    copy: "Roof survey, professional fitting, electrics, testing, and a clean switch-on handover — delivered from the approved CAD pack and 3D design.",
    image: img.solarInstall,
    label: "Solar panel installation on site",
  },
];

const deliverables = [
  "System design & performance estimate",
  "CAD roof array drawings",
  "CAD electrical / single-line diagrams",
  "Mounting & fixing details",
  "3D visualisation pack",
  "Installation & commissioning",
];

const steps = [
  {
    n: "01",
    title: "Survey & brief",
    copy: "Roof pitch, orientation, shading, structure, and electrical capacity.",
  },
  {
    n: "02",
    title: "CAD & system design",
    copy: "Engineered layout, panel strings, inverter selection, and CAD drawings.",
  },
  {
    n: "03",
    title: "3D visualisation",
    copy: "Approve the look of the array on your home before manufacture/fit.",
  },
  {
    n: "04",
    title: "Install & switch-on",
    copy: "Fitted to the approved drawings, tested, and handed over.",
  },
];

export function SolarSection() {
  return (
    <section id="solar" className="relative overflow-hidden bg-[#0f1a24] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#023f8740,_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
            Solar design &amp; installation
          </p>
          <h2 className="mt-4 max-w-4xl font-display-italic text-4xl text-white md:text-5xl lg:text-6xl">
            Solar system design, CAD drawings, 3D visualisation &amp; install.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Lunox designs home solar projects properly — not just panels on a
            roof. We prepare the full design package: CAD drawings, technical
            layouts, 3D visualisations, then professional installation across
            Scotland.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="origin-btn bg-white text-origin hover:bg-mist">
              Request solar design
            </a>
            <a
              href="#solar-cad"
              className="origin-btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-origin"
            >
              View CAD &amp; 3D work
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {offerings.map((item, i) => (
            <Reveal key={item.id} delay={0.05 * i}>
              <article
                id={item.id}
                className="flex h-full flex-col bg-white/5 ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
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

        <div className="mt-16 border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
              Design pack includes
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 bg-origin" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
              Project workflow
            </p>
            <h3 className="mt-4 font-display text-3xl text-white md:text-4xl">
              From survey to CAD, 3D, and switch-on.
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
                alt="Solar installation carried out from approved design drawings"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-white/55">
              Ask for a solar design consultation — share your postcode and roof
              photos on WhatsApp or the quote form. We prepare CAD + 3D before
              install.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
