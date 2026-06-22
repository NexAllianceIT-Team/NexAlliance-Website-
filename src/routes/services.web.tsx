import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/web")({
  head: () => ({
    meta: [
      { title: "Web Development — NexAlliance" },
      { name: "description", content: "Web platforms engineered for speed, scale, and conversion." },
      { property: "og:title", content: "Web Development — NexAlliance" },
      { property: "og:url", content: "/services/web" },
    ],
    links: [{ rel: "canonical", href: "/services/web" }],
  }),
  component: () => <ServicePageTemplate service={findService("web")} />,
});