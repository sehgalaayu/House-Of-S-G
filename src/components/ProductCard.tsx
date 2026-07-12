import { Fragment } from "react";
import styles from "./ProductCard.module.css";
import Reveal from "./Reveal";
import type { Product } from "@/data/products";

const SWATCHES: { bg: string; line: string; dark: boolean }[] = [
  { bg: "#e4ddcb", line: "rgba(22,34,59,0.14)", dark: false },
  { bg: "#dcd6c8", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#c7c9c2", line: "rgba(22,34,59,0.12)", dark: false },
  { bg: "#d9cba8", line: "rgba(22,34,59,0.14)", dark: false },
  { bg: "#d3bfa6", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#ded6c3", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#c9c2b2", line: "rgba(22,34,59,0.12)", dark: false },
];

const FEATURED_SWATCH = { bg: "#2b4570", line: "rgba(236,231,220,0.16)", dark: true };

export default function ProductCard({
  product,
  index,
  delay = 0,
  hero = false,
}: {
  product: Product;
  index: number;
  delay?: number;
  /** Reserved for one flagship SKU per collection — not the same as product.isFeatured,
   * which just marks the ten SKUs highlighted site-wide (see COLLECTIONS/PRODUCTS data). */
  hero?: boolean;
}) {
  const sw = hero ? FEATURED_SWATCH : SWATCHES[index % SWATCHES.length];
  const specs = [
    { label: "Fabric", value: product.fabric },
    { label: "Weave", value: product.weave },
    { label: "Finish", value: product.finish },
    { label: "Size", value: product.size },
  ].filter((s) => s.value !== "—");

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`${styles.card} ${hero ? styles.cardFeatured : ""}`}
    >
      <div
        className={styles.swatch}
        style={{
          backgroundColor: sw.bg,
          backgroundImage: `repeating-linear-gradient(90deg, ${sw.line} 0 1px, transparent 1px 5px), repeating-linear-gradient(0deg, ${sw.line} 0 1px, transparent 1px 5px)`,
        }}
      >
        <div className={`font-mono ${styles.skuBadge}`}>{product.sku}</div>
        {hero && <div className={`font-mono ${styles.featuredBadge}`}>Premium line</div>}
      </div>
      <div className={styles.body}>
        <h4 className={`font-display ${styles.name}`}>{product.name}</h4>
        <p className={styles.description}>{product.description}</p>
        <dl className={`font-mono ${styles.specs}`}>
          {specs.map((s) => (
            <Fragment key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </Fragment>
          ))}
        </dl>
        <dl className={`font-mono ${styles.tradeInfo}`}>
          <dt>MOQ</dt>
          <dd>{product.moq}</dd>
          <dt>Lead Time</dt>
          <dd>{product.leadTime}</dd>
          <dt>Available</dt>
          <dd>{product.availableColours.join(", ")}</dd>
        </dl>
      </div>
    </Reveal>
  );
}
