import Layout from "components/Layout";
import Blob from "components/common/Blob";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/Home.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export const getStaticProps: GetStaticProps = async () => {
  let global;

  try {
    global = await client.queries.global({ relativePath: `content.mdx` });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global },
  };
};

export default function Test({
  global,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);

  return (
    <Layout data={globalData}>
      <div className={styles.container}>
        <Head>
          <title>fran | UX Designer</title>
          <meta name="description" content="A UX Designer portfolio website" />
          <link rel="icon" href="/images/favicon.svg" />
        </Head>

        <div className="w-25 h-25">
          <Blob color="var(--black)" />
        </div>

        <h1 className="extralight">Heading 1 Extra Light</h1>
        <h1>Heading 1 Regular</h1>
        <h1 className="medium">Heading 1 Medium</h1>

        <h2 className="extralight">Heading 2 Extra Light</h2>
        <h2>Heading 2 Regular</h2>
        <h2 className="medium">Heading 2 Medium</h2>

        <h3 className="extralight">Heading 3 Extra Light</h3>
        <h3 className="light">Heading 3 Light</h3>
        <h3>Heading 3 Regular</h3>
        <h3 className="medium">Heading 3 Medium</h3>
        <h3 className="bold">Heading 3 Bold</h3>

        <p>
          This is first paragraph text. This is paragraph text. This is
          paragraph text. This is paragraph text. This is paragraph text.
        </p>
        <p>
          This is second paragraph text. This is paragraph text. This is
          paragraph text. This is paragraph text. This is paragraph text.
        </p>
        <p className="caption">This is a line of caption text.</p>
        <p>
          <small>This is a line of small text.</small>
        </p>
        <Link href={"#"}>This is a text with link.</Link>
      </div>
    </Layout>
  );
}
