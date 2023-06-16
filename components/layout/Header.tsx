import { BarrelLink } from "components/common/BarrelLink";
import { Stars } from "components/common/Stars";
import styles from "styles/Header.module.scss";
import {
  GlobalFooterCredits,
  GlobalMenu,
  Maybe,
} from "tina/__generated__/types";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  menu?: Maybe<Array<Maybe<GlobalMenu>>>;
  footerCredits?: Maybe<Array<Maybe<GlobalFooterCredits>>>;
}
export const Header = ({ menu, footerCredits }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={styles.stars}>
      <Stars />
    </div>
    <div className={styles.spacer} />
    <div className={styles.logo}>
      <BarrelLink text="FRAN" link="/" />
    </div>
    <nav className={`${styles.menu} d-none d-sm-flex`}>
      {menu?.map((menuItem) => (
        <BarrelLink
          key={window.crypto.randomUUID()}
          text={menuItem?.name.toUpperCase() || ""}
          link={menuItem?.url || ""}
          target={menuItem?.openInNewWindow ? "_blank" : "_self"}
        />
      ))}
    </nav>
    <MobileMenu menu={menu} footerCredits={footerCredits} />
  </header>
);
