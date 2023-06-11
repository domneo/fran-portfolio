import classNames from "classnames";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  size: "full" | "normal" | "compact" | "narrow";
  centerText?: boolean;
  centerElements?: boolean;
}
export const Container = ({
  children,
  className = "",
  size,
  backgroundColor,
  centerText,
  centerElements,
}: ContainerProps) => {
  const containerClass = classNames({
    [`bg-${backgroundColor}`]: backgroundColor,
    "container-fluid": size === "full",
  });
  const columnSizes = {
    full: "col",
    normal: "col-lg-10",
    compact: "col-lg-8",
    narrow: "col-lg-6",
  };
  const columnClass = classNames(
    "d-flex flex-column",
    columnSizes[size],
    { "text-center": centerText },
    { "align-items-center": centerElements },
    className
  );
  return (
    <div className={containerClass}>
      <div className="container">
        <div className="row justify-content-center">
          <div className={columnClass}>{children}</div>
        </div>
      </div>
    </div>
  );
};
