import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { cartLines, cartQuote, cartSmsBody, useCart } from "@/lib/cart";
import { formatUsd } from "@/lib/pricing";
import { SITE, smsHref, telHref } from "@/lib/site";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [{ title: `Book curbside pickup | ${SITE.name}` }],
  }),
});

const WINDOWS = ["Today if possible", "Tomorrow", "This week", "I'm flexible"] as const;

function BookPage() {
  const qty = useCart((s) => s.qty);
  const clear = useCart((s) => s.clear);
  const quote = cartQuote(qty);
  const lines = cartLines(qty);
  const [neighborhood, setNeighborhood] = useState("");
  const [windowPref, setWindowPref] = useState<(typeof WINDOWS)[number]>("I'm flexible");
  const [notes, setNotes] = useState("");

  const body = useMemo(() => {
    const extras = [
      neighborhood ? `Neighborhood / ZIP: ${neighborhood}` : "",
      `Timing: ${windowPref}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return cartSmsBody(qty, extras);
  }, [qty, neighborhood, windowPref, notes]);

  return (
    <>
      <PageHero
        kicker="BOOK"
        title="Price it here. Confirm by text."
        lede="There is no call-center queue. Build the load, add your neighborhood, and text Fred. A photo of the staged pile locks the quoted price guarantee."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_22rem]">
        <form
          className="space-y-6 rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <p className="text-sm font-medium">Your items</p>
            {lines.length === 0 ? (
              <p className="mt-2 text-sm text-muted">
                Nothing in the load yet.{" "}
                <Link to="/pricing" className="underline decoration-line underline-offset-2">
                  Add items on the price list
                </Link>
                , or skip ahead and describe the pile below.
              </p>
            ) : (
              <ul className="mt-2 space-y-1 text-sm">
                {lines.map((line) => (
                  <li key={line.item.id}>
                    {line.count}× {line.item.name}
                  </li>
                ))}
              </ul>
            )}
            {lines.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="mt-2 text-sm text-muted underline decoration-line underline-offset-2"
              >
                Clear load
              </button>
            )}
          </div>
          <div>
            <label htmlFor="hood" className="text-sm font-medium">
              Neighborhood or ZIP
            </label>
            <input
              id="hood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="North Park, 92104…"
              className="mt-2 h-12 w-full rounded-md bg-paper px-4 text-base shadow-[var(--shadow-border)] outline-none focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            />
          </div>
          <fieldset>
            <legend className="text-sm font-medium">When should we come?</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {WINDOWS.map((w) => (
                <label
                  key={w}
                  className={
                    windowPref === w
                      ? "flex h-11 cursor-pointer items-center justify-center rounded-md bg-navy px-3 text-sm font-medium text-cream"
                      : "flex h-11 cursor-pointer items-center justify-center rounded-md bg-paper px-3 text-sm font-medium text-ink-soft"
                  }
                >
                  <input
                    type="radio"
                    className="sr-only"
                    name="window"
                    value={w}
                    checked={windowPref === w}
                    onChange={() => setWindowPref(w)}
                  />
                  {w}
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="notes" className="text-sm font-medium">
              Anything else — stairs, HOA, alley access
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-md bg-paper px-4 py-3 text-base shadow-[var(--shadow-border)] outline-none focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted">
            Attach photos in the text thread. That's what makes the quoted price
            guarantee stick.
          </p>
        </form>
        <aside className="h-fit rounded-xl bg-navy p-6 text-cream">
          <p className="font-display text-sm tracking-[0.16em] text-cream/60">QUOTE</p>
          <p className="mt-2 font-display text-5xl tracking-wide tabular-nums">
            {quote.curb ? formatUsd(quote.curb) : "Photo quote"}
          </p>
          <p className="mt-2 text-sm text-cream/75">{quote.label}</p>
          <Button variant="invert" className="mt-6 w-full" asChild>
            <a href={smsHref(body)}>
              <MessageSquare />
              Text this to Fred
            </a>
          </Button>
          <a
            href={telHref()}
            className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-medium text-cream/80 hover:text-cream"
          >
            Or call {SITE.phoneDisplay}
          </a>
        </aside>
      </section>
    </>
  );
}
