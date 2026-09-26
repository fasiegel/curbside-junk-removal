import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ClaimBand } from "@/components/claim-band";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { getHaul, otherHaul } from "@/lib/content";
import { breadcrumbsJson, seo, serviceJson } from "@/lib/seo";
import { SITE, smsHref } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const HAUL_META: Record<string, string> = {
  furniture:
    "Furniture removal in San Diego from $69. Sofas, sectionals, dressers, and tables staged at the driveway. Text a photo — you don't need to be home.",
  mattresses:
    "Mattress removal in San Diego. One mattress is $69. Mattress plus box spring is $119. Curbside pickup, recycled when the plant will take it.",
  appliances:
    "Appliance removal in San Diego from $69. Fridges, washers, dryers, and water heaters hauled from the driveway to scrap. Unplug and empty first.",
  "household-piles":
    "Household junk removal in San Diego. Bags, boxes, and garage leftovers from $69 at the driveway. Bigger mixed piles are quoted from a photo.",
  "tvs-ewaste":
    "TV and e-waste removal in San Diego from $69. Flat-screens, computers, and printers picked up at the curb for certified recycling.",
  "gym-equipment":
    "Treadmill and gym equipment removal in San Diego. $69 per machine staged where the truck can drive up. Ellipticals and bikes included.",
};

function haulMeta(slug: string, title: string, priceNote: string) {
  return (
    HAUL_META[slug] ??
    `${title} removal in San Diego. ${priceNote} Staged at the driveway. You don't need to be home.`
  );
}

export const Route = createFileRoute("/what-we-haul_/$slug")({
  loader: ({ params }) => {
    const item = getHaul(params.slug);
    if (!item) throw redirect({ to: "/what-we-haul" });
    return { item, others: otherHaul(item.slug) };
  },
  head: ({ loaderData }) =>
    seo({
      title: `${loaderData!.item.title} removal in San Diego | ${SITE.name}`,
      description: haulMeta(loaderData!.item.slug, loaderData!.item.title, loaderData!.item.priceNote),
      path: `/what-we-haul/${loaderData!.item.slug}`,
      image: loaderData!.item.image,
    }),
  component: HaulDetailPage,
});

const CLAIMS = [
  {
    image: "/images/claim-2005.jpg",
    alt: "Established 2005 — first curbside junk removal in the USA",
    kicker: "SINCE 2005",
    title: "We invented curbside junk removal.",
    body: "Fred started it in San Diego in 2005 — the first curbside junk removal service in the USA.",
  },
  {
    image: "/images/claim-lowest.jpg",
    alt: "Lowest curbside prices in San Diego from $69",
    kicker: "SAN DIEGO",
    title: "Lowest curbside prices in San Diego.",
    body: "Posted rates from $69. You stage it. That's why the price stays low.",
  },
  {
    image: "/images/claim-time-money.jpg",
    alt: "We save time and you save money",
    kicker: "THE TRADE",
    title: "We save time. You save money.",
    body: "With curbside junk removal, we save time and you save money.",
    align: "center" as const,
  },
];

function HaulDetailPage() {
  const { item, others } = Route.useLoaderData();
  const claim = CLAIMS[[...item.slug].reduce((s, ch) => s + ch.charCodeAt(0), 0) % CLAIMS.length];
  const sms = smsHref(
    `Hi Fred, I'd like to book this furniture removal. ${item.title} at the curb.`,
  );

  return (
    <>
      <JsonLd
        data={[
          serviceJson(item.title, item.lede, `/what-we-haul/${item.slug}`, item.image),
          breadcrumbsJson([
            { name: "Home", path: "/" },
            { name: "What we haul", path: "/what-we-haul" },
            { name: item.title, path: `/what-we-haul/${item.slug}` },
          ]),
        ]}
      />
      <PageHero kicker="WHAT WE HAUL" title={`${item.title} pickup.`} lede={item.lede}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={sms}>Text a photo of your {item.title.toLowerCase()}</a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/what-we-haul">
              <ArrowLeft />
              All items
            </Link>
          </Button>
        </div>
      </PageHero>
      {item.slug === "mattresses" ? <BoxSpringJob /> : null}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img
          src={item.image}
          alt={`${item.title} staged for curbside junk removal`}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-navy">POSTED RATE</p>
          <p className="mt-2 font-display text-3xl tracking-wide">{item.priceNote}</p>
          <h2 className="mt-8 font-display text-2xl tracking-wide">How to stage it</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.staging}</p>
        </div>
      </section>
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide">What counts as {item.title.toLowerCase()}</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {item.pieces.map((line) => (
              <li key={line} className="rounded-lg bg-cream px-4 py-3 text-sm text-ink-soft shadow-[var(--shadow-border)]">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClaimBand
        image={claim.image}
        alt={claim.alt}
        kicker={claim.kicker}
        title={claim.title}
        body={claim.body}
        align={"align" in claim ? claim.align : "left"}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl tracking-wide">Other things we haul</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((row) => (
            <li key={row.slug}>
              <Link
                to="/what-we-haul/$slug"
                params={{ slug: row.slug }}
                className="block overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)] hover:bg-paper-2"
              >
                <img src={row.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="flex items-center justify-between p-4">
                  <span className="font-display text-lg tracking-wide">{row.title}</span>
                  <ArrowRight className="size-4 text-navy" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function BoxSpringJob() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <img
        src="/images/jobs/clairemont-box-springs/05-rolling.jpg"
        alt="Crew rolling two box springs down a Clairemont driveway"
        className="aspect-[3/4] w-full rounded-xl object-cover object-center"
      />
      <div>
        <p className="font-display text-sm tracking-[0.18em] text-navy">CLAIREMONT</p>
        <h2 className="mt-2 font-display text-3xl tracking-wide">Two box springs, $119.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          A real curbside pickup: both foundations staged at the driveway, rolled on a
          dolly, and gone. Mattress plus box spring is the same two-item rate.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/jobs/clairemont-box-springs">
            See the Clairemont job
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
