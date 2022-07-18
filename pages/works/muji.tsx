import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { Heading } from "components/common/Heading";
import { ImageZoom } from "components/common/ImageZoom";
import { Line } from "components/common/Line";
import { Paragraph } from "components/common/Paragraph";
import { Spacer } from "components/common/Spacer";
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
  image: "/images/muji-hero.jpg",
  title: "Muji",
  details: [
    { title: "MY ROLE", content: "UIUX Designer (one-woman show)" },
    { title: "TIME", content: "1 month (flex)" },
    { title: "PLATFORM", content: "Website" },
    { title: "INDUSTRY", content: "E-Commerce" },
  ],
};

export default function Muji() {
  return (
    <Layout>
      <section>
        <Header image={meta.image} number={"2"} title={meta.title} />
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
                If there was a brand that immutably embodies its values to its
                core, you can bet your bottom dollar it’s{" "}
                <a
                  href="https://www.muji.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <strong>MUJI</strong>
                </a>
                . Strongly rooted in simplicity and minimalism, the brand morphs
                mundane everyday products into visually pleasing yet utilitarian
                and functional ones.
              </Paragraph>
              <Spacer size="md" />
              <Details details={meta.details} />
            </div>
          </TwoColumns>
        </Container>
        <Spacer size="lg" />
      </section>
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
