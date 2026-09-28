import { Reveal } from "@/components/reveal";

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display-italic text-3xl leading-snug text-black md:text-4xl lg:text-5xl">
            Stop living with cold rooms and noisy streets — upgrade once, properly.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground md:text-lg">
            From Glasgow flats to Highland cottages, we fit the window and door
            styles British homes actually need — then floor, tile, clad, or extend
            when you want the same team to finish the job.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
