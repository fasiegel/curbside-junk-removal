export type CalcItem = {
  key: string;
  label: string;
  weight: number;
};

export type CalcGroup = {
  key: string;
  label: string;
  items: CalcItem[];
};

/** Same item list and weights as Fred's junk removal cost calculator. */
export const CALC_GROUPS: CalcGroup[] = [
  {
    key: "living-room",
    label: "Furniture",
    items: [
      { key: "sectional", label: "Sectional sofa (pcs)", weight: 1 },
      { key: "sofa", label: "Sofa / Couch", weight: 1 },
      { key: "futon", label: "Futon", weight: 1 },
      { key: "chairRecliner", label: "Chair / recliner", weight: 0.5 },
      { key: "ottoman", label: "Ottoman", weight: 0.5 },
      { key: "coffeeTable", label: "Coffee table", weight: 0.5 },
      { key: "sideTable", label: "Side / end tables", weight: 0.5 },
      { key: "tvStand", label: "TV stand", weight: 0.5 },
      { key: "mediaConsole", label: "Media console", weight: 1 },
      { key: "entertainmentCenter", label: "Large entertainment center", weight: 2 },
      { key: "bookcase", label: "Bookcase", weight: 1 },
      { key: "cabinet", label: "Cabinet", weight: 1 },
    ],
  },
  {
    key: "bedroom",
    label: "Bedroom",
    items: [
      { key: "twinMattress", label: "Twin mattress", weight: 0.5 },
      { key: "queenMattress", label: "Full / queen mattress", weight: 1 },
      { key: "kingMattress", label: "King mattress", weight: 2 },
      { key: "twinBox", label: "Twin box spring", weight: 0.5 },
      { key: "queenBox", label: "Full / queen box spring", weight: 1 },
      { key: "kingBox", label: "King box spring (2 pc)", weight: 1 },
      { key: "storageFrame", label: "Storage frame", weight: 3 },
      { key: "regularFrame", label: "Regular frame", weight: 1 },
      { key: "metalFrame", label: "Basic metal frame", weight: 0.25 },
      { key: "fourPoster", label: "Four-poster bed", weight: 2 },
      { key: "bedDaybed", label: "Daybed", weight: 1 },
      { key: "bedFuton", label: "Futon", weight: 1 },
      { key: "nightstand", label: "Nightstand", weight: 0.25 },
      { key: "bedDresser", label: "Dresser", weight: 1 },
      { key: "armoire", label: "Armoire", weight: 2 },
      { key: "chest", label: "Chest", weight: 0.5 },
      { key: "vanity", label: "Vanity table", weight: 0.5 },
      { key: "fullMirror", label: "Full-length mirror", weight: 0.25 },
    ],
  },
  {
    key: "appliances",
    label: "Appliances",
    items: [
      { key: "refrigerator", label: "Refrigerator", weight: 1 },
      { key: "range", label: "Range / stove", weight: 1 },
      { key: "wallOven", label: "Wall oven", weight: 1 },
      { key: "cooktop", label: "Cooktop", weight: 0.25 },
      { key: "dishwasher", label: "Dishwasher", weight: 0.5 },
      { key: "microwave", label: "Microwave", weight: 0.5 },
      { key: "countertop", label: "Countertop item", weight: 0.25 },
      { key: "waterHeater", label: "Hot water heater", weight: 1 },
      { key: "washer", label: "Washing machine", weight: 1 },
      { key: "dryer", label: "Clothes dryer", weight: 1 },
      { key: "stackingWasherDryer", label: "Washer-dryer stacking", weight: 2 },
      { key: "ac", label: "Air conditioner", weight: 0.5 },
      { key: "spaceHeater", label: "Space heater", weight: 0.5 },
      { key: "dehumidifier", label: "Dehumidifier", weight: 0.25 },
      { key: "airPurifier", label: "Air purifier", weight: 0.25 },
    ],
  },
  {
    key: "ewaste",
    label: "Electronics",
    items: [
      { key: "largeTv", label: "Large TV", weight: 1 },
      { key: "otherTv", label: "Other TV", weight: 0.5 },
      { key: "monitor", label: "Computer monitor", weight: 0.25 },
      { key: "pcTower", label: "PC tower", weight: 0.25 },
      { key: "ewasteBox", label: "Box of misc e-waste", weight: 0.25 },
      { key: "printer", label: "Desktop printer", weight: 0.25 },
    ],
  },
  {
    key: "yard-patio",
    label: "Outdoor",
    items: [
      { key: "lawnChair", label: "Lawn chair", weight: 0.2 },
      { key: "patioChair", label: "Patio chair", weight: 0.25 },
      { key: "patioTable", label: "Patio table", weight: 0.5 },
      { key: "picnicTable", label: "Picnic table", weight: 1 },
      { key: "patioBarstool", label: "Patio barstool", weight: 0.25 },
      { key: "beverageBar", label: "Beverage bar", weight: 1 },
      { key: "patioSwing", label: "Patio swing", weight: 1 },
      { key: "wickerSeat", label: "Wicker furniture (seats)", weight: 0.25 },
      { key: "grill", label: "Grill", weight: 1 },
      { key: "patioHeater", label: "Patio heater", weight: 0.5 },
      { key: "bbHoopSand", label: "BB hoop w/ sand base", weight: 3 },
      { key: "bbHoopEmpty", label: "BB hoop empty base", weight: 2 },
      { key: "pot20", label: "Flower pot 20 lbs", weight: 0.2 },
      { key: "pot50", label: "Flower pot 50 lbs", weight: 0.25 },
      { key: "pot100", label: "Flower pot 100 lbs", weight: 0.5 },
      { key: "spaCover", label: "Spa cover", weight: 1 },
      { key: "largeUmbrella", label: "Large umbrella", weight: 1 },
      { key: "smallUmbrella", label: "Small umbrella", weight: 0.2 },
      { key: "storageChest", label: "Storage chest", weight: 0.5 },
      { key: "umbrellaBase", label: "Umbrella base", weight: 0.25 },
      { key: "hoseReel", label: "Hose reel", weight: 0.25 },
      { key: "bagTrash", label: "Bag of trash", weight: 0.25 },
      { key: "trashCan", label: "Trash can", weight: 0.25 },
      { key: "cityTrashCan", label: "City trash can", weight: 1 },
      { key: "lawnMower", label: "Lawn mower", weight: 1 },
      { key: "misc50", label: "50 lbs of misc", weight: 0.5 },
    ],
  },
  {
    key: "trash-misc",
    label: "General",
    items: [
      { key: "booksBag", label: "Box / bag of books", weight: 0.25 },
      { key: "trashBagMisc", label: "Bag of trash", weight: 0.25 },
      { key: "trashBox", label: "Box of trash", weight: 0.25 },
      { key: "tire", label: "Tire", weight: 1 },
    ],
  },
  {
    key: "dining-room",
    label: "Dining",
    items: [
      { key: "diningTable", label: "Dining room table", weight: 1 },
      { key: "diningChair", label: "Dining chair", weight: 0.25 },
      { key: "chinaCabinet", label: "China cabinet", weight: 2 },
    ],
  },
  {
    key: "large-items",
    label: "Large",
    items: [
      { key: "piano", label: "Piano", weight: 3 },
      { key: "poolTable", label: "Pool table", weight: 3 },
    ],
  },
];

