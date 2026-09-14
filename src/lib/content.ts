export const STATS = [
  { value: "50,000+", label: "Junk removals since 2005" },
  { value: "2005", label: "America's first curbside junk service" },
  { value: "1,400+", label: "Five-star Google & Yelp reviews" },
  { value: "30%+", label: "Typical savings vs full-service" },
] as const;

export const REVIEWS = [
  {
    quote:
      "The quote they gave me was the amount I paid. On time, careful with the driveway, and gone in minutes.",
    source: "Fred's Junk Removal review",
  },
  {
    quote:
      "Booked online, got a confirmation, and the crew texted before they arrived. Straightforward from start to finish.",
    source: "Fred's Junk Removal review",
  },
  {
    quote: "Three bulky items, no extra fees, polite crew. This is how junk removal should work.",
    source: "Fred's Junk Removal review",
  },
  {
    quote: "Palm fronds gone the morning after the tree guy left. Five stars.",
    source: "Yard waste pickup",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Stage it where we can drive up",
    body: "Driveway, residential garage, carport, or alley. We need about 10 feet of width and height for the dump truck. You do not have to be home.",
  },
  {
    n: "02",
    title: "Text a photo or price it here",
    body: "Send pictures to (619) 245-9957, or build a load on this site. Fred replies with a clear number. The price you accept is the amount you pay.",
  },
  {
    n: "03",
    title: "We load, sweep, and go",
    body: "Same-day is often available Monday through Saturday. We text when we are on the way, load the staged pile, sweep the path, and take it to recycle, donate, or the transfer station.",
  },
] as const;

export const HAUL = [
  {
    title: "Furniture",
    body: "Sofas, sectionals, dressers, desks, tables, chairs, and bed frames.",
    image: "/images/sofa.jpg",
  },
  {
    title: "Mattresses",
    body: "Mattresses and box springs. Routed into California mattress recycling when the plant will take them.",
    image: "/images/mattress.jpg",
  },
  {
    title: "Appliances",
    body: "Refrigerators, washers, dryers, and water heaters — hauled to scrap and recycling.",
    image: "/images/appliances.jpg",
  },
  {
    title: "Household piles",
    body: "Bags, boxes, broken furniture, and the leftover mix after a move or garage cleanout.",
    image: "/images/pile.jpg",
  },
  {
    title: "TVs & e-waste",
    body: "Flat-screens, monitors, computers, printers, and other electronics — hauled to certified e-waste recycling.",
    image: "/images/ewaste.jpg",
  },
  {
    title: "Gym equipment",
    body: "Treadmills, ellipticals, and stationary bikes staged at a drive-up spot.",
    image: "/images/gym.jpg",
  },
] as const;

export const NO_HAUL = [
  "Paint, solvents, and household chemicals",
  "Fuels, oils, and propane tanks",
  "Asbestos and medical waste",
  "Explosives and ammunition",
  "Wet concrete, heavy dirt, sod, and soil loads",
  "Anything the transfer station will not take",
] as const;

