import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { NEIGHBORHOODS } from "@/lib/content";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/service-area")({
  component: AreaPage,
  head: () => ({
    meta: [{ title: `Service area | ${SITE.name}` }],
  }),
});

function AreaPage() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return NEIGHBORHOODS;
    return NEIGHBORHOODS.filter(
      (n) => n.name.toLowerCase().includes(needle) || n.zip.includes(needle),
    );
  }, [q]);

  return (
    <>
      <PageHero
        kicker="SERVICE AREA"
        title="San Ysidro to La Jolla. Inland through the mesa."
        lede="Central San Diego and nearby cities — Chula Vista, National City, Coronado, Imperial Beach, and Mission Valley. Fred's is a local operation, not a national franchise dispatching from out of town."
      />
      <section className="relative">
        <img
          src="/images/neighborhood.jpg"
          alt="San Diego residential street with palms and stucco houses"
          className="h-56 w-full object-cover sm:h-72"
        />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <label className="block text-sm font-medium text-ink-soft" htmlFor="hood">
          Search a neighborhood or ZIP
        </label>
        <input
          id="hood"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="North Park, 92104, La Jolla…"
          className="mt-2 h-12 w-full max-w-md rounded-md bg-cream px-4 text-base text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-navy"
        />
        <p className="mt-3 text-sm text-muted">
          {list.length} {list.length === 1 ? "community" : "communities"}
        </p>
        {list.length === 0 ? (
          <p className="mt-6 text-muted">
            Nothing matched. Text Fred anyway — if we can route it, we will.
          </p>
        ) : (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((n) => (
              <li
                key={`${n.name}-${n.zip}`}
                className="flex items-center justify-between rounded-lg bg-cream px-4 py-3 shadow-[var(--shadow-border)]"
              >
                <span className="font-medium">{n.name}</span>
                <span className="text-sm tabular-nums text-muted">{n.zip}</span>
              </li>
            ))}
          </ul>
        )}
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
