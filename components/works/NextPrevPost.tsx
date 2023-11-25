import { Arrow } from "components/common/Arrow";
import { useState } from "react";
import styles from "styles/WorksPost.module.scss";

interface ArrowLinkProps {
  type: "next" | "prev";
  title: string;
  url: string;
}
const ArrowLink = ({ type, title, url }: ArrowLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <a
      href={url}
      title={title}
      className={styles.arrowLink}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {type === "next" && <span className="text-end">{title}</span>}
      <div className={type === "next" ? styles.nextArrow : styles.prevArrow}>
        <Arrow isHovering={isHovering} />
      </div>
      {type === "prev" && <span>{title}</span>}
    </a>
  );
};

interface NextPrevPostProps {
  nextPost: {
    title: string;
    url?: string;
  };
  prevPost: {
    title: string;
    url?: string;
  };
}
export const NextPrevPost = ({
  nextPost: nextPost,
  prevPost: prevPost,
}: NextPrevPostProps) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
      <div className="w-100 d-flex justify-content-end order-md-2">
        {nextPost?.url && (
          <ArrowLink type="next" title={nextPost.title} url={nextPost.url} />
        )}
      </div>
      <div className="w-100 d-flex justify-content-start order-md-1">
        {prevPost?.url && (
          <ArrowLink type="prev" title={prevPost.title} url={prevPost.url} />
        )}
      </div>
    </div>
  );
};
