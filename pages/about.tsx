import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "styles/About.module.scss";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { IconDownArrowLong } from "components/common/IconDownArrowLong";
import { Spacer } from "components/common/Spacer";
import { Stars } from "components/common/Stars";

export default function About() {
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isInBGSection, setIsInBGSection] = useState(false);
  const [isBGContentAnimating, setIsBGContentAnimating] = useState(false);
  const [isBGContentAnimated, setIsBGContentAnimated] = useState(false);

  // Register the ScrollTrigger Plugin
  gsap.registerPlugin(ScrollTrigger);

  // Target the div DOM element
  const strikethroughTrigger = useRef<HTMLParagraphElement>(null);
  const bgSectionTrigger = useRef<HTMLDivElement>(null);
  const bgContentTrigger = useRef<HTMLDivElement>(null);

  // Change the active state when scrolling into the viewport
  useEffect(() => {
    ScrollTrigger.create({
      // markers: true,
      id: "strikethrough",
      trigger: strikethroughTrigger.current,
      start: `top 60%`,
      end: `bottom 60%`,
      onEnter: () => setIsStrikethrough(true),
      onLeaveBack: () => setIsStrikethrough(false),
    });

    ScrollTrigger.create({
      // markers: true,
      id: "bgSection",
      trigger: bgSectionTrigger.current,
      start: `top 50%`,
      end: `bottom 60%`,
      onEnter: () => setIsInBGSection(true),
      onLeave: () => setIsInBGSection(false),
      onEnterBack: () => setIsInBGSection(true),
      onLeaveBack: () => setIsInBGSection(false),
    });

    ScrollTrigger.create({
      // markers: true,
      id: "bgContent",
      trigger: bgContentTrigger.current,
      start: `top 60%`,
      end: `bottom 60%`,
      onEnter: () => {
        setIsBGContentAnimating(true);
        setTimeout(() => {
          setIsBGContentAnimated(true);
        }, 800);
      },
      onLeaveBack: () => {
        setIsBGContentAnimating(false);
        setIsBGContentAnimated(false);
      },
    });

    // Clean up ScrollTrigger instance on unmount
    return () => {
      ScrollTrigger.getById("strikethrough")?.kill();
      ScrollTrigger.getById("bgSection")?.kill();
      ScrollTrigger.getById("bgContent")?.kill();
    };
  }, []);

  return (
    <Layout showQuickActions={false}>
      <style jsx global>{`
        body {
          background-color: ${isInBGSection ? "#d1d1bc" : ""};
          --platinum: ${isInBGSection ? "#111111" : "#eaeae7"};
          --bone: ${isInBGSection ? "#111111" : "#d1d1bc"};
        }
      `}</style>
      <div className="container">
        <div className="row spacer-md">
          <div className="col">
            <h1 className="d-flex align-items-end">
              <span className="display-1">What&apos;s up?</span>
              <span
                className={`${styles.imFrancine} display-4 text-bone d-inline-block`}
              >
                I&apos;m Francine
              </span>
            </h1>
          </div>
        </div>
        <div className="row align-items-center spacer-md">
          <div className="col-lg-7 offset-lg-1">
            <div className="row">
              <div
                className="col-lg-7 offset-lg-5"
                style={{ marginBottom: "4.5rem" }}
              >
                <p>
                  As a night owl fuelled by coffee and tea, my dream is to live
                  in a cave and (ironically) experience worlds beyond.
                </p>
              </div>
              <div className="col-lg-11" style={{ marginBottom: "4.5rem" }}>
                <p className="h5 fw-light text-bone">
                  As a designer, I&apos;m inspired by invisible design and I
                  strive to create experiences as seamless as when you order
                  kopi from your seasoned kopitiam aunty.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <Image
              src={"/images/me.jpg"}
              alt="Me!"
              width={400}
              height={500}
              style={{ height: "auto" }}
            />
          </div>
        </div>
        <div className="row justify-content-center spacer-lg">
          <div className="col-lg-10 d-flex">
            <div style={{ padding: "1rem 5rem", color: "var(--platinum)" }}>
              <IconDownArrowLong />
            </div>
          </div>
        </div>
        <div ref={bgSectionTrigger}>
          <div className="row spacer-lg">
            <div className="col text-center">
              <div
                ref={strikethroughTrigger}
                className="d-flex justify-content-center"
              >
                <div className="position-relative px-2">
                  <p
                    className={`${styles.strikethroughText} h5 fw-light ${
                      isInBGSection ? styles.invert : ""
                    }`}
                  >
                    I have a multi-disciplinary background
                  </p>
                  <div
                    className={`${styles.strikethrough} ${
                      isStrikethrough ? styles.active : ""
                    } ${isInBGSection ? styles.invert : ""}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center spacer-lg">
            <div className="col-lg-10">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <video
                    src="/images/me2.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-100"
                  />
                </div>
                <div ref={bgContentTrigger} className="col-lg-6 offset-lg-1">
                  <p
                    className={`${styles.backgroundPara} ${
                      isBGContentAnimating ? styles.animating : ""
                    } ${isBGContentAnimated ? styles.animated : ""} ${
                      isInBGSection ? styles.invert : ""
                    } mb-5`}
                    style={{ animationDelay: "0" }}
                  >
                    Before embarking on my quest to become a UX designer,
                    I&apos;ve led previous lives as a digital news producer and
                    an educator in two lands - Singapore and Japan respectively
                    - just like how people live different lives in Dungeons
                    &amp; Dragons.
                  </p>
                  <p
                    className={`${styles.backgroundPara} ${
                      isBGContentAnimating ? styles.animating : ""
                    } ${isBGContentAnimated ? styles.animated : ""} ${
                      isInBGSection ? styles.invert : ""
                    } mb-5`}
                    style={{ animationDelay: ".1s" }}
                  >
                    Living in two worlds has changed the way I view spaces and
                    how people interact in and with public places. I&apos;m
                    interested in exploring how UIUX can transform digital and
                    physical spaces to intentional ones that serve people&apos;s
                    needs.
                  </p>
                  <p
                    className={`${styles.backgroundPara} ${
                      isBGContentAnimating ? styles.animating : ""
                    } ${isBGContentAnimated ? styles.animated : ""} ${
                      isInBGSection ? styles.invert : ""
                    } mb-5`}
                    style={{ animationDelay: ".2s" }}
                  >
                    More recently, I&apos;ve discovered the joys of data
                    visualisation and how information can be presented in
                    interesting ways.
                  </p>
                  <p
                    className={`${styles.backgroundPara} ${
                      isBGContentAnimating ? styles.animating : ""
                    } ${isBGContentAnimated ? styles.animated : ""} ${
                      isInBGSection ? styles.invert : ""
                    } mb-5`}
                    style={{ animationDelay: ".3s" }}
                  >
                    My love for games and solving problems has shaped my belief
                    that a good user experience plays out like a good game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-lg" />
        <div className="row spacer-lg">
          <div className="col">
            <p className="h2 text-bone">
              <span className={styles.keypointPrefixSpacer} />
              That is why I strive to understand and empathise with people to
              create elements that blend{" "}
              <span className="display-4 text-copperrose">
                <em>magically</em>
              </span>{" "}
              into experiences - be they fun or invisible to the naked eye.
            </p>
          </div>
        </div>
        <div className="row spacer-md">
          <div className="col-lg-6 offset-lg-5">
            <p>
              When I&apos;m not hunched over creating 32 button variants or
              collaborating with others to solve problems, I&apos;ll be trying
              to up my fitness game, playing an *actual* game, or hunting for
              ceramics for my ever-growing collection ☁️
            </p>
          </div>
        </div>
        <div className="row justify-content-center spacer-md">
          <div className="col-lg-10 d-flex justify-content-end">
            <div style={{ padding: "1rem 5rem", color: "var(--platinum)" }}>
              <IconDownArrowLong />
            </div>
          </div>
        </div>
        <section>
          <BackgroundZone background="var(--contact)" onEnterOnly>
            <Stars />
            <Spacer size="lg" />
            <ContactCTA>
              If you&apos;re interested in working together or finding out more,
              feel free to reach out ✨
            </ContactCTA>
            <Spacer size="lg" />
          </BackgroundZone>
        </section>
      </div>
    </Layout>
  );
}
