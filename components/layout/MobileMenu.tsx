import classNames from "classnames";
import { useEffect, useState } from "react";

import styles from "styles/MobileMenu.module.scss";

import { BarrelLink } from "../common/BarrelLink";
import Blob from "../common/Blob";
import { Stars } from "../common/Stars";

export const MobileMenu = () => {
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
        <div className={styles.menuButton_line} />
        <div className={styles.menuButton_line} />
        <div className={styles.menuButton_line} />
      </button>
      <div
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.blob}>
          <Blob lineCount={1} strokeWidth={0.4} />
        </div>
        <div></div>
        <div className="w-100">
          <div className={styles.menuItem}>
            <BarrelLink text="WORKS" link="/works" />
          </div>
          <div className={styles.menuItem}>
            <BarrelLink text="ABOUT" link="/about" />
          </div>
          <div className={styles.menuItem}>
            <BarrelLink text="CONTACT" link="/contact" />
          </div>
        </div>
        <div className="py-3">
          <Stars />
        </div>
      </div>
    </>
  );
};
