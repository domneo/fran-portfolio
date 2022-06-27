import styles from "styles/works/NumberedKeyPoint.module.scss";

interface NumberedKeyPointProps {
  number?: number;
  caption?: string;
  title: string;
  content: React.ReactNode;
}

export const NumberedKeyPoint = ({
  number,
  caption,
  title,
  content,
}: NumberedKeyPointProps) => {
  return (
    <div className={styles.container}>
      {number && <p className={styles.number}>{number}</p>}
      {caption && <p className="caption mb-2 w-100">{caption}</p>}
      <h5
        className={`paragraph mb-4 ${caption ? "text-start" : "text-center"}`}
      >
        {title}
      </h5>
      <div className={styles.line} />
      {content}
    </div>
  );
};
