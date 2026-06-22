import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/uiux")({
  head: () => ({
    meta: [
      { title: "UI/UX Design — NexAlliance" },
      { name: "description", content: "Research-led product design and scalable design systems." },
      { property: "og:title", content: "UI/UX Design — NexAlliance" },
      { property: "og:url", content: "/services/uiux" },
    ],
    links: [{ rel: "canonical", href: "/services/uiux" }],
  }),
  component: () => <ServicePageTemplate service={findService("uiux")} />,
});