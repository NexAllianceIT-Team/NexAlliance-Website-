import { motion } from "framer-motion";

const FOUNDERS = [
  { name: "Maulik Chudasama", role: "Co-Founder · Business Development Executive", bio: "Building strategic partnerships, driving growth, and creating opportunities that turn ideas into business success.", image: "/assets/maulik_founder.jpeg" },
  { name: "Meet Mistry", role: "Co-Founder · Head of Sales", bio: "Driving revenue growth through client relationships, market expansion, and result-oriented sales strategies.", image: "/assets/meet_founder.jpeg" },
  { name: "Sanket Pithava", role: "Co-Founder · Head Of Technology", bio: "Leading technology innovation and transforming complex business requirements into scalable digital solutions.", image: "/assets/sanket_founder.jpeg" },
];

export function FoundersSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Leadership</div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">
            The people behind <span className="gradient-text">the build.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-card"
            >
              {/* Portrait surface */}
              <div
                className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105 will-change-transform"
                style={{
                  background:
                    `linear-gradient(180deg, oklch(0.2 0.04 ${260 + i * 10} / 0.9) 0%, oklch(0.08 0.02 265) 90%),` +
                    `radial-gradient(ellipse at 50% 30%, oklch(0.62 0.19 ${250 + i * 12} / 0.55), transparent 60%)`,
                }}
              />
              {/* particles */}
              <div className="absolute inset-0 opacity-60">
                {Array.from({ length: 8 }).map((_, k) => (
                  <span
                    key={k}
                    className="absolute size-1 rounded-full bg-white/40 animate-float will-change-transform"
                    style={{
                      left: `${(k * 37) % 100}%`,
                      top: `${(k * 53) % 100}%`,
                      animationDelay: `${(k % 6) * 0.5}s`,
                      animationDuration: `${5 + (k % 4)}s`,
                    }}
                  />
                ))}
              </div>

              {/* Massive initial or image */}
              <div className="absolute inset-0 overflow-hidden">
                {f.image ? (
                  <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 will-change-transform" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-[12rem] sm:text-[14rem] md:text-[18rem] font-bold leading-none text-white/5 select-none">
                      {f.name[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Glass content */}
              <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 text-white will-change-transform">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/80">{f.role}</div>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{f.name}</h3>
                <p className="mt-3 text-sm text-white/70">{f.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}