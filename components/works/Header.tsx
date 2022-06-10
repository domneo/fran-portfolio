import Image from "next/image";

import styles from "styles/works/Header.module.scss";

interface HeaderProps {
  image: string;
  title: string;
  subtitle: string;
}

export const Header = ({ image, title, subtitle }: HeaderProps) => {
  return (
    <>
      <div className={styles.heroImage}>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
        />
      </div>
      <div className={`${styles.titleWrapper} spacer-md`}>
        <h1 className="display-1">{title}</h1>
        <h2 className="display-5 text-bone">{subtitle}</h2>
      </div>
    </>
  );
};
