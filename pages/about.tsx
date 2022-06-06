import styles from "styles/About.module.scss";

import Layout from "components/Layout";
import Blob from "components/common/Blob";
import { Stars } from "components/common/Stars";

export default function Home() {
  return (
    <Layout>
      <h1>
        <span className="display-1">What's up?</span>
        <span className="display-4 text-bone">I'm Francine</span>
      </h1>
      <p className="h5 fw-light text-bone">
        As a night owl fuelled by coffee and tea, my dream is to live in a cave
        and (ironically) experience worlds beyond.
      </p>
      <p className="h5 fw-light">
        <s>&nbsp;I have a multi-disciplinary background&nbsp;</s>
      </p>
      <p>
        Before embarking on my quest to become a UX designer, I've led previous
        lives as a digital news producer and an educator in two lands -
        Singapore and Japan respectively - just like how people live different
        lives in Dungeons &amp; Dragons.
      </p>
      <p>
        Living in two worlds has changed the way I view spaces and how people
        interact in and with public places. I'm interested in exploring how UIUX
        can transform digital and physical spaces to intentional ones that serve
        people's needs.
      </p>
      <p>
        More recently, I've discovered the joys of data visualisation and how
        information can be presented in interesting ways.
      </p>
      <p>
        My love for games and solving problems has shaped my belief that a good
        user experience plays out like a good game.
      </p>
      <p className="h2 text-bone">
        That is why I strive to understand and empathise with people to create
        elements that blend{" "}
        <span className="display-4 text-copperrose">
          <em>magically</em>
        </span>{" "}
        into experiences - be they fun or invisible to the naked eye.
      </p>
      <p>
        When I'm not hunched over creating 32 button variants or collaborating
        with others to solve problems, I'll be trying to up my fitness game,
        playing an *actual* game, or hunting for ceramics for my ever-growing
        collection ☁️
      </p>
      <Stars />
      <h2 className="display-5 text-bone">
        If you're looking to collaborate, come say hi! I'm happy to connect
        about work or play
      </h2>
      <div style={{ width: "280px" }}>
        <Blob />
      </div>
      <button className="h5 fw-light bg-transparent border-0 text-white">
        Contact
      </button>
    </Layout>
  );
}
