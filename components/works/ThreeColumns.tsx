import classNames from "classnames";
import { Children } from "react";

interface ColProps {
  centerH?: boolean;
  centerV?: boolean;
}
interface ThreeColumnsProps {
  children?: React.ReactNode;
  col1Props?: ColProps;
  col2Props?: ColProps;
  col3Props?: ColProps;
}
export const ThreeColumns = ({
  children,
  col1Props,
  col2Props,
  col3Props,
}: ThreeColumnsProps) => {
  const childrenArr = Children.toArray(children);
  const col1Class = classNames("col-lg-4 d-flex flex-column", {
    "align-items-center": col1Props?.centerH,
    "justify-content-center": col1Props?.centerV,
  });
  const col2Class = classNames("col-lg-4 d-flex flex-column", {
    "align-items-center": col2Props?.centerH,
    "justify-content-center": col2Props?.centerV,
  });
  const col3Class = classNames("col-lg-4 d-flex flex-column", {
    "align-items-center": col3Props?.centerH,
    "justify-content-center": col3Props?.centerV,
  });
  return (
    <div className={`row gx-lg-4`}>
      <div className={col1Class}>{childrenArr[0]}</div>
      <div className={col2Class}>{childrenArr[1]}</div>
      <div className={col3Class}>{childrenArr[2]}</div>
    </div>
  );
};
