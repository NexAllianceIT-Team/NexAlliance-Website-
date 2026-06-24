const CLIENTS = [
  "Hillton",
  "Modulite-Interiors",
  "Novva-Salon",
  "Harbole Entertaiment",
  "Bihar Disaster Mangement System",
  "Dotteds",
  "Arkstone Reality",
  "Luxbury Propties",
  "Vsqure Nuro Spine",
  "Ilyndra",
  "Brand Box Clothing",
  "Vrani Chemicals"
];

export function ClientsMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative border-y border-border/60 bg-background/40 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-5 sm:mb-6 flex items-center justify-center text-center">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
          Trusted by ambitious teams across India & the world
        </span>
      </div>
      <div
        className="group relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max gap-8 sm:gap-14 animate-marquee will-change-transform group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground/40 hover:text-foreground transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}