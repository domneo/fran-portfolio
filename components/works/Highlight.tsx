import Image from "next/image";

import styles from "styles/works/Highlight.module.scss";

interface HighlightProps {
  title?: string;
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export const Highlight = ({ title, children, spacer }: HighlightProps) => (
  <section className={`row justify-content-center spacer-${spacer}`}>
    <div className={`col text-center d-flex`}>
      <div className={styles.star}>
        <Image
          src="/images/opportunityStar.svg"
          layout="fill"
          objectFit="contain"
          objectPosition={"center"}
        />
      </div>
      <div className="px-4">
        {title && <h2 className="display-3 text-bone">{title}</h2>}
        {children}
      </div>
      <div className={styles.star}>
        <Image
          src="/images/opportunityStar.svg"
          layout="fill"
          objectFit="contain"
          objectPosition={"center"}
        />
      </div>
    </div>
  </section>
);
