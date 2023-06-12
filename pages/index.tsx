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

  return (
    <Layout showHeaderMenu={false} showQuickActions={false}>
      <div className={styles.container}>
        <h1>{header}</h1>
        <video src={about.image} autoPlay muted loop className="w-100" />
        <TinaMarkdown content={about.body} />
      </div>
    </Layout>
  );
}
