import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE, smsHref } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [{ title: `FAQ | ${SITE.name}` }],
  }),
});

function FaqPage() {
  return (
    <>
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
