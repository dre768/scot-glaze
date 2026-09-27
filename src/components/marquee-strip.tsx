"use client";

const items = [
  "UPVC windows",
  "Entrance doors",
  "Bifold doors",
  "Patio doors",
  "Tilt & turn",
  "Bay windows",
  "French doors",
  "Free home survey",
  "Fitted across Scotland",
];

export function MarqueeStrip() {
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Services ticker"
      className="overflow-hidden border-y border-midnight/10 bg-lime py-4"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-lg font-semibold text-midnight md:text-xl"
          >
            {item}
            <span className="inline-block size-2 rounded-full bg-midnight/40" />
          </span>
        ))}
      </div>
    </section>
  );
}
