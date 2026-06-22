import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";

const ORDER = ["erp", "crm", "web", "mobile", "cloud", "marketing"];
const DIRECTIONS: Record<string, { x: number; y: number }> = {
  erp:       { x: -120, y: 0 },
  crm:       { x:  120, y: 0 },
  web:       { x: 0,    y: 80 },
  mobile:    { x: 0,    y: 120 },
  cloud:     { x: -60,  y: -80 },
  marketing: { x: 60,   y: -80 },
};

function Panel({ slug, i, total }: { slug: string; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const s = services.find((x) => x.slug === slug)!;
  const dir = DIRECTIONS[slug];
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [dir.x, 0, -dir.x * 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [dir.y, 0, -dir.y * 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);

  return (
    <div ref={ref} className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6">
      <motion.div
        style={{ x, y, opacity, scale }}
        className="relative max-w-5xl w-full text-center"
      >
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent/80 mb-4 sm:mb-6">
          0{i + 1} / 0{total} — Discipline
        </div>
        <h3 className="text-[clamp(2.5rem,11vw,9rem)] font-bold leading-[0.9] tracking-tighter gradient-text break-words">
          {s.title.split(" ")[0]}
        </h3>
        <p className="mt-6 sm:mt-8 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-foreground/70">
          {s.hero}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {s.features.slice(0, 5).map((f) => (
            <span key={f} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-foreground/70">
              {f}
            </span>
          ))}
        </div>
        <Link
          to={s.path}
          className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground/80 hover:text-accent transition-colors group"
        >
          Explore {s.title}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </div>
  );
}

export function ServicesScroll() {
  return (
    <section className="relative overflow-hidden">
      <div className="sticky top-20 sm:top-24 z-30 pointer-events-none">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 flex justify-between items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-foreground/40">
          <span className="truncate">What we build</span>
          <span className="hidden sm:inline truncate">Six disciplines · one ecosystem</span>
        </div>
      </div>
      <div className="relative z-10">
        {ORDER.map((slug, i) => (
          <Panel key={slug} slug={slug} i={i} total={ORDER.length} />
        ))}
      </div>
    </section>
  );
}