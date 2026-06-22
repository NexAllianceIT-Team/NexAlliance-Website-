import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — NexAlliance" },
      { name: "description", content: "Performance marketing engineered around CAC, LTV and conversion math." },
      { property: "og:title", content: "Digital Marketing — NexAlliance" },
      { property: "og:url", content: "/services/marketing" },
    ],
    links: [{ rel: "canonical", href: "/services/marketing" }],
  }),
  component: () => <ServicePageTemplate service={findService("marketing")} />,
});