import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ClaimBand } from "@/components/claim-band";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { STEPS } from "@/lib/content";
import { seo } from "@/lib/seo";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
  head: () =>
    seo({
      title: `How curbside junk removal works | ${SITE.name}`,
      description:
        "Stage items at the driveway, text a photo, we load the truck. You don't need to be home. Same-day curbside junk removal in San Diego, Monday–Saturday 9–4.",
      path: "/how-it-works",
      image: "/images/staged.jpg",
    }),
});

const CHECKLIST = [
  "Items sit at a driveway, residential garage, carport, or alley",
  "About 10 feet of width and height for the dump truck",
  "Pathway to the pile is clear — we do not block neighbors longer than the load takes",
  "Appliances unplugged, emptied, and disconnected from water or gas",
  "No paint, chemicals, fuels, asbestos, medical waste, or propane tanks",
  "HOA bulk-item rules checked if you live in a managed community",
  "You do not need to be home — we text when we are on the way",
];

function HowPage() {
  return (
    <>
      <PageHero
        kicker="HOW IT WORKS"
        title="Stage it. Quote it. We take it."
        lede="Curbside is the cheaper rate because you do the carrying to a drive-up spot. From there the job looks like any other Fred's pickup — on-time, swept clean, paid at the posted number."
      >
        <Button asChild>
          <a href={smsHref()}>Text a photo</a>
        </Button>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img
          src="/images/staged.jpg"
          alt="Items staged on a driveway for curbside pickup"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <ol className="space-y-8">
          {STEPS.map((step) => (
            <li key={step.n}>
              <p className="font-display text-sm tracking-[0.16em] text-navy">{step.n}</p>
              <h2 className="mt-1 font-display text-2xl tracking-wide">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Staging checklist</h2>
            <p className="mt-3 text-muted">
              Have the job ready so the photo quote holds. If the pile grows after the
              pictures, we re-quote before loading extra.
            </p>
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-ink-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-sage" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/after.jpg"
            alt="Driveway after the pile has been hauled away"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl tracking-wide">Day of the job</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Window", d: "We work 9–4, Monday through Saturday. Same-day is often available. After-hours texts get a reply the next business morning." },
            { t: "On the way", d: "Fred texts when the truck is rolling. Curbside jobs do not require you to meet the crew." },
            { t: "Payment", d: "Card, PayPal, Venmo fredsjunk, Cash App $fredsjunk, Zelle to Fred Siegel, or cash on site. Pay the quoted price — nothing extra." },
          ].map((card) => (
            <article key={card.t} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl tracking-wide">{card.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.d}</p>
            </article>
          ))}
        </div>
      </section>
      <ClaimBand
        image="/images/claim-time-money.jpg"
        alt="A staged pile, then an empty driveway after the truck leaves"
        kicker="THE TRADE"
        title="We save time. You save money."
        body="With curbside junk removal, we save time and you save money. You do the carrying once. We skip inside labor. The posted rate is the whole job."
        align="center"
      />
    </>
  );
}
