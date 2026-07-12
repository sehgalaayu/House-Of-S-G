// Full internal product catalog, transcribed from the supplier rate list.
// NOT rendered on the public site directly — see src/data/products.ts for
// the curated subset that actually ships to visitors. Kept here so it's
// ready for later use (e.g. a "full range on request" PDF/catalog sent to
// serious wholesale buyers) without re-typing 175 SKUs from scratch.

export type Category =
  | "cottonBedsheets"
  | "valueBedsheets"
  | "giftSets"
  | "singleSets"
  | "fivePcSets"
  | "comforterSets"
  | "comforters"
  | "weddingSets"
  | "bedcovers"
  | "blankets"
  | "flannelBlankets"
  | "woolen"
  | "duvets"
  | "mattressProtectors"
  | "towels"
  | "pillows"
  | "matsCarpets";

export const ALL_CATEGORIES: { key: Category; label: string }[] = [
  { key: "cottonBedsheets", label: "Cotton Bedsheets" },
  { key: "valueBedsheets", label: "Value Line (Polyester)" },
  { key: "comforterSets", label: "Comforter + Bedsheet Sets" },
  { key: "comforters", label: "Comforters" },
  { key: "bedcovers", label: "Bedcovers" },
  { key: "blankets", label: "Blankets" },
  { key: "flannelBlankets", label: "Flannel Blankets" },
  { key: "woolen", label: "Woolen Bedsheets" },
  { key: "duvets", label: "Duvets" },
  { key: "towels", label: "Towels" },
  { key: "pillows", label: "Pillows" },
  { key: "mattressProtectors", label: "Mattress Protectors" },
  { key: "weddingSets", label: "Wedding Sets" },
  { key: "giftSets", label: "Gift Sets" },
  { key: "singleSets", label: "Single Bedsheet Sets" },
  { key: "fivePcSets", label: "5-Pc Bedsheet Sets" },
  { key: "matsCarpets", label: "Mats & Carpets" },
];

export type Spec = { label: string; value: string };

export type Product = {
  code: string;
  name: string;
  category: Category;
  specs: Spec[];
  featured?: boolean;
  /** True only when the line item itself (not just a spec) is still being confirmed with the supplier. */
  pending?: boolean;
};

const TC_PENDING: Spec = { label: "Count", value: "Confirmed spec pending" };

