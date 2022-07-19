import Image from "next/image";

import { Paragraph } from "components/common/Paragraph";

interface IconContentProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
}
export const IconContent = ({ title, icon, children }: IconContentProps) => {
  return (
    <div className="d-flex" style={{ gap: "3rem" }}>
      <div className="flex-shrink-0">
        <div style={{ maxWidth: "80px" }}>
          <Image src={icon || ""} alt="icon" width={512} height={512} />
        </div>
      </div>
      <div>
        {title && (
          <Paragraph className="caption text-works mb-2">
            <strong>{title}</strong>
          </Paragraph>
        )}
        {children}
      </div>
    </div>
  );
};
