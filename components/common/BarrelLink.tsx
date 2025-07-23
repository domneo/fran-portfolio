import classNames from "classnames";
import Link from "next/link";
import styles from "styles/BarrelLink.module.scss";
import { Span } from "./Span";

interface BarrelLinkProps {
  className?: string;
  text: string;
  link?: string;
  target?: string;
  onClick?: () => void;
}
export const BarrelLink = ({
  className,
  text,
  link,
  target,
  onClick,
}: BarrelLinkProps) => {
  const charArr = text.split("");

  const LinkComponent = link ? Link : Span;

  return (
    <LinkComponent
      href={link || ""}
      target={target || ""}
      className={classNames(
        styles.link,
        { [styles.noAnimate]: !link },
        className,
      )}
      onClick={onClick}
    >
      {charArr.map((char, i) => (
        <div
          key={window.crypto.randomUUID()}
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
