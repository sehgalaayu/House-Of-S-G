import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`font-mono ${styles.wrap}`}>
        <span className={`font-display ${styles.brand}`}>House of S&amp;G</span>
        <span>IEC-registered exporter · IEC no. on request · Panipat, Haryana, India</span>
        <span>© {new Date().getFullYear()} · Direct from the loom</span>
      </div>
    </footer>
  );
}
