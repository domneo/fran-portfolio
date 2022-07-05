import styles from "styles/works/CaptionTitleContent.module.scss";

interface CaptionTitleContentProps {
  caption?: string;
  bigTitle?: React.ReactNode;
  title?: React.ReactNode;
  centerHeaderText?: boolean;
  showLine?: boolean;
  children?: React.ReactNode;
}
export const CaptionTitleContent = ({
  caption,
  bigTitle,
  title,
  centerHeaderText,
  showLine,
  children,
}: CaptionTitleContentProps) => {
  return (
    <div>
      <div className={centerHeaderText ? "text-center" : undefined}>
        {caption && <p className="caption mb-3">{caption}</p>}
        {bigTitle && <h3 className="display-2 mb-3">{bigTitle}</h3>}
        {title && <h5 className="text-works mb-3">{title}</h5>}
      </div>
      {showLine && <div className={styles.line} />}
      {children}
    </div>
  );
};
