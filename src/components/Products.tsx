"use client";

import { Fragment, useState } from "react";
import styles from "./Products.module.css";
import { products, CATEGORIES, type Category } from "@/data/products";
import Reveal from "./Reveal";

const SWATCHES: { bg: string; line: string; dark: boolean }[] = [
  { bg: "#e4ddcb", line: "rgba(22,34,59,0.14)", dark: false },
  { bg: "#dcd6c8", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#2b4570", line: "rgba(236,231,220,0.16)", dark: true },
  { bg: "#c7c9c2", line: "rgba(22,34,59,0.12)", dark: false },
  { bg: "#d9cba8", line: "rgba(22,34,59,0.14)", dark: false },
  { bg: "#d3bfa6", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#ded6c3", line: "rgba(22,34,59,0.13)", dark: false },
  { bg: "#c9c2b2", line: "rgba(22,34,59,0.12)", dark: false },
  { bg: "#b7bcc4", line: "rgba(22,34,59,0.12)", dark: false },
  { bg: "#a9aeb8", line: "rgba(22,34,59,0.12)", dark: false },
];

export default function Products() {
  const [active, setActive] = useState<Category>("cottonBedsheets");
  const visible = products.filter((p) => p.category === active);

  return (
    <section id="cloth" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
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

          <div
            className={`font-mono ${styles.tabs}`}
            role="tablist"
            aria-label="Product category"
          >
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
        </Reveal>

        <div className={styles.grid}>
          {visible.map((p, i) => {
            const sw = SWATCHES[i % SWATCHES.length];
            return (
              <Reveal
                key={p.code}
                as="article"
                delay={Math.min(i, 4) * 70}
                className={`${styles.card} ${p.featured ? styles.cardFeatured : ""}`}
              >
                <div
                  className={styles.swatch}
                  style={{
                    backgroundColor: sw.bg,
                    backgroundImage: `repeating-linear-gradient(90deg, ${sw.line} 0 1px, transparent 1px 5px), repeating-linear-gradient(0deg, ${sw.line} 0 1px, transparent 1px 5px)`,
                  }}
                >
                  <div className={`font-mono ${styles.tagBadge}`}>{p.code}</div>
                  {p.featured && (
                    <div className={`font-mono ${styles.featuredBadge}`}>Premium line</div>
                  )}
                  <div
                    className={`font-mono ${styles.swatchLabel}`}
                    style={{ color: sw.dark ? "var(--grey-blue)" : "rgba(22,34,59,0.55)" }}
                  >
                    [ product shot — {p.name} ]
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h3 className={`font-display ${styles.name}`}>{p.name}</h3>
                    <span className={`font-mono ${styles.priceTag}`}>Price on request</span>
                  </div>
                  <dl className={`font-mono ${styles.specs}`}>
                    {p.specs.map((s) => (
                      <Fragment key={s.label}>
                        <dt>{s.label}</dt>
                        <dd>{s.value}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className={`font-mono ${styles.footnote}`}>
          Pricing is quoted per order, based on size and finish — get in touch for a wholesale
          quote. Specs marked &ldquo;confirmed spec pending&rdquo; will carry a verified number
          before you order, never an invented one.
        </p>
      </div>
    </section>
  );
}
