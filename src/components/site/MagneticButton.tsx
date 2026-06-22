import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({ children, href, onClick, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.35);
    y.set(my * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };

  const styles =
    variant === "primary"
      ? "text-[color:var(--primary-foreground)]"
      : "text-foreground border border-white/15 hover:border-white/40";
  const bg = variant === "primary" ? { background: "var(--gradient-brand)" } : undefined;

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium tracking-wide select-none cursor-pointer transition-shadow hover:shadow-[var(--shadow-glow)] ${styles} ${className}`}
    >
      <span style={bg} className={variant === "primary" ? "absolute inset-0 rounded-full -z-10" : "hidden"} />
      <span className="relative">{children}</span>
    </motion.div>
  );

  const wrapperStyle = variant === "primary" ? { background: "var(--gradient-brand)", borderRadius: 9999 } : undefined;

  if (href) {
    return (
      <a href={href} style={wrapperStyle} className="inline-block rounded-full">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} style={wrapperStyle} className="inline-block rounded-full">
      {inner}
    </button>
  );
}