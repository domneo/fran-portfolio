import Layout from "components/Layout";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import styles from "styles/Home.module.scss";
import client from "tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const getStaticProps: GetStaticProps = async () => {
  let data = {};
  let query = {};
  let variables = { relativePath: `content.md` };
  try {
    const res = await client.queries.homepage(variables);
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
  const { header, about } = tinaData.homepage;

  return (
    <Layout showHeaderMenu={false} showQuickActions={false}>
      <div className={styles.container}>
        {header && <h1>{header}</h1>}
        {about.image && (
          <video src={about.image} autoPlay muted loop className="w-100" />
        )}
        {about.body && <TinaMarkdown content={about.body} />}
      </div>
    </Layout>
  );
}
