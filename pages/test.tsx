import Head from "next/head";
import Link from "next/link";

import styles from "styles/Home.module.scss";

import Layout from "components/Layout";
import Blob from "components/common/Blob";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>fran | UX Designer</title>
          <meta name="description" content="A UX Designer portfolio website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ width: "308px", height: "308px" }}>
          <Blob />
        </div>
        <h1 className="display-1">Display 1</h1>
        <h2 className="display-2">Display 2</h2>
        <h3 className="display-3">Display 3</h3>
        <h4 className="display-4">Display 4</h4>
        <h5 className="display-5">Display 5</h5>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>
          This is first paragraph text. This is paragraph text. This is
          paragraph text. This is paragraph text. This is paragraph text.
        </p>
        <p>
          This is second paragraph text. This is paragraph text. This is
          paragraph text. This is paragraph text. This is paragraph text.
        </p>
        <p>
          <small>This is a line of small text.</small>
        </p>
        <p className="caption">This is a line of caption text.</p>
        <Link href={"#"}>
          <a>This is a text with link.</a>
        </Link>
      </div>
    </Layout>
  );
}
