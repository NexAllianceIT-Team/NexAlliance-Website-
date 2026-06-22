import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Compass, Target, Heart, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/site/ServicePageTemplate";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NexAlliance" },
      { name: "description", content: "We're an enterprise-grade technology consulting team with a startup heartbeat." },
      { property: "og:title", content: "About — NexAlliance" },
      { property: "og:description", content: "We're an enterprise-grade technology consulting team with a startup heartbeat." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About NexAlliance"
        title={<><span className="gradient-text">An alliance</span> for ambitious teams.</>}
        subtitle="We help founders and enterprises ship technology that compounds — from first prototype to global rollout."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" style={{ background: "var(--gradient-brand)" }}><Link to="/contact">Work with us</Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/portfolio">See our work</Link></Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="text-sm uppercase tracking-widest text-muted-foreground">Our story</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Built by engineers and designers who got tired of agency theater.</h2>
          <p className="mt-5 text-muted-foreground">NexAlliance started with a simple thesis: enterprises deserve startup velocity, and startups deserve enterprise rigor. We're a senior-only team that ships every sprint and stays accountable to outcomes — not hours.</p>
          <p className="mt-3 text-muted-foreground">Today, we partner with teams across India, the US, and EMEA on platforms that move the needle on revenue, retention, and operations.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-elegant)" }}>
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 grid place-items-center text-primary-foreground">
              <div className="text-center px-6">
                <div className="text-6xl md:text-7xl font-semibold tracking-tight">Innovate.<br />Build.<br />Transform.</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-5">
        {[
          { i: Compass, t: "Our Vision", d: "Be the most trusted technology alliance for ambitious businesses across emerging markets." },
          { i: Target, t: "Our Mission", d: "Ship measurable business outcomes — through software, design, and growth — every single sprint." },
          { i: Heart, t: "Our Values", d: "Craft. Candor. Customer obsession. Compounding excellence over heroics." },
        ].map((it, i) => (
          <Reveal key={it.t} delay={i * 100}>
            <div className="gradient-border p-7 h-full">
              <div className="grid size-12 rounded-xl place-items-center text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <it.i className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-border p-10 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ background: "var(--gradient-soft)" }}>
          {[
            { v: 40, s: "+", t: "Projects Delivered" },
            { v: 60, s: "+", t: "Happy Clients" },
            { v: 2, s: "+", t: "Years of Experience" },
            { v: 10, s: "+", t: "Team Members" },
          ].map((it) => (
            <div key={it.t} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-semibold gradient-text"><Counter to={it.v} suffix={it.s} /></div>
              <div className="mt-2 text-sm text-muted-foreground">{it.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal><h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">Why businesses choose NexAlliance</h2></Reveal>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Senior teams only — no junior hand-offs",
            "Outcome-based engagement models",
            "Transparent weekly demos & roadmaps",
            "Dedicated account leadership",
            "End-to-end: design, build, growth",
            "Post-launch optimization built in",
          ].map((t, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="flex gap-3 items-start rounded-xl border border-border bg-card p-5">
                <Sparkles className="size-4 text-primary mt-1 shrink-0" />
                <div className="text-sm">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}