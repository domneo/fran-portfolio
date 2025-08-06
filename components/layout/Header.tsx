import { BarrelLink } from "components/common/BarrelLink";
import { Stars } from "components/common/Stars";
import styles from "styles/Header.module.scss";
import {
  GlobalMenu,
  GlobalContactLinks,
  Maybe,
} from "tina/__generated__/types";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  menu?: Maybe<Array<Maybe<GlobalMenu>>>;
  contactLinks?: Maybe<Array<Maybe<GlobalContactLinks>>>;
}
export const Header = ({ menu, contactLinks }: HeaderProps) => (
  <header className={styles.nav}>
    <div className={styles.stars}>
      <Stars />
    </div>
    <div className={styles.logo}>
      <BarrelLink text="FRAN" link="/" />
    </div>
    <nav className={`${styles.menu} d-none d-sm-flex`}>
      {contactLinks?.map((contact) => (
        <BarrelLink
          key={window.crypto.randomUUID()}
          text={contact?.name?.toUpperCase() || ""}
          link={contact?.url || ""}
          target={contact?.openInNewWindow ? "_blank" : "_self"}
        />
      ))}
    </nav>
    <MobileMenu menu={menu} contactLinks={contactLinks} />
  </header>
);
