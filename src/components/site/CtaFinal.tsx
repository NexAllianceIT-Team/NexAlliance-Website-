import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CtaFinal() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,11vw,9rem)] font-bold leading-[0.9] tracking-tighter"
        >
          Let's build <br />
          <span className="gradient-text">what's next.</span>
        </motion.h2>
        <p className="mt-8 sm:mt-10 text-base sm:text-lg text-foreground/60 max-w-xl mx-auto px-2">
          Tell us about your business. We'll come back with a 30-minute working session — and a plan you can act on this quarter.
        </p>
        <Link
          to="/contact"
          className="group mt-10 sm:mt-12 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] hover:border-accent/60 transition-colors"
        >
          Start the conversation
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
}