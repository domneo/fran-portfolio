import classNames from "classnames";
import Layout from "components/Layout";
import { Banner } from "components/common/Banner";
import { WireframeCastlery } from "components/common/WireframeCastlery";
import { WireframeSTDSTA } from "components/common/WireframeSTDSTA";
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
    works = await client.queries.works({ relativePath: `castlery.mdx` });
    caseStudies = await client.queries.caseStudies({
      relativePath: `st-dsta.mdx`,
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
      <style jsx global>
        {`
          html {
            @media (min-width: 992px) {
              --header-height: 68px;
              --footer-height: 52px;
              scroll-snap-type: block mandatory;
              scroll-padding: var(--header-height);
            }
          }
        `}
      </style>
      <div className="spacer-sm d-lg-none"></div>
      <section className={classNames([styles.about, styles.section])}>
        <div className="container">
          <div className="row flex-column flex-lg-row align-items-center justify-content-lg-center gap-4">
            <div className="align-self-start align-self-lg-center d-flex justify-content-end col-6 col-sm-5 offset-sm-1 col-md-4 col-lg-4 offset-lg-0 col-xxl-3 ps-3 pe-0">
              <video
                src={about?.image}
                autoPlay
                muted
                loop
                className={styles.image}
              />
            </div>
            <div className="col-10 offset-2 col-sm-8 col-lg-7 offset-lg-0 col-xxl-6 ps-0 ps-lg-3 pe-3">
              <div className={styles.body2}>
                <TinaMarkdown content={about?.body} components={components} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-xl"></div>
      <section className={classNames([styles.stdsta, styles.section])}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <WireframeSTDSTA />
            </div>
          </div>
          <div className="spacer-sm"></div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-xl-8">
              <Banner
                content={{
                  type: "root",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          text: "The projects here consists of high-classification and confidential materials, which cannot be shared in public. To give you an idea of the nature of the project: I am unable to bring any unauthorized devices into my work environment.",
                        },
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-xl"></div>
      <section className={classNames([styles.castlery, styles.section])}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <WireframeCastlery />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-lg d-lg-none"></div>
    </Layout>
  );
}
