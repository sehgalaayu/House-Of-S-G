export type Category = "bedsheets" | "comforters" | "bedcovers";

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "bedsheets", label: "Bedsheets" },
  { key: "comforters", label: "Comforter Sets" },
  { key: "bedcovers", label: "Bedcovers" },
];

export type Product = {
  code: string;
  name: string;
  category: Category;
  fabric: string;
  finish: string;
  size: string;
  price: string;
  /** Thread count is never invented — every product shows this instead until confirmed. */
  countNote: string;
  swatch: string;
  line: string;
  dark: boolean;
  featured?: boolean;
  /** Set when the line item itself (not just a spec) is still being confirmed with the supplier. */
  pending?: boolean;
};

export const products: Product[] = [
  {
    code: "HSG-01",
    name: "Signature",
    category: "bedsheets",
    fabric: "Pure cotton",
    finish: "—",
    size: "108 × 108",
    price: "₹945 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#e4ddcb",
    line: "rgba(22,34,59,0.14)",
    dark: false,
  },
  {
    code: "HSG-02",
    name: "Vistara",
    category: "bedsheets",
    fabric: "Pure Egyptian cotton",
    finish: "—",
    size: "100 × 108",
    price: "₹1,140 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#2b4570",
    line: "rgba(236,231,220,0.16)",
    dark: true,
    featured: true,
  },
  {
    code: "HSG-03",
    name: "Vintage",
    category: "bedsheets",
    fabric: "Pure cotton",
    finish: "Washed finish",
    size: "108 × 108",
    price: "₹865 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#c7c9c2",
    line: "rgba(22,34,59,0.12)",
    dark: false,
  },
  {
    code: "HSG-04",
    name: "Half Tone",
    category: "bedsheets",
    fabric: "Pure cotton",
    finish: "Jacquard",
    size: "108 × 108",
    price: "₹1,165 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#dcd6c8",
    line: "rgba(22,34,59,0.13)",
    dark: false,
  },
  {
    code: "HSG-05",
    name: "Florence",
    category: "bedsheets",
    fabric: "Cotton brush",
    finish: "Brushed",
    size: "90 × 100",
    price: "₹540 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#d3bfa6",
    line: "rgba(22,34,59,0.13)",
    dark: false,
  },
  {
    code: "HSG-06",
    name: "Tencil",
    category: "bedsheets",
    fabric: "40s pure cotton",
    finish: "—",
    size: "100 × 108",
    price: "₹1,290 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#d9cba8",
    line: "rgba(22,34,59,0.14)",
    dark: false,
  },
  {
    code: "HSG-07",
    name: "Aristo",
    category: "bedcovers",
    fabric: "Pure cotton",
    finish: "Bedcover set — base sheet",
    size: "108 × 108",
    price: "₹805 ex-factory",
    countNote: "Confirmed spec pending",
    swatch: "#ded6c3",
    line: "rgba(22,34,59,0.13)",
    dark: false,
  },
  {
    code: "HSG-08",
    name: "4-Piece Comforter Set",
    category: "comforters",
    fabric: "Cotton",
    finish: "SKU pending",
    size: "—",
    price: "Price on request",
    countNote: "Confirmed spec pending",
    swatch: "#b7bcc4",
    line: "rgba(22,34,59,0.12)",
    dark: false,
    pending: true,
  },
];
