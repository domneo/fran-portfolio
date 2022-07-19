import classNames from "classnames";
import { createElement } from "react";

import removeWidows from "hooks/useRemoveWidows";

interface HeadingProps {
  children?: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  centerText?: boolean;
  className?: string;
}
export const Heading = ({
  children,
  level,
  centerText,
  className,
}: HeadingProps) => {
  const props = {
    className: classNames({ "text-center": centerText }, className),
  };
  return createElement(`h${level}`, props, removeWidows(children));
};
