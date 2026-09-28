import { Reveal } from "@/components/reveal";

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display-italic text-3xl leading-snug text-black md:text-4xl lg:text-5xl">
            Welcome to Lunox — windows, doors, and home improvements for British
            houses, delivered by a local Scottish team.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground md:text-lg">
            Whether you need tilt &amp; turn windows on a Glasgow flat, a composite
            front door on a suburban semi, or flooring and tiling after an
            extension — we keep the craft focused on what actually suits UK homes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
