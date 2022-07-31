interface ArrowEndProps {
  isHovering: boolean;
}
export const ArrowEnd = ({ isHovering }: ArrowEndProps) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ gap: isHovering ? "0px" : "10px", transition: ".3s gap" }}
    >
      <svg
        width="12"
        height="1"
        viewBox="0 0 12 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" y1="0.5" x2="11.5" y2="0.5" stroke="#EAEAE7" />
      </svg>
      <svg
        width="12"
        height="25"
        viewBox="0 0 12 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.98438 25L5.98438 1M5.98438 1L0.499998 5.63158M5.98438 1L11.4844 5.63158"
          stroke="#EAEAE7"
        />
      </svg>
    </div>
  );
};