export const NEIGHBORHOODS = [
  { slug: "allied-gardens", name: "Allied Gardens", zip: "92120", note: "Ranch homes off Waring Road. Driveway staging is the usual play — garage cleanouts after a remodel land here a lot." },
  { slug: "bonita", name: "Bonita", zip: "91902", note: "Sweetwater Valley lots and longer driveways. Stage it at the street-facing pad so the dump truck does not have to snake a private road." },
  { slug: "chula-vista", name: "Chula Vista", zip: "91910", note: "South Bay's big city — condos, ranch houses, and HOA communities. We run Chula Vista same-day when the photo lands before noon." },
  { slug: "city-heights", name: "City Heights", zip: "92105", note: "Dense lots on University Avenue. Alleys and driveway aprons work. Keep the pile off the sidewalk so we can load without blocking the street." },
  { slug: "clairemont-mesa", name: "Clairemont Mesa", zip: "92117", note: "Mesa ranch houses with two-car garages. A classic curbside neighborhood — roll it to the driveway and go to work." },
  { slug: "college-grove", name: "College Grove", zip: "92115", note: "SDSU move-outs, apartments, and bungalows. Mattresses, desks, and mini-fridges are the usual Friday pile." },
  { slug: "coronado", name: "Coronado", zip: "92118", note: "The island. HOA and ferry-adjacent streets are tight — stage at a driveway or alley the dump truck can actually enter." },
  { slug: "del-cerro", name: "Del Cerro", zip: "92120", note: "Hillside streets above SDSU. If the driveway is steep, leave the load at the flattest pad by the street." },
  { slug: "downtown-little-italy", name: "Downtown / Little Italy", zip: "92101", note: "Condo buildings and alley load-outs. We need a ground-floor or garage spot the truck can reach — no downtown loading-dock hunts." },
  { slug: "eastlake", name: "Eastlake", zip: "91915", note: "Master-planned Chula Vista. Check HOA bulk-item rules, then stage at the driveway. We quote from photos before we roll east." },
  { slug: "encanto", name: "Encanto", zip: "92114", note: "Southeast San Diego lots with room to stage. Driveway or side-yard apron is enough — you do not have to be home." },
  { slug: "golden-hill", name: "Golden Hill", zip: "92102", note: "Craftsman houses on the downtown edge. Alleys behind the blocks are often the cleanest place to leave a sofa." },
  { slug: "hillcrest", name: "Hillcrest", zip: "92103", note: "Condos, walk-ups, and tight 5th Avenue streets. Use the alley or garage apron. Stairs inside are full-service, not curbside." },
  { slug: "imperial-beach", name: "Imperial Beach", zip: "91932", note: "Beach cottages and military families. Small lots — leave it at the driveway, not on the sand side of the house." },
  { slug: "kearny-mesa", name: "Kearny Mesa", zip: "92111", note: "Industrial edges mixed with tract homes. Garage cleanouts and office furniture are a regular Tuesday here." },
  { slug: "kensington", name: "Kensington", zip: "92116", note: "Streetcar-suburb bungalows. Park strips are narrow — stage on the driveway so we are not blocking Adams Avenue." },
  { slug: "la-jolla", name: "La Jolla", zip: "92037", note: "Village streets, HOAs, and steep coastal driveways. Leave the pile at the flattest drive-up spot. We recycle TVs and metal the same as anywhere else in the county." },
  { slug: "linda-vista", name: "Linda Vista", zip: "92111", note: "Mesa homes near USD. Garage and driveway staging. Student move-out weeks fill the truck with desks and mattresses." },
  { slug: "logan-heights", name: "Logan Heights", zip: "92113", note: "Barrio Logan adjacent. Alleys and driveways. Appliances and household piles are the usual photo we get." },
  { slug: "mission-beach", name: "Mission Beach", zip: "92109", note: "Walk-streets and alleys. The dump truck needs a paved alley or driveway — not the boardwalk. Cottages fill fast on turnover weekends." },
  { slug: "mission-hills", name: "Mission Hills", zip: "92103", note: "Historic hillside streets. If the driveway pitches hard, leave items at the street-level pad so we can load without blocking Fort Stockton." },
  { slug: "mission-valley", name: "Mission Valley", zip: "92108", note: "Condo towers and apartment turnovers along the 8. We need a garage stall or ground-level loading spot, not a 7th-floor hallway." },
  { slug: "national-city", name: "National City", zip: "91950", note: "South Bay lots close to the 5. Same-day is often available. Stage at the driveway; we handle the dump and recycling." },
  { slug: "north-park", name: "North Park", zip: "92104", note: "Bungalows, alleys, and 30th Street. The alley behind the house is usually the fastest load. Sectionals and mattresses are the daily photo." },
  { slug: "ocean-beach", name: "Ocean Beach", zip: "92107", note: "Cottages off Newport Avenue. Tight streets — leave it on the driveway or alley, not blocking a surf-check parking spot." },
  { slug: "old-town", name: "Old Town", zip: "92110", note: "Historic streets and hillside pads. We load from a driveway or alley the dump truck can enter. No plaza or tour-bus curb." },
  { slug: "otay-mesa", name: "Otay Mesa", zip: "92154", note: "Newer South Bay tracts near the border. Driveways are wide. Text a photo and we will tell you if we can route it same-day." },
  { slug: "pacific-beach", name: "Pacific Beach", zip: "92109", note: "Condos, alleys, and Garnet turnover. Stage at the alley or garage. You do not need to be home — we text from Garnet when we are close." },
  { slug: "point-loma", name: "Point Loma", zip: "92106", note: "Peninsula hills and Navy families. Steep drives are common — leave the load at the flattest street-facing pad." },
  { slug: "san-ysidro", name: "San Ysidro", zip: "92173", note: "The south end of the city. We run here when the route lines up. Driveway staging, posted prices, photo quote before the truck rolls." },
  { slug: "serra-mesa", name: "Serra Mesa", zip: "92123", note: "Mesa tract homes near the 163. Garage cleanouts and appliances. Easy drive-up compared with the coastal canyons." },
  { slug: "south-park", name: "South Park", zip: "92102", note: "Bungalows on 30th and Grape. Alleys are the cleanest drop. Furniture and household piles — same posted rates as North Park." },
  { slug: "talmadge", name: "Talmadge", zip: "92116", note: "Historic gates and hillside streets. Stage at the driveway inside the gates if the truck can enter, or at the nearest drive-up pad." },
  { slug: "university-city", name: "University City", zip: "92122", note: "UTC condos and canyon-edge houses. Ground-level garage or driveway only. High-rise hallways are full-service." },
  { slug: "university-heights", name: "University Heights", zip: "92116", note: "Park Boulevard bungalows and walk-ups. Alley or driveway staging. TVs, dressers, and mattresses after a lease ends." },
] as const;

