import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ClaimBand } from "@/components/claim-band";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { getNeighborhood, nearbyNeighborhoods } from "@/lib/content";
import { formatUsd } from "@/lib/pricing";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/service-area_/$slug")({
  loader: ({ params }) => {
    const area = getNeighborhood(params.slug);
    if (!area) throw redirect({ to: "/service-area" });
    return { area, nearby: nearbyNeighborhoods(area.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData!.area.name} junk removal | ${SITE.name}`,
      },
      {
        name: "description",
        content: `Curbside junk removal in ${loaderData!.area.name}, San Diego ${loaderData!.area.zip}. Stage it at the driveway — from $69. You don't need to be home.`,
      },
    ],
  }),
  component: AreaDetailPage,
});

const CLAIMS = [
  {
    image: "/images/claim-2005.jpg",
    alt: "Established 2005 shop sign — first curbside junk removal in the USA",
    kicker: "SINCE 2005",
    title: "We invented curbside junk removal.",
    body: (name: string) =>
      `Fred started it in San Diego in 2005 — the first curbside junk removal service in the USA. ${name} still gets that same driveway model.`,
  },
  {
    image: "/images/claim-lowest.jpg",
    alt: "Lowest curbside junk removal prices in San Diego from $69",
    kicker: "SAN DIEGO",
    title: "Lowest curbside prices in San Diego.",
    body: (name: string) =>
      `Posted rates in ${name} start at $69. No extra-man fee, no travel surcharge. You stage it — that's why the number stays low.`,
  },
  {
    image: "/images/claim-time-money.jpg",
    alt: "A staged driveway, then an empty driveway after pickup",
    kicker: "THE TRADE",
    title: "We save time. You save money.",
    body: (name: string) =>
      `With curbside junk removal in ${name}, we save time and you save money. You skip waiting for inside labor. We skip that labor on the bill.`,
    align: "center" as const,
  },
];

function claimFor(slug: string) {
  const n = [...slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return CLAIMS[n % CLAIMS.length];
}

const RATES = [
  { name: "1 item", price: 69 },
  { name: "2 items", price: 119 },
  { name: "3 items", price: 179 },
];

function AreaDetailPage() {
  const { area, nearby } = Route.useLoaderData();
  const claim = claimFor(area.slug);
  const sms = smsHref(
    `Hi Fred, I'd like to book this furniture removal in ${area.name} ${area.zip}.`,
  );

  return (
    <>
      <PageHero
        kicker={`${area.zip} · SAN DIEGO`}
        title={`Curbside junk removal in ${area.name}.`}
        lede={area.note}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={sms}>Text a photo from {area.name}</a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/service-area">
              <ArrowLeft />
              All neighborhoods
            </Link>
          </Button>
        </div>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3">
        {RATES.map((row) => (
          <article key={row.name} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
            <p className="text-sm text-muted">{row.name} in {area.name}</p>
            <p className="mt-2 font-display text-4xl tracking-wide text-navy tabular-nums">
              {formatUsd(row.price)}
            </p>
            <p className="mt-1 text-xs text-muted">Curbside · dump fee included</p>
          </article>
        ))}
      </section>
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide">How curbside works in {area.name}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Stage the pile at a driveway, garage, carport, or alley the dump truck can reach.",
              "Text Fred a photo. The number you accept is the amount you pay.",
              "We load, sweep, and go. You do not have to be home.",
            ].map((line, i) => (
              <li key={line} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
                <p className="font-display text-navy">0{i + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{line}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Inside carries, stairs, and backyard hauls are full-service at{" "}
            <a href={SITE.parentUrl} className="underline decoration-line underline-offset-2">
              {SITE.parent}
            </a>
            . Same crew. Different rate.
          </p>
        </div>
      </section>
      <ClaimBand
        image={claim.image}
        alt={claim.alt}
        kicker={claim.kicker}
        title={claim.title}
        body={claim.body(area.name)}
        align={"align" in claim ? claim.align : "left"}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl tracking-wide">Nearby routes</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((n) => (
            <li key={n.slug}>
              <Link
                to="/service-area/$slug"
                params={{ slug: n.slug }}
                className="flex items-center justify-between rounded-lg bg-cream px-4 py-3 shadow-[var(--shadow-border)] hover:bg-paper-2"
              >
                <span className="font-medium">{n.name}</span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  {n.zip}
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
