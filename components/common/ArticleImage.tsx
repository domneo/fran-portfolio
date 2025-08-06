import { useEffect, useState } from "react";
import Modal from "react-modal";

import styles from "styles/ArticleImage.module.scss";
import { ZoomButton } from "./ZoomButton";
import { CloseButton } from "./CloseButton";

Modal.setAppElement("#__next");

export interface ArticleImageProps {
  image?: string | null;
  title?: string | null;
  caption?: string | null;
  enableZoom?: boolean | null;
}
export const ArticleImage = (props: ArticleImageProps) => {
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isZoomedIn) {
      bodyClass.add("scroll-lock");
    } else {
      bodyClass.remove("scroll-lock");
    }
  }, [isZoomedIn]);

  return (
    <>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.image || ""}
          alt={props.title || ""}
          sizes={"160vw"}
          className={styles.image}
        />
        {props.enableZoom && (
          <div className={styles.zoomButton}>
            <ZoomButton onClick={() => setIsZoomedIn(true)} />
          </div>
        )}
      </div>
      {props.caption && (
        <p className="mt-1 w-100">
          <small>{props.caption}</small>
        </p>
      )}
      {props.enableZoom && (
        <Modal
          isOpen={isZoomedIn}
          onRequestClose={() => setIsZoomedIn(false)}
          overlayClassName="image-modal-overlay"
          className="image-modal-content"
          contentLabel={"Image zoom"}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          closeTimeoutMS={500}
        >
          <div className={styles.closeButton}>
            <CloseButton onClick={() => setIsZoomedIn(false)} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={props.image || ""} alt={props.title || ""} />
          {props.caption && (
            <p className="position-sticky bottom-0 px-4 mb-0 bg-white">
              <small>{props.caption}</small>
            </p>
          )}
        </Modal>
      )}
    </>
  );
};
