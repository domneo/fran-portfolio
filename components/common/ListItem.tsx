import removeWidows from "hooks/useRemoveWidows";

interface ListItemProps {
  children?: React.ReactNode;
  className?: string;
}
export const ListItem = ({ children, className }: ListItemProps) => {
  return <li className={className}>{removeWidows(children)}</li>;
};
