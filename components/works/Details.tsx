import styles from "styles/works/Details.module.scss";

import { Stars } from "components/common/Stars";

interface DetailType {
  title: string;
  content: string;
}

interface DetailsProps {
  details: Array<DetailType>;
  debut: boolean;
}

export const Details = ({ details, debut }: DetailsProps) => {
  return (
    <section className={`spacer-md`}>
      {details && details.length > 0 && (
        <div className="row spacer-sm">
          <div className="col-lg-7 offset-lg-5">
            {details.map((detail) => (
              <div key={detail.title} className="row">
                <div className="col-3">
                  <h5 className="text-works">{detail.title}</h5>
                </div>
                <div className="col-9">
                  <p className="mb-3">{detail.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {debut && <Stars>🐣 This was my debut UIUX project!</Stars>}
    </section>
  );
};
