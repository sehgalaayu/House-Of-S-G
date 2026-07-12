import styles from "./Marquee.module.css";

const CLAIMS =
  "100% long-staple cotton   ◆   made to order   ◆   no invented specs   ◆   woven in panipat   ◆   no middlemen   ◆   iec registered   ◆   samples on request   ◆   ";

export default function Marquee() {
  return (
    <div aria-hidden="true" className={styles.strip}>
      <div className={`font-mono ${styles.track}`}>
        <span className={styles.segment}>{CLAIMS}</span>
        <span className={styles.segment}>{CLAIMS}</span>
      </div>
    </div>
  );
}
