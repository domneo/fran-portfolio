import Layout from "components/Layout";
import { MeTo } from "components/contact/MeTo";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "styles/Contact.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export const getStaticProps: GetStaticProps = async () => {
  let global;

  try {
    global = await client.queries.global({ relativePath: `content.mdx` });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: { global },
  };
};

export default function Contact({
  global,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: globalData } = useTina<GlobalQuery>(global);
  const yesdogRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  return (
    <Layout data={globalData} showQuickActions={false} showFooterMenu={false}>
      {/* <Arrows yesdogRef={yesdogRef} linksRef={linksRef} /> */}
      <div className={`overflow-hidden ${styles.header}`}>
        <div className="display-1">
          CONTACTCONTACTCONTACTCONTACT
          <h1 className="d-inline display-1 text-contact">CONTACT</h1>
          CONTACTCONTACTCONTACTCONTA
        </div>
      </div>
      <div className="container position-relative" style={{ zIndex: "1" }}>
        <div className="row">
          <div className="col offset-lg-2 overflow-hidden d-flex mt-5">
            <MeTo
              lines={[
                "tell me bad jokes",
                "collaborate on interesting projects",
                "rage when pixels and guides aren't snapping",
                "work on design systems",
                "rave about games, ceramics, oddities, coffee and tea",
                "dream up smooth experiences with functional and beautiful designs",
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="d-flex justify-content-between">
              <div ref={linksRef} className={styles.links}>
                <div>
                  <Link
                    href={process.env.NEXT_PUBLIC_RESUME || ""}
                    target={"_blank"}
                  >
                    RESUME
                  </Link>
                </div>
                <div>
                  <Link
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    target={"_blank"}
                  >
                    EMAIL
                  </Link>
                </div>
                <div>
                  <Link
                    href={process.env.NEXT_PUBLIC_LINKEDIN || ""}
                    target={"_blank"}
                  >
                    LINKEDIN
                  </Link>
                </div>
              </div>
              <div ref={yesdogRef} className={styles.yesthisisdog}>
                <Image
                  src={"/images/yesthisisdog.gif"}
                  alt="HELLO. YES THIS IS DOG."
                  width={536}
                  height={396}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
