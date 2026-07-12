import styles from "./EnquiryCTA.module.css";
import Reveal from "./Reveal";

export default function EnquiryCTA() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.wrap}>
        <h2 className={`font-display ${styles.heading}`}>
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className={styles.body}>
          We source directly from our Panipat manufacturing partner. Beyond the collections
          shown here, we offer hundreds of additional designs, custom colourways, and
          made-to-order specifications. Tell us what your customers need and we&apos;ll curate
          suitable options.
        </p>
        <a href="#inquire" className={`font-mono ${styles.button}`}>
          Talk to Us
        </a>
      </Reveal>
    </section>
  );
}
