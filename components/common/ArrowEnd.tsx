interface ArrowEndProps {
  isHovering: boolean;
}
export const ArrowEnd = ({ isHovering }: ArrowEndProps) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ gap: isHovering ? "0px" : "6px", transition: ".2s gap" }}
    >
      <svg
        width="8"
        height="2"
        viewBox="0 0 8 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.764648 0.705872H7.23525" stroke="var(--white)" />
      </svg>
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99085 15V0.882385M3.99085 0.882385L0.764648 3.60688M3.99085 0.882385L7.22605 3.60688"
          stroke="var(--white)"
        />
      </svg>
    </div>
  );
};
