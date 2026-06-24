import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NexAlliance" },
      { name: "description", content: "Talk to NexAlliance. Schedule a consultation or message our founders directly." },
      { property: "og:title", content: "Contact — NexAlliance" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/2d189102acddfc1ccfc3c66bdc54cdb5", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      toast.success("Thanks — we'll be in touch within one business day.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's <span className="gradient-text">build something</span> together.</>}
        subtitle="Innovate. Build. Transform. — Tell us about your project and we'll respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 grid lg:grid-cols-5 gap-8 lg:gap-10">
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="gradient-border p-5 sm:p-8 space-y-5">
            <input type="hidden" name="_subject" value="New Inquiry from NexAlliance Website" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="name">Full name</Label><Input id="name" name="name" required className="mt-1.5" placeholder="Jane Doe" /></div>
              <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required className="mt-1.5" placeholder="jane@company.com" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="company">Company</Label><Input id="company" name="company" className="mt-1.5" placeholder="Acme Inc." /></div>
              <div><Label htmlFor="budget">Budget</Label><Input id="budget" name="budget" className="mt-1.5" placeholder="$25k – $100k" /></div>
            </div>
            <div><Label htmlFor="msg">Project details</Label><Textarea id="msg" name="message" rows={5} className="mt-1.5" placeholder="Tell us what you're trying to accomplish…" /></div>
            <Button type="submit" disabled={submitting} size="lg" className="w-full sm:w-auto" style={{ background: "var(--gradient-brand)" }}>
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-7">
            <h3 className="font-semibold">NexAlliance</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5 shrink-0 text-primary" /><span>Dhwarkesh Society, 35, Lajamni Chowk, Near Raghuveer Shoppers, Mota Varachha, Surat, Gujarat 394101</span></li>
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-primary" /><span>+91 63511 78511</span></li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-primary" /><span>info@nexalliance.com</span></li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border backdrop-blur-md bg-card/40 shadow-[var(--shadow-elegant)]">
            <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: "var(--gradient-brand)", opacity: 0.25, mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" }} />
            <iframe
              title="NexAlliance — Surat, Gujarat"
              src="https://www.google.com/maps?q=Dhwarkesh+Society+35+Lajamni+Chowk+Mota+Varachha+Surat+Gujarat+394101&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] block border-0 grayscale-[15%] contrast-105"
              allowFullScreen
            />
            <div className="px-4 sm:px-5 py-4 border-t border-border flex items-center gap-3 bg-card/60 backdrop-blur-md flex-wrap">
              <span className="grid place-items-center size-9 rounded-lg text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <MapPin className="size-4" />
              </span>
              <div className="text-sm min-w-0">
                <div className="font-semibold">NexAlliance</div>
                <div className="text-muted-foreground text-xs truncate">Mota Varachha, Surat · Gujarat 394101</div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Dhwarkesh+Society+35+Lajamni+Chowk+Mota+Varachha+Surat+Gujarat+394101"
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-xs font-medium text-primary hover:underline"
              >
                Directions →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

    </>
  );
}