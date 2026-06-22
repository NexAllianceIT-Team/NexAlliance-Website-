import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = "We don't sell software. We engineer leverage — products that compound for the businesses bold enough to build with us.".split(" ");

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-8">Manifesto</div>
        <p className="text-[clamp(1.5rem,5vw,4.5rem)] font-semibold leading-[1.15] tracking-tight">
          {WORDS.map((w, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            const Word = () => {
              const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
              return (
                <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
                  {w}
                </motion.span>
              );
            };
            return <Word key={i} />;
          })}
        </p>
      </div>
    </section>
  );
}