import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { HAUL, NO_HAUL } from "@/lib/content";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/what-we-haul")({
  component: HaulPage,
  head: () => ({
    meta: [{ title: `What we haul | ${SITE.name}` }],
  }),
});

function HaulPage() {
  return (
    <>
      <PageHero
        kicker="WHAT WE HAUL"
        title="Household junk, bulky pieces, and staged piles."
        lede="If two people can lift it onto a dump truck from a driveway, we probably take it. Hazardous waste stays with you. When furniture is still usable we look for a donation first."
      >
        <Button asChild>
          <a href={smsHref()}>Text a photo of the pile</a>
        </Button>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HAUL.map((item) => (
            <li key={item.title} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
              <img src={item.image} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h2 className="font-display text-xl tracking-wide">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Also on the truck</h2>
            <ul className="mt-5 grid gap-2 text-sm text-ink-soft">
              {[
                "Couches, sectionals, recliners, and sleeper sofas",
                "Desks, dressers, tables, bed frames, and office furniture",
                "TVs, computers, printers, and other e-waste",
                "Refrigerators, washers, dryers, microwaves, water heaters",
                "Treadmills, ellipticals, and exercise bikes",
                "BBQ grills (tanks stay with you)",
                "Small remodel debris — quoted from photos, not a dumpster substitute",
              ].map((line) => (
                <li key={line} className="rounded-md bg-cream px-4 py-3 shadow-[var(--shadow-border)]">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-wide">We will not take</h2>
            <p className="mt-3 text-sm text-muted">
              If it is in the photo, Fred will tell you to keep it and quote the rest of
              the job.
            </p>
            <ul className="mt-5 space-y-2">
              {NO_HAUL.map((line) => (
                <li key={line} className="rounded-md bg-cream px-4 py-3 text-sm text-ink-soft shadow-[var(--shadow-border)]">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
