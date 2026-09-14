export const SITE = {
  name: "Curbside Junk Removal",
  shortName: "Curbside",
  parent: "Fred's Junk Removal",
  tagline: "Leave it at the curb. We'll take it from there.",
  phone: "6192459957",
  phoneDisplay: "(619) 245-9957",
  email: "fred@fredsjunkremoval.com",
  address: "1455 Kettner Blvd #1502, San Diego, CA 92101",
  hours: "Mon–Sat, 9:00 AM – 4:00 PM",
  hoursNote: "Sunday closed. Same-day often available.",
  city: "San Diego, CA",
  venmo: "fredsjunk",
  cashApp: "$fredsjunk",
  zelle: "(619) 245-9957 · Fred Siegel",
} as const;

export function smsHref(body?: string) {
  const base = `sms:${SITE.phone}`;
  if (!body) return `${base}?body=${encodeURIComponent("Hi Fred, I'd like to book this furniture removal.")}`;
  return `${base}?body=${encodeURIComponent(body)}`;
}

export function telHref() {
  return `tel:+1${SITE.phone}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/what-we-haul", label: "What we haul" },
  { to: "/service-area", label: "Service area" },
  { to: "/faq", label: "FAQ" },
] as const;
