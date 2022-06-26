import { useEffect, useState } from "react";

import removeWidows from "hooks/useRemoveWidows";
import styles from "styles/UnderConstruction.module.scss";

import Blob from "components/common/Blob";

interface UnderConstructionProps {
  children?: React.ReactNode;
}

export const UnderConstruction = ({ children }: UnderConstructionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if UnderConstruction notice is already hidden this session
    if (localStorage.getItem("hide_UC") !== "1") setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`${styles.container} ${
            isVisible ? "d-flex" : "d-none"
          } d-lg-none`}
        >
          <div>
            <p className="caption">
              Hellooooo!
              <br />
              {removeWidows(
                "The mobile site is still under construction, so this site is best viewed on desktop <:"
              )}
            </p>
            <p className="caption">
              {removeWidows("If you're alright with that, go on ahead ✨")}
            </p>
            <button
              className={styles.button}
              onClick={() => {
                setIsVisible(false);
                localStorage.setItem("hide_UC", "1");
              }}
            >
              <Blob />
              <div className={`${styles.buttonText} display-1 fw-light`}>
                Enter
              </div>
            </button>
          </div>
        </div>
      )}
      <div className={`${isVisible ? "d-none" : "d-block"} d-lg-block`}>
        {children}
      </div>
    </>
  );
};
