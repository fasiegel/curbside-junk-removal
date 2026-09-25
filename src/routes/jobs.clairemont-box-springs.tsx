import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/jobs/clairemont-box-springs")({
  component: JobPage,
  head: () =>
    seo({
      title: `Two box springs picked up in Clairemont | ${SITE.name}`,
      description:
        "A real Clairemont Mesa curbside job: two box springs staged by the driveway, loaded on a dolly, and gone. Two items, $119. You don't need to be home.",
      path: "/jobs/clairemont-box-springs",
      image: "/images/jobs/clairemont-box-springs/01-staged.jpg",
    }),
});

const STEPS = [
  {
    src: "/images/jobs/clairemont-box-springs/01-staged.jpg",
    title: "Staged at the driveway",
    body: "Two gray box springs leaned against the walk in Clairemont Mesa, next to the mailbox. Driveway staging is the whole job — nobody had to come inside.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/02-dolly.jpg",
    title: "Dolly under the first one",
    body: "The crew tipped the first box spring onto a furniture dolly. Box springs are awkward, not heavy enough for a second truck — one dolly does it.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/03-toward-truck.jpg",
    title: "One rolls while the other waits",
    body: "The first foundation went toward the dump truck. The second stayed staged until the dolly came back.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/04-standing.jpg",
    title: "Both stood up together",
    body: "With the pair on edge, two people can steer them without dragging fabric across the concrete.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/05-rolling.jpg",
    title: "Down the driveway",
    body: "Both box springs on the dolly, rolling the length of the Clairemont driveway. The homeowner did not have to be there.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/06-to-the-curb.jpg",
    title: "Onto the truck",
    body: "Last push to the curb. Two box springs count as two items — $119 curbside, dump fee included.",
  },
  {
    src: "/images/jobs/clairemont-box-springs/07-driveway-clear.jpg",
    title: "Driveway clear",
    body: "Foundations gone. The dolly is the only thing left on the pad. Mattress recycling takes these when the plant will accept them.",
  },
];

function JobPage() {
  return (
    <>
      <PageHero
        kicker="CLAIREMONT · 92117"
        title="Two box springs, curbside."
        lede="A Clairemont Mesa driveway. Two box springs staged outside. The crew loaded them and left the pad clear. Posted rate: $119 for two items."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={smsHref("Hi Fred, I'd like to book this furniture removal. Two box springs in Clairemont.")}>
              Text a photo of yours
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/service-area/$slug" params={{ slug: "clairemont-mesa" }}>
              <ArrowLeft />
              Clairemont service area
            </Link>
          </Button>
        </div>
      </PageHero>
      <ol className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {STEPS.map((step, i) => (
          <li
            key={step.src}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <img
              src={step.src}
              alt={step.title}
              className={`aspect-[3/4] w-full rounded-xl object-cover ${i % 2 === 1 ? "lg:order-2" : ""}`}
            />
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="font-display text-sm tracking-[0.16em] text-navy">0{i + 1}</p>
              <h2 className="mt-2 font-display text-3xl tracking-wide">{step.title}</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="border-t border-line bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Same price for your box springs.</h2>
            <p className="mt-2 text-cream/75">One is $69. Two are $119. Stage them at the driveway and text a photo.</p>
          </div>
          <Button variant="invert" asChild>
            <Link to="/what-we-haul/$slug" params={{ slug: "mattresses" }}>
              Mattress & box spring rates
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
