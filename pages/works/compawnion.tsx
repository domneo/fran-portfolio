import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
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
  image: "/images/compawnion-hero.jpg",
  title: "Compawnion",
  details: [
    { title: "MY ROLE", content: "UIUX Designer (team of two)" },
    { title: "TIME", content: "1 month (flex)" },
    { title: "PLATFORM", content: "Mobile App" },
    { title: "INDUSTRY", content: "Pet Adoption" },
  ],
};

export default function Compawnion() {
  return (
    <Layout>
      <section>
        <Header image={meta.image} number={"3"} title={meta.title} />
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
                <strong>Compawnion</strong> is my team’s answer for a course
                project that required us to create an app to solve a problem
                people faced. As advocates for pet adoption, we wanted to create
                something that was near and dear to our hearts, and to ease the
                adoption process for potential pet adoptors and pet shelters.
              </Paragraph>
              <Spacer size="md" />
              <Details details={meta.details} />
            </div>
          </TwoColumns>
        </Container>
        <Spacer size="lg" />
      </section>
    </Layout>
  );
}
