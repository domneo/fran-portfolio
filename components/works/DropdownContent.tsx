import { useState } from "react";

import styles from "styles/works/DropdownContent.module.scss";

interface DropdownContentProps {
  children: React.ReactNode;
  title?: string;
  spacer?: "sm" | "md" | "lg";
}

export const DropdownContent = ({
  children,
  title,
  spacer,
}: DropdownContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`spacer-${spacer || ""}`}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: ".3s all",
          }}
        >
          <path
            d="M33.5 11.75L6.5 11.75L20 28.25L33.5 11.75Z"
            fill="currentColor"
          />
        </svg>
        <strong className="px-2">{title}</strong>
      </button>
      <div
        className={styles.content}
        style={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
      >
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};
