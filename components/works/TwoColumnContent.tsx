import styles from "styles/works/TwoColumnContent.module.scss";

interface TwoColumnContentProps {
  column1?: React.ReactNode;
  column2?: React.ReactNode;
}

export const TwoColumnContent = ({
  column1,
  column2,
}: TwoColumnContentProps) => {
  return (
    <div className="row w-100">
      <div className="col-lg-6">{column1}</div>
      <div className="col-lg-6">{column2}</div>
    </div>
  );
};
