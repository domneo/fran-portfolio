import styles from "styles/works/NumberedKeyPoint.module.scss";

interface NumberedKeyPointProps {
  number: number;
  title: string;
  content: React.ReactNode;
}

export const NumberedKeyPoint = ({
  number,
  title,
  content,
}: NumberedKeyPointProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.number}>{number}</p>
      <h5 className="paragraph text-center mb-3">{title}</h5>
      <div className={styles.line} />
      {content}
    </div>
  );
};
