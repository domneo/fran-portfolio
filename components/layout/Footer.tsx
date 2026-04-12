import classNames from "classnames";
import { BarrelLink } from "components/common/BarrelLink";
import { Stars } from "components/common/Stars";
import styles from "styles/Footer.module.scss";
import { GlobalFooterCredits, Maybe } from "tina/__generated__/types";

interface FooterProps {
  footerCredits?: Maybe<Array<Maybe<GlobalFooterCredits>>>;
}

export const Footer = ({ footerCredits }: FooterProps) => (
  <div className={styles.footer}>
    <div className={styles.stars}>
      <Stars />
    </div>
    <div className={styles.footerCredits}>
      {footerCredits?.map((credit) => (
        <BarrelLink
          key={window.crypto.randomUUID()}
          text={credit?.name.toUpperCase() || ""}
          link={credit?.url || ""}
          target={credit?.openInNewWindow ? "_blank" : "_self"}
        />
      ))}
    </div>
    <div className={styles.footerCredits}>
      <BarrelLink text={`©${new Date().getFullYear()}`} />
    </div>
  </div>
);
