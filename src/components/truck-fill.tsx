import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatUsd, TRUCK_TIERS } from "@/lib/pricing";
import { smsHref } from "@/lib/site";

export function TruckFill() {
  const [tierId, setTierId] = useState(1);
  const tier = TRUCK_TIERS.find((t) => t.id === tierId) ?? TRUCK_TIERS[0];
  const estimated = tier.estimated;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        <p className="font-display text-sm tracking-[0.16em] text-muted">TRUCK LOAD</p>
        <h2 className="mt-2 font-display text-3xl tracking-wide text-ink sm:text-4xl">
          Pay for the bed you fill.
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          Mixed piles are priced by dump-bed space, not an hourly clock. Tap a fill
          level. Tiers 1–3 and a packed truck are posted rates; the middle rungs are
          planning numbers until Fred confirms from a photo.
        </p>
        <div className="mt-6 rounded-xl bg-asphalt p-4 sm:p-6">
          <DumpBed fill={tier.fill} />
          <div className="mt-4 grid grid-cols-5 gap-1.5 sm:grid-cols-10">
            {TRUCK_TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTierId(t.id)}
                className={
                  t.id === tierId
                    ? "h-10 rounded-sm bg-cream text-xs font-semibold text-ink"
                    : "h-10 rounded-sm bg-cream/15 text-xs font-semibold text-cream/80 hover:bg-cream/25"
                }
                aria-pressed={t.id === tierId}
              >
                {t.id * 10}%
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
        <p className="text-sm text-muted">
          Tier {tier.id} · {tier.cy} cubic yards · {tier.lbs.toLocaleString()} lbs
        </p>
        <p className="mt-2 font-display text-5xl tracking-wide text-navy tabular-nums">
          {formatUsd(tier.curb)}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{tier.blurb}</p>
        {estimated ? (
          <p className="mt-3 rounded-md bg-paper-2 px-3 py-2 text-xs leading-relaxed text-muted">
            Planning estimate between posted $179 (3/10) and $599 (full). Text a photo
            for the locked-in quote.
          </p>
        ) : (
          <p className="mt-3 rounded-md bg-sage-mist px-3 py-2 text-xs leading-relaxed text-sage">
            Posted curbside rate. Labor, haul, and disposal included.
          </p>
        )}
        <Button className="mt-5 w-full" asChild>
          <a
            href={smsHref(
              `Hi Fred — I have a curbside pile about ${tier.id * 10}% of a dump bed (${tier.cy} cubic yards). ${estimated ? "Please quote from the photo I'll send." : `Posted rate looks like ${formatUsd(tier.curb)}.`} I'll stage it at a drive-up spot.`,
            )}
          >
            <MessageSquare />
            Text this fill level
          </a>
        </Button>
      </div>
    </div>
  );
}

function DumpBed({ fill }: { fill: number }) {
  const height = Math.max(8, fill * 100);
  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-lg">
      <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
        <rect x="8" y="118" width="52" height="34" rx="4" fill="#3a3732" />
        <circle cx="28" cy="156" r="14" fill="#111" />
        <circle cx="28" cy="156" r="7" fill="#6b6358" />
        <circle cx="78" cy="156" r="14" fill="#111" />
        <circle cx="78" cy="156" r="7" fill="#6b6358" />
        <circle cx="248" cy="156" r="16" fill="#111" />
        <circle cx="248" cy="156" r="8" fill="#6b6358" />
        <circle cx="292" cy="156" r="16" fill="#111" />
        <circle cx="292" cy="156" r="8" fill="#6b6358" />
        <path d="M60 118 L60 70 L132 48 L132 118 Z" fill="#2a333c" />
        <rect x="128" y="36" width="180" height="86" fill="#2f2c28" />
        <rect x="136" y="44" width="164" height="70" fill="#1a1816" />
        <rect
          x="136"
          y={44 + (70 - (70 * height) / 100)}
          width="164"
          height={(70 * height) / 100}
          fill="#c4b49a"
        />
        <rect x="128" y="118" width="184" height="16" fill="#3d3934" />
        <rect x="70" y="78" width="28" height="12" rx="2" fill="#8aa0b8" />
      </svg>
    </div>
  );
}
