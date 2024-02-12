import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useState } from "react";

import { ArrowEnd } from "components/common/ArrowEnd";

gsap.registerPlugin(ScrollToPlugin);

interface ArrowButtonProps {
  target: "top" | "bottom";
}
const ArrowButton = ({ target = "top" }: ArrowButtonProps) => {
  const scrollTo = (target: "top" | "bottom") => {
    const scrollTargetMap = { top: 0, bottom: document.body.scrollHeight };
    gsap.to(window, { duration: 0.8, scrollTo: scrollTargetMap[target] });
  };

  const [isHovering, setIsHovering] = useState(false);
  const transformTargetMap = { top: "none", bottom: "rotate(180deg)" };

  return (
    <button
      style={{
        color: "var(--white)",
        background: "var(--black)",
        border: "none",
        borderTopLeftRadius: "24px",
        borderBottomLeftRadius: "24px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        paddingLeft: "20px",
        paddingRight: "13px",
        height: "48px",
        cursor: "pointer",
        transform: transformTargetMap[target],
      }}
      onClick={() => scrollTo(target)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ArrowEnd isHovering={isHovering} />
    </button>
  );
};

export const FloatingActions = () => (
  <div
    className="d-flex align-items-end"
    style={{ position: "fixed", bottom: "5.5rem", right: "2.5rem" }}
  >
    <ArrowButton target="top" />
    <ArrowButton target="bottom" />
  </div>
);
