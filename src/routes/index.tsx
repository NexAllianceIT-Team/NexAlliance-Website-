import { createFileRoute } from "@tanstack/react-router";
import { HeroImmersive } from "@/components/site/HeroImmersive";
import { ManifestoSection } from "@/components/site/ManifestoSection";
import { ServicesScroll } from "@/components/site/ServicesScroll";
import { TimelineSection } from "@/components/site/TimelineSection";
import { FoundersSection } from "@/components/site/FoundersSection";
import { TechOrbit } from "@/components/site/TechOrbit";
import { CtaFinal } from "@/components/site/CtaFinal";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { FAQSection } from "@/components/site/FAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexAlliance — We build digital ecosystems." },
      { name: "description", content: "NexAlliance is a digital transformation partner — ERP, CRM, web, mobile, cloud and growth engineered as one ecosystem." },
      { property: "og:title", content: "NexAlliance — We build digital ecosystems." },
      { property: "og:description", content: "Digital transformation partner for startups, enterprises and visionaries." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroImmersive />
      <ClientsMarquee />
      <ManifestoSection />
      <ServicesScroll />
      <TimelineSection />
      <FoundersSection />
      <TechOrbit />
      <FAQSection />
      <CtaFinal />
    </>
  );
}
