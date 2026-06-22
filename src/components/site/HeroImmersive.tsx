import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { NetworkHero } from "./NetworkHero";

const ROTATE = ["Startups.", "Enterprises.", "Visionaries."];
const MORPH = ["ERP", "CRM", "WEB", "MOBILE", "CLOUD", "MARKETING"];

export function HeroImmersive() {
  const [idx, setIdx] = useState(0);
  const [morphIdx, setMorphIdx] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setIdx((i) => (i + 1) % ROTATE.length), 2200);
    const b = setInterval(() => setMorphIdx((i) => (i + 1) % MORPH.length), 1400);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  const headline = ["We", "Build", "Digital", "Ecosystems."];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 opacity-50"><NetworkHero /></div>

      {/* huge ghost word */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={MORPH[morphIdx]}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(20px)" }}
            animate={{ opacity: 0.06, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(24px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40vw] sm:text-[32vw] md:text-[28vw] leading-none font-bold tracking-tighter text-foreground select-none whitespace-nowrap"
          >
            {MORPH[morphIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full pt-24 sm:pt-28 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/70 max-w-full"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse-glow" />
          NexAlliance — Innovate. Build. Transform.
        </motion.div>

        <h1 className="mt-6 sm:mt-8 font-bold leading-[0.92] tracking-tighter text-[clamp(2.25rem,9vw,8.5rem)]">
          <span className="block">
            {headline.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em] will-change-transform"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-8 sm:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <div className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-xl min-w-0">
            <span className="mr-2">For</span>
            <span className="relative inline-block min-w-[8ch] align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATE[idx]}
                  initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block gradient-text font-semibold"
                >
                  {ROTATE[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <p className="mt-4 text-sm text-foreground/55 max-w-md">
              We design, build and scale living digital products — ERP, CRM, web, mobile, cloud and growth, engineered as one ecosystem.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link to="/contact">
              <MagneticButton>
                Start a project <ArrowUpRight className="size-4" />
              </MagneticButton>
            </Link>
            <Link to="/services">
              <MagneticButton variant="ghost">See the work</MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/40"
      >
        <span>Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}