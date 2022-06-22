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
          link={process.env.NEXT_PUBLIC_RESUME || ""}
          target="_blank"
        />
        <BarrelLink
          text="EMAIL"
          link={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          target="_blank"
        />
        <BarrelLink
          text="LINKEDIN"
          link={process.env.NEXT_PUBLIC_LINKEDIN || ""}
          target="_blank"
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
