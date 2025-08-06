import styles from "styles/Impact.module.scss";

interface ImpactItemProps {
  title?: string | null;
  description?: string | null;
}
export const ImpactItem = ({ title, description }: ImpactItemProps) => {
  return (
    <div className={styles.impactItem}>
      {title && <p className="h2 fw-bold mb-0">{title}</p>}
      {description && <p className="mb-0">{description}</p>}
    </div>
  );
};

interface ImpactProps {
  items?: (ImpactItemProps | null)[] | null | undefined;
}
export const Impact = ({ items }: ImpactProps) => {
  return (
    <div
      className={`${styles.impact} row row-gap-5 justify-content-center mx-auto`}
    >
      {items?.map((impactItem) => (
        <div
          key={window.crypto.randomUUID()}
          className="col-sm-6 px-sm-4 col-lg-3"
        >
          <ImpactItem
            title={impactItem?.title || ""}
            description={impactItem?.description || ""}
          />
        </div>
      ))}
    </div>
  );
};
