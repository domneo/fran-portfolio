import removeWidows from "hooks/useRemoveWidows";

interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
}
export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={className}>{removeWidows(children)}</p>;
};
