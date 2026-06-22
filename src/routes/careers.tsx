import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/ServicePageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, Rocket, HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — NexAlliance" },
      { name: "description", content: "Join a senior team shipping enterprise platforms with startup velocity." },
      { property: "og:title", content: "Careers — NexAlliance" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const openings = [
  { t: "📞 Calling Team", d: "2 Intern positions", l: "Surat / Remote" },
  { t: "💻 Flutter Developer", d: "Tech Team · 1 Intern position", l: "Surat / Remote" },
  { t: "💻 MERN Stack Developer", d: "Tech Team · 2 Intern positions", l: "Surat / Remote" },
  { t: "📱 Social Media Manager", d: "1 Open position", l: "Surat / Remote" },
  { t: "✍️ Content Writer", d: "1 Open position", l: "Surat / Remote" },
  { t: "🎥 Content Creator", d: "1 Open position", l: "Surat / Remote" },
  { t: "🎬 Video Editor", d: "1 Open position", l: "Surat / Remote" },
  { t: "📸 Photo Editor", d: "1 Open position", l: "Surat / Remote" },
  { t: "👥 HR Manager", d: "2 Intern positions", l: "Surat / Remote" },
  { t: "📊 Accounting", d: "1 Intern position", l: "Surat / Remote" },
];

function Careers() {
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
      toast.success("Application submitted! We will review it shortly.");
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
        eyebrow="Careers"
        title={<><span className="gradient-text">Build</span> what you'd be proud to ship.</>}
        subtitle="Senior teams, real ownership, and projects that ship to real users every sprint."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { i: Rocket, t: "Ownership", d: "End-to-end ownership of the things you build." },
          { i: HeartHandshake, t: "Culture", d: "Candid, kind, and ruthlessly curious teammates." },
          { i: GraduationCap, t: "Growth", d: "Learning budget, mentorship, and conference travel." },
          { i: Briefcase, t: "Flexibility", d: "Hybrid by default, remote-friendly, async-first." },
        ].map((it, i) => (
          <Reveal key={it.t} delay={i * 80}>
            <div className="gradient-border p-6 h-full">
              <div className="grid size-12 rounded-xl place-items-center text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <it.i className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <Reveal><h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Open positions</h2></Reveal>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {openings.map((o, i) => (
            <Reveal key={o.t} delay={i * 40}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[1.5fr_1fr_auto] gap-4 items-center py-5">
                <div className="min-w-0">
                  <div className="font-semibold truncate">{o.t}</div>
                  <div className="text-sm text-muted-foreground truncate">{o.d}</div>
                </div>
                <div className="text-sm text-muted-foreground hidden sm:block">{o.l}</div>
                <Button asChild variant="outline" size="sm"><a href="#apply">Apply <ArrowRight className="size-3.5" /></a></Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-border p-10" style={{ background: "var(--gradient-soft)" }}>
          <h3 className="text-2xl font-semibold tracking-tight">Internship Program</h3>
          <p className="mt-2 text-muted-foreground max-w-2xl">A structured 6-month program for top engineering, design, and marketing students. Live projects, weekly mentorship, and conversion to full-time roles.</p>
          <Button asChild className="mt-5" style={{ background: "var(--gradient-brand)" }}><a href="#apply">Apply for internship</a></Button>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-5xl px-6 py-12 scroll-mt-20">
        <Reveal>
          <div className="gradient-border p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Apply for a position</h2>
            <p className="mt-2 text-muted-foreground mb-8">Fill out the form below and attach your resume. We'll get back to you soon.</p>
            <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-5">
              <input type="hidden" name="_subject" value="New Job Application from NexAlliance Website" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="applicant-name">Full name</Label><Input id="applicant-name" name="name" required className="mt-1.5" placeholder="Jane Doe" /></div>
                <div><Label htmlFor="applicant-email">Email</Label><Input id="applicant-email" name="email" type="email" required className="mt-1.5" placeholder="jane@example.com" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="position">Position applying for</Label><Input id="position" name="position" required className="mt-1.5" placeholder="e.g. Flutter Developer" /></div>
                <div><Label htmlFor="resume">Resume (PDF)</Label><Input id="resume" name="attachment" type="file" accept=".pdf,.doc,.docx" required className="mt-1.5 cursor-pointer file:text-primary file:font-medium file:bg-primary/10 file:border-0 file:rounded-md file:px-3 file:py-1 hover:file:bg-primary/20 transition-colors" /></div>
              </div>
              <div><Label htmlFor="cover-letter">Message / Cover Letter</Label><Textarea id="cover-letter" name="message" rows={4} className="mt-1.5" placeholder="Tell us why you'd be a great fit..." /></div>
              <Button type="submit" disabled={submitting} size="lg" className="w-full sm:w-auto" style={{ background: "var(--gradient-brand)" }}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}