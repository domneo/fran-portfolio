import styles from "styles/works/KeyIssue.module.scss";

interface KeyIssueProps {
  caption?: string;
  title?: string;
  children?: React.ReactNode;
}

export const KeyIssue = ({ caption, title, children }: KeyIssueProps) => (
  <div className={styles.container}>
    {caption && (
      <p className="mb-0">
        <small>{caption}</small>
      </p>
    )}
    {title && <h3 className="display-2 mb-3">{title}</h3>}
    <div className={styles.line} />
    {children}
  </div>
);
