import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import styles from "styles/Contact.module.scss";

import Layout from "components/Layout";
import { Arrows } from "components/contact/Arrows";
import { MeTo } from "components/contact/MeTo";

export default function Contact() {
  const yesdogRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  return (
    <Layout showQuickActions={false} showFooterMenu={false} centraliseFooter>
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
                  <Link href={process.env.NEXT_PUBLIC_RESUME || ""}>
                    <a target={"_blank"}>RESUME</a>
                  </Link>
                </div>
                <div>
                  <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                    <a target={"_blank"}>EMAIL</a>
                  </Link>
                </div>
                <div>
                  <Link href={process.env.NEXT_PUBLIC_LINKEDIN || ""}>
                    <a target={"_blank"}>LINKEDIN</a>
                  </Link>
                </div>
              </div>
              <div ref={yesdogRef} className={styles.yesthisisdog}>
                <Image
                  src={"/images/yesthisisdog.gif"}
                  alt="HELLO. YES THIS IS DOG."
                  width={536}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
