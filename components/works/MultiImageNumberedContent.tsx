import { v4 as uuidv4 } from "uuid";

import styles from "styles/works/MultiImageNumberedContent.module.scss";

interface MultiImageNumberedContentProps {
  topContent?: React.ReactNode;
  number?: string;
  title?: React.ReactNode;
  points?: Array<React.ReactNode>;
}

export const MultiImageNumberedContent = ({
  topContent,
  number,
  title,
  points,
}: MultiImageNumberedContentProps) => {
  return (
    <div>
      <div className="row">
        <div className="col">{topContent}</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 d-flex align-items-center">
          {number && <p className={`display-1 ${styles.number}`}>{number}</p>}
          <div className="flex-grow-1 ps-2">
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
      </div>
    </div>
  );
};
