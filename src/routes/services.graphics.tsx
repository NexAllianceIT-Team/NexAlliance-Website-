import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/graphics")({
  head: () => ({
    meta: [
      { title: "Graphics Design — NexAlliance" },
      { name: "description", content: "Brand identity, social and marketing creative systems." },
      { property: "og:title", content: "Graphics Design — NexAlliance" },
      { property: "og:url", content: "/services/graphics" },
    ],
    links: [{ rel: "canonical", href: "/services/graphics" }],
  }),
  component: () => <ServicePageTemplate service={findService("graphics")} />,
});