import Image from "next/image";
import { useState } from "react";
import ReactModal from "react-modal";

import { IconZoom } from "./IconZoom";

ReactModal.setAppElement("#__next");

interface ImageZoomProps {
  image: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageZoom = ({ image, alt, width, height }: ImageZoomProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="position-relative" style={{ aspectRatio: "1.4" }}>
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
      <div className="position-absolute bottom-0 end-0">
        <IconZoom onClick={() => setModalOpen(true)} />
      </div>
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        overlayClassName="image-modal-overlay"
        className="image-modal-content"
        contentLabel={"Image zoom"}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        closeTimeoutMS={500}
      >
        <Image src={image} alt={alt} width={width} height={height} />
        <div
          className="position-fixed p-1"
          style={{
            top: "2.5rem",
            right: "2.5rem",
            background: "var(--black)",
            cursor: "pointer",
          }}
          onClick={() => setModalOpen(false)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3.61143L16.3886 2L10 8.38857L3.61143 2L2 3.61143L8.38857 10L2 16.3886L3.61143 18L10 11.6114L16.3886 18L18 16.3886L11.6114 10L18 3.61143Z"
              fill="var(--white)"
            />
          </svg>
        </div>
      </ReactModal>
    </div>
  );
};
