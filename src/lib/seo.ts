import { FAQS, HAUL, NEIGHBORHOODS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const ORIGIN = "https://www.curbsidejunkremoval.com";

export function absUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function seo({
  title,
  description,
  path,
  image = "/og.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absUrl(path);
  const img = absUrl(image);
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE.parent },
      { name: "geo.region", content: "US-CA" },
      { name: "geo.placename", content: "San Diego" },
      { name: "geo.position", content: "32.7195;-117.1689" },
      { name: "ICBM", content: "32.7195, -117.1689" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:image:alt", content: fullTitle },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function localBusinessJson() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WasteManagement"],
    "@id": `${ORIGIN}/#business`,
    name: SITE.name,
    alternateName: SITE.parent,
    url: ORIGIN,
    image: absUrl("/og.jpg"),
    logo: absUrl("/favicon.svg"),
    telephone: `+1${SITE.phone}`,
    email: SITE.email,
    priceRange: "$69-$599",
    foundingDate: "2005",
    slogan: SITE.tagline,
    description:
      "Fred invented curbside junk removal in San Diego in 2005 — the first curbside junk removal service in the USA. Lowest curbside prices in San Diego. Stage items at the driveway. From $69.",
    parentOrganization: {
      "@type": "LocalBusiness",
      name: SITE.parent,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1455 Kettner Blvd #1502",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92101",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7195,
      longitude: -117.1689,
    },
    areaServed: NEIGHBORHOODS.map((n) => ({
      "@type": "City",
      name: n.name,
      containedInPlace: "San Diego County, CA",
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1400",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Curbside junk removal rates",
      itemListElement: [
        { "@type": "Offer", name: "1 item curbside", price: "69.00", priceCurrency: "USD" },
        { "@type": "Offer", name: "2 items curbside", price: "119.00", priceCurrency: "USD" },
        { "@type": "Offer", name: "3 items curbside", price: "179.00", priceCurrency: "USD" },
        { "@type": "Offer", name: "Packed dump bed", price: "599.00", priceCurrency: "USD" },
      ],
    },
  };
}

export function faqJson() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbsJson(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function serviceJson(name: string, description: string, path: string, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absUrl(path),
    image: absUrl(image ?? "/og.jpg"),
    provider: { "@id": `${ORIGIN}/#business` },
    areaServed: "San Diego, CA",
    offers: {
      "@type": "Offer",
      price: "69.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export const STATIC_PATHS = [
  "/",
  "/pricing",
  "/how-it-works",
  "/what-we-haul",
  "/service-area",
  "/faq",
  ...HAUL.map((item) => `/what-we-haul/${item.slug}`),
  ...NEIGHBORHOODS.map((n) => `/service-area/${n.slug}`),
] as const;
