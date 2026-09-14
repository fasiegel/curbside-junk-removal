import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: "/og.jpg",
    url: "https://curbsidejunkremoval.com",
    telephone: `+1-${SITE.phoneDisplay}`,
    email: SITE.email,
    priceRange: "$69-$599",
    parentOrganization: {
      "@type": "LocalBusiness",
      name: SITE.parent,
      url: SITE.parentUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1455 Kettner Blvd #1502",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92101",
      addressCountry: "US",
    },
    areaServed: "San Diego County",
    openingHours: "Mo-Sa 09:00-16:00",
    description:
      "Curbside junk removal in San Diego. Stage items at the driveway, garage, or alley. You don't need to be home. From $69.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
