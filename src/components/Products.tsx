"use client";

import { useState } from "react";
import styles from "./Products.module.css";
import { products, CATEGORIES, type Category } from "@/data/products";

export default function Products() {
  const [active, setActive] = useState<Category>("bedsheets");
  const visible = products.filter((p) => p.category === active);

  return (
    <section id="cloth" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div>
            <div className={`font-mono ${styles.label}`}>02 — The cloth</div>
            <h2 className={`font-display ${styles.heading}`}>
              Cotton bedding, made to order for boutique retail.
            </h2>
          </div>
          <p className={`font-mono ${styles.note}`}>
            Every design ships as a labelled sample first. Minimums are small — this is for
            shops, not shipping containers.
          </p>
        </div>

        <div className={`font-mono ${styles.tabs}`} role="tablist" aria-label="Product category">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={`${styles.tab} ${active === c.key ? styles.tabActive : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map((p) => (
            <article
              key={p.code}
              className={`${styles.card} ${p.featured ? styles.cardFeatured : ""} ${
                p.pending ? styles.cardPending : ""
              }`}
            >
              <div
                className={styles.swatch}
                style={{
                  backgroundColor: p.swatch,
                  backgroundImage: `repeating-linear-gradient(90deg, ${p.line} 0 1px, transparent 1px 5px), repeating-linear-gradient(0deg, ${p.line} 0 1px, transparent 1px 5px)`,
                }}
              >
                <div className={`font-mono ${styles.tagBadge}`}>{p.code}</div>
                {p.featured && (
                  <div className={`font-mono ${styles.featuredBadge}`}>Premium line</div>
                )}
                <div
                  className={`font-mono ${styles.swatchLabel}`}
                  style={{ color: p.dark ? "var(--grey-blue)" : "rgba(22,34,59,0.55)" }}
                >
                  [ product shot — {p.name} ]
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={`font-display ${styles.name}`}>{p.name}</h3>
                  <span className={`font-mono ${styles.priceTag}`}>{p.price}</span>
                </div>
                <dl className={`font-mono ${styles.specs}`}>
                  <dt>Fabric</dt>
                  <dd>{p.fabric}</dd>
                  <dt>Finish</dt>
                  <dd>{p.finish}</dd>
                  <dt>Count</dt>
                  <dd>{p.countNote}</dd>
                  <dt>Size</dt>
                  <dd>{p.size}</dd>
                </dl>
                {p.pending && (
                  <p className={`font-mono ${styles.pendingNote}`}>
                    Final SKU and pricing being confirmed with our supplier.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className={`font-mono ${styles.footnote}`}>
          Indicative wholesale pricing — final quote depends on order size and finish. Specs
          marked &ldquo;confirmed spec pending&rdquo; will carry a verified number before you
          order, never an invented one.
        </p>
      </div>
    </section>
  );
}
