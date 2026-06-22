import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/ServicePageTemplate";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — NexAlliance" },
      { name: "description", content: "Selected work across ERP, CRM, web, mobile, design and marketing." },
      { property: "og:title", content: "Portfolio — NexAlliance" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters = ["All", "ERP", "CRM", "Web", "Mobile", "Design", "Marketing"] as const;
type F = typeof filters[number];

type Project = { title: string; client: string; tag: Exclude<F, "All">; result: string; gradient: string };
const projects: Project[] = [
  { title: "Unified ERP for 400-store retailer", client: "Retail · India", tag: "ERP", result: "Inventory accuracy +28%", gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)" },
  { title: "Sales CRM with AI lead scoring", client: "B2B SaaS · US", tag: "CRM", result: "Win-rate +22%", gradient: "linear-gradient(135deg,#0c2340,#5cbdb9)" },
  { title: "Patient portal for hospital network", client: "Healthcare · IN", tag: "Web", result: "NPS 72", gradient: "linear-gradient(135deg,#1a1a2e,#4f46e5)" },
  { title: "Logistics fleet app", client: "Logistics · GCC", tag: "Mobile", result: "ETA accuracy +35%", gradient: "linear-gradient(135deg,#0d0d0d,#c9a84c)" },
  { title: "Design system for fintech", client: "Fintech · SG", tag: "Design", result: "Velocity 2.1x", gradient: "linear-gradient(135deg,#064e3b,#0d7a5f)" },
  { title: "Performance media engine", client: "DTC · IN", tag: "Marketing", result: "CAC -41%", gradient: "linear-gradient(135deg,#5c2018,#e8b84a)" },
  { title: "Manufacturing MES", client: "Manufacturing · IN", tag: "ERP", result: "OEE +14%", gradient: "linear-gradient(135deg,#2d3748,#718096)" },
  { title: "Real-estate CRM + portal", client: "Real Estate · IN", tag: "CRM", result: "Lead-to-deal 3.2x", gradient: "linear-gradient(135deg,#1a4a6e,#2d8a9e)" },
  { title: "Ecommerce replatform", client: "Retail · IN", tag: "Web", result: "Conversion +38%", gradient: "linear-gradient(135deg,#0a0a1a,#4f46e5)" },
];

function Portfolio() {
  const [f, setF] = useState<F>("All");
  const list = f === "All" ? projects : projects.filter((p) => p.tag === f);
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={<><span className="gradient-text">Outcomes</span>, shipped.</>}
        subtitle="A snapshot of platforms, brands, and programs we've helped build. Filter by discipline below."
      />
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((t) => (
            <button
              key={t}
              onClick={() => setF(t)}
              className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
                f === t ? "text-primary-foreground border-transparent" : "border-border hover:bg-accent"
              }`}
              style={f === t ? { background: "var(--gradient-brand)" } : undefined}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <a href="#" className="group block rounded-2xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[5/3] overflow-hidden" style={{ background: p.gradient }}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-end p-5 text-primary-foreground">
                    <div className="text-xs uppercase tracking-widest opacity-80">{p.tag}</div>
                  </div>
                  <div className="absolute top-4 right-4 grid place-items-center size-9 rounded-full bg-white/15 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.client}</div>
                  <div className="mt-1 font-semibold">{p.title}</div>
                  <div className="mt-3 text-sm gradient-text font-semibold">{p.result}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}