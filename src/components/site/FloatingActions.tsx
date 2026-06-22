import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  const wa = "https://wa.me/919723498878?text=Hi%20NexAlliance%2C%20I%27d%20like%20to%20discuss%20a%20project.";
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
      <Link
        to="/contact"
        className="group flex items-center gap-2 rounded-full pl-3 pr-4 py-2.5 text-sm font-medium text-primary-foreground"
        style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
      >
        <Calendar className="size-4" />
        <span className="hidden sm:inline">Book a call</span>
      </Link>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="grid place-items-center size-12 rounded-full text-white animate-pulse-glow"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}