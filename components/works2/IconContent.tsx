import { Children } from "react";

interface IconContentProps {
  title?: string;
  children: React.ReactNode;
}
export const IconContent = ({ title, children }: IconContentProps) => {
  const childrenArr = Children.toArray(children);
  return (
    <div className="d-flex" style={{ gap: "3rem" }}>
      <div className="flex-shrink-0">
        <div style={{ maxWidth: "80px" }}>{childrenArr[0]}</div>
      </div>
      <div>
        {title && <p className="caption text-works mb-2">{title}</p>}
        {childrenArr[1]}
      </div>
    </div>
  );
};
