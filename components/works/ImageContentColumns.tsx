import { v4 as uuidv4 } from "uuid";

import styles from "styles/works/ImageContentColumns.module.scss";

import { ImageZoom } from "components/common/ImageZoom";

interface ImageContentColumnsProps {
  image: string;
  imageWidth: number;
  imageHeight: number;
  number?: string;
  title?: React.ReactNode;
  points?: Array<React.ReactNode>;
}

export const ImageContentColumns = ({
  image,
  imageWidth,
  imageHeight,
  number,
  title,
  points,
}: ImageContentColumnsProps) => {
  return (
    <div className="row align-items-stretch">
      <div className="col-xl-6 ps-4 pe-5 d-flex align-items-center">
        <ImageZoom
          src={image}
          alt={typeof title === "string" ? title : ""}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className="col-xl-6 d-flex align-items-center text-start">
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
