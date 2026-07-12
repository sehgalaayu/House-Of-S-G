"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand}>
          <span className={`font-display ${styles.brandName}`}>House of S&amp;G</span>
          <span className={`font-mono ${styles.brandTag}`}>Panipat · Cotton textiles</span>
        </a>

        <nav aria-label="Primary" className={styles.nav}>
          <a href="#story" className={styles.navLink}>
            The story
          </a>
          <a href="#cloth" className={styles.navLink}>
            The cloth
          </a>
          <a href="#inquire" className={styles.cta}>
            Request samples
          </a>
        </nav>

        <button
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={navOpen}
          className={styles.menuButton}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>

      {navOpen && (
        <nav aria-label="Primary mobile" className={styles.mobileNav}>
          <a href="#story" onClick={() => setNavOpen(false)} className={styles.mobileLink}>
            The story
          </a>
          <a href="#cloth" onClick={() => setNavOpen(false)} className={styles.mobileLink}>
            The cloth
          </a>
          <a href="#inquire" onClick={() => setNavOpen(false)} className={styles.mobileCta}>
            Request samples
          </a>
        </nav>
      )}
    </header>
  );
}
