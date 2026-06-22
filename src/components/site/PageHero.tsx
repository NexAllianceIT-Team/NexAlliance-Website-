import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {eyebrow && (
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground glass">
              <span className="size-1.5 rounded-full" style={{ background: "var(--brand-blue-bright)" }} />
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}