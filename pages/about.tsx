import Image from "next/image";
import Link from "next/link";

import styles from "styles/About.module.scss";

import Layout from "components/Layout";
import Blob from "components/common/Blob";
import { Stars } from "components/common/Stars";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row spacer-lg">
          <div className="col">
            <h1>
              <span className="display-1">What&apos;s up?</span>
              <span className="display-4 text-bone d-inline-block">
                I&apos;m Francine
              </span>
            </h1>
          </div>
        </div>
        <div className="row align-items-center spacer-lg">
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
              src={"https://placekitten.com/400/500"}
              alt="kitten"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className="row justify-content-center spacer-lg">
          <div className="col-lg-10 d-flex">
            <div style={{ padding: "1rem 5rem" }}>
              <Image
                src={"/images/downArrowLong.svg"}
                alt="scroll down"
                width={12}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="row spacer-lg">
          <div className="col text-center">
            <p className="h5 fw-light">
              <s>&nbsp;I have a multi-disciplinary background&nbsp;</s>
            </p>
          </div>
        </div>
        <div className="row justify-content-center spacer-lg">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <Image
                  src={"https://placekitten.com/490/600"}
                  alt="kitten"
                  width={490}
                  height={600}
                />
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p className="mb-5">
                  Before embarking on my quest to become a UX designer,
                  I&apos;ve led previous lives as a digital news producer and an
                  educator in two lands - Singapore and Japan respectively -
                  just like how people live different lives in Dungeons &amp;
                  Dragons.
                </p>
                <p className="mb-5">
                  Living in two worlds has changed the way I view spaces and how
                  people interact in and with public places. I&apos;m interested
                  in exploring how UIUX can transform digital and physical
                  spaces to intentional ones that serve people&apos;s needs.
                </p>
                <p className="mb-5">
                  More recently, I&apos;ve discovered the joys of data
                  visualisation and how information can be presented in
                  interesting ways.
                </p>
                <p className="mb-5">
                  My love for games and solving problems has shaped my belief
                  that a good user experience plays out like a good game.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-lg"></div>
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
        <div className="spacer-lg"></div>
        <div className="row spacer-lg">
          <div className="col-lg-6 offset-lg-5">
            <p>
              When I&apos;m not hunched over creating 32 button variants or
              collaborating with others to solve problems, I&apos;ll be trying
              to up my fitness game, playing an *actual* game, or hunting for
              ceramics for my ever-growing collection ☁️
            </p>
          </div>
        </div>
        <div className="row justify-content-center spacer-lg">
          <div className="col-lg-10 d-flex justify-content-end">
            <div style={{ padding: "1rem 5rem" }}>
              <Image
                src={"/images/downArrowLong.svg"}
                alt="scroll down"
                width={12}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="spacer-lg">
          <Stars />
        </div>
        <div className="spacer-lg"></div>
        <div className="row justify-content-center spacer-lg">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 text-bone spacer-lg">
              If you&apos;re looking to collaborate, come say hi!{" "}
              <span className="d-inline-block">
                I&apos;m happy to connect about work or play
              </span>
            </h2>
            <div className="d-flex justify-content-center">
              <Link href="mailto:francinelim21@gmail.com">
                <a
                  className="contact-cta d-block position-relative text-decoration-none"
                  style={{ width: "280px" }}
                >
                  <Blob />
                  <div className="contact-cta-text h5 fw-light">Contact</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="spacer-lg"></div>
      </div>
    </Layout>
  );
}
