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
  centerTitle,
  children,
}: SectionProps) => {
  return (
    <section id={anchorId || ""}>
      {showSectionTitle && <div className="spacer-md" />}
      {showSectionTitle && (
        <div className={styles.title}>
          <div className="d-flex align-items-center">
            {centerTitle && <div className={styles.lineStart} />}
            <div className="d-flex align-items-center">
              <Stars>
                <p className="mb-0 semibold allcaps d-none d-md-block">
                  {title}
                </p>
              </Stars>
            </div>
            <div className={styles.lineEnd} />
          </div>
          <p
            className={`mt-2 mb-0 semibold allcaps d-md-none ${
              centerTitle ? "text-center" : ""
            }`}
          >
            {title}
          </p>
        </div>
      )}
      {showSectionTitle && children && <div className="spacer-sm" />}
      {children}
    </section>
  );
};
