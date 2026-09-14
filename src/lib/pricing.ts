export type CatalogItem = {
  id: string;
  name: string;
  detail: string;
  category: "furniture" | "mattress" | "appliance" | "ewaste" | "gym" | "outdoor" | "bags";
  units: number;
  image?: string;
};

export const CATALOG: CatalogItem[] = [
  {
    id: "sofa",
    name: "Sofa / loveseat / recliner",
    detail: "Up to a 3-seater. Sleeper sofa counts as one.",
    category: "furniture",
    units: 1,
    image: "/images/sofa.jpg",
  },
  {
    id: "sectional-2",
    name: "2-piece sectional",
    detail: "Each sectional piece is one item.",
    category: "furniture",
    units: 2,
  },
  {
    id: "sectional-3",
    name: "3-piece sectional",
    detail: "Three pieces, one pickup.",
    category: "furniture",
    units: 3,
  },
  {
    id: "dresser",
    name: "Dresser, desk, or table",
    detail: "Standard household furniture piece.",
    category: "furniture",
    units: 1,
  },
  {
    id: "chair",
    name: "Chair or nightstand",
    detail: "Dining chair, office chair, or nightstand.",
    category: "furniture",
    units: 1,
  },
  {
    id: "mattress",
    name: "Mattress",
    detail: "Any size, including queen. Recycled when possible.",
    category: "mattress",
    units: 1,
    image: "/images/mattress.jpg",
  },
  {
    id: "box-spring",
    name: "Box spring",
    detail: "Priced as its own item.",
    category: "mattress",
    units: 1,
  },
  {
    id: "mattress-set",
    name: "Mattress + box spring",
    detail: "Two items, one trip.",
    category: "mattress",
    units: 2,
    image: "/images/mattress.jpg",
  },
  {
    id: "fridge",
    name: "Refrigerator or freezer",
    detail: "Unplug and empty before pickup.",
    category: "appliance",
    units: 1,
    image: "/images/appliances.jpg",
  },
  {
    id: "washer",
    name: "Washing machine",
    detail: "Disconnect hoses if you can.",
    category: "appliance",
    units: 1,
  },
  {
    id: "dryer",
    name: "Dryer",
    detail: "Disconnect the vent if you can.",
    category: "appliance",
    units: 1,
  },
  {
    id: "washer-dryer",
    name: "Washer and dryer pair",
    detail: "Two appliances, staged together.",
    category: "appliance",
    units: 2,
    image: "/images/appliances.jpg",
  },
  {
    id: "water-heater",
    name: "Water heater",
    detail: "Must be drained and disconnected.",
    category: "appliance",
    units: 1,
  },
  {
    id: "small-appliance",
    name: "Microwave or small appliance",
    detail: "Toaster oven, window AC, and similar.",
    category: "appliance",
    units: 1,
  },
  {
    id: "tv",
    name: "TV or monitor",
    detail: "Recycled as e-waste. Any size.",
    category: "ewaste",
    units: 1,
  },
  {
    id: "computer",
    name: "Computer, printer, or tower",
    detail: "Hard drives are not wiped — remove them first.",
    category: "ewaste",
    units: 1,
  },
  {
    id: "treadmill",
    name: "Treadmill",
    detail: "Stage it where the truck can drive up.",
    category: "gym",
    units: 1,
    image: "/images/gym.jpg",
  },
  {
    id: "elliptical",
    name: "Elliptical or exercise bike",
    detail: "Awkward, heavy pieces we load for you.",
    category: "gym",
    units: 1,
    image: "/images/gym.jpg",
  },
  {
    id: "grill",
    name: "BBQ grill",
    detail: "Empty propane tanks stay with you.",
    category: "outdoor",
    units: 1,
  },
  {
    id: "patio",
    name: "Patio chair or small outdoor piece",
    detail: "One standard outdoor item.",
    category: "outdoor",
    units: 1,
  },
  {
    id: "bags",
    name: "1–5 bags or boxes",
    detail: "Up to 200 lbs. Counts as one item.",
    category: "bags",
    units: 1,
    image: "/images/pile.jpg",
  },
  {
    id: "yard-small",
    name: "Small yard pile / lawn bags",
    detail: "Bundled branches or a few paper lawn bags.",
    category: "outdoor",
    units: 1,
    image: "/images/yard.jpg",
  },
];

export const CATEGORIES: { id: CatalogItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "All items" },
  { id: "furniture", label: "Furniture" },
  { id: "mattress", label: "Mattresses" },
  { id: "appliance", label: "Appliances" },
  { id: "ewaste", label: "E-waste" },
  { id: "gym", label: "Gym" },
  { id: "outdoor", label: "Outdoor & yard" },
  { id: "bags", label: "Bags & boxes" },
];

export type ItemQuote = {
  units: number;
  curb: number | null;
  full: number | null;
  estimated: boolean;
  label: string;
};

/** Posted curbside item tiers from Fred's 2026 price list. */
const POSTED = [
  { units: 0, curb: 0, full: 0, label: "Nothing selected" },
  { units: 1, curb: 69, full: 130, label: "1 item · up to 2 cubic yards / 200 lbs" },
  { units: 2, curb: 119, full: 180, label: "2 items · up to 4 cubic yards / 400 lbs" },
  { units: 3, curb: 179, full: null, label: "3 items · up to 6 cubic yards / 600 lbs" },
] as const;

export function quoteForUnits(units: number): ItemQuote {
  if (units <= 0) {
    return { units: 0, curb: 0, full: 0, estimated: false, label: "Add items to see a price" };
  }
  const posted = POSTED.find((row) => row.units === units);
  if (posted) {
    return {
      units,
      curb: posted.curb,
      full: posted.full,
      estimated: false,
      label: posted.label,
    };
  }
  const extra = units - 3;
  return {
    units,
    curb: 179 + extra * 60,
    full: null,
    estimated: true,
    label: `${units} items · estimate — text a photo to confirm`,
  };
}

export const TRUCK_TIERS = [
  { id: 1, fill: 0.1, curb: 69, cy: 2, lbs: 200, blurb: "Single item or a small pile", estimated: false },
  { id: 2, fill: 0.2, curb: 119, cy: 4, lbs: 400, blurb: "Pickup-truck sized load", estimated: false },
  { id: 3, fill: 0.3, curb: 179, cy: 6, lbs: 600, blurb: "Three items or a medium pile", estimated: false },
  { id: 4, fill: 0.4, curb: 239, cy: 8, lbs: 800, blurb: "Staged garage start", estimated: true },
  { id: 5, fill: 0.5, curb: 299, cy: 10, lbs: 1000, blurb: "Half the dump bed", estimated: true },
  { id: 6, fill: 0.6, curb: 359, cy: 12, lbs: 1200, blurb: "Moving leftover pile", estimated: true },
  { id: 7, fill: 0.7, curb: 419, cy: 14, lbs: 1400, blurb: "Large cleanout", estimated: true },
  { id: 8, fill: 0.8, curb: 479, cy: 16, lbs: 1600, blurb: "Most of the bed", estimated: true },
  { id: 9, fill: 0.9, curb: 539, cy: 18, lbs: 1800, blurb: "Nearly packed", estimated: true },
  { id: 10, fill: 1, curb: 599, cy: 20, lbs: 2000, blurb: "Packed dump bed", estimated: false },
] as const;

export type TruckTier = (typeof TRUCK_TIERS)[number];

export function formatUsd(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
