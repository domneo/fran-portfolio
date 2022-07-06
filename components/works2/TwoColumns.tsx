import classNames from "classnames";
import { Children } from "react";

type ColSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
interface ColProps {
  centerH?: boolean;
  centerV?: boolean;
  xs?: ColSizes;
  sm?: ColSizes;
  md?: ColSizes;
  lg?: ColSizes;
  xl?: ColSizes;
  xxl?: ColSizes;
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
  const col1Class = classNames("d-flex flex-column", {
    [`col-${col1Props?.xs}`]: col1Props?.xs,
    [`col-sm-${col1Props?.sm}`]: col1Props?.sm,
    [`col-md-${col1Props?.md}`]: col1Props?.md,
    [`col-lg-${col1Props?.lg || 6}`]: true, // Set default size to 6
    [`col-xl-${col1Props?.xl}`]: col1Props?.xl,
    [`col-xxl-${col1Props?.xxl}`]: col1Props?.xxl,
    "align-items-center": col1Props?.centerH,
    "justify-content-center": col1Props?.centerV,
  });
  const col2Class = classNames("d-flex flex-column", {
    [`col-${col2Props?.xs}`]: col2Props?.xs,
    [`col-sm-${col2Props?.sm}`]: col2Props?.sm,
    [`col-md-${col2Props?.md}`]: col2Props?.md,
    [`col-lg-${col2Props?.lg || 6}`]: true, // Set default size to 6
    [`col-xl-${col2Props?.xl}`]: col2Props?.xl,
    [`col-xxl-${col2Props?.xxl}`]: col2Props?.xxl,
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
