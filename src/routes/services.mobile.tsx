import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { findService } from "@/lib/services-data";

export const Route = createFileRoute("/services/mobile")({
  head: () => ({
    meta: [
      { title: "Mobile App Development — NexAlliance" },
      { name: "description", content: "iOS, Android, Flutter and React Native — built for retention." },
      { property: "og:title", content: "Mobile App Development — NexAlliance" },
      { property: "og:url", content: "/services/mobile" },
    ],
    links: [{ rel: "canonical", href: "/services/mobile" }],
  }),
  component: () => <ServicePageTemplate service={findService("mobile")} />,
});