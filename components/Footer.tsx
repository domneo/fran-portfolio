import Link from "next/link";

import styles from "../styles/Footer.module.scss";
import { Stars } from "./common/Stars";

export const Footer = () => (
  <footer className={styles.nav}>
    <div className={styles.footerStars}>
      <div className={styles.stars}>
        <Stars />
      </div>
    </div>
    <div className={styles.footerMenuLeft}>
      <nav className={styles.menu}>
        <Link href="https://drive.google.com/file/d/1duXXtN5TqUb-7N13I96rup3lnkH0bhqk/view?usp=sharing">
          <a className={styles.menuItem}>RESUME</a>
        </Link>
        <Link href="mailto:francinelim21@gmail.com">
          <a className={styles.menuItem}>EMAIL</a>
        </Link>
        <Link href="https://www.linkedin.com/in/francine-lim/">
          <a className={styles.menuItem}>LINKEDIN</a>
        </Link>
      </nav>
    </div>
    <div className={styles.footerMenuRight}>
      <nav className={styles.menu}>
        <span className="caption">DESIGNED BY ME!</span>
        <Link href="https://www.domneo.dev">
          <a className={styles.menuItem} target="_blank">
            BUILT BY DOMN
          </a>
        </Link>
        <span className="caption">©2022</span>
      </nav>
    </div>
  </footer>
);
