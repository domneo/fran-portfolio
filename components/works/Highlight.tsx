import Image from "next/image";

import styles from "styles/works/Highlight.module.scss";

interface HighlightProps {
  title?: string;
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

const Star = () => (
  <div className={styles.star}>
    <Image src="/images/opportunityStar.svg" width={276} height={234} />
  </div>
);

export const Highlight = ({ title, children, spacer }: HighlightProps) => (
  <section className={`row justify-content-center spacer-${spacer}`}>
    <div className={`col-10 text-center d-flex`}>
      <Star />
      <div className="d-flex flex-column justify-content-center align-items-center px-5">
        {title && <h2 className="display-3 text-bone">{title}</h2>}
        {children}
      </div>
      <Star />
    </div>
  </section>
);
