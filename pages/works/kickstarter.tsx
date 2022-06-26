import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { ImageZoom } from "components/common/ImageZoom";
import { Stars } from "components/common/Stars";
import { Carousel } from "components/works/Carousel";
import { Details } from "components/works/Details";
import { DropdownContent } from "components/works/DropdownContent";
import { FigmaEmbed } from "components/works/FigmaEmbed";
import { Header } from "components/works/Header";
import { Highlight } from "components/works/Highlight";
import { ImageContentColumns } from "components/works/ImageContentColumns";
import { KeyIssue } from "components/works/KeyIssue";
import { MultiImageNumberedContent } from "components/works/MultiImageNumberedContent";
import { NarrowTitlePoints } from "components/works/NarrowTitlePoints";
import { NumberedContentImageColumns } from "components/works/NumberedContentImageColumns";
import { NumberedKeyPoint } from "components/works/NumberedKeyPoint";
import { Section } from "components/works/Section";
import { ThreeColumns } from "components/works/ThreeColumns";
import { TitleContent } from "components/works/TitleContent";
import { TwoColumns } from "components/works/TwoColumns";

export const meta = {
  image: "/images/ks-hero.jpg",
  title: "Kickstarter",
  subtitle:
    "Enhancing the project backing experience with new info-centric features for backers",
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
      <Header
        image={meta.image}
        number={"3"}
        title={meta.title}
        subtitle={meta.subtitle}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Details details={meta.details} />
            {/* <FigmaEmbed
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnBeZP7ff4513KKcYF8Yl7K%2FP3-Web-Prototype%3Fpage-id%3D0%253A1%26node-id%3D5%253A17854%26viewport%3D869%252C131%252C0.06%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A17854"
              spacer="lg"
            /> */}
            <Section title="KICKOFF">
              <div className="row align-items-center spacer-md">
                <div className="col-lg-6">
                  <Image
                    src="/images/ks-quote.png"
                    alt="'Our mission is to help bring creative projects to life' - Kickstarter"
                    width={1460}
                    height={898}
                  />
                </div>
                <div className="col-lg-6 ps-5 text-center">
                  <p>
                    Hailing from New York, Kickstarter is a global crowdfunding
                    platform that empowers project creators by connecting them
                    with potential project backers, who in turn, pledge funds to
                    turn ideas into reality. However, in recent years, it has
                    not seen a significant uplift in traffic and revenue.
                  </p>
                  <p>
                    Traffic and revenue are key factors in determining
                    Kickstarter&apos;s success - higher traffic could lead to
                    higher conversion rates (projects backed), and an increase
                    in revenue. Notably, Kickstarter gains revenue through a 5%
                    commission per project backing.
                  </p>
                </div>
              </div>
              <NarrowTitlePoints spacer="lg">
                <p className="mb-0">
                  This is an issue for the American Public Benefit Corporation
                  as it measures its success through:
                </p>
                <ul>
                  <li>Total number of new and repeat project backers</li>
                  <li>Total amount of funds pledged</li>
                  <li>Distribution of unsuccessfully funded projects</li>
                </ul>
              </NarrowTitlePoints>
            </Section>
            <Section title="PROCESS">
              <TitleContent spacer="lg" fullwidth centralise>
                <Image
                  src={"/images/designProcess.svg"}
                  alt="The design process"
                  width={1146}
                  height={296}
                />
              </TitleContent>
            </Section>
            <Section title="EMPATHISE">
              <TitleContent
                title="Secondary Research"
                fullwidth
                centralise
                spacer="md"
              >
                <div className="mt-5">
                  <ImageZoom
                    src={"/images/ks-stat.png"}
                    alt="Kickstarter's Allocation of Crowdfunding Across All Genres"
                    width={3688}
                    height={2242}
                  />
                </div>
              </TitleContent>
              <TitleContent centralise spacer="sm">
                <p className="mb-0">
                  We also did a competitive analysis between Kickstarter and its
                  direct and indirect competitors to get a better understanding
                  of the crowdfunding landscape and various companies&apos;
                  offerings for visitors.
                </p>
              </TitleContent>
              <div className="mx-auto spacer-md">
                <Image
                  src="/images/ks-competitorlogos.png"
                  alt="Kickstarter | Indiegogo | Patreon | gofundme"
                  width={2872}
                  height={226}
                />
              </div>
              <TitleContent centralise spacer="lg">
                <Carousel centerVertically spacer="md">
                  <div className="container">
                    <div className="mx-auto" style={{ maxWidth: "983px" }}>
                      <ImageZoom
                        src="/images/ks-cc-featureanalysis.png"
                        alt="Feature Analysis"
                        width={3064}
                        height={1870}
                      />
                    </div>
                  </div>
                  <div className="container">
                    <div className="mx-auto" style={{ maxWidth: "650px" }}>
                      <ImageZoom
                        src="/images/ks-cc-elementanalysis.png"
                        alt="Element Analysis"
                        width={3122}
                        height={2876}
                      />
                    </div>
                  </div>
                </Carousel>
                <p className="mb-0">
                  <strong>
                    Interestingly, despite Kickstarter&apos;s low backing rates,
                    it was outperforming its competitors in terms of its
                    features and elements.
                  </strong>
                </p>
                <p className="mb-0">
                  So the next step was clear: we had to hear it straight from
                  the horses&apos; mouths (project backers themselves).
                </p>
              </TitleContent>
              <TitleContent title="Primary Research" centralise fullwidth>
                <div className="d-flex flex-column align-items-center text-start">
                  <p className="mb-3">
                    To delve deeper into this mystery,{" "}
                    <strong>16 people were interviewed</strong>. They were a
                    healthy mix of:
                  </p>
                  <ul>
                    <li>
                      People who have backed projects or are currently backing
                      projects
                    </li>
                    <li>
                      People who want to back projects, but have not done so yet
                    </li>
                  </ul>
                </div>
                <ImageZoom
                  src="/images/ks-affinitymap.png"
                  alt="Affinity map"
                  width={12610}
                  height={5006}
                />
                <p className="mb-5">
                  Affinity map of interviewee responses, organised according to
                  the project backing experience timeline
                </p>
              </TitleContent>
              <TitleContent centralise spacer="lg">
                <h4 className="display-4 text-bone mb-5">Roadblock?</h4>
                <div className="text-start">
                  <NumberedKeyPoint
                    title="At this point of the project, it seemed like we were stuck ):"
                    content={
                      <ul>
                        <li>
                          Too many data points from 16 users and overlapping
                          issues even though the points were already organised
                          in a linear timeline
                        </li>
                        <li>
                          Hard to find parallels between the competitive
                          analysis research and user research
                        </li>
                        <li>
                          Solutionising or developing problem statements
                          weren&apos;t options as the problem spaces were too
                          broad or assumptive
                        </li>
                      </ul>
                    }
                  />
                </div>
              </TitleContent>
              <p className="h5 spacer-lg text-center">
                So we pulled the brakes and refocused our perspectives by
                looking for an opportunity via a user journey map.
              </p>
            </Section>
            <Section title="DEFINE"></Section>
            <Section title="OPPORTUNITY"></Section>
            <Section title="IDEATE"></Section>
            <Section title="PROTOTYPE"></Section>
            <Section title="TEST"></Section>
            <Section title="PROTOTYPE"></Section>
            <Section title="TEST"></Section>
            <Section title="REFLECT"></Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
