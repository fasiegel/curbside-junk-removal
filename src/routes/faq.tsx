import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { faqJson, seo } from "@/lib/seo";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () =>
    seo({
      title: `Junk removal FAQ | ${SITE.name}`,
      description:
        "Do I need to be home? How much does curbside junk removal cost in San Diego? Same-day windows, recycling, payment, and what we will not haul.",
      path: "/faq",
    }),
});

function FaqPage() {
  return (
    <>
      <JsonLd data={faqJson()} />
      <PageHero
        kicker="FAQ"
        title="The questions people text first."
        lede="Hours, pricing, hazardous waste, and whether you have to be home. If it is not here, Fred answers the phone."
      >
        <Button asChild>
          <a href={smsHref()}>Text Fred</a>
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <FaqList />
      </section>
    </>
  );
}
