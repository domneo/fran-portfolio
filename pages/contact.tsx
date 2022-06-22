import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "styles/Contact.module.scss";

import Layout from "components/Layout";
import { Arrows } from "components/contact/Arrows";

export default function Contact() {
  const animDuration = 600;
  const animDelay = 1000;
  const slideCount = 6;

  // Get height of ticker
  const meToRef = useRef<HTMLDivElement>(null);
  const [meToHeight, setMeToHeight] = useState(0);
  useEffect(() => {
    const height = meToRef.current?.offsetHeight || 61;
    setMeToHeight(height);
  }, []);

  // Change current slide every x seconds
  const [currentAnimDuration, setCurrentAnimDuration] = useState(animDuration);
  const [meToIndex, setMeToIndex] = useState(0);
  useEffect(() => {
    // Reset animation duration if at the first slide
    if (meToIndex === 0) setCurrentAnimDuration(animDuration);

    const nextIndex = meToIndex === slideCount ? 0 : meToIndex + 1;
    let timeout = setTimeout(
      () => {
        setMeToIndex(nextIndex);

        // Jump to the first slide after animating to last slide
        if (nextIndex === slideCount) {
          setTimeout(() => {
            setCurrentAnimDuration(0);
            setMeToIndex(0);
          }, animDuration);
        }
      },
      // First slide delay should account for animation duration
      meToIndex === 0 ? animDelay - animDuration : animDelay
    );

    return () => clearTimeout(timeout);
  }, [meToIndex]);

  const yesdogRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  return (
    <Layout hideFooterMenu centraliseFooter>
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
            <div className="h3 me-3 flex-shrink-0">
              <div ref={meToRef}>me to</div>
            </div>
            <div style={{ height: `${meToHeight}px` }}>
              <div
                style={{
                  marginTop: `-${meToHeight * meToIndex}px`,
                  transition: `${currentAnimDuration / 1000}s margin`,
                }}
              >
                <h3>tell me bad jokes</h3>
                <h3>collaborate on interesting projects</h3>
                <h3>rage when pixels and guides aren&apos;t snapping</h3>
                <h3>work on design systems</h3>
                <h3>rave about games, ceramics, oddities, coffee and tea</h3>
                <h3>
                  dream up smooth experiences with functional and beautiful
                  designs
                </h3>
                <h3>tell me bad jokes</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="d-flex justify-content-between">
              <div ref={linksRef} className={styles.links}>
                <div>
                  <Link href="https://drive.google.com/file/d/1ePOpKzwSw1fCSWmxqsn7ctvhaUMTyfyC/view?usp=sharing">
                    <a target={"_blank"}>RESUME</a>
                  </Link>
                </div>
                <div>
                  <Link href="mailto:francinelim21@gmail.com">
                    <a target={"_blank"}>EMAIL</a>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.linkedin.com/in/francine-lim/">
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
