import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Layout from "components/Layout";
import Blob from "components/common/Blob";

import styles from "../styles/Home.module.scss";

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
    <div className={styles.linkItem} style={{ ...props.style }}>
      <Link href={href}>
        <a
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
            <h2 className="display-1">{text}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <Layout className={styles.container} hideMenu>
      <Head>
        <title>fran | UX Designer</title>
        <meta name="description" content="A UX Designer portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LinkItem href="/works" number="1" text="Works" />
      <LinkItem
        href="/about"
        number="2"
        text="About"
        style={{ marginLeft: "20%" }}
      />
      <LinkItem
        href="/contact"
        number="3"
        text="Contact"
        style={{ marginLeft: "40%" }}
      />
    </Layout>
  );
}
