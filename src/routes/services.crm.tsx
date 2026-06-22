import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/crm")({
  head: () => ({
    meta: [
      { title: "CRM Systems — NexAlliance" },
      { name: "description", content: "CRM platforms tuned to your sales motion: lead, pipeline, marketing automation." },
      { property: "og:title", content: "CRM Systems — NexAlliance" },
      { property: "og:url", content: "/services/crm" },
    ],
    links: [{ rel: "canonical", href: "/services/crm" }],
  }),
  component: () => <ServicePageTemplate service={findService("crm")} />,
});