import Link from "next/link";

import styles from "styles/Footer.module.scss";

import { BarrelLink } from "components/common/BarrelLink";
import { Stars } from "components/common/Stars";

interface FooterProps {
  hideFooterMenu: boolean;
  centraliseFooter: boolean;
}

export const Footer = ({ hideFooterMenu, centraliseFooter }: FooterProps) => (
  <footer
    className={`${styles.nav} ${centraliseFooter ? styles.centralised : ""}`}
  >
    <div className={styles.footerStars}>
      <div className={styles.stars}>
        <Stars />
      </div>
    </div>
    <div
      className={`${styles.footerMenuLeft} ${
        hideFooterMenu ? "d-none" : "d-flex"
      }`}
    >
      <nav className={styles.menu}>
        <BarrelLink
          text="RESUME"
          link="https://drive.google.com/file/d/17OXO5I4MqhN4VPery277zxQT4yniQd1V/view?usp=sharing"
        />
        <BarrelLink text="EMAIL" link="mailto:francinelim21@gmail.com" />
        <BarrelLink
          text="LINKEDIN"
          link="https://www.linkedin.com/in/francine-lim/"
        />
      </nav>
    </div>
    <div className={styles.footerMenuRight}>
      <nav
        className={`${styles.menu} ${
          centraliseFooter ? styles.centralised : ""
        }`}
      >
        <span className="caption">DESIGNED BY ME!</span>
        <span className="caption">
          BUILT BY{" "}
          <Link href="https://www.domneo.dev">
            <a className="caption" target="_blank">
              DOMN
            </a>
          </Link>
        </span>

        <span className="caption">©2022</span>
      </nav>
    </div>
  </footer>
);
