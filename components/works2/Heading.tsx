import classNames from "classnames";

import removeWidows from "hooks/useRemoveWidows";

interface HeadingProps {
  children: React.ReactNode;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  centerText?: boolean;
  className?: string;
}
export const Heading = ({
  children,
  size = "h5",
  centerText,
  className,
}: HeadingProps) => {
  const classNameFull = classNames(
    `display-${size[1].toString()}`,
    "text-bone",
    { "text-center": centerText },
    className
  );
  return <h2 className={classNameFull}>{removeWidows(children)}</h2>;
};
