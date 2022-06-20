import { useEffect, useRef, useState } from "react";

import styles from "styles/Contact.module.scss";

interface ArrowsProps {
  yesdogRef: React.RefObject<HTMLDivElement>;
  linksRef: React.RefObject<HTMLDivElement>;
}

export const Arrows = ({ yesdogRef, linksRef }: ArrowsProps) => {
  // Set document size
  const [documentSize, setDocumentSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    setDocumentSize({
      w: document.body.clientWidth,
      h: document.body.clientHeight,
    });
  }, []);

  // Create arrow
  const arrow1Ref = useRef<SVGSVGElement>(null);
  const [arrowStart, setArrowStart] = useState({ x: 0, y: 0 });
  const [curvePoint1, setCurvePoint1] = useState({ x: 0, y: 0 });
  const [curvePoint2, setCurvePoint2] = useState({ x: 0, y: 0 });
  const [arrowEnd, setArrowEnd] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const yesdogDimensions = yesdogRef.current?.getBoundingClientRect();
    const linksDimensions = linksRef.current?.getBoundingClientRect();

    const arrowStart = new DOMPoint(yesdogDimensions?.x, yesdogDimensions?.y);
    const arrowStartP = arrowStart.matrixTransform(
      arrow1Ref.current?.getScreenCTM()?.inverse()
    );

    const curvePoint1 = DOMPoint.fromPoint(arrowStartP);
    curvePoint1.x -= 200;
    curvePoint1.y -= 150;

    const curvePoint2 = DOMPoint.fromPoint(arrowStartP);
    curvePoint1.x -= 300;
    curvePoint1.y += 250;

    const arrowEnd = new DOMPoint(
      (linksDimensions?.x || 0) + (linksDimensions?.width || 0),
      linksDimensions?.y
    );
    const arrowEndP = arrowEnd.matrixTransform(
      arrow1Ref.current?.getScreenCTM()?.inverse()
    );

    setArrowStart({ x: arrowStartP.x, y: arrowStartP.y });
    setCurvePoint1({ x: curvePoint1.x, y: curvePoint1.y });
    setCurvePoint2({ x: curvePoint2.x, y: curvePoint2.y });
    setArrowEnd({ x: arrowEndP.x, y: arrowEndP.y });
  }, []);

  return (
    <svg
      ref={arrow1Ref}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${documentSize.w} ${documentSize.h}`}
      preserveAspectRatio="xMidYMid meet"
      className={styles.arrow}
    >
      <defs>
        <marker
          id="triangle"
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--platinum)" />
        </marker>
      </defs>
      <path
        id="curve"
        d={`M${arrowStart.x},${arrowStart.y} C${curvePoint1.x},${curvePoint1.y} ${curvePoint2.x},${curvePoint2.y} ${arrowEnd.x},${arrowEnd.y}`}
        stroke="var(--platinum)"
        strokeWidth="2"
        strokeDasharray="4 8 12 16"
        strokeLinecap="round"
        markerEnd="url(#triangle)"
        fill="none"
      />
    </svg>
  );
};
