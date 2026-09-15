import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  { year: "2026", title: "The Beginning", desc: "Two founders. One conviction: software should feel inevitable." },
  { year: "Q2", title: "First Clients", desc: "Early ERP & CRM rollouts. Word-of-mouth becomes pipeline." },
  { year: "Q3", title: "Building Products", desc: "In-house platforms for retail, healthcare, and manufacturing." },
  { year: "Q4", title: "Growing the Team", desc: "Senior engineers, designers, and growth specialists across Surat." },
  { year: "→",  title: "Future Vision", desc: "A global studio for digital ecosystems — AI-first, design-led, ruthlessly engineered." },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">The Journey</div>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">
            A studio in <span className="gradient-text">motion.</span>
          </h2>
        </div>

        <div className="relative pl-10 md:pl-24">
          <div className="absolute left-2 md:left-8 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-2 md:left-8 top-0 w-px origin-top"
          >
            <div className="h-full w-full" style={{ background: "var(--gradient-brand)" }} />
          </motion.div>

          <div className="space-y-20 sm:space-y-28 md:space-y-32">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.year + s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid md:grid-cols-[120px_1fr] gap-4 md:gap-12 items-start"
              >
                <div className="absolute -left-[34px] md:-left-[68px] top-2 size-4 rounded-full ring-4 ring-background" style={{ background: "var(--gradient-brand)" }} />
                <div className="text-xl sm:text-2xl md:text-4xl font-bold gradient-text">{s.year}</div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/60 max-w-xl">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}