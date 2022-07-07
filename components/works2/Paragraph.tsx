import removeWidows from "hooks/useRemoveWidows";

interface ParagraphProps {
  children?: React.ReactNode;
}
export const Paragraph = ({ children }: ParagraphProps) => {
  return <p>{removeWidows(children)}</p>;
};