export const catalog: Product[] = [
  // ---------- COTTON BEDSHEETS ----------
  {
    code: "HSG-001",
    name: "Signature",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-002",
    name: "Vistara",
    category: "cottonBedsheets",
    featured: true,
    specs: [
      { label: "Fabric", value: "Pure Egyptian cotton" },
      { label: "Size", value: "100 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-003",
    name: "Vintage",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Finish", value: "Washed" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-004",
    name: "Half Tone",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Weave", value: "Jacquard" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-005",
    name: "Florence",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Cotton brush" },
      { label: "Finish", value: "Brushed" },
      { label: "Size", value: "90 × 100" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-006",
    name: "Tencil",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "40s pure cotton" },
      { label: "Size", value: "100 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-007",
    name: "Aristo",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-008",
    name: "Chery Blossom",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-009",
    name: "Cotton Candy",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-010",
    name: "Jacquard",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Weave", value: "Jacquard" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-011",
    name: "Safari",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-012",
    name: "Shahi Gharana",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Print", value: "Digital panel" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-013",
    name: "Style Home XXL",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "120 × 120" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-014",
    name: "Super Ethnic",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-015",
    name: "Super Ombre",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton" },
      { label: "Size", value: "108 × 108" },
      TC_PENDING,
    ],
  },
  {
    code: "HSG-016",
    name: "Solid",
    category: "cottonBedsheets",
    specs: [
      { label: "Fabric", value: "Pure cotton, 300 TC" },
      { label: "Includes", value: "Embroidered pillow covers" },
      { label: "Size", value: "100 × 108" },
      TC_PENDING,
    ],
  },

  // ---------- VALUE LINE (POLYESTER) ----------
  {
    code: "HSG-017",
    name: "Asthana",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Print", value: "Coordinate" },
      { label: "Size", value: "90 × 100 · 108 × 108" },
    ],
  },
  {
    code: "HSG-018",
    name: "Berlin",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-019",
    name: "Bichona",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-020",
    name: "Dazzle",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-021",
    name: "Elegance",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Print", value: "All-flower (90×100 only)" },
      { label: "Size", value: "90 × 100 · 108 × 108" },
    ],
  },
  {
    code: "HSG-022",
    name: "Love Couple",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Print", value: "Couple prints" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-023",
    name: "Ombre",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-024",
    name: "Paradise",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Print", value: "Coordinate" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-025",
    name: "Shannon",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-026",
    name: "Venice",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester, fitted" },
      { label: "Fits", value: "Mattress up to 8\" deep" },
      { label: "Size", value: "72 × 78" },
    ],
  },
  {
    code: "HSG-027",
    name: "Gulezin",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-028",
    name: "Oilivia",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-029",
    name: "Sapphire",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-030",
    name: "Digi Home",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Print", value: "Digital panel print" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-031",
    name: "Elite",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Finish", value: "Without joint" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-032",
    name: "Elite Fitted",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester, fitted" },
      { label: "Fits", value: "Mattress up to 12\" deep" },
      { label: "Size", value: "72 × 78" },
    ],
  },
  {
    code: "HSG-033",
    name: "Sentosa",
    category: "valueBedsheets",
    specs: [
      { label: "Fabric", value: "Polyester" },
      { label: "Finish", value: "Frill series" },
      { label: "Size", value: "108 × 108" },
    ],
  },

  // ---------- GIFT SETS ----------
  {
    code: "HSG-034",
    name: "Bliss",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Polyester bedsheet set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-035",
    name: "Festivity",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Cotton brush bedsheet" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-036",
    name: "Heaven",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Embroidered pillow series" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-037",
    name: "Paradise",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Premium bedsheet" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-038",
    name: "Petals",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Polyester bedsheet" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-039",
    name: "Uphaar",
    category: "giftSets",
    specs: [
      { label: "Type", value: "Cotton brush bedsheet set" },
      { label: "Size", value: "90 × 100" },
    ],
  },

  // ---------- SINGLE BEDSHEET SETS ----------
  {
    code: "HSG-040",
    name: "Ashley",
    category: "singleSets",
    specs: [
      { label: "Type", value: "1+1 cotton brush bedsheet" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-041",
    name: "Brand",
    category: "singleSets",
    specs: [
      { label: "Type", value: "1+1 brand print" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-042",
    name: "Colors",
    category: "singleSets",
    specs: [
      { label: "Type", value: "2+2 polyester bedsheet" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-043",
    name: "Dazzle",
    category: "singleSets",
    specs: [
      { label: "Type", value: "2+2 polyester bedsheet" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-044",
    name: "Elegance",
    category: "singleSets",
    specs: [
      { label: "Type", value: "2+2 polyester bedsheet" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-045",
    name: "Elite",
    category: "singleSets",
    specs: [
      { label: "Type", value: "1+2 polyester bedsheet" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-046",
    name: "Kidzia",
    category: "singleSets",
    specs: [
      { label: "Type", value: "1+1, 7D kids print" },
      { label: "Size", value: "60 × 90" },
    ],
  },

  // ---------- 5-PC BEDSHEET SETS ----------
  {
    code: "HSG-047",
    name: "Paradise",
    category: "fivePcSets",
    specs: [
      { label: "Type", value: "Quilted polyester set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-048",
    name: "Sentosa",
    category: "fivePcSets",
    specs: [
      { label: "Type", value: "Frill series polyester set" },
      { label: "Size", value: "108 × 108" },
    ],
  },

  // ---------- COMFORTER + BEDSHEET SETS ----------
  {
    code: "HSG-049",
    name: "Ankara",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc jacquard comforter set" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-050",
    name: "Brand Ultrasonic",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc ultrasonic comforter set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-051",
    name: "Dazzle",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc comforter set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-052",
    name: "Digi Home",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc comforter set, digital panel print" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-053",
    name: "Dream Weaves",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Premium 4-pc embroidery set" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-054",
    name: "Elite",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc king comforter set" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-055",
    name: "Florence",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc comforter set, cotton brush" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-056",
    name: "Glamour",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Premium 4-pc embroidery set" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-057",
    name: "Kalakriti",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Premium 4-pc embroidery set" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-058",
    name: "Kidzia",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Comforter + bedsheet, 7D kids prints" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-059",
    name: "Melody",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Premium 4-pc comforter set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-060",
    name: "Paradise",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Reversible comforter set, 4 or 6 pieces" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-061",
    name: "Sentosa",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Frill series comforter set, 4 or 6 pieces" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-062",
    name: "Star",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "Comforter set, 200 or 300 GSM" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-063",
    name: "Sweet Heart",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc comforter set, couple prints" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-064",
    name: "Vescera",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc AC blanket set" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-065",
    name: "Vistara",
    category: "comforterSets",
    specs: [
      { label: "Type", value: "4-pc king comforter set, Egyptian cotton" },
      { label: "Size", value: "100 × 108" },
    ],
  },

  // ---------- COMFORTERS (STANDALONE) ----------
  {
    code: "HSG-066",
    name: "Brand",
    category: "comforters",
    specs: [
      { label: "Type", value: "Ultrasonic comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-067",
    name: "Charles",
    category: "comforters",
    specs: [
      { label: "Type", value: "Jacquard comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-068",
    name: "Clarens",
    category: "comforters",
    specs: [
      { label: "Type", value: "Jacquard comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-069",
    name: "Embroidery",
    category: "comforters",
    specs: [
      { label: "Type", value: "Embroidery comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-070",
    name: "Jasmine",
    category: "comforters",
    specs: [
      { label: "Type", value: "Ultrasonic comforter, single bed" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-071",
    name: "Kids Multi Needle",
    category: "comforters",
    specs: [
      { label: "Type", value: "Kids comforter, single bed" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-072",
    name: "Kidzia",
    category: "comforters",
    specs: [
      { label: "Type", value: "7D kids comforter, single bed" },
      { label: "Size", value: "60 × 90" },
    ],
  },
  {
    code: "HSG-073",
    name: "Shades",
    category: "comforters",
    specs: [
      { label: "Type", value: "Plain reversible comforter" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-074",
    name: "Star",
    category: "comforters",
    specs: [
      { label: "Type", value: "Comforter, 200 or 300 GSM" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-075",
    name: "Tencel",
    category: "comforters",
    specs: [
      { label: "Type", value: "Fake tencel comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-076",
    name: "Tufter",
    category: "comforters",
    specs: [
      { label: "Type", value: "Jacquard comforter, double bed" },
      { label: "Size", value: "90 × 100" },
    ],
  },

  // ---------- WEDDING SETS ----------
  {
    code: "HSG-077",
    name: "Jannat",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Embroidery cloudy set" },
      { label: "Pieces", value: "8" },
    ],
  },
  {
    code: "HSG-078",
    name: "Kaainat",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Satin frill set" },
      { label: "Pieces", value: "10" },
    ],
  },
  {
    code: "HSG-079",
    name: "Manyavar",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Cloudy set" },
      { label: "Pieces", value: "10" },
    ],
  },
  {
    code: "HSG-080",
    name: "Milan",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Cloudy set" },
      { label: "Pieces", value: "6" },
    ],
  },
  {
    code: "HSG-081",
    name: "Nazakat",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Jacquard set" },
      { label: "Pieces", value: "6" },
    ],
  },
  {
    code: "HSG-082",
    name: "Mohey",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Cloudy set" },
      { label: "Pieces", value: "12" },
    ],
  },
  {
    code: "HSG-083",
    name: "Nazrana",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Satin frill set" },
      { label: "Pieces", value: "8" },
    ],
  },
  {
    code: "HSG-084",
    name: "Riyaasat",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Satin frill set" },
      { label: "Pieces", value: "8" },
    ],
  },
  {
    code: "HSG-085",
    name: "Sweet Dream",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Cloudy set, dark series" },
      { label: "Pieces", value: "8" },
    ],
  },
  {
    code: "HSG-086",
    name: "Valenci",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Coloured embossed set" },
      { label: "Pieces", value: "8" },
    ],
  },
  {
    code: "HSG-087",
    name: "Quilt Set",
    category: "weddingSets",
    specs: [
      { label: "Type", value: "Embroidery quilt set" },
      { label: "Pieces", value: "4" },
    ],
  },

  // ---------- BEDCOVERS ----------
  {
    code: "HSG-088",
    name: "Brand",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Ultrasonic bedcover, double bed" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-089",
    name: "Destiny",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Rajwada bedcover" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-090",
    name: "Mallika",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Premium bedcover with frill" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-091",
    name: "Noor",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Premium jacquard with frill" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-092",
    name: "Ombre",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Premium 5-pc bedcover set" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-093",
    name: "Quilted",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Multi-needle bedcover" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-094",
    name: "Rosie",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Multi-needle ribbon work" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },
  {
    code: "HSG-095",
    name: "Umrao",
    category: "bedcovers",
    specs: [
      { label: "Type", value: "Premium bedcover with frill" },
      { label: "Size", value: "230 × 250 cm" },
    ],
  },

  // ---------- BLANKETS (FANCY) ----------
  {
    code: "HSG-096",
    name: "Fashion",
    category: "blankets",
    specs: [
      { label: "Type", value: "Cloudy waves blanket" },
      { label: "Size", value: "210 × 240 cm" },
    ],
  },
  {
    code: "HSG-097",
    name: "Jannat",
    category: "blankets",
    specs: [
      { label: "Type", value: "Embroidery cloudy blanket" },
      { label: "Size", value: "210 × 240 cm" },
    ],
  },
  {
    code: "HSG-098",
    name: "Modern Life",
    category: "blankets",
    specs: [
      { label: "Type", value: "Embroidery blanket" },
      { label: "Size", value: "210 × 240 cm" },
    ],
  },
  {
    code: "HSG-099",
    name: "Valenci",
    category: "blankets",
    specs: [
      { label: "Type", value: "Colour emboss cloudy blanket" },
      { label: "Size", value: "210 × 240 cm" },
    ],
  },
  {
    code: "HSG-100",
    name: "Varsache",
    category: "blankets",
    specs: [
      { label: "Type", value: "Cloudy blanket" },
      { label: "Size", value: "210 × 240 cm" },
    ],
  },
  {
    code: "HSG-101",
    name: "Victoria",
    category: "blankets",
    specs: [
      { label: "Type", value: "Rabbit fur blanket" },
      { label: "Size", value: "220 × 240 cm" },
    ],
  },

  // ---------- FLANNEL BLANKETS ----------
  {
    code: "HSG-102",
    name: "Athens",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Stripe blanket" },
      { label: "Size", value: "60 × 90 (single)" },
    ],
  },
  {
    code: "HSG-103",
    name: "Baby",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Rose rabbit baby blanket" },
      { label: "Size", value: "60 × 90 (single)" },
    ],
  },
  {
    code: "HSG-104",
    name: "Brush",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-105",
    name: "Bubble",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-106",
    name: "Burnout",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Jacquard 2-ply blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-107",
    name: "Clouds",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-108",
    name: "Emboss",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-109",
    name: "Essence",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Rabbit fur 2-ply blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-110",
    name: "Flemingo",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Printed blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-111",
    name: "Florynn",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "King size blanket" },
      { label: "Size", value: "100 × 108 (double)" },
    ],
  },
  {
    code: "HSG-112",
    name: "Glow",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Radium blanket" },
      { label: "Size", value: "90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-113",
    name: "Jacquard Block",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-114",
    name: "Jacquard Lining",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-115",
    name: "Triple Cut",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Flannel blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },
  {
    code: "HSG-116",
    name: "Waves",
    category: "flannelBlankets",
    specs: [
      { label: "Type", value: "Catonic jacquard blanket" },
      { label: "Size", value: "60 × 90 (single) · 90 × 100 (double)" },
    ],
  },

  // ---------- WOOLEN BEDSHEETS ----------
  {
    code: "HSG-117",
    name: "Florynn",
    category: "woolen",
    specs: [
      { label: "Type", value: "King size woolen bedsheet" },
      { label: "Size", value: "100 × 108" },
    ],
  },
  {
    code: "HSG-118",
    name: "Triple Cut",
    category: "woolen",
    specs: [
      { label: "Type", value: "Woolen bedsheet" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-119",
    name: "Kimberly",
    category: "woolen",
    specs: [
      { label: "Type", value: "Embroidery pillows" },
      { label: "Size", value: "100 × 108" },
    ],
  },

  // ---------- DUVETS ----------
  {
    code: "HSG-120",
    name: "Rhythm",
    category: "duvets",
    specs: [
      { label: "Type", value: "Woolen duvet cover, lite or heavy" },
      { label: "Size", value: "90 × 100" },
    ],
  },
  {
    code: "HSG-121",
    name: "500TC Cotton Jacquard",
    category: "duvets",
    specs: [
      { label: "Type", value: "4-pc duvet set" },
      { label: "Fabric", value: "500 thread count cotton jacquard" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-122",
    name: "500TC Thin Border",
    category: "duvets",
    specs: [
      { label: "Type", value: "4-pc duvet set" },
      { label: "Fabric", value: "500 thread count, thin border" },
      { label: "Size", value: "108 × 108" },
    ],
  },
  {
    code: "HSG-123",
    name: "500TC Frill + Border",
    category: "duvets",
    specs: [
      { label: "Type", value: "4-pc duvet set" },
      { label: "Fabric", value: "500 thread count, frill and border" },
      { label: "Size", value: "108 × 108" },
    ],
  },

  // ---------- MATTRESS PROTECTORS ----------
  {
    code: "HSG-124",
    name: "Single Bed Quilted Protector",
    category: "mattressProtectors",
    specs: [
      { label: "Type", value: "Quilted protector" },
      { label: "Size", value: "36 × 78" },
    ],
  },
  {
    code: "HSG-125",
    name: "Solid Ultrasonic Protector",
    category: "mattressProtectors",
    specs: [
      { label: "Type", value: "Ultrasonic protector" },
      { label: "Size", value: "72 × 78" },
    ],
  },
  {
    code: "HSG-126",
    name: "Double Bed Quilted Protector",
    category: "mattressProtectors",
    specs: [
      { label: "Type", value: "Quilted protector" },
      { label: "Size", value: "72 × 78" },
    ],
  },

  // ---------- TOWELS ----------
  {
    code: "HSG-127",
    name: "Bamboo Frill",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Pure bamboo" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-128",
    name: "Bamboo Heavy",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Pure bamboo" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-129",
    name: "Bamboo Lining",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Pure bamboo" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-130",
    name: "Butterfly",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Cotton jacquard embroidery" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-131",
    name: "Diamond",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber" },
      { label: "Size", value: "35 × 75 cm (310 GSM) · 70 × 140 cm (300 GSM)" },
    ],
  },
  {
    code: "HSG-132",
    name: "Dot",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 300 GSM" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-133",
    name: "Dream Big",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 400 GSM" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-134",
    name: "Flower (Microfiber)",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 310 GSM" },
      { label: "Size", value: "35 × 75 cm" },
    ],
  },
  {
    code: "HSG-135",
    name: "Flower (Cotton Jacquard)",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Cotton jacquard embroidery" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-136",
    name: "Hangar",
    category: "towels",
    specs: [{ label: "Fabric", value: "Cotton hangar towel" }],
  },
  {
    code: "HSG-137",
    name: "Heritage",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 350 GSM" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-138",
    name: "Jacquard Embroidery",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Cotton jacquard embroidery" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-139",
    name: "Pastels",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 300 GSM" },
      { label: "Size", value: "80 × 150 cm · 40 × 80 cm" },
    ],
  },
  {
    code: "HSG-140",
    name: "Ribbon",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Cotton jacquard embroidery" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-141",
    name: "Shades Embroidery",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 300 GSM" },
      { label: "Size", value: "70 × 140 cm · 35 × 75 cm" },
    ],
  },
  {
    code: "HSG-142",
    name: "Shades Flower",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 350 GSM" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-143",
    name: "Star",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 400 GSM" },
      { label: "Size", value: "70 × 150 cm" },
    ],
  },
  {
    code: "HSG-144",
    name: "Sunflower",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 310 GSM" },
      { label: "Size", value: "35 × 75 cm · 70 × 140 cm" },
    ],
  },
  {
    code: "HSG-145",
    name: "Twist",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 350 GSM" },
      { label: "Size", value: "70 × 140 cm" },
    ],
  },
  {
    code: "HSG-146",
    name: "Waves Embroidery",
    category: "towels",
    specs: [
      { label: "Fabric", value: "Polyamide microfiber, 310 GSM" },
      { label: "Size", value: "35 × 75 cm" },
    ],
  },

  // ---------- PILLOWS ----------
  {
    code: "HSG-147",
    name: "Bamboo Memory Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Bamboo memory foam" }],
  },
  {
    code: "HSG-148",
    name: "Baby Pillow",
    category: "pillows",
    specs: [{ label: "Size", value: "45 × 25" }],
  },
  {
    code: "HSG-149",
    name: "Cat Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Novelty shape" }],
  },
  {
    code: "HSG-150",
    name: "Embroidery Baby Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Embroidered" }],
  },
  {
    code: "HSG-151",
    name: "Fish Cut Baby Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Novelty shape" }],
  },
  {
    code: "HSG-152",
    name: "Gel Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Gel-filled" }],
  },
  {
    code: "HSG-153",
    name: "Giraffe Baby Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Novelty shape" }],
  },
  {
    code: "HSG-154",
    name: "Infant Baby Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Cooling" }],
  },
  {
    code: "HSG-155",
    name: "Kids Designer Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Printed design" }],
  },
  {
    code: "HSG-156",
    name: "Latex Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Latex-filled" }],
  },
  {
    code: "HSG-157",
    name: "Memory Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Memory foam" }],
  },
  {
    code: "HSG-158",
    name: "Panda Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Novelty shape" }],
  },
  {
    code: "HSG-159",
    name: "Pineapple Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Novelty shape" }],
  },
  {
    code: "HSG-160",
    name: "Recoverable Pillow",
    category: "pillows",
    specs: [{ label: "Type", value: "Recoverable fill" }],
  },

  // ---------- MATS & CARPETS ----------
  {
    code: "HSG-161",
    name: "Baby Folding Mat",
    category: "matsCarpets",
    specs: [
      { label: "Type", value: "Foldable reversible mat, 0.8cm thick" },
      { label: "Size", value: "150 × 200 cm" },
    ],
  },
  {
    code: "HSG-162",
    name: "Antiskid Door Mat (Cloudy)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "38 × 58 cm" }],
  },
  {
    code: "HSG-163",
    name: "Dolphin Shower Mat",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "35 × 70 cm" }],
  },
  {
    code: "HSG-164",
    name: "Floor Mat — Kids Carpet",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "100 × 160 cm · 120 × 180 cm" }],
  },
  {
    code: "HSG-165",
    name: "Antiskid Door Mat (Fur)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "40 × 60 cm" }],
  },
  {
    code: "HSG-166",
    name: "Antiskid Door Mat (Hilton)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "50 × 80 cm" }],
  },
  {
    code: "HSG-167",
    name: "Antiskid Door Mat (Jorden)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "50 × 80 cm" }],
  },
  {
    code: "HSG-168",
    name: "Solid Antiskid Door Mat (Kelvin)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "50 × 80 cm" }],
  },
  {
    code: "HSG-169",
    name: "Outdoor Mat (Loop)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "45 × 75 cm · 51 × 100 cm" }],
  },
  {
    code: "HSG-170",
    name: "PVC Reversible Play Mat",
    category: "matsCarpets",
    specs: [
      { label: "Type", value: "0.4cm thick" },
      { label: "Size", value: "100 × 180 cm" },
    ],
  },
  {
    code: "HSG-171",
    name: "Shower Mat (Thie)",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "40 × 70 cm" }],
  },
  {
    code: "HSG-172",
    name: "Yoga Mat",
    category: "matsCarpets",
    specs: [
      { label: "Thickness", value: "0.4cm or 0.6cm" },
      { label: "Size", value: "61 × 173 cm" },
    ],
  },
  {
    code: "HSG-173",
    name: "Digital Door Mat",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "45 × 70 cm" }],
  },
  {
    code: "HSG-174",
    name: "Digital Runner",
    category: "matsCarpets",
    specs: [{ label: "Size", value: "60 × 150 cm" }],
  },
  {
    code: "HSG-175",
    name: "Digital Carpet",
    category: "matsCarpets",
    specs: [
      { label: "Size", value: "160×210 · 180×270 · 200×310 · 240×340 cm" },
    ],
  },
];
