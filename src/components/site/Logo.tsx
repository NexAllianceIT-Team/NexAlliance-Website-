import logoUrl from "@/assets/nexalliance-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="NexAlliance"
        className="h-9 sm:h-11 md:h-14 w-auto select-none"
        draggable={false}
      />
      <span className="sr-only">NexAlliance</span>
    </div>
  );
}