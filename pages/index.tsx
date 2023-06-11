import Link from "next/link";
import { useState } from "react";

import styles from "styles/Home.module.scss";

import Layout from "components/Layout";
import Blob from "components/common/Blob";

interface LinkItemProps {
  href: string;
  number: string;
  text: string;
  [index: string]: any;
}
const LinkItem = ({ href, number, text, ...props }: LinkItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const hoverClass = text.trim().toLowerCase() + "Hover";

  return (
    <div className={styles[`linkItem${number}`]}>
      <Link
        href={href}
        className={`${styles.itemLink} ${styles[hoverClass]}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={styles.itemBlob}>
          <div className={`${styles.blobWrapper} ${styles[hoverClass]}`}>
            <Blob isHovering={isHovering} />
          </div>
        </div>
        <div className={styles.itemContent}>
          <span className="h5 px-2">{number}</span>
          <h2 className={`${styles.itemText} display-1`}>{text}</h2>
        </div>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <Layout showHeaderMenu={false} showQuickActions={false}>
      <div className={styles.container}>
        <LinkItem href="/works" number="1" text="Works" />
        <LinkItem href="/about" number="2" text="About" />
        <LinkItem href="/contact" number="3" text="Contact" />
      </div>
    </Layout>
  );
}
