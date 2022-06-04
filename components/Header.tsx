import Link from "next/link";

import styles from "../styles/Header.module.scss";

interface HeaderProps {
  hideMenu?: boolean;
}
export const Header = ({ hideMenu }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={`${styles.logo} link ${hideMenu ? "w-100" : ""}`}>
      <Link href="/">
        <a>FRAN</a>
      </Link>
    </div>
    <nav className={`${styles.menu} ${hideMenu ? "d-none" : "d-flex"}`}>
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
