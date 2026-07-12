import Image from "next/image";
import styles from "./Story.module.css";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.labelCol}>
          <div className={`font-mono ${styles.label}`}>01 — The story</div>
        </div>
        <div className={styles.copy}>
          <Reveal>
            <h2 className={`font-display ${styles.heading}`}>
              We&apos;re not a factory, and we&apos;re not a global trading group.
            </h2>
            <p className={styles.para}>
              House of S&amp;G is two people. Puneet is based in Panipat — the town in northern
              India where a real share of the world&apos;s home textiles is actually woven — and
              works directly with the weaving unit, choosing the yarn and checking the runs
              himself. Aayu handles sales and sits with UK buyers, so the person you talk to
              actually knows the cloth.
            </p>
            <p className={styles.para}>
              When boutique buyers in the UK order &ldquo;Indian cotton,&rdquo; it has usually
              passed through three or four hands before it reaches them. Every hand adds a margin
              and loses a little truth. Cutting them out is the entire point of House of S&amp;G.
            </p>
            <p className={styles.para}>
              That means smaller runs, made to order, with specs you can verify — not a catalogue
              of 4,000 SKUs neither of us has touched. If a thread count says 300, it&apos;s 300.
            </p>
          </Reveal>

          <Reveal delay={120} className={styles.people}>
            <div className={styles.person}>
              <Image
                src="/team/aayu-portrait.jpg"
                alt="Aayu"
                width={148}
                height={148}
                className={styles.personPhoto}
              />
              <div className={`font-mono ${styles.personRole}`}>UK &amp; sales</div>
              <div className={`font-display ${styles.personName}`}>Aayu</div>
              <div className={styles.personDesc}>
                First point of contact for buyers — samples, pricing, and orders.
              </div>
            </div>
            <div className={styles.person}>
              <Image
                src="/team/puneet-portrait.jpg"
                alt="Puneet"
                width={148}
                height={148}
                className={styles.personPhoto}
              />
              <div className={`font-mono ${styles.personRole}`}>Panipat &amp; production</div>
              <div className={`font-display ${styles.personName}`}>Puneet</div>
              <div className={styles.personDesc}>
                Sources yarn, oversees weaving, and signs off every run before it ships.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
