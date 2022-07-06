import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { ImageZoom } from "components/common/ImageZoom";
import { Stars } from "components/common/Stars";
import { TwoColumns } from "components/works2/TwoColumns";
import { Carousel } from "components/works/Carousel";
import { Container } from "components/works/Container";
import { Details } from "components/works/Details";
import { DropdownContent } from "components/works/DropdownContent";
import { Features } from "components/works/Features";
import { Header } from "components/works/Header";
import { Highlight } from "components/works/Highlight";
import { ImageContentColumns } from "components/works/ImageContentColumns";
import { KeyIssue } from "components/works/KeyIssue";
import { MultiImageNumberedContent } from "components/works/MultiImageNumberedContent";
import { NarrowTitlePoints } from "components/works/NarrowTitlePoints";
import { NumberedContentImageColumns } from "components/works/NumberedContentImageColumns";
import { NumberedKeyPoint } from "components/works/NumberedKeyPoint";
import { Section } from "components/works/Section";
import { Spacer } from "components/works/Spacer";
import { ThreeColumns } from "components/works/ThreeColumns";
import { TitleContent } from "components/works/TitleContent";

export const meta = {
  image: "/images/ks-hero.jpg",
  title: "Kickstarter",
  details: [
    {
      title: "Challenge",
      content:
        "(GA Project) Redesign Kickstarter's project backing experience to uplift traffic and revenue",
    },
    { title: "Role", content: "UIUX Designer, Design Lead (team of 4)" },
    { title: "Platform", content: "Mobile responsive website" },
    {
      title: "Scope",
      content:
        "User Interviews & Research, User Interface & Experience Design, Usability Testing, Competitive Analysis & Research, Wireframing & Prototyping",
    },
    {
      title: "Deliverables",
      content:
        "User Research, Persona(s), User Flows, Information Architecture, Competitive Analysis, Wireframes, Prototypes",
    },
    { title: "Time", content: "4 weeks (flex sprint)" },
  ],
};

export default function Kickstarter() {
  return (
    <Layout>
      <section>
        <Header image={meta.image} number={"3"} title={meta.title} />
        <Spacer size="lg" />
      </section>
      <section>
        <Container size="normal">
          <TwoColumns col1Props={{ lg: 5 }} col2Props={{ lg: 7 }}>
            <div></div>
            <div>
              <p>
                <strong>
                  <u>Kickstarter</u>
                </strong>{" "}
                is a global crowdfunding platform that empowers project creators
                by connecting them with potential project backers, who in turn,
                pledge funds to turn ideas into reality.
              </p>
              <p>
                Project creators start a product campaign on Kickstarter and use
                it as a <strong>platform for fundraising</strong>. Individuals
                who are interested in the project would pledge funds to the
                campaign and become project backers. When the campaign period
                ends, creators use Kickstarter as a{" "}
                <strong>platform for communication</strong> to inform and update
                backers on the development, delivery and other relevant
                information about the product.
              </p>
            </div>
          </TwoColumns>
        </Container>
        <Spacer size="lg" />
      </section>
      <Section title="OVERVIEW">
        <Spacer size="lg" />
      </Section>
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
    </Layout>
  );
}
