// Curated public subset — what actually renders on the site. Deliberately
// narrower than the full supplier catalog (see src/data/catalog.ts): only
// cotton / cotton-blend lines, hand-picked for range and distinctiveness
// rather than a full wholesale price-list dump. Broadening this list is a
// content decision, not an engineering one — talk to Aayu/Puneet before
// adding categories back.
import { catalog, type Category, type Product } from "./catalog";

export type { Category, Product };

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "cottonBedsheets", label: "Bedsheets" },
  { key: "comforterSets", label: "Comforter Sets" },
  { key: "bedcovers", label: "Bedcovers" },
];

const FEATURED_CODES = [
  // Cotton Bedsheets — 8 hero designs spanning weave/finish/print variety
  "HSG-001", // Signature
  "HSG-002", // Vistara (featured)
  "HSG-003", // Vintage
  "HSG-004", // Half Tone
  "HSG-005", // Florence
  "HSG-006", // Tencil
  "HSG-012", // Shahi Gharana
  "HSG-015", // Super Ombre

  // Comforter + Bedsheet Sets — 4, cotton/cotton-blend only
  "HSG-049", // Ankara
  "HSG-053", // Dream Weaves
  "HSG-055", // Florence
  "HSG-065", // Vistara

  // Bedcovers — 3, cotton/cotton-blend only
  "HSG-089", // Destiny
  "HSG-090", // Mallika
  "HSG-091", // Noor
];

export const products: Product[] = FEATURED_CODES.map(
  (code) => catalog.find((p) => p.code === code)!
);
