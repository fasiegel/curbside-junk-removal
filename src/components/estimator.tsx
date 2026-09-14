import { useMemo, useState } from "react";
import { Minus, Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cartLines, cartQuote, cartSmsBody, useCart } from "@/lib/cart";
import { CATALOG, CATEGORIES, formatUsd, type CatalogItem } from "@/lib/pricing";
import { smsHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Estimator({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]["id"]>("furniture");
  const qty = useCart((s) => s.qty);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const quote = cartQuote(qty);
  const lines = cartLines(qty);

  const items = useMemo(
    () => CATALOG.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="min-w-0">
        <div className="overflow-x-auto pb-3">
          <div className="flex w-max gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "h-10 shrink-0 rounded-full px-3.5 text-sm font-medium transition-colors duration-150",
                  filter === cat.id ? "bg-navy text-cream" : "bg-paper-2 text-ink-soft",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-2 divide-y divide-line rounded-xl bg-cream shadow-[var(--shadow-border)]">
          {items.map((item) => (
            <CatalogRow
              key={item.id}
              item={item}
              count={qty[item.id] ?? 0}
              onAdd={() => add(item.id)}
              onRemove={() => remove(item.id)}
              hideImage={compact}
            />
          ))}
        </ul>
      </div>
      <aside className="h-fit rounded-xl bg-navy p-5 text-cream lg:sticky lg:top-24">
        <p className="font-display text-sm tracking-[0.16em] text-cream/60">YOUR LOAD</p>
        {lines.length === 0 ? (
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Add items. Posted curbside rates start at $69 for one piece.
          </p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm">
            {lines.map((line) => (
              <li key={line.item.id} className="flex justify-between gap-3">
                <span className="text-cream/85">
                  {line.count}× {line.item.name}
                </span>
                <span className="tabular-nums text-cream/60">{line.units} item{line.units === 1 ? "" : "s"}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 border-t border-cream/15 pt-4">
          <p className="text-sm text-cream/70">{quote.label}</p>
          <p className="mt-1 font-display text-4xl tracking-wide tabular-nums">
            {quote.curb ? formatUsd(quote.curb) : "—"}
          </p>
          {quote.estimated && (
            <p className="mt-2 text-xs leading-relaxed text-cream/65">
              Loads this size are quoted from photos. Use this as a planning price.
            </p>
          )}
          {quote.full ? (
            <p className="mt-2 text-xs text-cream/65">
              Full-service for the same load: {formatUsd(quote.full)}. Staging it saves{" "}
              {formatUsd(quote.full - (quote.curb ?? 0))}.
            </p>
          ) : null}
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <Button variant="invert" asChild>
            <a href={smsHref(cartSmsBody(qty))}>
              <MessageSquare />
              Text this quote
            </a>
          </Button>
        </div>
      </aside>
    </div>
  );
}

function CatalogRow({
  item,
  count,
  onAdd,
  onRemove,
  hideImage,
}: {
  item: CatalogItem;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  hideImage?: boolean;
}) {
  return (
    <li className="flex items-center gap-3 px-3 py-3 sm:px-4">
      {!hideImage && item.image ? (
        <img
          src={item.image}
          alt=""
          className="hidden size-14 rounded-md object-cover sm:block"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-snug break-words text-ink">{item.name}</p>
        <p className="mt-0.5 text-sm break-words text-muted">{item.detail}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={onRemove}
          disabled={count === 0}
          className="inline-flex size-10 items-center justify-center rounded-md bg-paper-2 text-ink disabled:opacity-30"
          aria-label={`Remove ${item.name}`}
        >
          <Minus className="size-4" />
        </button>
        <span className="w-6 text-center text-sm font-semibold tabular-nums">{count}</span>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex size-10 items-center justify-center rounded-md bg-navy text-cream"
          aria-label={`Add ${item.name}`}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </li>
  );
}
