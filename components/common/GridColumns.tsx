import classNames from "classnames";
import { Children } from "react";
import { v4 as uuidv4 } from "uuid";

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
interface GridColumnsProps {
  children?: React.ReactNode;
  colProps?: ColProps;
  centerH?: boolean;
  centerV?: boolean;
  gutter?: Gutter;
}
export const GridColumns = ({
  children,
  colProps,
  centerH,
  centerV,
  gutter,
}: GridColumnsProps) => {
  const childrenArr = Children.toArray(children);
  const isGutterSet = gutter && Object.keys(gutter).length > 0;
  const rowClass = classNames("row", {
    "justify-content-center": centerH,
    "align-items-center": centerV,
    "gx-lg-4": !isGutterSet, // Default gutter size
    [`gx-${gutter?.xs}`]: gutter?.xs,
    [`gx-sm-${gutter?.sm}`]: gutter?.sm,
    [`gx-md-${gutter?.md}`]: gutter?.md,
    [`gx-lg-${gutter?.lg}`]: gutter?.lg,
    [`gx-xl-${gutter?.xl}`]: gutter?.xl,
    [`gx-xxl-${gutter?.xxl}`]: gutter?.xxl,
  });
  const isColSet = colProps && Object.keys(colProps).length > 0;
  const colClass = classNames("d-flex flex-column", {
    "col-lg-4": !isColSet, // Default column size
    [`col-${colProps?.xs}`]: colProps?.xs,
    [`col-sm-${colProps?.sm}`]: colProps?.sm,
    [`col-md-${colProps?.md}`]: colProps?.md,
    [`col-lg-${colProps?.lg}`]: colProps?.lg,
    [`col-xl-${colProps?.xl}`]: colProps?.xl,
    [`col-xxl-${colProps?.xxl}`]: colProps?.xxl,
    "align-items-center": colProps?.centerH,
    "justify-content-center": colProps?.centerV,
  });
  return (
    <div className={rowClass}>
      {childrenArr &&
        childrenArr.length > 0 &&
        childrenArr.map((child) => (
          <div key={uuidv4()} className={colClass}>
            {child}
          </div>
        ))}
    </div>
  );
};
