interface ArrowProps {
  isHovering: boolean;
}
export const Arrow = ({ isHovering }: ArrowProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.04492 11.4922L1.41334 6.00781L6.04492 0.507812"
          stroke="var(--platinum)"
        />
      </svg>
      <svg
        width="25"
        height="2"
        viewBox="0 0 25 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: ".3s margin-left",
          marginLeft: isHovering ? "-6px" : "4px",
        }}
      >
        <path d="M24.584 1.01563L0.583984 1.01563" stroke="var(--platinum)" />
      </svg>
    </div>
  );
};
