import styles from "styles/works/BigNumberContent.module.scss";

interface BigNumberContentProps {
  number?: string;
  children?: React.ReactNode;
}
export const BigNumberContent = ({
  children,
  number,
}: BigNumberContentProps) => {
  return (
    <div className="d-flex align-items-center">
      {number && <p className={`display-1 mb-0 ${styles.number}`}>{number}</p>}
      <div className="flex-grow-1 ps-3">{children}</div>
    </div>
  );
};
