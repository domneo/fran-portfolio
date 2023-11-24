import styles from "styles/ImageWithCaption.module.scss";

export interface ImageWithCaptionProps {
  image: string;
  title?: string | null;
  caption?: string | null;
}
export const ImageWithCaption = (props: ImageWithCaptionProps) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.image}
        alt={props.title || ""}
        sizes={"160vw"}
        className={styles.image}
      />
      {props.caption && (
        <p className="mt-1 w-100">
          <small>{props.caption}</small>
        </p>
      )}
    </>
  );
};
