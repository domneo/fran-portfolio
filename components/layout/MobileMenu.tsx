import classNames from "classnames";
import { BarrelLink } from "components/common/BarrelLink";
import Blob from "components/common/Blob";
import { StarBlob } from "components/common/StarBlob";
import { useEffect, useState } from "react";
import styles from "styles/MobileMenu.module.scss";
import {
  GlobalFooterCredits,
  GlobalMenu,
  Maybe,
} from "tina/__generated__/types";
import { Footer } from "./Footer";

interface MobileMenuProps {
  menu?: Maybe<Array<Maybe<GlobalMenu>>>;
  footerCredits?: Maybe<Array<Maybe<GlobalFooterCredits>>>;
}
export const MobileMenu = ({ menu, footerCredits }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonClass = classNames("d-sm-none", styles.menuButton, {
    [styles.menuOpen]: isMenuOpen,
  });

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
        className={buttonClass}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen && (
          <div className={styles.menuButton_starBlob}>
            <StarBlob />
          </div>
        )}
        {!isMenuOpen && (
          <>
            <div className={styles.menuButton_line} />
            <div className={styles.menuButton_line} />
          </>
        )}
      </button>
      <div
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.blob}>
          <Blob lineCount={1} strokeWidth={0.4} />
        </div>
        <div className={styles.logo}>
          <BarrelLink text="FRAN" color="white" link="/" />
        </div>
        <div className={styles.menuItemGroup}>
          {menu?.map((menuItem) => (
            <div key={window.crypto.randomUUID()} className={styles.menuItem}>
              <BarrelLink
                text={menuItem?.name.toUpperCase() || ""}
                color={"white"}
                link={menuItem?.url || ""}
                target={menuItem?.openInNewWindow ? "_blank" : "_self"}
              />
            </div>
          ))}
        </div>
        <Footer
          footerCredits={footerCredits}
          showContactLinks={false}
          inverse
        />
      </div>
    </>
  );
};
