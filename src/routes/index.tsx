import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare, Shield, Star, Truck } from "lucide-react";
import { Estimator } from "@/components/estimator";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { HAUL, REVIEWS, STATS, STEPS } from "@/lib/content";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: `${SITE.name} | San Diego curbside pickup from $69` }],
  }),
});

function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBar />
      <HowStrip />
      <Savings />
      <HaulGrid />
      <EstimatorSection />
      <Reviews />
      <AboutFred />
      <FaqPreview />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[34rem] overflow-hidden bg-asphalt text-cream sm:min-h-[40rem]">
      <img
        src="/images/hero.jpg"
        alt="Fred's crew loading a sofa from a San Diego driveway into a dump truck"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-asphalt/90 via-asphalt/70 to-asphalt/25" />
      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 py-12 sm:min-h-[40rem] sm:px-6 sm:py-16">
        <p className="font-display text-xs tracking-[0.16em] text-cream/75 sm:text-sm sm:tracking-[0.2em]">
          A SERVICE OF FRED'S JUNK REMOVAL · SAN DIEGO
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
          Leave it at the curb.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Stage the pile at the driveway, garage, or alley. We load the truck. You
          don't need to be home. Posted prices from $69 — labor, haul, and dump
          included.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button variant="invert" size="lg" asChild>
            <a href={smsHref()}>
              <MessageSquare />
              Text a photo for a quote
            </a>
          </Button>
          <Button variant="onDark" size="lg" asChild>
            <a href="/pricing">
              Price your load
              <ArrowRight />
            </a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-cream/70">{SITE.phoneDisplay} · Mon–Sat 9–4 · Same-day often available</p>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-line bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl tracking-wide sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-cream/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-navy">HOW CURBSIDE WORKS</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">Three steps. Then it's gone.</h2>
        </div>
        <Button variant="outline" asChild>
          <Link to="/how-it-works">
            Staging checklist
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {STEPS.map((step) => (
          <li key={step.n} className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
            <p className="font-display text-sm tracking-[0.16em] text-navy">{step.n}</p>
            <h3 className="mt-3 font-display text-2xl tracking-wide">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Savings() {
  return (
    <section className="bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/staged.jpg"
            alt="Sofa, mattress, and bags staged on a San Diego driveway for pickup"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-navy">WHY CURBSIDE</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
            Same truck. Less labor. Lower price.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Full-service means we carry items from inside, upstairs, or the backyard.
            Curbside means you stage them at a drive-up spot and we skip that labor.
            A queen mattress is $69 at the curb versus $130 from a bedroom.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-soft">
            {[
              "No one has to be home",
              "No travel surcharge, no extra-man fee",
              "Quote from photos is the amount you pay",
              "Donate and recycle before landfill",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-sage" />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-cream p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Queen mattress</p>
              <p className="mt-1 font-display text-3xl tracking-wide text-navy">$69</p>
              <p className="text-xs text-muted">Curbside</p>
            </div>
            <div className="rounded-lg bg-cream p-4 shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Same mattress</p>
              <p className="mt-1 font-display text-3xl tracking-wide text-ink">$130</p>
              <p className="text-xs text-muted">Carried from inside</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HaulGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-navy">WHAT WE PICK UP</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">If it sits at the curb, it goes.</h2>
        </div>
        <Button variant="outline" asChild>
          <Link to="/what-we-haul">
            Full list
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HAUL.map((item) => (
          <li key={item.title} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <img src={item.image} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-xl tracking-wide">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EstimatorSection() {
  return (
    <section id="estimator" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-sm tracking-[0.18em] text-navy">POSTED PRICES</p>
        <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">Build a load. See the number.</h2>
        <p className="mt-3 max-w-2xl text-base text-muted">
          One item is $69. Two is $119. Three is $179. Add pieces, then text Fred
          the quote. Mixed piles bigger than three items are quoted from a photo.
        </p>
        <div className="mt-8">
          <Estimator compact />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex items-center gap-2 text-navy">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-navy" />
        ))}
        <span className="text-sm font-medium">1,400+ five-star reviews</span>
      </div>
      <h2 className="mt-3 font-display text-3xl tracking-wide sm:text-4xl">What neighbors tell Fred.</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <li key={review.quote} className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
            <p className="text-base leading-relaxed text-ink-soft">“{review.quote}”</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">{review.source}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AboutFred() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-cream/60">THE CREW</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
            A local operation. Not a franchise call center.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/80">
            Curbside Junk Removal is a service of Fred's Junk Removal — owned by Fred
            Siegel, a US Navy veteran who went to bootcamp at RTC San Diego. The same
            dump truck and crew have hauled more than 50,000 loads since 2005. Fred
            answers the phone.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <Shield className="mt-0.5 size-4 shrink-0" />
              Veteran owned and family operated
            </li>
            <li className="flex gap-2">
              <Truck className="mt-0.5 size-4 shrink-0" />
              Quoted price guarantee on photo jobs
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/neighborhood.jpg"
            alt="Palm-lined San Diego residential street we serve"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-navy">QUESTIONS</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">Straight answers.</h2>
        </div>
        <Button variant="outline" asChild>
          <Link to="/faq">
            All FAQs
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-8">
        <FaqList ids={[0, 1, 2, 3]} />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-asphalt text-cream">
      <img
        src="/images/after.jpg"
        alt="Clean San Diego driveway after pickup"
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-asphalt/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-4xl tracking-wide sm:text-5xl">Stage it tonight. Gone tomorrow.</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">
          Text a photo to {SITE.phoneDisplay}. Fred quotes before the truck rolls.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="invert" size="lg" asChild>
            <a href={smsHref()}>
              <MessageSquare />
              Text Fred now
            </a>
          </Button>
          <Button variant="onDark" size="lg" asChild>
            <Link to="/service-area">See if we cover you</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
