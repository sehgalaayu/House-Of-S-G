import styles from "./Products.module.css";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="cloth" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div>
            <div className={`font-mono ${styles.label}`}>02 — The cloth</div>
            <h2 className={`font-display ${styles.heading}`}>
              Six weaves, made to order for boutique retail.
            </h2>
          </div>
          <p className={`font-mono ${styles.note}`}>
            Every design ships as a labelled sample first. Minimums are small — this is for
            shops, not shipping containers.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p) => (
            <article key={p.tag} className={styles.card}>
              <div
                className={styles.swatch}
                style={{
                  backgroundColor: p.swatch,
                  backgroundImage: `repeating-linear-gradient(90deg, ${p.line} 0 1px, transparent 1px 5px), repeating-linear-gradient(0deg, ${p.line} 0 1px, transparent 1px 5px)`,
                }}
              >
                <div className={`font-mono ${styles.tagBadge}`}>{p.tag}</div>
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
                  <span className={`font-mono ${styles.noteTag}`}>{p.note}</span>
                </div>
                <dl className={`font-mono ${styles.specs}`}>
                  <dt>Fabric</dt>
                  <dd>{p.fabric}</dd>
                  <dt>Count</dt>
                  <dd>{p.spec}</dd>
                  <dt>Weave</dt>
                  <dd>{p.weave}</dd>
                  <dt>Sizes</dt>
                  <dd>{p.sizes}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className={`font-mono ${styles.footnote}`}>
          Specs shown are indicative placeholders — final photography and verified specs supplied
          on request.
        </p>
      </div>
    </section>
  );
}
