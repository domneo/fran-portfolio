import { useState } from "react";

interface CloseButtonProps {
  onClick?: () => any;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="position-relative bg-transparent border-0 p-0 m-0"
      style={{ borderRadius: "100%", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="var(--black)" />
        <path
          d="M12.8976 28L12 27.1024L19.1024 20L12 12.8976L12.8976 12L20 19.1024L27.1024 12L28 12.8976L20.8976 20L28 27.1024L27.1024 28L20 20.8976L12.8976 28Z"
          fill={hover ? "var(--wenge)" : "var(--white)"}
        />
      </svg>
    </button>
  );
};
