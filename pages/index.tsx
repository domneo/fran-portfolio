import classNames from "classnames";
import Layout from "components/Layout";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Link from "next/link";
import styles from "styles/Home.module.scss";
import client from "tina/__generated__/client";
import {
  CaseStudiesQuery,
  GlobalQuery,
  HomeQuery,
  WorksQuery,
} from "tina/__generated__/types";
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
  let works;
  let caseStudies;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    home = await client.queries.home({ relativePath: `home.mdx` });
    works = await client.queries.works({ relativePath: `works.mdx` });
    caseStudies = await client.queries.caseStudies({
      relativePath: `caseStudies.mdx`,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, home, works, caseStudies },
  };
};

export default function Home({
  global,
  home,
  works,
  caseStudies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: homeData } = useTina<HomeQuery>(home);
  const { data: worksData } = useTina<WorksQuery>(works);
  const { data: caseStudiesData } = useTina<CaseStudiesQuery>(caseStudies);
  const { about } = homeData.home;
  const { title: wTitle, postList: wPostList } = worksData.works;
  const { title: csTitle, postList: csPostList } = caseStudiesData.caseStudies;

  interface Skill {
    name?: string;
  }
  interface Post {
    title?: string;
    description?: string;
    skills?: Array<Skill | null> | null;
  }
  const renderPostList = (post: Post) => {
    return (
      <div>
        <h3 className="mb-0">{post.title}</h3>
        <p className="mb-0 caption light">
          {post.skills?.map((skill, index) => {
            if (skill) {
              return (
                <span key={skill.name} className="d-inline-block">
                  {index !== 0 && <span className="mx-1">•</span>}
                  {skill.name}
                </span>
              );
            }
            return null;
          })}
        </p>
      </div>
    );
  };

  return (
    <Layout data={globalData} showFloatingActions={false}>
      <div className="spacer-lg d-none d-sm-block"></div>
      <section className={classNames([styles.about, styles.section])}>
        <div className="container">
          <div className="row flex-column flex-lg-row align-items-end gap-4">
            <div className="align-self-start align-self-lg-end d-flex justify-content-end col-6 col-sm-5 offset-sm-1 col-md-4 col-lg-4 offset-lg-0 col-xxl-3 offset-xxl-1 col-max-2 ps-3 pe-0">
              <video
                src={about?.image}
                autoPlay
                muted
                loop
                className={styles.image}
              />
            </div>
            <div className="col-8 col-lg-7 col-xxl-6 offset-xxl-1 ps-0 ps-lg-3 pe-3">
              <div className={styles.body2}>
                <TinaMarkdown content={about?.body} components={components} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-lg"></div>
      <section className={classNames([styles.works, styles.section])}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-7 col-xxl-5 offset-xxl-1">
              <h2 className={styles.sectionTitle}>{wTitle}</h2>
              {wPostList &&
                wPostList.length > 0 &&
                wPostList.map((post) => {
                  if (post) {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={post.url ?? ""}
                        className={styles.link}
                        onClick={(event) => {
                          if (!post.url) event.preventDefault();
                        }}
                      >
                        {renderPostList(post)}
                      </Link>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-lg"></div>
      <section className={classNames([styles.caseStudies, styles.section])}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-2 col-lg-7 offset-lg-5 col-xxl-5 offset-xxl-6">
              <h2 className={styles.sectionTitle}>{csTitle}</h2>
              {csPostList &&
                csPostList.length > 0 &&
                csPostList.map((post) => {
                  if (post) {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={post.url ?? ""}
                        className={styles.link}
                        onClick={(event) => {
                          if (!post.url) event.preventDefault();
                        }}
                      >
                        {renderPostList(post)}
                      </Link>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-lg"></div>
    </Layout>
  );
}
