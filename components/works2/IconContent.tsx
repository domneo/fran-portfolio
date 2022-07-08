import Image from "next/image";

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
        {title && <p className="caption text-works mb-2">{title}</p>}
        {children}
      </div>
    </div>
  );
};
