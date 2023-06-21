import { BarrelLink } from "components/common/BarrelLink";
import { Stars } from "components/common/Stars";
import styles from "styles/Footer.module.scss";
import {
  GlobalContactLinks,
  GlobalFooterCredits,
  Maybe,
} from "tina/__generated__/types";

interface FooterProps {
  contactLinks?: Maybe<Array<Maybe<GlobalContactLinks>>>;
  footerCredits?: Maybe<Array<Maybe<GlobalFooterCredits>>>;
  showContactLinks?: boolean;
  inverse?: boolean;
}

export const Footer = ({
  contactLinks,
  footerCredits,
  showContactLinks = true,
  inverse,
}: FooterProps) => (
  <div className={styles.footer}>
    <div className={styles.stars}>
      <Stars resetColor={inverse ? "white" : "black"} />
    </div>
    {showContactLinks && (
      <div className={styles.contactLinks}>
        {contactLinks?.map((link) => (
          <div key={window.crypto.randomUUID()} className={styles.menuItem}>
            <BarrelLink
              text={link?.name.toUpperCase() || ""}
              color={inverse ? "white" : "black"}
              link={link?.url || ""}
              target={link?.openInNewWindow ? "_blank" : "_self"}
            />
          </div>
        ))}
      </div>
    )}
    {showContactLinks && (
      <div className={styles.divider}>
        <BarrelLink text={"-"} color={inverse ? "white" : "black"} />
      </div>
    )}
    <div className={styles.footerCredits}>
      {footerCredits?.map((credit) => (
        <BarrelLink
          key={window.crypto.randomUUID()}
          text={credit?.name.toUpperCase() || ""}
          color={inverse ? "white" : "black"}
          link={credit?.url || ""}
          target={credit?.openInNewWindow ? "_blank" : "_self"}
        />
      ))}
      <BarrelLink
        text={`©${new Date().getFullYear()}`}
        color={inverse ? "white" : "black"}
      />
    </div>
  </div>
);
