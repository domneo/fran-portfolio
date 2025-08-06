import Layout from "components/Layout";
import { Header } from "components/common/Header";
import { Divider } from "components/common/Divider";
import { ImageSlider } from "components/common/ImageSlider";
import { Impact, ImpactItem } from "components/common/Impact";
import { ArticleImage } from "components/common/ArticleImage";
import { Spacer } from "components/common/Spacer";
import { NextPrevPost } from "components/works/NextPrevPost";
import { Section } from "components/works/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import client from "tina/__generated__/client";
import {
  GlobalQuery,
  CaseStudies_PostsQuery,
  CaseStudies_PostsConnectionQuery,
} from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudiesPosts = await client.queries.caseStudies_postsConnection();
  return {
    paths:
      caseStudiesPosts.data.caseStudies_postsConnection.edges?.map((edge) => ({
        params: { slug: edge?.node?._sys.filename },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    query caseStudies_postsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseStudies_postsFilter) {
      caseStudies_postsConnection(
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
            ...CaseStudies_postsParts
          }
        }
      }
    }

    fragment CaseStudies_postsParts on CaseStudies_posts {
      __typename
      title
      sections {
        __typename
        ... on CaseStudies_postsSectionsSection {
          anchorId
          title
          showSectionTitle
          blocks {
            __typename
            ... on CaseStudies_postsSectionsSectionBlocksSpacer {
              size
            }
            ... on CaseStudies_postsSectionsSectionBlocksDivider {
              label
            }
            ... on CaseStudies_postsSectionsSectionBlocksImageWithCaption {
              image
              title
              caption
              enableZoom
            }
            ... on CaseStudies_postsSectionsSectionBlocksImageSlider {
              slides {
                __typename
                image
                title
                caption
                enableZoom
              }
            }
            ... on CaseStudies_postsSectionsSectionBlocksOneColumn {
              content
            }
            ... on CaseStudies_postsSectionsSectionBlocksTwoColumn_1_1 {
              col1
              col2
            }
            ... on CaseStudies_postsSectionsSectionBlocksTwoColumn_1_2 {
              col1
              col2
            }
            ... on CaseStudies_postsSectionsSectionBlocksThreeColumn_1_1_1 {
              col1
              col2
              col3
            }
          }
        }
      }
    }
  `;

  let global;
  let caseStudiesPost;
  let currentPost;
  let nextPost;
  let prevPost;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    caseStudiesPost = await client.queries.caseStudies_posts({
      relativePath: `${params?.slug}.mdx`,
    });
    currentPost = await client.request(
      {
        query,
        variables: {
          filter: {
            title: {
              eq: caseStudiesPost.data.caseStudies_posts.title,
            },
          },
        },
      },
      {},
    );
    nextPost = await client.request(
      {
        query,
        variables: {
          first: 1,
          after: currentPost.data.caseStudies_postsConnection.edges[0].cursor,
        },
      },
      {},
    );
    prevPost = await client.request(
      {
        query,
        variables: {
          last: 1,
          before: currentPost.data.caseStudies_postsConnection.edges[0].cursor,
        },
      },
      {},
    );
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, caseStudiesPost, nextPost, prevPost },
  };
};

export default function CaseStudiesPost({
  global,
  caseStudiesPost,
  nextPost,
  prevPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: caseStudiesPostData } =
    useTina<CaseStudies_PostsQuery>(caseStudiesPost);
  const { data: nextPostData } =
    useTina<CaseStudies_PostsConnectionQuery>(nextPost);
  const { data: prevPostData } =
    useTina<CaseStudies_PostsConnectionQuery>(prevPost);
  const { sections } = caseStudiesPostData.caseStudies_posts;

  return (
    <Layout data={globalData} showFloatingActions={true}>
      <div className="container-xxl">
        <div className="spacer-lg"></div>
        {sections?.map((section) => {
          switch (section?.__typename) {
            case "CaseStudies_postsSectionsHeader":
              return (
                <Header
                  key={window.crypto.randomUUID()}
                  title={section.title || ""}
                  subtitle={section.subtitle || ""}
                  overview={section.overview || ""}
                />
              );
            case "CaseStudies_postsSectionsSpacer":
              if (section.size) {
                const size = section.size.toLowerCase() as
                  | "sm"
                  | "md"
                  | "lg"
                  | "xl";
                return <Spacer key={window.crypto.randomUUID()} size={size} />;
              }
              break;
            case "CaseStudies_postsSectionsImpact":
              return <Impact items={section.items}></Impact>;
            case "CaseStudies_postsSectionsSection":
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
                      case "CaseStudies_postsSectionsSectionBlocksSpacer":
                        if (block.size) {
                          const size = block.size.toLowerCase() as
                            | "sm"
                            | "md"
                            | "lg"
                            | "xl";
                          blockComponent = <Spacer size={size} />;
                        }
                        break;
                      case "CaseStudies_postsSectionsSectionBlocksDivider":
                        blockComponent = <Divider />;
                        break;
                      case "CaseStudies_postsSectionsSectionBlocksRichTextContent":
                        blockComponent = (
                          <TinaMarkdown
                            content={block.content}
                            components={richTextComponents}
                          />
                        );
                        break;
                      case "CaseStudies_postsSectionsSectionBlocksImageWithCaption":
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
                      case "CaseStudies_postsSectionsSectionBlocksImageSlider":
                        if (block.slides) {
                          blockComponent = (
                            <ImageSlider images={block.slides} />
                          );
                        }
                        break;
                      case "CaseStudies_postsSectionsSectionBlocksImpact":
                        blockComponent = <Impact items={block.items}></Impact>;
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
            default:
              return null;
          }
        })}
        <div className="spacer-md" />
        <NextPrevPost
          nextPost={{
            title:
              nextPostData.caseStudies_postsConnection.edges?.[0]?.node
                ?.title || "Next post",
            url: nextPostData.caseStudies_postsConnection.edges?.[0]?.node?._sys
              .filename,
          }}
          prevPost={{
            title:
              prevPostData.caseStudies_postsConnection.edges?.[0]?.node
                ?.title || "Previous post",
            url: prevPostData.caseStudies_postsConnection.edges?.[0]?.node?._sys
              .filename,
          }}
        />
        <div className="spacer-xl" />
      </div>
    </Layout>
  );
}
