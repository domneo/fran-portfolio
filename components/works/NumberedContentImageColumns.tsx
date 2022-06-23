import { v4 as uuidv4 } from "uuid";

import styles from "styles/works/NumberedContentImageColumns.module.scss";

import { ImageZoom } from "components/common/ImageZoom";

interface NumberedContentImageColumnsProps {
  number?: string;
  title?: React.ReactNode;
  points?: Array<React.ReactNode>;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const NumberedContentImageColumns = ({
  image,
  imageWidth,
  imageHeight,
  number,
  title,
  points,
}: NumberedContentImageColumnsProps) => {
  return (
    <div className="row align-items-stretch h-100">
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
      <div className="col-xl-6 ps-5 pe-4 d-flex align-items-center">
        <ImageZoom
          src={image}
          alt={typeof title === "string" ? title : ""}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
};
