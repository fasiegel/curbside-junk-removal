export const STATS = [
  { value: "50,000+", label: "Junk removals since 2005" },
  { value: "21 years", label: "Locally owned in San Diego" },
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
  { name: "Allied Gardens", zip: "92120" },
  { name: "Bonita", zip: "91902" },
  { name: "Chula Vista", zip: "91910" },
  { name: "City Heights", zip: "92105" },
  { name: "Clairemont Mesa", zip: "92117" },
  { name: "College Grove", zip: "92115" },
  { name: "Coronado", zip: "92118" },
  { name: "Del Cerro", zip: "92120" },
  { name: "Downtown / Little Italy", zip: "92101" },
  { name: "Eastlake", zip: "91915" },
  { name: "Encanto", zip: "92114" },
  { name: "Golden Hill", zip: "92102" },
  { name: "Hillcrest", zip: "92103" },
  { name: "Imperial Beach", zip: "91932" },
  { name: "Kearny Mesa", zip: "92111" },
  { name: "Kensington", zip: "92116" },
  { name: "La Jolla", zip: "92037" },
  { name: "Linda Vista", zip: "92111" },
  { name: "Logan Heights", zip: "92113" },
  { name: "Mission Beach", zip: "92109" },
  { name: "Mission Hills", zip: "92103" },
  { name: "Mission Valley", zip: "92108" },
  { name: "National City", zip: "91950" },
  { name: "North Park", zip: "92104" },
  { name: "Ocean Beach", zip: "92107" },
  { name: "Old Town", zip: "92110" },
  { name: "Otay Mesa", zip: "92154" },
  { name: "Pacific Beach", zip: "92109" },
  { name: "Point Loma", zip: "92106" },
  { name: "San Ysidro", zip: "92173" },
  { name: "Serra Mesa", zip: "92123" },
  { name: "South Park", zip: "92102" },
  { name: "Talmadge", zip: "92116" },
  { name: "University City", zip: "92122" },
  { name: "University Heights", zip: "92116" },
] as const;

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
