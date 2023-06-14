import styles from "styles/Header.module.scss";

import { BarrelLink } from "components/common/BarrelLink";

import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  showHeaderMenu?: boolean;
}
export const Header = ({ showHeaderMenu }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={`${styles.logo} ${showHeaderMenu ? "" : "w-100"}`}>
      <BarrelLink text="FRAN" link="/" />
    </div>
    <nav
      className={`${styles.menu} ${
        showHeaderMenu ? "d-none d-sm-flex" : "d-none"
      }`}
    >
      <BarrelLink text="WORKS" link="/works" />
      <BarrelLink text="CONTACT" link="/contact" />
    </nav>
    <MobileMenu />
  </header>
);
