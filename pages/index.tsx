import Layout from "components/Layout";
import { Heading } from "components/common/Heading";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import reactStringReplace from "react-string-replace";
import styles from "styles/Home.module.scss";
import client from "tina/__generated__/client";
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
  let data = {};
  let query = {};
  let variables = { relativePath: `content.mdx` };
  try {
    const res = await client.queries.home(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { variables, data, query },
  };
};

export default function Home({
  query,
  variables,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: tinaData } = useTina({ query, variables, data });
  const { header, about } = tinaData.home;

  // Add special classes to specific words in header
  let replacedHeader;
  replacedHeader = reactStringReplace(header, /\b(invisible)\b/g, (match) => (
    <span key={window.crypto.randomUUID()} className="extralight">
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
    <Layout showQuickActions={false}>
      <section className={styles.section}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <Heading level={1}>{replacedHeader}</Heading>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="px-0 col-lg-5 col-xl-4 px-sm-3">
              <video src={about.image} autoPlay muted loop className="w-100" />
            </div>
            <div className={`col-lg-7 col-xl-6 ${styles.aboutBody}`}>
              <TinaMarkdown content={about.body} components={components} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
