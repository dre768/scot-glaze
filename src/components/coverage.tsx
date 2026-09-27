const regions = [
  "Glasgow & the West",
  "Edinburgh & the Lothians",
  "Aberdeen & the North East",
  "Dundee & Fife",
  "Highlands & Islands",
  "Borders & Dumfries",
];

export function Coverage() {
  return (
    <section id="scotland" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-ink text-primary-foreground" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 80% 20%, #2f6a62 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, #3a4f5c 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="text-sm tracking-[0.18em] text-brass uppercase">
            Coverage
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-balance text-white md:text-5xl">
            Local craftsmen. All of Scotland.
          </h2>
          <p className="mt-4 max-w-lg text-white/70 md:text-lg">
            We survey and install nationwide — city terraces, coastal bungalows,
            and Highland homes that need frames built for wind and weather.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {regions.map((region) => (
            <li
              key={region}
              className="border-b border-white/15 pb-3 text-lg text-white/90"
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
