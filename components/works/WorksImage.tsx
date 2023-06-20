import classNames from "classnames";
import Image from "next/image";
import styles from "styles/Works.module.scss";

interface WorksImageProps {
  image: string;
  title: string;
  comingSoon?: boolean | null;
  number?: number;
  imageClass: string;
  isVisible?: boolean | null;
}
export const WorksImage = ({
  image,
  title,
  comingSoon,
  number,
  imageClass,
  isVisible,
}: WorksImageProps) => (
  <div
    className={classNames(imageClass, {
      [styles.isVisible]: isVisible,
    })}
  >
    <Image
      src={image}
      alt={title}
      fill
      sizes={"(min-width: 992px) 80vw, 180vw"}
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      priority
    />
    {comingSoon && (
      <div className={styles.comingSoon}>
        <p className="mb-4 text-center text-white w-100 h2">Coming soon</p>
      </div>
    )}
    {number && (
      <div className={styles.numberOverlay}>
        <div className={`${styles.number} h1 medium text-white`}>{number}</div>
      </div>
    )}
  </div>
);