export const TIERS = [
  { n: 1, label: "Tier 1", price: 69, capacity: "Up to 2 cubic yards / 200 lbs", goodFor: "Single item or a small pile of junk" },
  { n: 2, label: "Tier 2", price: 119, capacity: "Up to 4 cubic yards / 400 lbs", goodFor: "2 piece sectional sofa, 2 mattresses, or a pickup-truck sized load of trash" },
  { n: 3, label: "Tier 3", price: 179, capacity: "Up to 6 cubic yards / 600 lbs", goodFor: "Three single items, a 3-piece sectional, or a medium-size load of trash" },
  { n: 4, label: "Tier 4", price: 239, capacity: "Up to 8 cubic yards / 800 lbs", goodFor: "4 items, or a patio furniture set and grill" },
  { n: 5, label: "Tier 5", price: 299, capacity: "Up to 10 cubic yards / 1,000 lbs", goodFor: "A full bedroom of furniture: mattress and box spring, bed frame, dresser, 2 nightstands" },
  { n: 6, label: "Tier 6", price: 359, capacity: "Up to 12 cubic yards / 1,200 lbs", goodFor: "A garage cleanout" },
  { n: 7, label: "Tier 7", price: 419, capacity: "Up to 14 cubic yards / 1,400 lbs", goodFor: "A full living room of furniture: 3-piece sectional, coffee table, TV stand, 2 end tables, recliner" },
  { n: 8, label: "Tier 8", price: 479, capacity: "Up to 16 cubic yards / 1,600 lbs", goodFor: "A 1-bedroom apartment cleanout" },
  { n: 9, label: "Tier 9", price: 539, capacity: "Up to 18 cubic yards / 1,800 lbs", goodFor: "Moving in or out — trash, boxes, and broken furniture" },
  { n: 10, label: "Tier 10", price: 599, capacity: "Up to 20 cubic yards / 2,000 lbs", goodFor: "When it all has to go" },
] as const;

export type Tier = (typeof TIERS)[number];

/** Above this combined weight, Fred quotes from a photo instead of a tier. */
export const WEIGHT_CAP = 10.25;

export const ITEM_DISCLAIMER =
  "Posted rates. The quote is based solely on the items you chose. If something is unusually large, heavy, or smaller than usual, text Fred for a custom quote.";

export const TRUCK_DISCLAIMER =
  "Does not include large amounts of construction debris or yard waste.";

export function emptyQty() {
  const qty: Record<string, number> = {};
  for (const group of CALC_GROUPS) {
    for (const item of group.items) qty[item.key] = 0;
  }
  return qty;
}

export function loadWeight(qty: Record<string, number>) {
  let total = 0;
  for (const group of CALC_GROUPS) {
    for (const item of group.items) total += (qty[item.key] ?? 0) * item.weight;
  }
  return total;
}

export function tierFromWeight(weight: number) {
  if (weight <= 0) return { tooBig: false, tier: null as Tier | null, units: 0 };
  if (weight >= WEIGHT_CAP) return { tooBig: true, tier: null as Tier | null, units: 0 };
  const units = Math.max(1, Math.round(weight));
  return { tooBig: false, tier: TIERS[units - 1] ?? null, units };
}

export function selectedLines(qty: Record<string, number>) {
  const lines: { label: string; qty: number }[] = [];
  for (const group of CALC_GROUPS) {
    for (const item of group.items) {
      const count = qty[item.key] ?? 0;
      if (count > 0) lines.push({ label: item.label, qty: count });
    }
  }
  return lines;
}

export function formatUsd(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
