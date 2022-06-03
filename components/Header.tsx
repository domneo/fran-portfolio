import Link from "next/link";

import styles from "../styles/Header.module.scss";

export const Header = () => (
  <header className={styles.nav}>
    <div className={`${styles.logo} link`}>
      <Link href="/">
        <a>FRAN</a>
      </Link>
    </div>
    <nav className={styles.menu}>
      <Link href="/works">
        <a className={styles.menuItem}>WORKS</a>
      </Link>
      <Link href="/about">
        <a className={styles.menuItem}>ABOUT</a>
      </Link>
      <Link href="/contact">
        <a className={styles.menuItem}>CONTACT</a>
      </Link>
    </nav>
  </header>
);
