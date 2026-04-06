import { TinaMarkdown } from "tinacms/dist/rich-text";
import styles from "styles/Banner.module.scss";

interface BannerProps {
  content: any;
}

export const Banner = ({ content }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_306_641"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_306_641)">
            <path
              d="M9.80762 21.5V8.33274C8.56012 8.09941 7.52712 7.50224 6.70862 6.54124C5.88995 5.58041 5.42295 4.46407 5.30762 3.19224H6.30762C6.43578 4.39607 6.92645 5.40216 7.77962 6.21049C8.63278 7.01882 9.62287 7.42299 10.7499 7.42299H13.2499C13.6345 7.42299 13.9602 7.47941 14.2269 7.59224C14.4935 7.70507 14.7634 7.89807 15.0364 8.17124L19.2729 12.4077L18.5654 13.1155L14.1921 8.74224V21.5H13.1921V15.6155H10.8076V21.5H9.80762ZM10.7989 5.27799C10.4714 4.95032 10.3076 4.54999 10.3076 4.07699C10.3076 3.60382 10.4714 3.20349 10.7989 2.87599C11.1265 2.54832 11.5269 2.38449 11.9999 2.38449C12.4729 2.38449 12.8732 2.54832 13.2009 2.87599C13.5284 3.20349 13.6921 3.60382 13.6921 4.07699C13.6921 4.54999 13.5284 4.95032 13.2009 5.27799C12.8732 5.60549 12.4729 5.76924 11.9999 5.76924C11.5269 5.76924 11.1265 5.60549 10.7989 5.27799Z"
              fill="var(--rosetaupe)"
            />
          </g>
        </svg>
      </div>
      <div className={styles.content}>
        <TinaMarkdown content={content} />
      </div>
    </div>
  );
};
