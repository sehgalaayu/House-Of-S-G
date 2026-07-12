import styles from "./CatalogueCTA.module.css";
import Reveal from "./Reveal";

export default function CatalogueCTA() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.wrap}>
        <h2 className={`font-display ${styles.heading}`}>Need more options?</h2>
        <p className={styles.body}>
          Our complete wholesale catalogue contains 100+ designs, including seasonal
          collections, comforters, bedcovers, wedding collections, and custom manufacturing.
        </p>
        <p className={`font-mono ${styles.note}`}>
          We only share it with verified trade buyers.
        </p>
        <a href="#inquire" className={`font-mono ${styles.button}`}>
          Request Full Catalogue
        </a>
      </Reveal>
    </section>
  );
}
