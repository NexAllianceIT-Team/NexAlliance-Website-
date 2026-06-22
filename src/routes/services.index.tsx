import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/services-data";
import { CtaBand } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — NexAlliance" },
      { name: "description", content: "End-to-end technology services: ERP, CRM, web, mobile, design, cloud and digital marketing." },
      { property: "og:title", content: "Services — NexAlliance" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<><span className="gradient-text">One partner.</span> Eight disciplines.</>}
        subtitle="From software platforms to growth programs — composable engagements that align to your stage and ambition."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link to={s.path} className="group block h-full">
                <div className="gradient-border h-full p-7 transition-all duration-300 hover:-translate-y-1">
                  <div className="grid size-12 rounded-xl place-items-center text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {s.features.slice(0, 4).map((f) => (
                      <li key={f} className="text-xs rounded-full bg-secondary border border-border px-2.5 py-1">{f}</li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    Learn more <ArrowRight className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}