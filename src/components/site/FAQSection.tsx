import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What services does NexAlliance provide?",
    a: "We deliver end-to-end digital transformation — custom ERP, CRM, web platforms, mobile apps, cloud infrastructure, UI/UX, brand identity, and performance marketing, engineered as one ecosystem.",
  },
  {
    q: "Do you develop custom ERP solutions?",
    a: "Yes. We design and build modular, role-based ERP systems tailored to your operations — finance, inventory, HR, manufacturing, procurement and analytics — with clean integrations into your existing stack.",
  },
  {
    q: "Can you build CRM systems for businesses?",
    a: "Absolutely. From lead capture and sales pipelines to support, automation and customer 360° dashboards, we build CRMs that fit how your team actually sells and serves.",
  },
  {
    q: "Do you provide mobile app development?",
    a: "We ship production-grade iOS and Android apps using React Native and native modules where needed — with thoughtful UX, offline support, push notifications and analytics built in.",
  },
  {
    q: "Which technologies do you use?",
    a: "React, Next.js, TypeScript, Node.js, NestJS, Python, PostgreSQL, MongoDB, Redis, AWS, GCP, Docker, Kubernetes, React Native, Flutter, and modern AI tooling.",
  },
  {
    q: "Do you provide cloud deployment services?",
    a: "Yes — architecture, provisioning, CI/CD, observability and cost-optimization across AWS, GCP and Azure, plus managed Kubernetes, serverless and edge deployments.",
  },
  {
    q: "Can you redesign existing websites?",
    a: "We run focused redesign engagements — audit, IA, design system, build and launch — so your site looks premium, ranks better and converts higher.",
  },
  {
    q: "How can I get a project quotation?",
    a: "Share a brief via our contact form or schedule a 30-minute discovery call. You'll receive a clear scope, timeline and fixed-price or T&M estimate within a few business days.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Both. We support pre-seed founders launching MVPs and enterprise teams modernizing legacy platforms — with the same senior-only team and engineering rigor.",
  },
  {
    q: "What is your development process?",
    a: "Discovery → product strategy → design system → agile sprints with weekly demos → QA & security review → launch → continuous iteration. You always know what's shipping and why.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Frequently asked
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <p className="mt-5 text-foreground/60 max-w-xl mx-auto">
            Everything you need to know about working with NexAlliance — from scoping your first
            project to scaling a global platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group rounded-2xl border border-border bg-card/40 backdrop-blur-md px-4 sm:px-6 transition-colors hover:border-primary/40 data-[state=open]:border-primary/60 data-[state=open]:bg-card/70"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-5 hover:no-underline">
                  <span className="flex items-start gap-3 sm:gap-4 min-w-0">
                    <span className="text-xs font-mono text-primary mt-1 sm:mt-1.5 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-8 sm:pl-10 pr-2 pb-5 sm:pb-6 text-sm sm:text-base text-foreground/65 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}