import { useMemo, useState } from "react";
import { Minus, Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CALC_GROUPS,
  ITEM_DISCLAIMER,
  TIERS,
  TRUCK_DISCLAIMER,
  emptyQty,
  formatUsd,
  loadWeight,
  selectedLines,
  tierFromWeight,
} from "@/lib/pricing";
import { smsHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Mode = "choose" | "items" | "truck";

export function Estimator() {
  const [mode, setMode] = useState<Mode>("choose");

  if (mode === "choose") return <Choose onPick={setMode} />;
  if (mode === "truck") return <TruckQuote onBack={() => setMode("choose")} />;
  return <ItemQuote onBack={() => setMode("choose")} />;
}

function Choose({ onPick }: { onPick: (mode: Mode) => void }) {
  return (
    <div>
      <p className="font-display text-sm tracking-[0.18em] text-navy">QUICK ESTIMATE</p>
      <h3 className="mt-1 font-display text-3xl tracking-wide">What does curbside junk removal cost?</h3>
      <p className="mt-2 text-sm text-muted">Do you need a quote by the item or by the truck load?</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onPick("items")}
          className="overflow-hidden rounded-xl bg-cream text-left shadow-[var(--shadow-border)]"
        >
          <span className="grid grid-cols-3">
            <img src="/images/sofa.jpg" alt="" className="h-28 w-full object-cover sm:h-32" />
            <img src="/images/mattress.jpg" alt="" className="h-28 w-full object-cover sm:h-32" />
            <img src="/images/appliances.jpg" alt="" className="h-28 w-full object-cover sm:h-32" />
          </span>
          <span className="block px-4 py-4">
            <span className="block font-display text-2xl tracking-wide">By the item</span>
            <span className="mt-1 block text-sm text-muted">1–10 individual items.</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => onPick("truck")}
          className="overflow-hidden rounded-xl bg-cream text-left shadow-[var(--shadow-border)]"
        >
          <img
            src="/images/truck-side.jpg"
            alt="Side view of the dump truck"
            className="h-28 w-full object-cover sm:h-32"
          />
          <span className="block px-4 py-4">
            <span className="block font-display text-2xl tracking-wide">By the truck load</span>
            <span className="mt-1 block text-sm text-muted">Piles of junk and trash.</span>
          </span>
        </button>
      </div>
    </div>
  );
}

