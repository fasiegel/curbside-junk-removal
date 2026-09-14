import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { NEIGHBORHOODS } from "@/lib/content";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/service-area")({
  component: AreaPage,
  head: () => ({
    meta: [
      { title: `Service area | ${SITE.name}` },
      {
        name: "description",
        content:
          "Curbside junk removal across San Diego — North Park, La Jolla, Chula Vista, Pacific Beach, and 30 more neighborhoods. From $69.",
      },
    ],
  }),
});

function AreaPage() {
  return (
    <>
      <PageHero
        kicker="SERVICE AREA"
        title="San Ysidro to La Jolla. Inland through the mesa."
        lede="Central San Diego and nearby cities — Chula Vista, National City, Coronado, Imperial Beach, and Mission Valley. Pick your neighborhood for local staging notes and posted rates."
      />
      <section className="relative">
        <img
          src="/images/neighborhood.jpg"
          alt="San Diego residential street with palms and stucco houses"
          className="h-56 w-full object-cover sm:h-72"
        />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-sm text-muted">{NEIGHBORHOODS.length} communities we run every week</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS.map((n) => (
            <li key={n.slug}>
              <Link
                to="/service-area/$slug"
                params={{ slug: n.slug }}
                className="flex items-center justify-between rounded-lg bg-cream px-4 py-3 shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-paper-2"
              >
                <span className="font-medium">{n.name}</span>
                <span className="flex items-center gap-2 text-sm tabular-nums text-muted">
                  {n.zip}
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-xl bg-navy p-6 text-cream">
          <h2 className="font-display text-2xl tracking-wide">Not on the list?</h2>
          <p className="mt-2 max-w-xl text-sm text-cream/80">
            We work San Diego County jobs that fit a same-day route. Text the address
            with a photo and Fred will tell you if the truck can take it.
          </p>
          <Button variant="invert" className="mt-5" asChild>
            <a href={smsHref("Hi Fred, can you do a curbside pickup at my address? ")}>
              Text your address
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
