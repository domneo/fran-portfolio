interface SpacerProps {
  size: "sm" | "md" | "lg" | "xl";
}
export const Spacer = ({ size = "md" }: SpacerProps) => {
  return <div className={`spacer-${size.toLowerCase()}`} />;
};
