import { Stars } from "components/common/Stars";
import styles from "styles/works/Section.module.scss";

interface SectionProps {
  title?: string | null;
  showSectionTitle?: boolean | null;
  children?: React.ReactNode;
}

export const Section = ({
  title,
  showSectionTitle,
  children,
}: SectionProps) => {
  return (
    <section>
      {showSectionTitle && <div className="spacer-lg" />}
      {showSectionTitle && (
        <div className={styles.title}>
          <div className="row">
            <div className="col-xxl-10 d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Stars>
                  <p className="mb-0 semibold allcaps d-none d-md-block">
                    {title}
                  </p>
                </Stars>
              </div>
              <div className={styles.line} />
            </div>
            <p className="mt-2 mb-0 semibold allcaps d-md-none">{title}</p>
          </div>
        </div>
      )}
      {showSectionTitle && children && <div className="spacer-md" />}
      {children}
    </section>
  );
};
