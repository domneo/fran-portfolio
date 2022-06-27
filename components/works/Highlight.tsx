import Image from "next/image";

import styles from "styles/works/Highlight.module.scss";

interface IconProps {
  style?: React.CSSProperties;
}

const Quote = ({ style }: IconProps) => (
  <div className={styles.icon} style={style}>
    <Image
      src="/images/opportunityQuote.svg"
      alt="quote"
      width={276}
      height={234}
    />
  </div>
);

const Star = ({ style }: IconProps) => (
  <div className={styles.icon} style={style}>
    <Image
      src="/images/opportunityStar.svg"
      alt="star"
      width={255}
      height={235}
    />
  </div>
);

interface HighlightProps {
  type?: "quote" | "star";
  title?: string;
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const Highlight = ({
  type = "star",
  title,
  children,
  spacer,
}: HighlightProps) => (
  <div className={`row justify-content-center spacer-${spacer || ""}`}>
    <div className={`col-10 text-center d-flex justify-content-between`}>
      {type === "quote" && <Quote />}
      {type === "star" && <Star />}
      <div className="d-flex flex-column justify-content-center align-items-center px-2">
        {title && <h2 className="display-3 text-bone">{title}</h2>}
        {children}
      </div>
      {type === "quote" && (
        <Quote
          style={{ transform: "rotate(180deg)", alignItems: "flex-end" }}
        />
      )}
      {type === "star" && (
        <Star style={{ transform: "rotate(180deg)", alignItems: "flex-end" }} />
      )}
    </div>
  </div>
);
