import Layout from "components/Layout";
import { WorksImage } from "components/works/WorksImage";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/Works.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery, WorksQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export const getStaticProps: GetStaticProps = async () => {
  let global;
  let works;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    works = await client.queries.works({ relativePath: `works.mdx` });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, works },
  };
};

export default function Works({
  global,
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: worksData } = useTina<WorksQuery>(works);
  const { title, postList } = worksData.works;
  const [focusedItem, setFocusedItem] = useState(0);

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
        <h3 className="mb-2">{post.title}</h3>
        <p className="mb-3 caption light">{post.description}</p>
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
    <Layout data={globalData} showQuickActions={false}>
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div
            className={`${styles.body} d-flex flex-column justify-content-center col-lg-7 col-max-6`}
          >
            <div className={styles.header}>
              <h1>{title}</h1>
            </div>
            <div className={`${styles.carousel} d-lg-none`}>
              {postList &&
                postList.length > 0 &&
                postList.map((post) => {
                  if (post) {
                    return (
                      <Link
                        key={window.crypto.randomUUID()}
                        href={post.url ?? ""}
                        className={styles.link}
                        style={{ cursor: post.url ? "pointer" : "help" }}
                        onClick={(event) => {
                          if (!post.url) event.preventDefault();
                        }}
                      >
                        <div className={styles.sliderImages}>
                          <WorksImage
                            image={post.image}
                            title={post.title}
                            comingSoon={post.comingSoon}
                            number={post.index}
                            imageClass={styles.sliderImage}
                          />
                        </div>
                        {renderPostList(post)}
                      </Link>
                    );
                  }
                  return null;
                })}
            </div>
            <div className="d-none d-lg-block">
              {postList &&
                postList.length > 0 &&
                postList.map((post, index) => {
                  if (post) {
                    return (
                      <Link
                        key={window.crypto.randomUUID()}
                        href={post.url ?? ""}
                        className={styles.link}
                        style={{ cursor: post.url ? "pointer" : "help" }}
                        onClick={(event) => {
                          if (!post.url) event.preventDefault();
                        }}
                        onMouseEnter={() => setFocusedItem(index + 1)}
                        onMouseLeave={() => setFocusedItem(0)}
                        onFocus={() => setFocusedItem(index + 1)}
                        onBlur={() => setFocusedItem(0)}
                      >
                        <div
                          className={`${styles.number} h1 medium d-none d-lg-flex`}
                        >
                          {post.index}
                        </div>
                        {renderPostList(post)}
                      </Link>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
          <div className={`${styles.images} col-lg-5 col-max-4`}>
            <div className={styles.stickyImages}>
              {postList &&
                postList.length > 0 &&
                postList.map((post, index) => {
                  if (post) {
                    return (
                      <WorksImage
                        key={window.crypto.randomUUID()}
                        image={post.image}
                        title={post.title}
                        comingSoon={post.comingSoon}
                        imageClass={styles.stickyImage}
                        isVisible={focusedItem === index + 1}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
