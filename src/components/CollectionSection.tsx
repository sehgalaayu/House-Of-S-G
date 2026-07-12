import styles from "./CollectionSection.module.css";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import type { Product } from "@/data/products";

export default function CollectionSection({
  title,
  description,
  heroId,
  products,
}: {
  title: string;
  description: string;
  heroId: string;
  products: Product[];
}) {
  return (
    <div className={styles.collection}>
      <Reveal className={styles.collectionHead}>
        <h3 className={`font-display ${styles.collectionTitle}`}>{title}</h3>
        <p className={`font-mono ${styles.collectionDesc}`}>{description}</p>
      </Reveal>
      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard
            key={p.id}
            product={p}
            index={i}
            delay={Math.min(i, 4) * 70}
            hero={p.id === heroId}
          />
        ))}
      </div>
    </div>
  );
}
