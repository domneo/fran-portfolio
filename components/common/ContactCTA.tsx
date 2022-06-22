import Blob from "components/common/Blob";

interface ContactCTAProps {
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const ContactCTA = ({ children, spacer }: ContactCTAProps) => (
  <div className={`row justify-content-center spacer-${spacer || ""}`}>
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
        >
          <Blob />
          <div className="contact-cta-text h5 fw-light">Contact</div>
        </a>
      </div>
    </div>
  </div>
);
