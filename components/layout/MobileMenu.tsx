import classNames from "classnames";
import { BarrelLink } from "components/common/BarrelLink";
import Blob from "components/common/Blob";
import { Stars } from "components/common/Stars";
import { useEffect, useState } from "react";
import styles from "styles/MobileMenu.module.scss";
import {
  GlobalContactLinks,
  GlobalMenu,
  Maybe,
} from "tina/__generated__/types";

interface MobileMenuProps {
  menu?: Maybe<Array<Maybe<GlobalMenu>>>;
  contactLinks?: Maybe<Array<Maybe<GlobalContactLinks>>>;
}
export const MobileMenu = ({ menu, contactLinks }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isMenuOpen) {
      bodyClass.add("scroll-lock");
    } else {
      bodyClass.remove("scroll-lock");
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        className={classNames("d-sm-none", styles.menuButton)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.menuButton_line} />
        <div className={styles.menuButton_line} />
      </button>
      <div
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.blob}>
          <Blob lineCount={1} strokeWidth={0.4} color="var(--bodyColor)" />
        </div>
        <div className={styles.logo}>
          <BarrelLink className={styles.link} text="FRAN" link="/" />
        </div>
        <div className={styles.menuItemGroup}>
          {menu?.map((menuItem) => (
            <div key={window.crypto.randomUUID()} className={styles.menuItem}>
              <BarrelLink
                className={styles.link}
                text={menuItem?.name?.toUpperCase() || ""}
                link={menuItem?.url || ""}
                target={menuItem?.openInNewWindow ? "_blank" : "_self"}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          ))}
          {contactLinks?.map((contact) => (
            <div key={window.crypto.randomUUID()} className={styles.menuItem}>
              <BarrelLink
                className={styles.link}
                text={contact?.name?.toUpperCase() || ""}
                link={contact?.url || ""}
                target={contact?.openInNewWindow ? "_blank" : "_self"}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          ))}
        </div>
        <div className={classNames(styles.stars)}>
          <Stars />
        </div>
      </div>
    </>
  );
};
