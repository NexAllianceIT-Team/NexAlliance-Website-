import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/services-data";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/40">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid gap-10 sm:gap-12 grid-cols-2 md:grid-cols-12">
        <div className="col-span-2 md:col-span-4 space-y-4">
          <Link to="/" className="flex items-center" aria-label="NexAlliance home">
            <Logo />
          </Link>
          <p className="text-base font-medium gradient-text inline-block">
            Innovate. Build. Transform.
          </p>
          <p className="text-sm text-muted-foreground max-w-sm">
            Enterprise-grade technology consulting. We design, build and scale digital ecosystems for ambitious teams worldwide.
          </p>
          <div className="flex gap-2 pt-2">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-md border border-border hover:bg-accent transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path} className="hover:text-foreground transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="size-4 shrink-0 mt-0.5" /><span>Dhwarkesh Society, 35, Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101</span></li>
            <li className="flex gap-3"><Phone className="size-4 shrink-0" /><span>+91 63511 511</span></li>
            <li className="flex gap-3"><Mail className="size-4 shrink-0" /><span>info@nexalliance.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground text-center sm:text-left">
          <div>© {new Date().getFullYear()} NexAlliance. All rights reserved.</div>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
        </div>
      </div>
    </footer>
  );
}