import Layout from "components/Layout";
import { AnchorLink } from "components/common/AnchorLink";
import { Divider } from "components/common/Divider";
import { ImageSlider } from "components/common/ImageSlider";
import { ArticleImage } from "components/common/ArticleImage";
import { Banner } from "components/common/Banner";
import { Spacer } from "components/common/Spacer";
import { ThreeColumn111 } from "components/common/ThreeColumn111";
import { TwoColumn11 } from "components/common/TwoColumn11";
import { TwoColumn12 } from "components/common/TwoColumn12";
import { NextPrevPost } from "components/works/NextPrevPost";
import { Section } from "components/works/Section";
import { SectionTracker } from "components/works/SectionTracker";
import { Tabs } from "components/works/Tabs";
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
      tabs {
        label
        sections {
          __typename
          ... on Works_postsTabsSectionsSection {
            anchorId
            title
            showSectionTitle
            blocks {
              __typename
              ... on Works_postsTabsSectionsSectionBlocksSpacer {
                size
              }
              ... on Works_postsTabsSectionsSectionBlocksDivider {
                label
              }
              ... on Works_postsTabsSectionsSectionBlocksImageWithCaption {
                image
                title
                caption
                enableZoom
              }
              ... on Works_postsTabsSectionsSectionBlocksImageSlider {
                slides {
                  __typename
                  image
                  title
                  caption
                  enableZoom
                }
              }
              ... on Works_postsTabsSectionsSectionBlocksBanner {
                content
              }
              ... on Works_postsTabsSectionsSectionBlocksOneColumn {
                content
              }
              ... on Works_postsTabsSectionsSectionBlocksTwoColumn_1_1 {
                col1
                col2
              }
              ... on Works_postsTabsSectionsSectionBlocksTwoColumn_1_2 {
                col1
                col2
              }
              ... on Works_postsTabsSectionsSectionBlocksThreeColumn_1_1_1 {
                col1
                col2
                col3
              }
            }
          }
          ... on Works_postsTabsSectionsSection_links {
            title
          }
          ... on Works_postsTabsSectionsSection_tracker {
            title
          }
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
    currentPost = await client.request(
      {
        query,
        variables: {
          filter: {
            title: {
              eq: worksPost.data.works_posts.title,
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
          after: currentPost.data.works_postsConnection.edges[0].cursor,
        },
      },
      {},
    );
    prevPost = await client.request(
      {
        query,
        variables: {
          last: 1,
          before: currentPost.data.works_postsConnection.edges[0].cursor,
        },
      },
      {},
    );
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
  const { title, subtitle, overview, disclaimer, tabs } =
    worksPostData.works_posts;

  const richTextComponents = {
    spacer: Spacer,
    divider: Divider,
  };

  function renderBlock(block: any, type: any) {
    if (!block) return null;
    switch (type) {
      case "Spacer":
        if (block.size) {
          const size = block.size.toLowerCase() as "sm" | "md" | "lg" | "xl";
          return <Spacer size={size} />;
        }
        return null;
      case "Divider":
        return <Divider />;
      case "ImageWithCaption":
        if (block.image) {
          return (
            <ArticleImage
              image={block.image}
              title={block.title}
              caption={block.caption}
              enableZoom={block.enableZoom}
            />
          );
        }
        return null;
      case "ImageSlider":
        if (block.slides) {
          return <ImageSlider images={block.slides} />;
        }
        return null;
      case "Banner":
        return <Banner content={block.content} />;
      case "OneColumn":
        return (
          <TinaMarkdown
            content={block.content}
            components={richTextComponents}
          />
        );
      case "TwoColumn_1_1":
        return <TwoColumn11 col1={block.col1} col2={block.col2} />;
      case "TwoColumn_1_2":
        return <TwoColumn12 col1={block.col1} col2={block.col2} />;
      case "ThreeColumn_1_1_1":
        return (
          <ThreeColumn111
            col1={block.col1}
            col2={block.col2}
            col3={block.col3}
          />
        );
      default:
        return null;
    }
  }

  function renderSections(sections: any[] | null | undefined) {
    return sections?.map((section, i) => {
      switch (section?.__typename) {
        case "Works_postsTabsSectionsSection":
          return (
            <Section
              key={i}
              anchorId={section.anchorId}
              title={section.title}
              showSectionTitle={section.showSectionTitle}
            >
              {section.blocks?.map((block: any, j: number) => {
                const type = block.__typename?.split("Blocks").pop();
                return (
                  <div
                    key={j}
                    className={`${styles.blockWrapper} ${styles[type]}`}
                  >
                    {renderBlock(block, type)}
                  </div>
                );
              })}
            </Section>
          );
        case "Works_postsTabsSectionsSection_links":
          return (
            <Section key={i} title={section.title} showSectionTitle centerTitle>
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                  {sections?.map((s, k) => {
                    if (
                      s?.__typename === "Works_postsTabsSectionsSection" &&
                      s.anchorId
                    ) {
                      return (
                        <p key={k}>
                          <AnchorLink
                            anchorId={`#${s.anchorId || ""}`}
                            title={s.title}
                          >
                            {s.title}
                          </AnchorLink>
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </Section>
          );
        case "Works_postsTabsSectionsSection_tracker":
          const trackerSections = (sections ?? [])
            .filter(
              (section) =>
                section?.__typename === "Works_postsTabsSectionsSection" &&
                !!section.anchorId,
            )
            .map((section) => ({
              anchorId: section.anchorId,
              title: section?.title || "",
            }));
          return (
            <>
              <div className="spacer-md"></div>
              <SectionTracker
                key={i}
                sections={trackerSections}
                position="top"
              />
            </>
          );
        default:
          return null;
      }
    });
  }

  return (
    <Layout data={globalData} showFloatingActions={true}>
      <div className="container-xxl">
        <div className={`${styles.header} row justify-content-center`}>
          <div className="col-lg-10">
            <h3 className="semibold allcaps">{subtitle}</h3>
            <h1>{title}</h1>
          </div>
          <div className="caption-all col-12 col-sm-10 col-lg-8 col-xl-7">
            <TinaMarkdown content={overview} />
          </div>
          {disclaimer?.children?.length > 0 && (
            <div className="col-12 col-sm-10 col-lg-8 col-xl-7">
              <Banner content={disclaimer} />
            </div>
          )}
        </div>
        <div className="spacer-md" />
        <div className={`row justify-content-center`}>
          <div className="col-lg-10">
            <Tabs
              tabs={(tabs ?? [])
                .filter((tab): tab is NonNullable<typeof tab> => tab != null)
                .map((tab) => ({
                  label: tab.label,
                  children: renderSections(tab.sections),
                }))}
            />
            <div className="spacer-xl" />
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
