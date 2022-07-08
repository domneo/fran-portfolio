import classNames from "classnames";
import { Children } from "react";

type ColSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
type GutterSizes = 0 | 1 | 2 | 3 | 4 | 5;
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
interface Gutter {
  xs?: GutterSizes;
  sm?: GutterSizes;
  md?: GutterSizes;
  lg?: GutterSizes;
  xl?: GutterSizes;
  xxl?: GutterSizes;
}
interface TwoColumnsProps {
  children?: React.ReactNode;
  col1Props?: ColProps;
  col2Props?: ColProps;
  centerH?: boolean;
  centerV?: boolean;
  gutter?: Gutter;
}
export const TwoColumns = ({
  children,
  col1Props,
  col2Props,
  centerH,
  centerV,
  gutter,
}: TwoColumnsProps) => {
  const childrenArr = Children.toArray(children);
  const isGutterSet = gutter && Object.keys(gutter).length > 0;
  const rowClass = classNames("row", {
    "justify-content-center": centerH,
    "align-items-center": centerV,
    "gx-lg-5": !isGutterSet, // Default gutter size
    [`gx-${gutter?.xs}`]: gutter?.xs,
    [`gx-sm-${gutter?.sm}`]: gutter?.sm,
    [`gx-md-${gutter?.md}`]: gutter?.md,
    [`gx-lg-${gutter?.lg}`]: gutter?.lg,
    [`gx-xl-${gutter?.xl}`]: gutter?.xl,
    [`gx-xxl-${gutter?.xxl}`]: gutter?.xxl,
  });
  const isCol1Set = col1Props && Object.keys(col1Props).length > 0;
  const col1Class = classNames("d-flex flex-column", {
    "col-lg-6": !isCol1Set, // Default column size
    [`col-${col1Props?.xs}`]: col1Props?.xs,
    [`col-sm-${col1Props?.sm}`]: col1Props?.sm,
    [`col-md-${col1Props?.md}`]: col1Props?.md,
    [`col-lg-${col1Props?.lg}`]: col1Props?.lg,
    [`col-xl-${col1Props?.xl}`]: col1Props?.xl,
    [`col-xxl-${col1Props?.xxl}`]: col1Props?.xxl,
    "align-items-center": col1Props?.centerH,
    "justify-content-center": col1Props?.centerV,
  });
  const isCol2Set = col2Props && Object.keys(col2Props).length > 0;
  const col2Class = classNames("d-flex flex-column", {
    "col-lg-6": !isCol2Set, // Default column size
    [`col-${col2Props?.xs}`]: col2Props?.xs,
    [`col-sm-${col2Props?.sm}`]: col2Props?.sm,
    [`col-md-${col2Props?.md}`]: col2Props?.md,
    [`col-lg-${col2Props?.lg}`]: col2Props?.lg,
    [`col-xl-${col2Props?.xl}`]: col2Props?.xl,
    [`col-xxl-${col2Props?.xxl}`]: col2Props?.xxl,
    "align-items-center": col2Props?.centerH,
    "justify-content-center": col2Props?.centerV,
  });
  return (
    <div className={rowClass}>
      <div className={col1Class}>{childrenArr[0]}</div>
      <div className={col2Class}>{childrenArr[1]}</div>
    </div>
  );
};
