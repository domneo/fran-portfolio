interface TwoColumnsProps {
  column1?: React.ReactNode;
  column2?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const TwoColumns = ({ column1, column2, spacer }: TwoColumnsProps) => {
  return (
    <div className={`row gx-5 spacer-${spacer || ""}`}>
      <div className="col-lg-6">{column1}</div>
      <div className="col-lg-6">{column2}</div>
    </div>
  );
};
