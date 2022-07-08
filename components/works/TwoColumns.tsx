import classNames from "classnames";
import { Children } from "react";

interface ColProps {
  centerH?: boolean;
  centerV?: boolean;
}
interface TwoColumnsProps {
  children?: React.ReactNode;
  col1Props?: ColProps;
  col2Props?: ColProps;
}
export const TwoColumns = ({
  children,
  col1Props,
  col2Props,
}: TwoColumnsProps) => {
  const childrenArr = Children.toArray(children);
  const col1Class = classNames("col-lg-6 d-flex flex-column", {
    "align-items-center": col1Props?.centerH,
    "justify-content-center": col1Props?.centerV,
  });
  const col2Class = classNames("col-lg-6 d-flex flex-column", {
    "align-items-center": col2Props?.centerH,
    "justify-content-center": col2Props?.centerV,
  });
  return (
    <div className={`row gx-lg-5`}>
      <div className={col1Class}>{childrenArr[0]}</div>
      <div className={col2Class}>{childrenArr[1]}</div>
    </div>
  );
};
