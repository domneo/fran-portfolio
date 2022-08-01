import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { GridColumns } from "components/common/GridColumns";
import { Heading } from "components/common/Heading";
import { ImageZoom } from "components/common/ImageZoom";
import { Line } from "components/common/Line";
import { ListItem } from "components/common/ListItem";
import { Paragraph } from "components/common/Paragraph";
import { Spacer } from "components/common/Spacer";
import { Span } from "components/common/Span";
import { Stars } from "components/common/Stars";
import { ThreeColumns } from "components/common/ThreeColumns";
import { TwoColumns } from "components/common/TwoColumns";
import { CaptionTitleContent } from "components/works2/CaptionTitleContent";
import { Carousel } from "components/works2/Carousel";
import { Container } from "components/works2/Container";
import { Details } from "components/works2/Details";
import { DropdownContent } from "components/works2/DropdownContent";
import { Features } from "components/works2/Features";
import { Header } from "components/works2/Header";
import { IconContent } from "components/works2/IconContent";
import { Section } from "components/works2/Section";

export const meta = {
  image: "/images/symplicured-hero.jpg",
  title: "Symplicured",
  details: [
    { title: "MY ROLE", content: "UIUX Designer, Design Lead (Team of 4)" },
    { title: "TIME", content: "3 months (flex)" },
    { title: "PLATFORM", content: "Website" },
    { title: "INDUSTRY", content: "Healthcare" },
  ],
};

export default function Symplicured() {
  return (
    <Layout>
      <section>
        <Header image={meta.image} number={"4"} title={meta.title} />
        <Spacer size="lg" />
      </section>
      <section>
        <Container size="normal">
          <TwoColumns
            col1Props={{ lg: 5 }}
            col2Props={{ lg: 7 }}
            gutter={{ lg: 4 }}
          >
            <div></div>
            <div>
              <Paragraph>
                <a
                  href="https://www.symplicured.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <strong>Symplicured</strong>
                </a>{" "}
                is a healthcare startup that provides an online symptom search
                engine for the Asian market. It enables patients to search,
                answer validated medical questionnaires, and get probable
                diagnoses with actionable results.
              </Paragraph>
              <Spacer size="md" />
              <Details details={meta.details} />
            </div>
          </TwoColumns>
        </Container>
        <Spacer size="lg" />
      </section>
      <section>
        <Spacer size="lg" />
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
