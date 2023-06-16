import classNames from "classnames";
import Link from "next/link";
import styles from "styles/BarrelLink.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Span } from "./Span";

interface BarrelLinkProps {
  text: string;
  color?: string;
  link?: string;
  target?: string;
}
export const BarrelLink = ({ text, color, link, target }: BarrelLinkProps) => {
  const charArr = text.split("");

  const LinkComponent = link ? Link : Span;

  return (
    <LinkComponent
      href={link || ""}
      target={target || ""}
      className={classNames(styles.link, `text-${color || "black"}`, {
        [styles.noAnimate]: !link,
      })}
    >
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
    </LinkComponent>
  );
};
