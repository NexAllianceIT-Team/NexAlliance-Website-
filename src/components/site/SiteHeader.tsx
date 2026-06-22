import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { to: string; label: string; hasMenu?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        <Link to="/" className="flex items-center shrink-0 min-w-0" aria-label="NexAlliance home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.hasMenu ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <Link
                  to={item.to}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </Link>
                {menuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[520px] animate-fade-in">
                    <div className="bg-secondary border border-border rounded-xl p-3 grid grid-cols-2 gap-1" style={{ boxShadow: "var(--shadow-elegant)" }}>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={s.path}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="grid place-items-center size-9 rounded-md shrink-0 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                            <s.icon className="size-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold truncate">{s.title}</div>
                            <div className="text-xs text-muted-foreground truncate">{s.short}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm font-medium text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex" style={{ background: "var(--gradient-brand)" }}>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <button
            className="lg:hidden grid place-items-center size-10 rounded-md border border-border hover:bg-accent transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-background/60 backdrop-blur-sm z-40"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="lg:hidden fixed top-16 sm:top-20 right-0 bottom-0 w-[88%] max-w-sm z-50 bg-background/95 backdrop-blur-xl border-l border-border overflow-y-auto"
            >
              <nav className="flex flex-col p-5 gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 px-2">Services</div>
                  <div className="grid gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="grid place-items-center size-8 rounded-md shrink-0 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                          <s.icon className="size-4" />
                        </div>
                        <span className="text-sm font-medium truncate">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Button asChild className="mt-5 w-full" size="lg" style={{ background: "var(--gradient-brand)" }}>
                  <Link to="/contact" onClick={() => setOpen(false)}>Schedule Consultation</Link>
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}