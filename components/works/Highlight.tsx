import Image from "next/image";

import styles from "styles/works/Highlight.module.scss";

interface StarProps {
  style?: React.CSSProperties;
}

const Star = ({ style }: StarProps) => (
  <div className={styles.star} style={style}>
    <Image
      src="/images/opportunityStar.svg"
      alt="star"
      width={276}
      height={234}
    />
  </div>
);

interface HighlightProps {
  title?: string;
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const Highlight = ({ title, children, spacer }: HighlightProps) => (
  <div className={`row justify-content-center spacer-${spacer || ""}`}>
    <div className={`col-10 text-center d-flex`}>
      <Star />
      <div className="d-flex flex-column justify-content-center align-items-center px-2">
        {title && <h2 className="display-3 text-bone">{title}</h2>}
        {children}
      </div>
      <Star style={{ transform: "rotateY(180deg)" }} />
    </div>
  </div>
);
