import { Stars } from "components/common/Stars";
import styles from "styles/works/Section.module.scss";

interface SectionProps {
  anchorId?: string | null;
  title?: string | null;
  showSectionTitle?: boolean | null;
  centerTitle?: boolean | null;
  children?: React.ReactNode;
}

export const Section = ({
  anchorId,
  title,
  showSectionTitle,
  children,
}: SectionProps) => {
  return (
    <section id={anchorId || ""} className="row justify-content-center">
      <div className="col-lg-10 col-xl-8">
        {showSectionTitle && (
          <div className={styles.title}>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Stars>
                  <p className="mb-0 semibold allcaps d-none d-md-block">
                    {title}
                  </p>
                </Stars>
              </div>
              <div className={styles.lineEnd} />
            </div>
            <p className={`mt-2 mb-0 semibold allcaps d-md-none`}>{title}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
