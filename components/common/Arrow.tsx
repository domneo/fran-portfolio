interface ArrowProps {
  isHovering: boolean;
}
export const Arrow = ({ isHovering }: ArrowProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.20728 9L1.20728 5.00569L5.20728 1" stroke="var(--black)" />
      </svg>
      <svg
        width="17"
        height="2"
        viewBox="0 0 17 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: ".3s margin-left",
          marginLeft: isHovering ? "-6px" : "4px",
        }}
      >
        <path d="M16.7925 1.01563L0.79248 1.01563" stroke="var(--black)" />
      </svg>
    </div>
  );
};
