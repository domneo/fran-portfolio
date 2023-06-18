import classNames from "classnames";
import Layout from "components/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/Works.module.scss";
import client from "tina/__generated__/client";
import { CaseStudiesQuery, GlobalQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { v4 as uuidv4 } from "uuid";

export const getStaticProps: GetStaticProps = async () => {
  let global;
  let caseStudies;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
    caseStudies = await client.queries.caseStudies({
      relativePath: `caseStudies.mdx`,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global, caseStudies },
  };
};

interface CaseStudiesImageProps {
  image: string;
  title: string;
  comingSoon?: boolean | null;
  number?: number;
  imageClass: string;
  isVisible?: boolean | null;
}
const CaseStudiesImage = ({
  image,
  title,
  comingSoon,
  number,
  imageClass,
  isVisible,
}: CaseStudiesImageProps) => (
  <div
    className={classNames(imageClass, {
      [styles.isVisible]: isVisible,
    })}
  >
    <Image
      src={image}
      alt={title}
      fill
      sizes={"(min-width: 992px) 80vw, 180vw"}
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      priority
    />
    {comingSoon && (
      <div className={styles.comingSoon}>
        <p className="mb-4 text-center text-white w-100 h2">
          Case study coming soon
        </p>
      </div>
    )}
    {number && (
      <div className={styles.numberOverlay}>
        <div className={`${styles.number} h1 medium text-white`}>{number}</div>
      </div>
    )}
  </div>
);

export default function CaseStudies({
  global,
  caseStudies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const { data: caseStudiesData } = useTina<CaseStudiesQuery>(caseStudies);
  const { title, postList } = caseStudiesData.caseStudies;
  const [focusedItem, setFocusedItem] = useState(0);

  return (
    <Layout data={globalData} showQuickActions={false}>
      <div className="container-xxl">
        <div className={`${styles.header} row justify-content-center`}>
          <div className="col-max-10">
            <h1>{title}</h1>
          </div>
        </div>
        <div className={`${styles.body} row justify-content-center`}>
          <div className="col-lg-7 col-max-6">
            <div className={styles.carousel}>
              {postList &&
                postList.length > 0 &&
                postList.map((post, index) => {
                  if (post) {
                    return (
                      <Link
                        key={uuidv4()}
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
                        <div className={styles.sliderImages}>
                          <CaseStudiesImage
                            image={post.image}
                            title={post.title}
                            comingSoon={post.comingSoon}
                            number={post.index}
                            imageClass={styles.sliderImage}
                          />
                        </div>
                        <div
                          className={`${styles.number} h1 medium d-none d-lg-flex`}
                        >
                          {post.index}
                        </div>
                        <div>
                          <p className="mb-2 semibold allcaps">{post.title}</p>
                          <p className="mb-3 caption light">
                            {post.description}
                          </p>
                          <p className="mb-0 caption light">
                            {post.skills?.map((skill, index) => {
                              if (skill) {
                                return (
                                  <span
                                    key={skill.name}
                                    className="d-inline-block"
                                  >
                                    {index !== 0 && (
                                      <span className="mx-1">•</span>
                                    )}
                                    {skill.name}
                                  </span>
                                );
                              }
                              return null;
                            })}
                          </p>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                })}
            </div>
          </div>
          <div className="col-lg-5 col-max-4">
            <div className={styles.stickyImages}>
              {postList &&
                postList.length > 0 &&
                postList.map((post, index) => {
                  if (post) {
                    return (
                      <CaseStudiesImage
                        key={uuidv4()}
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
