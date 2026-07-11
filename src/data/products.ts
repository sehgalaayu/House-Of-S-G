export type Product = {
  tag: string;
  name: string;
  fabric: string;
  spec: string;
  weave: string;
  sizes: string;
  swatch: string;
  line: string;
  dark: boolean;
  note: string;
};

export const products: Product[] = [
  {
    tag: "PNP-01",
    name: "Anaya",
    fabric: "Cotton Percale",
    spec: "300 thread count",
    weave: "Percale · crisp matte",
    sizes: "Double · King · Super King",
    swatch: "#e4ddcb",
    line: "rgba(22,34,59,0.14)",
    dark: false,
    note: "Ivory",
  },
  {
    tag: "PNP-02",
    name: "Sona",
    fabric: "Cotton Sateen",
    spec: "400 thread count",
    weave: "Sateen · soft luster",
    sizes: "Double · King · Super King",
    swatch: "#dcd6c8",
    line: "rgba(22,34,59,0.13)",
    dark: false,
    note: "Warm ivory",
  },
  {
    tag: "PNP-03",
    name: "Neel",
    fabric: "Natural indigo-dyed cotton",
    spec: "300 thread count",
    weave: "Percale · vat-dyed",
    sizes: "Double · King",
    swatch: "#2b4570",
    line: "rgba(236,231,220,0.16)",
    dark: true,
    note: "Indigo",
  },
  {
    tag: "PNP-04",
    name: "Kora",
    fabric: "Stonewashed cotton",
    spec: "200 thread count",
    weave: "Plain · washed soft",
    sizes: "Single · Double · King",
    swatch: "#c7c9c2",
    line: "rgba(22,34,59,0.12)",
    dark: false,
    note: "Sage grey",
  },
  {
    tag: "PNP-05",
    name: "Bagh",
    fabric: "Yarn-dyed woven stripe",
    spec: "280 thread count",
    weave: "Loom-striped",
    sizes: "Double · King · Super King",
    swatch: "#d9cba8",
    line: "rgba(22,34,59,0.14)",
    dark: false,
    note: "Wheat / indigo",
  },
  {
    tag: "PNP-06",
    name: "Dhoop",
    fabric: "Brushed cotton flannel",
    spec: "160 gsm",
    weave: "Brushed both sides",
    sizes: "Double · King",
    swatch: "#d3bfa6",
    line: "rgba(22,34,59,0.13)",
    dark: false,
    note: "Clay",
  },
];
