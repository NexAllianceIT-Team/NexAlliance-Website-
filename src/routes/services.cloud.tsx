import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/cloud")({
  head: () => ({
    meta: [
      { title: "Cloud Solutions — NexAlliance" },
      { name: "description", content: "Cloud architecture, DevOps and SRE on AWS, Azure and GCP." },
      { property: "og:title", content: "Cloud Solutions — NexAlliance" },
      { property: "og:url", content: "/services/cloud" },
    ],
    links: [{ rel: "canonical", href: "/services/cloud" }],
  }),
  component: () => <ServicePageTemplate service={findService("cloud")} />,
});