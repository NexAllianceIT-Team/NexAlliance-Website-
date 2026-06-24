import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/ServicePageTemplate";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

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

type Project = { 
  title: string; 
  industry: string; 
  tag: Exclude<F, "All">; 
  description: string; 
  features: string[]; 
  gradient: string;
  status?: string;
};

const projects: Project[] = [
  { 
    title: "Hotel Hilton TMS", 
    industry: "Hospitality", 
    tag: "ERP", 
    description: "Streamlining task operations with a centralized digital system.", 
    features: ["Analytics dashboard", "Task Assignment System", "Role-Based Access Control", "Task Notifications"], 
    gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)" 
  },
  { 
    title: "Novva Salon", 
    industry: "Beauty & Wellness", 
    tag: "ERP", 
    description: "A complete salon management system designed to automate bookings, staff management, and business analytics.", 
    features: ["Customer booking system", "Barber/staff management", "Attendance tracking"], 
    gradient: "linear-gradient(135deg,#0c2340,#5cbdb9)" 
  },
  { 
    title: "Vrani Chemicals", 
    industry: "Manufacturing", 
    tag: "Web", 
    description: "A professional business website with an admin panel to manage products and testimonials.", 
    features: ["Product management panel", "Testimonials management", "Responsive website", "Contact system"], 
    gradient: "linear-gradient(135deg,#1a1a2e,#4f46e5)" 
  },
  { 
    title: "Gas Agency System", 
    industry: "Energy & Utilities", 
    tag: "ERP", 
    description: "A management system for handling gas inventory, purchases, sales, and analytics to improve operational control.", 
    features: ["Inventory management", "Purchase tracking", "Sales management", "Analytics dashboard"], 
    gradient: "linear-gradient(135deg,#0d0d0d,#c9a84c)" 
  },
  { 
    title: "Custom Restaurant POS", 
    industry: "F&B", 
    tag: "ERP", 
    description: "A powerful and customizable restaurant management system designed to handle billing, orders, and operations efficiently.", 
    features: ["POS billing system", "Order & Table management", "Reports & analytics", "Custom branding"], 
    gradient: "linear-gradient(135deg,#064e3b,#0d7a5f)" 
  },
  { 
    title: "Bihar Disaster System", 
    industry: "Government", 
    tag: "Web", 
    description: "A comprehensive web-based platform to support disaster preparedness, response, and recovery operations across the state.", 
    features: ["Real-time incident reporting", "Relief camp management", "Citizen complaints", "Resource tracking"], 
    gradient: "linear-gradient(135deg,#5c2018,#e8b84a)", 
    status: "In Development" 
  },
  { 
    title: "Harbole Entertainment", 
    industry: "Media & News", 
    tag: "Web", 
    description: "A fully dynamic news publishing platform with role-based access control and real-time content delivery.", 
    features: ["Dynamic news publishing", "Role-based access", "Content management", "Real-time updates"], 
    gradient: "linear-gradient(135deg,#2d3748,#718096)" 
  },
  { 
    title: "Arkstone Realty", 
    industry: "Real Estate", 
    tag: "Web", 
    description: "A modern real estate platform designed to showcase residential and commercial properties with lead generation.", 
    features: ["Property listings", "Lead generation system", "Interactive galleries", "SEO optimization"], 
    gradient: "linear-gradient(135deg,#1a4a6e,#2d8a9e)" 
  },
  { 
    title: "Luxbury Properties", 
    industry: "Real Estate", 
    tag: "CRM", 
    description: "A comprehensive real estate platform that allows users to browse, search, and explore premium properties.", 
    features: ["Property search & filtering", "Property management dashboard", "Inquiry management", "Project profiles"], 
    gradient: "linear-gradient(135deg,#0a0a1a,#4f46e5)" 
  },
  { 
    title: "Dotteds.in", 
    industry: "E-Commerce", 
    tag: "Web", 
    description: "An online fashion and clothing e-commerce platform offering a seamless shopping experience.", 
    features: ["Product catalog", "Shopping cart & wishlist", "Secure checkout", "Order tracking"], 
    gradient: "linear-gradient(135deg,#4a148c,#880e4f)" 
  },
  { 
    title: "VSquare Hospital", 
    industry: "Healthcare", 
    tag: "Web", 
    description: "A healthcare portal providing easy access to hospital info, specialist profiles, and online appointment booking.", 
    features: ["Online appointment booking", "Doctor profiles", "Treatment info", "Patient inquiry forms"], 
    gradient: "linear-gradient(135deg,#004d40,#00897b)" 
  },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={<><span className="gradient-text">Our</span> Projects.</>}
        subtitle="A selection of platforms, systems, and digital ecosystems we've successfully shipped."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <div className="group flex flex-col h-full rounded-3xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                {/* Visual Header */}
                <div className="relative aspect-[4/3] shrink-0" style={{ background: p.gradient }}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-end justify-between p-5 text-primary-foreground">
                    <div className="text-xs uppercase tracking-widest font-semibold opacity-90">{p.tag}</div>
                    {p.status && (
                      <div className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-wider">
                        {p.status}
                      </div>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.industry}</div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-border mt-auto">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {p.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5 opacity-70" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}