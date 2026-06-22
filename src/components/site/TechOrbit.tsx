import { motion } from "framer-motion";

const TECH = ["React", "Next.js", ".NET", "Azure", "AWS", "Flutter", "Node.js", "SQL Server", "MongoDB", "Docker", "Kubernetes", "TypeScript"];

export function TechOrbit() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Tech Stack</div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            Modern tools.<br />
            <span className="gradient-text">Production discipline.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-foreground/60 max-w-md">
            We pick the boring, reliable stack — then push it further than most. Every choice is auditable against scale, cost, and team velocity.
          </p>
        </div>

        <div className="relative aspect-square w-full max-w-[420px] md:max-w-[560px] mx-auto">
          {/* orbit rings */}
          {[0.45, 0.7, 0.95].map((r, i) => (
            <div
              key={r}
              className="absolute inset-0 rounded-full border border-white/10"
              style={{ transform: `scale(${r})` }}
            />
          ))}
          {/* central symbol */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-20 sm:size-28 md:size-32 rounded-full grid place-items-center"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <span className="text-2xl font-bold text-[color:var(--primary-foreground)]">N°</span>
          </motion.div>

          {/* orbiting chips */}
          {TECH.map((t, i) => {
            const angle = (i / TECH.length) * Math.PI * 2;
            const radius = i % 2 === 0 ? 42 : 48;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            return (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                  className="block rounded-full border border-white/10 bg-white/5 backdrop-blur px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs whitespace-nowrap text-foreground/80"
                >
                  {t}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* infinite marquee wall */}
      <div className="relative mt-16 sm:mt-24 overflow-hidden border-y border-white/5 py-5 sm:py-6">
        <div className="flex w-max animate-marquee gap-10 sm:gap-16 whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground/30">
          {[...TECH, ...TECH, ...TECH].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t} <span className="size-1.5 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}