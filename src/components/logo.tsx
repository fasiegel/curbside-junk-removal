import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "ink",
  compact = false,
}: {
  tone?: "ink" | "cream";
  compact?: boolean;
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", color)} aria-label="Curbside Junk Removal home">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-navy text-cream" aria-hidden>
        <CurbMark />
      </span>
      <span className="leading-none">
        <span className="font-display block text-[1.15rem] tracking-[0.08em]">CURBSIDE</span>
        {!compact && (
          <span className="mt-0.5 block text-[0.65rem] font-medium tracking-[0.14em] uppercase text-muted">
            Junk Removal
          </span>
        )}
      </span>
    </Link>
  );
}

function CurbMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" aria-hidden>
      <path d="M6 22h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      <path d="M8 22V13l8-5 8 5v9" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="miter" />
      <path d="M12 22v-5h8v5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
