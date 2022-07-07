import Image from "next/image";
import { useState } from "react";
import ReactModal from "react-modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { IconZoomSimple } from "./IconZoomSimple";

ReactModal.setAppElement("#__next");

interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageZoom = ({ src, alt, width, height }: ImageZoomProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="position-relative w-100"
      style={{ aspectRatio: (width / height).toString() }}
    >
      <button
        className="position-absolute top-0 bottom-0 start-0 end-0 bg-transparent border-0 p-0 m-0"
        style={{ cursor: "pointer" }}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          quality={85}
        />
        <div
          className="position-absolute bg-black"
          style={{ bottom: ".25rem", right: ".25rem", borderRadius: "100%" }}
        >
          <IconZoomSimple />
        </div>
      </button>
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
        <TransformWrapper centerOnInit>
          <TransformComponent wrapperClass="w-100 h-100">
            <div style={{ padding: "5rem" }}>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
        <CloseButton setModalOpen={setModalOpen} />
      </ReactModal>
    </div>
  );
};

interface CloseButtonProps {
  setModalOpen: (open: boolean) => void;
}

const CloseButton = ({ setModalOpen }: CloseButtonProps) => (
  <button
    className="position-fixed border-0 p-1"
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
  </button>
);
