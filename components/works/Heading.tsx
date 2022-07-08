import classNames from "classnames";

interface HeadingProps {
  children: React.ReactNode;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  centerText?: boolean;
}
export const Heading = ({
  children,
  size = "h3",
  centerText,
}: HeadingProps) => {
  const className = classNames(`display-${size[1].toString()}`, "text-bone", {
    "text-center": centerText,
  });
  return <h2 className={className}>{children}</h2>;
};
