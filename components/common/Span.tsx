import removeWidows from "hooks/useRemoveWidows";

interface SpanProps {
  children?: React.ReactNode;
  className?: string;
}
export const Span = ({ children, className }: SpanProps) => {
  return <span className={className}>{removeWidows(children)}</span>;
};
