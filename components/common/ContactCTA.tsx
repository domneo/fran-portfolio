import { useState } from "react";

import Blob from "components/common/Blob";

interface ContactCTAProps {
  children?: React.ReactNode;
}

export const ContactCTA = ({ children }: ContactCTAProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="container-fluid">
      <div className={`row justify-content-center`}>
        <div className="col-lg-8 text-center">
          {children && (
            <h2 className="display-5 text-bone spacer-md">{children}</h2>
          )}
          <div className="d-flex justify-content-center">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="contact-cta d-block position-relative text-decoration-none"
              style={{
                width: "280px",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Blob isHovering={isHovering} />
              <div className="contact-cta-text h5 fw-light mb-2">Contact</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
