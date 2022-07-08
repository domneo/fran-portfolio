interface SpacerProps {
  size: "xs" | "sm" | "md" | "lg";
}
export const Spacer = ({ size }: SpacerProps) => {
  return <div className={`spacer-${size}`} />;
};
