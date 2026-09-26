import { createFileRoute } from "@tanstack/react-router";
import { ClaimBand } from "@/components/claim-band";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { formatUsd } from "@/lib/pricing";
import { seo, serviceJson } from "@/lib/seo";
import { SITE, smsHref } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () =>
    seo({
      title: `Junk removal prices in San Diego | ${SITE.name}`,
      description:
        "San Diego curbside prices: tier 1 is $69, including two twin box springs or two TVs. Tier 2 is $119. A packed truck is $599.",
      path: "/pricing",
    }),
});

const POSTED = [
  { name: "Tier 1", curb: 69, full: 130, note: "One sofa, queen mattress, or fridge. Two twin box springs or two TVs are also tier 1." },
  { name: "Tier 2", curb: 119, full: 180, note: "Washer + dryer, queen mattress + box spring, or a two-piece sectional" },
  { name: "Tier 3", curb: 179, full: null, note: "Three full items, or a three-piece sectional" },
  { name: "Tier 10", curb: 599, full: null, note: "Packed truck · 20 cubic yards / 2,000 lbs" },
];

function PricingPage() {
  return (
    <>
      <JsonLd
        data={serviceJson(
          "Curbside junk removal pricing",
          "Posted curbside junk removal rates in San Diego from $69.",
          "/pricing",
        )}
      />
      <PageHero
        kicker="PRICING"
        title="Posted rates. No surprise dump fee."
        lede="Labor, hauling, and disposal are in the price. The quote you accept from photos is the amount you pay. Full-service prices shown so you can see what staging saves."
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
          A full-size sofa, queen mattress, fridge, washer, dryer, or treadmill is tier 1,
          $69, when staged at a drive-up spot. Two twin box springs are tier 1. Two TVs
          are tier 1. A queen mattress plus box spring is tier 2, $119. Need items
          carried from inside? That's full-service through {SITE.parent}.
        </p>
      </section>
      <ClaimBand
        image="/images/claim-lowest.jpg"
        alt="Driveway sign: lowest curbside prices in San Diego from $69"
        kicker="SAN DIEGO"
        title="Lowest curbside junk removal prices in San Diego."
        body="Posted rates from $69. No extra-man fee, no travel surcharge, no surprise dump fee. You stage it — that's why the price stays low."
      />
      <section className="border-t border-line bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Lock it in with a photo.</h2>
            <p className="mt-2 text-cream/75">Fred guarantees the quote when the load matches the pictures.</p>
          </div>
          <Button variant="invert" asChild>
            <a href={smsHref()}>Text Fred a photo</a>
          </Button>
        </div>
      </section>
    </>
  );
}
