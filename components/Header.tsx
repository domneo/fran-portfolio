import styles from "styles/Header.module.scss";

import { BarrelLink } from "components/common/BarrelLink";

import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  hideHeaderMenu?: boolean;
}
export const Header = ({ hideHeaderMenu }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={`${styles.logo} ${hideHeaderMenu ? "w-100" : ""}`}>
      <BarrelLink text="FRAN" link="/" />
    </div>
    <nav
      className={`${styles.menu} ${
        hideHeaderMenu ? "d-none" : "d-none d-sm-flex"
      }`}
    >
      <BarrelLink text="WORKS" link="/works" />
      <BarrelLink text="ABOUT" link="/about" />
      <BarrelLink text="CONTACT" link="/contact" />
    </nav>
    <MobileMenu />
  </header>
);
