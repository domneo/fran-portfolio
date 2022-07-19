import styles from "styles/works/CaptionTitleContent.module.scss";

import { Heading } from "components/common/Heading";
import { Paragraph } from "components/common/Paragraph";

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
        {caption && <Paragraph className="caption mb-3">{caption}</Paragraph>}
        {bigTitle && (
          <Heading level={3} className="display-2 mb-3">
            {bigTitle}
          </Heading>
        )}
        {title && (
          <Heading level={5} className="text-platinum fw-light mb-4">
            {title}
          </Heading>
        )}
      </div>
      {showLine && <div className={styles.line} />}
      {children}
    </div>
  );
};
