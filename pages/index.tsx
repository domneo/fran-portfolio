import Layout from "components/Layout";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import reactStringReplace from "react-string-replace";
import styles from "styles/Home.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery, HomeQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface ParagraphLightProps {
  content: TinaMarkdownContent;
}
const components = {
  ParagraphLight: (props: ParagraphLightProps) => (
    <div className="light">
      <TinaMarkdown content={props.content} />
    </div>
  ),
};
export const getStaticProps: GetStaticProps = async () => {
  let global;
  let home;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    home = await client.queries.home({ relativePath: `home.mdx` });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { home, global },
  };
};

export default function Home({
  global,
  home,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: homeData } = useTina<HomeQuery>(home);
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { header, about } = homeData.home;

  // Add special classes to specific words in header
  let replacedHeader;
  replacedHeader = reactStringReplace(header, /\b(invisible)\b/g, (match) => (
    <span
      key={window.crypto.randomUUID()}
      className={`${styles.invisible} extralight`}
    >
      {match}
    </span>
  ));
  replacedHeader = reactStringReplace(
    replacedHeader,
    /\b(kopi)\b/g,
    (match) => (
      <Link
        key={window.crypto.randomUUID()}
        href={"/contact"}
        className="text-wenge"
      >
        {match}
      </Link>
    )
  );

  return (
    <Layout data={globalData} showFloatingActions={false}>
      <section className={styles.section}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h1>{replacedHeader}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="px-0 col-lg-5 col-xl-4 px-sm-3">
              <video src={about?.image} autoPlay muted loop className="w-100" />
            </div>
            <div className={`col-lg-7 col-xl-6 ${styles.aboutBody}`}>
              <TinaMarkdown content={about?.body} components={components} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
