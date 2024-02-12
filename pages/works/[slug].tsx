import Layout from "components/Layout";
import { AnchorLink } from "components/common/AnchorLink";
import { Divider } from "components/common/Divider";
import { ImageSlider } from "components/common/ImageSlider";
import { ArticleImage } from "components/common/ArticleImage";
import { Spacer } from "components/common/Spacer";
import { ThreeColumn111 } from "components/common/ThreeColumn111";
import { TwoColumn11 } from "components/common/TwoColumn11";
import { TwoColumn12 } from "components/common/TwoColumn12";
import { NextPrevPost } from "components/works/NextPrevPost";
import { Section } from "components/works/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "styles/WorksPost.module.scss";
import client from "tina/__generated__/client";
import {
  GlobalQuery,
  Works_PostsConnectionQuery,
  Works_PostsQuery,
} from "tina/__generated__/types";
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
  const query = `
    query works_postsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Works_postsFilter) {
      works_postsConnection(
        before: $before
        after: $after
        first: $first
        last: $last
        sort: $sort
        filter: $filter
      ) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        totalCount
        edges {
          cursor
          node {
            ... on Document {
              _sys {
                filename
                basename
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
            ...Works_postsParts
          }
        }
      }
    }

    fragment Works_postsParts on Works_posts {
      __typename
      title
      subtitle
      overview
      sections {
        __typename
        ... on Works_postsSectionsSection {
          anchorId
          title
          showSectionTitle
          blocks {
            __typename
            ... on Works_postsSectionsSectionBlocksSpacer {
              size
            }
            ... on Works_postsSectionsSectionBlocksDivider {
              label
            }
            ... on Works_postsSectionsSectionBlocksImageWithCaption {
              image
              title
              caption
              enableZoom
            }
            ... on Works_postsSectionsSectionBlocksImageSlider {
              slides {
                __typename
                image
                title
                caption
                enableZoom
              }
            }
            ... on Works_postsSectionsSectionBlocksOneColumn {
              content
            }
            ... on Works_postsSectionsSectionBlocksTwoColumn_1_1 {
              col1
              col2
            }
            ... on Works_postsSectionsSectionBlocksTwoColumn_1_2 {
              col1
              col2
            }
            ... on Works_postsSectionsSectionBlocksThreeColumn_1_1_1 {
              col1
              col2
              col3
            }
          }
        }
        ... on Works_postsSectionsSection_links {
          title
        }
      }
    }
  `;

  let global;
  let worksPost;
  let currentPost;
  let nextPost;
  let prevPost;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    worksPost = await client.queries.works_posts({
      relativePath: `${params?.slug}.mdx`,
    });
    currentPost = await client.request({
      query,
      variables: {
        filter: {
          title: {
            eq: worksPost.data.works_posts.title,
          },
        },
      },
    });
    nextPost = await client.request({
      query,
      variables: {
        first: 1,
        after: currentPost.data.works_postsConnection.edges[0].cursor,
      },
    });
    prevPost = await client.request({
      query,
      variables: {
        last: 1,
        before: currentPost.data.works_postsConnection.edges[0].cursor,
      },
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, worksPost, nextPost, prevPost },
  };
};

export default function WorksPost({
  global,
  worksPost,
  nextPost,
  prevPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: worksPostData } = useTina<Works_PostsQuery>(worksPost);
  const { data: nextPostData } = useTina<Works_PostsConnectionQuery>(nextPost);
  const { data: prevPostData } = useTina<Works_PostsConnectionQuery>(prevPost);
  const { title, subtitle, overview, sections } = worksPostData.works_posts;

  return (
    <Layout data={globalData} showFloatingActions={true}>
      <div className="container-xxl">
        <div className={`${styles.header} row justify-content-center`}>
          <div className="col-lg-10">
            <h3 className="semibold allcaps">{subtitle}</h3>
            <h1>{title}</h1>
          </div>
          <div className="caption-all col-12 col-sm-10 offset-sm-2 col-lg-7 offset-lg-3 col-xxl-6 offset-xxl-4">
            <TinaMarkdown content={overview} />
          </div>
        </div>
        <div className="spacer-lg" />
        <div className={`row justify-content-center`}>
          <div className="col-lg-10 col-xl-8">
            {sections?.map((section) => {
              switch (section?.__typename) {
                case "Works_postsSectionsSection":
                  return (
                    <Section
                      key={window.crypto.randomUUID()}
                      anchorId={section.anchorId}
                      title={section.title}
                      showSectionTitle={section.showSectionTitle}
                    >
                      {section.blocks?.map((block) => {
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
                          case "Works_postsSectionsSectionBlocksImageWithCaption":
                            if (block.image) {
                              blockComponent = (
                                <ArticleImage
                                  image={block.image}
                                  title={block.title}
                                  caption={block.caption}
                                  enableZoom={block.enableZoom}
                                />
                              );
                            }
                            break;
                          case "Works_postsSectionsSectionBlocksImageSlider":
                            if (block.slides) {
                              blockComponent = (
                                <ImageSlider images={block.slides} />
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
                              <TwoColumn11
                                col1={block.col1}
                                col2={block.col2}
                              />
                            );
                            break;
                          case "Works_postsSectionsSectionBlocksTwoColumn_1_2":
                            blockComponent = (
                              <TwoColumn12
                                col1={block.col1}
                                col2={block.col2}
                              />
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
                case "Works_postsSectionsSection_links":
                  return (
                    <Section
                      key={window.crypto.randomUUID()}
                      title={section.title}
                      showSectionTitle
                      centerTitle
                    >
                      <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                          {sections?.map((section) => {
                            if (
                              section?.__typename ===
                                "Works_postsSectionsSection" &&
                              section.anchorId
                            ) {
                              return (
                                <p key={window.crypto.randomUUID()}>
                                  <AnchorLink
                                    anchorId={`#${section.anchorId || ""}`}
                                    title={section.title}
                                  >
                                    {section.title}
                                  </AnchorLink>
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </Section>
                  );
                default:
                  return null;
              }
            })}
            <div className="spacer-md" />
            <NextPrevPost
              nextPost={{
                title:
                  nextPostData.works_postsConnection.edges?.[0]?.node?.title ||
                  "Next post",
                url: nextPostData.works_postsConnection.edges?.[0]?.node?._sys
                  .filename,
              }}
              prevPost={{
                title:
                  prevPostData.works_postsConnection.edges?.[0]?.node?.title ||
                  "Previous post",
                url: prevPostData.works_postsConnection.edges?.[0]?.node?._sys
                  .filename,
              }}
            />
          </div>
        </div>
        <div className="spacer-xl" />
      </div>
    </Layout>
  );
}
