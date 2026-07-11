import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.copy}>
          <div className={`font-mono ${styles.eyebrow}`}>Panipat, India · Direct from the loom</div>
          <h1 className={`font-display ${styles.headline}`}>
            Cotton bedsheets, sold by the person who sources them.
          </h1>
          <p className={styles.lede}>
            House of S&amp;G is two people working directly with a Panipat weaving unit — no
            trading house, no middlemen. Honest cotton, real thread counts, and sheets we&apos;d
            put on our own beds.
          </p>
          <div className={styles.actions}>
            <a href="#inquire" className={styles.primaryBtn}>
              Request a sample set
            </a>
            <a href="#cloth" className={styles.secondaryBtn}>
              See the cloth →
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <div className={`font-mono ${styles.frameLabel}`}>
              [ hero photograph — sateen weave, raking light ]
            </div>
            <div className={styles.ticket}>
              <div className={styles.ticketDot} />
              <div className={`font-mono ${styles.ticketLabel}`}>Specimen</div>
              <div className={`font-display ${styles.ticketName}`}>Cotton Sateen</div>
              <div className={`font-mono ${styles.ticketSpec}`}>
                400 TC · 100% cotton
                <br />
                Made to order
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
