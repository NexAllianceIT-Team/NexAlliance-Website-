import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12 text-center" style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-elegant)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground">Ready to transform your business digitally?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">Tell us where you want to go. We'll map the fastest, safest path to get there.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="secondary"><Link to="/contact">Book Consultation</Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicePageTemplate({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <>
      <PageHero eyebrow={service.title} title={<span className="gradient-text">{service.hero}</span>} subtitle={service.description}>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" style={{ background: "var(--gradient-brand)" }}>
            <Link to="/contact">Schedule Consultation <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio">See related work</Link>
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="grid size-14 rounded-xl place-items-center text-primary-foreground mb-4" style={{ background: "var(--gradient-brand)" }}>
              <Icon className="size-6" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">What you get with {service.title}</h2>
            <p className="mt-3 text-muted-foreground">Outcomes-first delivery, senior teams, and a track record across regulated and high-growth industries.</p>
            <ul className="mt-6 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{f}</li>
              ))}
            </ul>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="gradient-border p-6 h-full">
                  <div className="text-sm font-semibold">{b.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Technologies & tools</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <span key={t} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm">{t}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight">Our process</h2></Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="relative rounded-xl border border-border bg-card p-6 h-full">
                <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight text-center">Frequently asked</h2></Reveal>
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </>
  );
}