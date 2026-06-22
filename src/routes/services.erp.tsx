import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/erp")({
  head: () => ({
    meta: [
      { title: "ERP Solutions — NexAlliance" },
      { name: "description", content: "Unified ERP platforms for finance, inventory, HR, procurement and reporting." },
      { property: "og:title", content: "ERP Solutions — NexAlliance" },
      { property: "og:url", content: "/services/erp" },
    ],
    links: [{ rel: "canonical", href: "/services/erp" }],
  }),
  component: () => <ServicePageTemplate service={findService("erp")} />,
});