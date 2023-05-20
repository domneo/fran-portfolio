import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import styles from "styles/BarrelLink.module.scss";

interface BarrelLinkProps {
  text: string;
  link: string;
  target?: string;
}

export const BarrelLink = ({ text, link, target }: BarrelLinkProps) => {
  const charArr = text.split("");

  return (
    <Link href={link} target={target || ""} className={styles.link}>
      {charArr.map((char, i) => (
        <div
          key={uuidv4()}
          className={styles.charGroup}
          style={{ animationDelay: `${0.05 * i}s` }}
        >
          <span>{char}</span>
          <span>{char}</span>
        </div>
      ))}
    </Link>
  );
};
