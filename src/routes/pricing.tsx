import { createFileRoute, Link } from "@tanstack/react-router";
import { Estimator } from "@/components/estimator";
import { PageHero } from "@/components/page-hero";
import { TruckFill } from "@/components/truck-fill";
import { Button } from "@/components/ui/button";
import { formatUsd } from "@/lib/pricing";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: `Pricing | ${SITE.name}` },
      {
        name: "description",
        content:
          "Curbside junk removal prices in San Diego. $69 for one item, $119 for two, $179 for three. Packed truck $599. No hidden dump fees.",
      },
    ],
  }),
});

const POSTED = [
  { name: "1 item", curb: 69, full: 130, note: "Sofa, mattress, fridge, TV, treadmill, or 1–5 bags" },
  { name: "2 items", curb: 119, full: 180, note: "Washer + dryer, mattress + box, two-piece sectional" },
  { name: "3 items", curb: 179, full: null, note: "Three-piece sectional or three named pieces" },
  { name: "Packed truck", curb: 599, full: null, note: "20 cubic yards / 2,000 lbs dump bed" },
];

function PricingPage() {
  return (
    <>
      <PageHero
        kicker="PRICING"
        title="Posted rates. No surprise dump fee."
        lede="Labor, hauling, and disposal are in the number. The quote you accept from photos is the amount you pay. Full-service prices shown so you can see what staging saves."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POSTED.map((row) => (
            <article key={row.name} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <p className="text-sm font-medium text-muted">{row.name}</p>
              <p className="mt-2 font-display text-4xl tracking-wide text-navy tabular-nums">
                {formatUsd(row.curb)}
              </p>
              <p className="text-xs text-muted">Curbside</p>
              {row.full ? (
                <p className="mt-2 text-sm text-ink-soft">
                  Full-service {formatUsd(row.full)}
                </p>
              ) : (
                <p className="mt-2 text-sm text-ink-soft">Full-service quoted from photos</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{row.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Sample item rates from Fred's 2026 price list: mattress, sofa, dresser, fridge,
          washer, dryer, treadmill, TV, BBQ, or 1–5 bags — $69 each when staged at a
          drive-up spot. Need items carried from inside? That's full-service on{" "}
          <a href={SITE.parentUrl} className="underline decoration-line underline-offset-2">
            fredsjunkremoval.com
          </a>
          .
        </p>
      </section>
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide">Item estimator</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Count named pieces the same way Fred does. Sectional pieces are each one item.
          </p>
          <div className="mt-8">
            <Estimator />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <TruckFill />
      </section>
      <section className="border-t border-line bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Lock it in with a photo.</h2>
            <p className="mt-2 text-cream/75">Fred guarantees the quote when the load matches the pictures.</p>
          </div>
          <Button variant="invert" asChild>
            <Link to="/book">Send the load</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
