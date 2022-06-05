import styles from "styles/Header.module.scss";

import { BarrelLink } from "components/common/BarrelLink";

interface HeaderProps {
  hideMenu?: boolean;
}
export const Header = ({ hideMenu }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={`${styles.logo} ${hideMenu ? "w-100" : ""}`}>
      <BarrelLink text="FRAN" link="/" />
    </div>
    <nav className={`${styles.menu} ${hideMenu ? "d-none" : "d-flex"}`}>
      <BarrelLink text="WORKS" link="/works" />
      <BarrelLink text="ABOUT" link="/about" />
      <BarrelLink text="CONTACT" link="/contact" />
    </nav>
  </header>
);
