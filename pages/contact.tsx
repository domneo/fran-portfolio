import { useState } from "react";
import Layout from "components/Layout";
import { BarrelLink } from "components/common/BarrelLink";
import { MeToSlider } from "components/contact/MeToSlider";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "styles/Contact.module.scss";
import client from "tina/__generated__/client";
import { GlobalQuery } from "tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export const getStaticProps: GetStaticProps = async () => {
  let global;

  try {
    global = await client.queries.global({ relativePath: `global.mdx` });
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
  const contactLinks = globalData.global.contactLinks;

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout
      data={globalData}
      darkMode={darkMode}
      showFloatingActions={false}
      showContactLinks={false}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              <div>CO</div>
              <div>CONTACT</div>
              <div>CONTACT CONTACT</div>
              <div>CONTACT CONTACT CONTACT</div>
              <div>
                CONTACT{" "}
                <button
                  className="bg-transparent border-0 p-0 m-0 rounded-4 text-wenge"
                  style={{ cursor: "pointer" }}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  CONTACT
                </button>
              </div>
              <div>CONTACT</div>
              <div>CO</div>
            </div>
          </div>
          <div className={styles.body}>
            <MeToSlider
              lines={[
                "me to tell me bad jokes",
                "me to collaborate on interesting projects",
                "me to rage when pixels and guides aren't snapping",
                "me to work on design systems",
                "me to rave about games, ceramics, oddities, coffee and tea",
                "me to dream up smooth experiences with functional and beautiful designs",
              ]}
            />
            <div className={styles.contactLinks}>
              {contactLinks?.map((link) => (
                <div
                  key={window.crypto.randomUUID()}
                  className={styles.menuItem}
                >
                  <BarrelLink
                    text={link?.name.toUpperCase() || ""}
                    link={link?.url || ""}
                    target={link?.openInNewWindow ? "_blank" : "_self"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
