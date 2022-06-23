interface ThreeColumnsProps {
  column1?: React.ReactNode;
  column2?: React.ReactNode;
  column3?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const ThreeColumns = ({
  column1,
  column2,
  column3,
  spacer,
}: ThreeColumnsProps) => {
  return (
    <div className={`row gx-lg-4 spacer-${spacer || ""}`}>
      <div className="col-lg-4">{column1}</div>
      <div className="col-lg-4">{column2}</div>
      <div className="col-lg-4">{column3}</div>
    </div>
  );
};