function ItemQuote({ onBack }: { onBack: () => void }) {
  const [groupKey, setGroupKey] = useState(CALC_GROUPS[0].key);
  const [qty, setQty] = useState(emptyQty);
  const group = CALC_GROUPS.find((g) => g.key === groupKey) ?? CALC_GROUPS[0];
  const lines = selectedLines(qty);
  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const result = tierFromWeight(loadWeight(qty));

  function setCount(key: string, next: number) {
    setQty((current) => ({ ...current, [key]: Math.max(0, Math.min(10, next)) }));
  }

  const sms = useMemo(() => {
    const picked = selectedLines(qty)
      .map((line) => `• ${line.qty}× ${line.label}`)
      .join("\n");
    const price = result.tooBig
      ? "This load is bigger than the posted tiers. Please quote from photos."
      : result.tier
        ? `Load size: ${result.tier.label} · ${result.tier.capacity}\nPosted curbside: $${result.tier.price}`
        : "";
    return smsHref(
      ["Hi Fred, I'd like to book this furniture removal.", picked, price, "I'll stage items at a drive-up spot."]
        .filter(Boolean)
        .join("\n\n"),
    );
  }, [qty, result.tier, result.tooBig]);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex h-12 w-full items-center justify-center rounded-lg bg-navy px-4 text-base font-semibold text-cream"
      >
        ← Change quote type
      </button>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-3xl tracking-wide">What does curbside junk removal cost?</h3>
          <p className="mt-1 text-sm text-muted">Tap items. We'll price a curbside quote.</p>
        </div>
        {count > 0 ? (
          <button
            type="button"
            onClick={() => setQty(emptyQty())}
            className="shrink-0 rounded-md bg-paper-2 px-2 py-1 text-xs font-semibold text-muted"
          >
            Reset
          </button>
        ) : null}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1.5 sm:flex sm:flex-wrap">
        {CALC_GROUPS.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setGroupKey(cat.key)}
            className={cn(
              "rounded-full px-1 py-1.5 text-center text-[11px] font-semibold leading-tight sm:px-3 sm:text-xs",
              cat.key === group.key ? "bg-navy text-cream" : "bg-paper-2 text-ink",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {group.items.map((item) => {
          const n = qty[item.key] ?? 0;
          return (
            <li
              key={item.key}
              className={cn(
                "flex items-center justify-between gap-2 rounded-lg bg-cream px-3 py-2 shadow-[var(--shadow-border)]",
                n > 0 && "ring-2 ring-navy",
              )}
            >
              <p className="min-w-0 text-sm font-semibold leading-snug">{item.label}</p>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  aria-label={`Remove one ${item.label}`}
                  disabled={n === 0}
                  onClick={() => setCount(item.key, n - 1)}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-paper-2 disabled:opacity-30"
                >
                  <Minus className="size-3.5" />
                </button>
                <span className="w-5 text-center text-sm font-bold tabular-nums">{n}</span>
                <button
                  type="button"
                  aria-label={`Add one ${item.label}`}
                  disabled={n >= 10}
                  onClick={() => setCount(item.key, n + 1)}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-navy text-cream disabled:opacity-30"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 rounded-xl bg-navy p-4 text-cream">
        {count === 0 ? (
          <p className="text-center text-sm text-cream/70">Add an item above to see your price.</p>
        ) : result.tooBig ? (
          <div>
            <p className="font-display text-sm tracking-[0.16em] text-cream/60">THAT'S A BIG LOAD</p>
            <p className="mt-1 font-display text-2xl tracking-wide">Text Fred a picture for a quote</p>
          </div>
        ) : result.tier ? (
          <>
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-cream/70">Items</dt>
                <dd className="font-semibold tabular-nums">{count}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-cream/70">Load size</dt>
                <dd className="font-semibold">{result.tier.label}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-cream/70">Curbside</dt>
                <dd className="text-right font-semibold">{result.tier.capacity}</dd>
              </div>
            </dl>
            <div className="mt-3 flex items-end justify-between border-t border-cream/15 pt-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/70">Your price</span>
              <span className="font-display text-4xl tabular-nums">{formatUsd(result.tier.price)}</span>
            </div>
          </>
        ) : null}
      </div>
      <p className="mt-3 text-[11px] leading-snug text-muted">{ITEM_DISCLAIMER}</p>
      {count > 0 ? (
        <Button className="mt-4 w-full" asChild>
          <a href={sms}>
            <MessageSquare />
            {result.tooBig ? "Text a photo" : "Text this quote"}
          </a>
        </Button>
      ) : null}
    </div>
  );
}

function TruckQuote({ onBack }: { onBack: () => void }) {
  const [tierN, setTierN] = useState(1);
  const tier = TIERS[tierN - 1];
  const sms = smsHref(
    [
      "Hi Fred, I'd like to book this furniture removal.",
      `Truck load: ${tier.label} · ${tier.capacity}`,
      tier.goodFor,
      `Posted curbside: $${tier.price}`,
      "I'll stage the pile at a drive-up spot.",
    ].join("\n\n"),
  );

  return (
    <div className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
      <div className="p-5 sm:p-6">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 flex h-12 w-full items-center justify-center rounded-lg bg-navy px-4 text-base font-semibold text-cream"
        >
          ← Change quote type
        </button>
        <h3 className="font-display text-3xl tracking-wide">Truck load quote</h3>
        <p className="mt-1 text-sm text-muted">Tap the dump bed to fill each tier. Curbside price only.</p>
      </div>
      <TruckBed tier={tierN} onTier={setTierN} />
      <div className="p-5 sm:p-6">
        <div className="rounded-xl bg-navy p-4 text-cream">
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-cream/70">Load size</dt>
              <dd className="font-semibold">{tier.label}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-cream/70">Curbside</dt>
              <dd className="text-right font-semibold">{tier.capacity}</dd>
            </div>
            <p className="text-cream/70">{tier.goodFor}</p>
          </dl>
          <div className="mt-3 flex items-end justify-between border-t border-cream/15 pt-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/70">Your price</span>
            <span className="font-display text-4xl tabular-nums">{formatUsd(tier.price)}</span>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-snug text-muted">{TRUCK_DISCLAIMER}</p>
        <Button className="mt-4 w-full" asChild>
          <a href={sms}>
            <MessageSquare />
            Text this quote
          </a>
        </Button>
      </div>
    </div>
  );
}

function TruckBed({ tier, onTier }: { tier: number; onTier: (n: number) => void }) {
  return (
    <div className="relative overflow-hidden bg-paper-2">
      <img src="/images/truck-side.jpg" alt="Side view of the dump truck. Tap the cargo bed to choose a load tier." className="block w-full" />
      <div
        className="absolute rounded-sm border-2 border-navy"
        style={{ left: "43.5%", top: "16.5%", width: "47.5%", height: "38%" }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 bg-navy/45 transition-[width] duration-150"
          style={{ width: `${tier * 10}%` }}
        />
        <div className="absolute inset-0 grid grid-cols-10">
          {TIERS.map((row) => (
            <button
              key={row.n}
              type="button"
              aria-label={`${row.label}, ${formatUsd(row.price)}`}
              className={cn(
                "relative z-10 border-r border-cream/40 last:border-r-0",
                row.n === tier ? "bg-navy/25" : "hover:bg-navy/15",
              )}
              onMouseEnter={() => onTier(row.n)}
              onFocus={() => onTier(row.n)}
              onClick={() => onTier(row.n)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
