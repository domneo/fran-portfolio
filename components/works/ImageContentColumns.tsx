import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import styles from "styles/works/ImageContentColumns.module.scss";

interface ImageContentColumnsProps {
  image: string;
  number?: string;
  title?: React.ReactNode;
  points?: Array<React.ReactNode>;
}

export const ImageContentColumns = ({
  image,
  number,
  title,
  points,
}: ImageContentColumnsProps) => {
  return (
    <div className="row align-items-stretch">
      <div className="col-xl-6 ps-4 pe-5">
        <div className={styles.image}>
          <Image
            src={image}
            alt={typeof title === "string" ? title : ""}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="col-xl-6 d-flex align-items-center">
        <div>
          {number && <p className="mb-3">{number}</p>}
          {title && <h5 className="text-works mb-2">{title}</h5>}
          {points && points.length && (
            <ul className="mb-0">
              {points.map((point) => (
                <li key={uuidv4()}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
