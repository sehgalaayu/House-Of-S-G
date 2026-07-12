import styles from "./Collections.module.css";
import CollectionSection from "./CollectionSection";
import Reveal from "./Reveal";
import { PRODUCTS, COLLECTIONS } from "@/data/products";

export default function Collections() {
  return (
    <section id="cloth" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.head}>
            <div>
              <div className={`font-mono ${styles.label}`}>02 — Curated Collections</div>
              <h2 className={`font-display ${styles.heading}`}>
                Cotton bedding, made to order for boutique retail.
              </h2>
            </div>
            <p className={`font-mono ${styles.note}`}>
              A hand-picked range, not our full catalogue. Every design ships as a labelled
              sample first — minimums stay small, because this is for shops, not shipping
              containers.
            </p>
          </div>
        </Reveal>

        {COLLECTIONS.map((c) => (
          <CollectionSection
            key={c.category}
            title={c.title}
            description={c.description}
            heroId={c.heroId}
            products={PRODUCTS.filter((p) => p.category === c.category)}
          />
        ))}

        <p className={`font-mono ${styles.footnote}`}>
          Wholesale only · made to order · price on request.
        </p>
      </div>
    </section>
  );
}
