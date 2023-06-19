interface SpacerProps {
  size: "sm" | "md" | "lg" | "xl";
}
export const Spacer = ({ size }: SpacerProps) => {
  return <div className={`spacer-${size}`} />;
};
