import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.copy}>
          <div className={`font-mono ${styles.eyebrow}`}>Panipat, India · Direct from the loom</div>
          <h1 className={`font-display ${styles.headline}`}>
            Home textiles, sold by the people who source them.
          </h1>
          <p className={styles.lede}>
            House of S&amp;G is two people working directly with a Panipat weaving unit — no
            trading house, no middlemen. Bedsheets, comforters, blankets, towels, and more, with
            real specs once confirmed, never an invented one.
          </p>
          <div className={styles.actions}>
            <a href="#inquire" className={styles.primaryBtn}>
              Request a sample set
            </a>
            <a href="#cloth" className={styles.secondaryBtn}>
              See the range →
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <div className={`font-mono ${styles.frameLabel}`}>
              [ hero photograph — cotton weave, raking light ]
            </div>
            <div className={styles.ticket}>
              <div className={styles.ticketDot} />
              <div className={`font-mono ${styles.ticketLabel}`}>Specimen — premium line</div>
              <div className={`font-display ${styles.ticketName}`}>Vistara</div>
              <div className={`font-mono ${styles.ticketSpec}`}>
                Pure Egyptian cotton
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
