import classNames from "classnames";
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
    <div className={classNames(styles.stars, { [styles.inverse]: inverse })}>
      <Stars />
    </div>
    {showContactLinks && (
      <div className={styles.contactLinks}>
        {contactLinks?.map((link) => (
          <div key={window.crypto.randomUUID()} className={styles.menuItem}>
            <BarrelLink
              className={classNames({ [styles.link]: inverse })}
              text={link?.name.toUpperCase() || ""}
              link={link?.url || ""}
              target={link?.openInNewWindow ? "_blank" : "_self"}
            />
          </div>
        ))}
      </div>
    )}
    {showContactLinks && (
      <div className={styles.divider}>
        <BarrelLink
          className={classNames({ [styles.link]: inverse })}
          text={"-"}
        />
      </div>
    )}
    <div className={styles.footerCredits}>
      {footerCredits?.map((credit) => (
        <BarrelLink
          className={classNames({ [styles.link]: inverse })}
          key={window.crypto.randomUUID()}
          text={credit?.name.toUpperCase() || ""}
          link={credit?.url || ""}
          target={credit?.openInNewWindow ? "_blank" : "_self"}
        />
      ))}
      <BarrelLink
        className={classNames({ [styles.link]: inverse })}
        text={`©${new Date().getFullYear()}`}
      />
    </div>
  </div>
);
