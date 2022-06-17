import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import styles from "styles/works/NumberedContentImageColumns.module.scss";

interface NumberedContentImageColumnsProps {
  number?: string;
  title?: React.ReactNode;
  points?: Array<React.ReactNode>;
  image: string;
}

export const NumberedContentImageColumns = ({
  image,
  number,
  title,
  points,
}: NumberedContentImageColumnsProps) => {
  return (
    <div className="row align-items-stretch">
      <div className="col-xl-6 d-flex align-items-center">
        {number && <p className={`display-1 ${styles.number}`}>{number}</p>}
        <div>
          {title && <h5 className="text-works mb-3">{title}</h5>}
          {points && points.length && (
            <ul className="mb-0">
              {points.map((point) => (
                <li key={uuidv4()}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-xl-6 ps-5 pe-4">
        <div className={styles.image}>
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};
