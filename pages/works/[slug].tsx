import Layout from "components/Layout";
import { Divider } from "components/common/Divider";
import { ImageSlider } from "components/common/ImageSlider";
import { Spacer } from "components/common/Spacer";
import { ThreeColumn111 } from "components/common/ThreeColumn111";
import { TwoColumn11 } from "components/common/TwoColumn11";
import { TwoColumn12 } from "components/common/TwoColumn12";
import { Section } from "components/works/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "styles/WorksPost.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery, Works_PostsQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const getStaticPaths: GetStaticPaths = async () => {
  const worksPosts = await client.queries.works_postsConnection();
  return {
    paths:
      worksPosts.data.works_postsConnection.edges?.map((edge) => ({
        params: { slug: edge?.node?._sys.filename },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let global;
  let worksPost;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    worksPost = await client.queries.works_posts({
      relativePath: `${params?.slug}.mdx`,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, worksPost },
  };
};

export default function WorksPost({
  global,
  worksPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: worksPostData } = useTina<Works_PostsQuery>(worksPost);
  const { title, subtitle, summary, background, anchorLinksTitle, sections } =
    worksPostData.works_posts;

  return (
    <Layout data={globalData} showQuickActions={false}>
      <div className="container-xxl">
        <div className={`${styles.header} row justify-content-center`}>
          <div className="col-lg-10">
            <h3 className="semibold allcaps">{subtitle}</h3>
            <h1>{title}</h1>
          </div>
          <div className="col-11 offset-1 col-sm-10 offset-sm-2 col-lg-7 offset-lg-3 col-xl-6 offset-xl-4">
            <p>{summary}</p>
          </div>
        </div>
        <div className="spacer-xl" />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <TinaMarkdown content={background} />
          </div>
        </div>
        <Divider />
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-3">
            <h2>{anchorLinksTitle}</h2>
          </div>
          <div className="col-md-8 col-lg-5">
            {sections?.map((section) => {
              if (section?.__typename === "Works_postsSectionsSection") {
                const { anchorId, title, showSectionTitle } = section;
                if (showSectionTitle) {
                  return (
                    <p key={window.crypto.randomUUID()}>
                      <a href={`#${anchorId || ""}`} title={title}>
                        {title}
                      </a>
                    </p>
                  );
                }
              }
            })}
          </div>
        </div>
        <div className={`${styles.body} row justify-content-center`}>
          <div className="col-lg-10">
            {sections?.map((section) => {
              if (section?.__typename === "Works_postsSectionsSection") {
                const { showSectionTitle, title, anchorId, blocks } = section;
                return (
                  <Section
                    key={window.crypto.randomUUID()}
                    anchorId={anchorId}
                    title={title}
                    showSectionTitle={showSectionTitle}
                  >
                    {blocks?.map((block) => {
                      let blockComponent;
                      const richTextComponents = {
                        spacer: Spacer,
                        divider: Divider,
                      };
                      switch (block?.__typename) {
                        case "Works_postsSectionsSectionBlocksSpacer":
                          if (block.size) {
                            const size = block.size.toLowerCase() as
                              | "sm"
                              | "md"
                              | "lg"
                              | "xl";
                            blockComponent = <Spacer size={size} />;
                          }
                          break;
                        case "Works_postsSectionsSectionBlocksDivider":
                          blockComponent = <Divider />;
                          break;
                        case "Works_postsSectionsSectionBlocksImageSlider":
                          if (block.slides) {
                            blockComponent = (
                              <ImageSlider slides={block.slides} />
                            );
                          }
                          break;
                        case "Works_postsSectionsSectionBlocksOneColumn":
                          blockComponent = (
                            <TinaMarkdown
                              content={block.content}
                              components={richTextComponents}
                            />
                          );
                          break;
                        case "Works_postsSectionsSectionBlocksTwoColumn_1_1":
                          blockComponent = (
                            <TwoColumn11 col1={block.col1} col2={block.col2} />
                          );
                          break;
                        case "Works_postsSectionsSectionBlocksTwoColumn_1_2":
                          blockComponent = (
                            <TwoColumn12 col1={block.col1} col2={block.col2} />
                          );
                          break;
                        case "Works_postsSectionsSectionBlocksThreeColumn_1_1_1":
                          blockComponent = (
                            <ThreeColumn111
                              col1={block.col1}
                              col2={block.col2}
                              col3={block.col3}
                            />
                          );
                          break;
                        default:
                          blockComponent = null;
                          break;
                      }
                      return (
                        <div key={window.crypto.randomUUID()}>
                          {blockComponent}
                        </div>
                      );
                    })}
                  </Section>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