export type Neighborhood = (typeof NEIGHBORHOODS)[number];

export function getNeighborhood(slug: string) {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function nearbyNeighborhoods(slug: string, limit = 6) {
  const current = getNeighborhood(slug);
  if (!current) return NEIGHBORHOODS.slice(0, limit);
  const sameZip = NEIGHBORHOODS.filter((n) => n.zip === current.zip && n.slug !== slug);
  const rest = NEIGHBORHOODS.filter((n) => n.slug !== slug && n.zip !== current.zip);
  return [...sameZip, ...rest].slice(0, limit);
}

export const FAQS = [
  {
    q: "Do I need to be home?",
    a: "No. Curbside means the items sit at a drive-up spot — driveway, residential garage, carport, or alley. We load the truck. We text when we are on the way.",
  },
  {
    q: "How much does curbside junk removal cost?",
    a: "Posted rates start at $69 for one item or a small load under 200 lbs. Two items are $119. Three items are $179. A packed dump bed is $599. Labor, haul, and disposal are included. The quote you accept from photos is the amount you pay.",
  },
  {
    q: "How is this cheaper than full-service?",
    a: "You do the carrying to a drive-up spot, so we skip inside labor, stairs, and hallways. A queen mattress is $69 curbside versus $130 if we carry it out of a bedroom — about 46% less. Most curbside jobs save 30% or more.",
  },
  {
    q: "How fast can you come?",
    a: "Same-day is often available across central San Diego, Monday through Saturday, 9:00 AM to 4:00 PM. Text a photo for a quote and a window. After-hours texts are answered the next business morning.",
  },
  {
    q: "What counts as curbside?",
    a: "A place we can drive the dump truck to: driveway, residential garage, alley, or carport. We need about 10 feet of clearance in width and height. Backyards, upstairs, and interiors are full-service on fredsjunkremoval.com.",
  },
  {
    q: "Do you recycle?",
    a: "Usable furniture goes to donation partners when condition allows. Metal and appliances go to scrap. TVs and electronics go to certified e-waste recycling. Mattresses enter California mattress recycling when the plant will take them. Only leftover mixed trash goes through a licensed transfer station.",
  },
  {
    q: "How do I pay?",
    a: "Credit or debit card, PayPal, Venmo @fredsjunk, Cash App $fredsjunk, Zelle to (619) 245-9957 (Fred Siegel), or cash on site.",
  },
  {
    q: "Is the quote guaranteed?",
    a: "Yes. Fred guarantees the quoted price when the load matches the photos. If the pile grows, gets heavier, or includes items that were not shown, we re-quote before loading extra. No surprise dump fee after the fact.",
  },
  {
    q: "What will you not take?",
    a: "Hazardous materials stay off the pile: paint, chemicals, fuels, asbestos, medical waste, and explosives. Propane tanks stay with you. Heavy dirt and sod are limited because they blow the weight of a junk truck.",
  },
  {
    q: "Need items carried from inside?",
    a: "That is full-service, run by the same crew at Fred's Junk Removal. You point, we carry from inside, the second floor, or the backyard. Start on this site for curbside, or book full-service at fredsjunkremoval.com.",
  },
] as const;
