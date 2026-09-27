import { Reveal } from "@/components/reveal";

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display-italic text-3xl leading-snug text-black md:text-4xl lg:text-5xl">
            Welcome to Lunox — a local installation business dedicated to
            exceptional UPVC doors and windows for Scottish homes.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground md:text-lg">
            Our focus is refining the craft of measuring, manufacturing, and
            fitting — and understanding what truly matters to families and their
            homes, from Glasgow terraces to Highland cottages.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
