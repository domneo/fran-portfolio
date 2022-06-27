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
                <p className="caption mt-2 mb-5">
                  Affinity map of interviewee responses, organised according to
                  the project backing experience timeline
                </p>
              </TitleContent>
              <TitleContent centralise spacer="lg">
                <h4 className="display-4 text-bone mb-4">Roadblock?</h4>
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
            <Section title="DEFINE">
              <TitleContent title="Defining the Problem" centralise spacer="md">
                <p className="mb-5">
                  To get a more holistic understanding of potential problem
                  spaces in the project backing experience, we charted a general
                  user journey map based off the insights we got from our
                  interviews. This helped visually display and capture the highs
                  and the lows of Kickstarter's project backers. It was, really,
                  a breath of fresh air that helped clear the fog we were going
                  through.
                </p>
                <ImageZoom
                  src="/images/ks-journeymap.png"
                  alt="Full user journey map"
                  width={5720}
                  height={1796}
                />
                <p className="caption mt-2 mb-0">Full user journey map</p>
              </TitleContent>
              <TitleContent centralise spacer="md">
                <div className="d-flex flex-column align-items-center text-start">
                  <p className="mb-3">
                    Finally, 2 stages in particular stood out:
                  </p>
                  <ul>
                    <li>Pre-backing: Research, Decision-making</li>
                    <li>Post-backing: Production, Shipping, and Feedback</li>
                  </ul>
                </div>
              </TitleContent>
              <Carousel centerVertically spacer="lg">
                <div className="container">
                  <ImageZoom
                    src="/images/ks-journeymap2.png"
                    alt="Experience dips in Research and Decision-making Stage"
                    width={4006}
                    height={1828}
                  />
                </div>
                <div className="container">
                  <ImageZoom
                    src="/images/ks-journeymap3.png"
                    alt="Most constraints occur at the most negative stage"
                    width={3860}
                    height={1828}
                  />
                </div>
              </Carousel>
              <Highlight title="Opportunity" spacer="lg">
                <p>How can we</p>
              </Highlight>
              <TitleContent title="Persona" centralise>
                <p className="mb-5">
                  With the (journey) map to get past the roadblock, we finally
                  found someone who embodies the behaviours, expectations and
                  concerns of the Kickstarter project backer. Meet...
                </p>
              </TitleContent>
              <div className="spacer-lg">
                <ImageZoom
                  src="/images/ks-persona.png"
                  alt="Alias: Funkygworl"
                  width={2612}
                  height={1038}
                />
              </div>
              <TitleContent title="User Flows" centralise spacer="md">
                <div className="spacer-md">
                  <p>
                    The next step was to dive deeper into Funkygworl&apos;s
                    possible decisions and paths on a more granular level. Here,
                    we incorporated our research from user interviews and the
                    journey map into a user flow with a primary focus on the
                    <strong>pre-backing phase</strong>.
                  </p>
                  <p>
                    This would not only help us understand Funkygworl, but also
                    <strong>
                      shine a light on the relationship between a project
                      backer&apos;s decision making journey and
                      Kickstarter&apos;s key issue of low traffic and backing
                      rates.
                    </strong>
                  </p>
                </div>
                <ImageZoom
                  src="/images/ks-confidenceflow.png"
                  alt="Full user flow of the Research &amp; Decision-Making Stage, as affected by a user's confidence in a project and its creator"
                  width={5580}
                  height={2763}
                />
                <p className="caption mt-2 mb-0">
                  Full user flow of the Research &amp; Decision-Making Stage, as
                  affected by a user's confidence in a project and its creator
                </p>
              </TitleContent>
              <TitleContent title="Insights" centralise spacer="lg">
                <p className="mb-0">
                  💡 Very interestingly, we realised that all the research and
                  consideration a potential backer undergoes in the Research
                  Stage will culminate in an ultimatum at the Decision-Making
                  Stage. This marks a <strong>pivotal point</strong> where the
                  potential backer will decide on backing the project.
                </p>
              </TitleContent>
              <Highlight type="quote" spacer="lg">
                <p className="mb-0">
                  Is the project a scam?
                  <br />
                  Am I agreeable with the product and shipping?
                </p>
              </Highlight>
              <TwoColumns
                column1={
                  <ImageZoom
                    src="/images/ks-confidencemain.png"
                    alt="user confidence"
                    width={1389}
                    height={737}
                  />
                }
                column2={
                  <div className="h-100 d-flex align-items-center">
                    <NumberedKeyPoint
                      caption="THIS MEANS THAT..."
                      title="The lack of information is not the be-all and end-all reason that dissuades users from backing a project"
                      content={
                        <ul className="mb-0">
                          <li>
                            User flow for backing a crowdfunded project unique
                            <ul className="mb-0">
                              <li>
                                Even if a user was not very confident about a
                                project, they might still end up deciding to
                                back it if it fulfilled the ultimatum
                              </li>
                              <li>
                                Also something that repeat project backer
                                interviewees brought up
                              </li>
                            </ul>
                          </li>
                        </ul>
                      }
                    />
                  </div>
                }
                spacer="md"
              />
              <TitleContent centralise spacer="lg">
                <p className="mb-0">
                  While it is up to users to decide if they are agreeable with a
                  product's price and shipping (dependent on their own budget),
                  we can instead help users to assess the legitimacy of the
                  project. This would in turn reduce the decision making
                  process, enhance the legitimacy of creators and projects, and
                  subsequently increase the chances of a successful backing for
                  Kickstarter.
                </p>
              </TitleContent>
              <Highlight title="Problem" spacer="lg">
                <p>
                  Kickstarter users determine their level of confidence in a
                  project by assessing its campaign and creator before
                  supporting it. Users currently access external sources for
                  more information about campaigns and creators to ensure their
                  <strong>legitimacy</strong>.
                </p>
                <p className="mb-0">
                  Without enough information on Kickstarter, users cannot make
                  informed decisions, leading to low backing rates. This
                  consequently affects Kickstarter&apos;s overall revenue.
                </p>
              </Highlight>
              <NarrowTitlePoints
                title="How Might We Help Funkygworl"
                spacer="lg"
              >
                <ul className="mb-0">
                  <li>
                    Remove the need to do research from external websites?
                  </li>
                  <li>
                    Easily access and quickly understand information?
                    <ul className="mb-0">
                      <li>Reconfigure how information can be presented?</li>
                    </ul>
                  </li>
                  <li>Assess the legitimacy of a project quickly?</li>
                </ul>
              </NarrowTitlePoints>
              <Highlight title="Solution" spacer="lg">
                <p>
                  By integrating external information into Kickstarter, users
                  will have a more holistic understanding of a project&apos;s
                  campaign journey through the product details, audiovisual
                  storytelling, and community opinions.
                </p>
                <p>
                  Presenting this information to users in an easily understood
                  manner can help them better assess a project&apos;s
                  legitimacy.
                </p>
              </Highlight>
            </Section>
            <Section title="IDEATE">
              <TitleContent title="Design Studio" centralise spacer="md">
                <p>
                  To creatively address the problem spaces defined by the HMW
                  statements, we conducted a design studio that utilised the
                  &apos;Mash Up&apos; method. This was done by combining
                  seemingly unrelated environments and situations to spark new
                  and fresh ideas.
                </p>
                <p className="mb-0">
                  Here, we mashed up 2 experiences – a buffet and an aquarium
                  visit – with Kickstarter to generate new ideas!
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <div style={{ maxWidth: "936px" }}>
                  <ImageZoom
                    src="/images/ks-ideation-1.png"
                    alt="ideation"
                    width={0}
                    height={0}
                  />
                </div>
                <div style={{ maxWidth: "632px" }}>
                  <ImageZoom
                    src="/images/ks-ideation-2.png"
                    alt="ideation"
                    width={0}
                    height={0}
                  />
                </div>
                <div style={{ maxWidth: "887px" }}>
                  <ImageZoom
                    src="/images/ks-ideation-3.png"
                    alt="ideation"
                    width={0}
                    height={0}
                  />
                </div>
                <div style={{ maxWidth: "637px" }}>
                  <ImageZoom
                    src="/images/ks-ideation-4.png"
                    alt="ideation"
                    width={0}
                    height={0}
                  />
                </div>
              </Carousel>
              <div className="text-center spacer-lg">
                <h4 className="display-4 mb-5">Features</h4>
                <p>
                  <strong>
                    Poke the blobs to learn more about each feature!
                  </strong>
                </p>
              </div>
            </Section>
            <Section title="PROTOTYPE">
              <TitleContent
                title="Mid Fidelity Prototype"
                centralise
                spacer="lg"
              >
                <Image
                  src="/images/"
                  alt="Mid Fidelity Prototype"
                  width={0}
                  height={0}
                />
              </TitleContent>
            </Section>
            <Section title="TEST">
              <TitleContent
                title="Usability Tests: Round 1"
                centralise
                spacer="lg"
              >
                <p>
                  As the main issues identified in the project backing
                  experience revolved around trust and project legitimacy, it
                  was important to find a objective way to quantify the
                  subjective nature of trust and confidence in a project. This
                  was done through a <strong>confidence survey</strong> that
                  utilises a five-point Likert scale to measure users&apos;
                  confidence levels with the redesign.
                </p>
                <DropdownContent
                  title="🤔 Some questions in the confidence survey"
                  spacer="sm"
                >
                  <div
                    className="text-start mx-auto"
                    style={{ maxWidth: "730px" }}
                  >
                    <p>
                      The confidence survey used in the usability test is not
                      limited to the following:
                    </p>
                    <ol className="mb-0">
                      <li>I know the project&apos;s current progress.</li>
                      <li>
                        I feel more confident about this project when I am able
                        to access the creator&apos;s past live events that
                        explain more about the product
                      </li>
                      <li>
                        I have the ability to understand the creator&apos;s
                        creation journey and difficulties.
                      </li>
                      <li>
                        Based on my answer above, I have the ability to make an
                        informed decision on whether to back the project.
                      </li>
                    </ol>
                  </div>
                </DropdownContent>
                <p className="spacer-md">
                  <strong>3 individuals</strong> who fit Funkygworl&apos;s
                  profile participated in the first round of usability tests.
                </p>
                <div className="mx-auto" style={{ maxWidth: "904px" }}>
                  <Image
                    src="/images/ks-sus1.png"
                    alt="SUS score and Confidence score"
                    width={1808}
                    height={828}
                  />
                </div>
              </TitleContent>
            </Section>
            <Section title="PROTOTYPE">
              <TitleContent
                title="High Fidelity Prototype"
                centralise
                spacer="sm"
              >
                <p className="mb-0">
                  With the results and insights gathered from the first
                  usability test, an improved prototype - this time in high
                  fidelity - was created.
                </p>
              </TitleContent>
              <Image
                src="/images/"
                alt="High Fidelity Prototype"
                width={0}
                height={0}
              />
              <div className="spacer-lg">
                <Link
                  href={process.env.NEXT_PUBLIC_PROTOTYPE_KICKSTARTER || ""}
                >
                  <a>
                    <p className="text-center mb-0">
                      Play with the prototype here
                    </p>
                  </a>
                </Link>
              </div>
            </Section>
            <Section title="TEST">
              <TitleContent title="Impact" centralise spacer="lg">
                <p className="spacer-md">
                  Next, the hi-fi prototype was put to the test! This time, with{" "}
                  <strong>6 individuals</strong> who fit the Funkygworl persona.
                  These participants were also required to answer the same set
                  of questions as the first usability test for us to get an
                  accurate indicator of success.
                </p>
                <div className="mx-auto mb-5" style={{ maxWidth: "904px" }}>
                  <Image
                    src="/images/ks-sus2.png"
                    alt="SUS score and Confidence score"
                    width={1808}
                    height={828}
                  />
                </div>
                <DropdownContent title="4.4% increase in the confidence score only? 😳  (Learning point!)">
                  <div
                    className="text-start mx-auto"
                    style={{ maxWidth: "920px" }}
                  >
                    <p>
                      Before we embarked on the Kickstarter redesign, we had yet
                      to learn about concept or A/B testing. Had we known about
                      it, I would have suggested that we performed concept or
                      A/B testing with different variations of the features to
                      understand:
                    </p>
                    <ul>
                      <li>
                        How and why users might prefer certain designs or
                        interfaces over others
                      </li>
                      <li>
                        How Kickstarter can be experienced in its entirety to
                        fulfill user goals
                      </li>
                    </ul>
                    <p className="mb-0">
                      This would have greatly helped us figure out{" "}
                      <strong>
                        if the features were actually addressing user needs
                      </strong>{" "}
                      as the features are compacted in the Project page only.
                    </p>
                  </div>
                </DropdownContent>
              </TitleContent>
            </Section>
            <Section title="REFLECT">
              <TitleContent title="Moving Forward" centralise spacer="md" />
              <ThreeColumns
                column1={
                  <KeyIssue caption="CHANGE" title="limitations">
                    <ul>
                      <li className="mb-4">
                        Redesign and features were created with only the backer
                        in mind due to limitations on time and scope
                        <ul>
                          <li>
                            Success heavily dependent on creators to produce
                            content and engage backers
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        Include creators in future iterations - they are
                        Kickstarter users too!
                        <ul>
                          <li>
                            As a secondary persona to enrich the depth and
                            direction of the redesign
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </KeyIssue>
                }
                column2={
                  <KeyIssue caption="UPWARDS &amp; ONWARDS" title="navigation">
                    <ul>
                      <li className="mb-4">
                        Navigation issues discovered during usability tests
                        should be addressed in the next iteration
                      </li>
                      <li className="mb-4">
                        Improving the information architecture was deprioritised
                        <ul>
                          <li>
                            User journey map and interview insights revealed
                            that potential backers visited project pages via
                            direct links
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </KeyIssue>
                }
                column3={
                  <KeyIssue caption="UPWARDS &amp; ONWARDS" title="scalability">
                    <ul>
                      <li className="mb-4">
                        Many features from the Ideation stage were deprioritised
                        <ul>
                          <li>Focus was on MVP</li>
                          <li>
                            Features were seen more viable in the future or
                            long-term
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        Example: Monthly campaigns for creators to pitch ideas
                        to potential backers using similar technology to the
                        &apos;live&apos; event feature
                        <ul>
                          <li>Increase traffic and revenue for Kickstarter</li>
                          <li>
                            Benefits creators and community; reinforces the
                            Kickstarter ecosystem for backers and creators
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </KeyIssue>
                }
                spacer="lg"
              />
            </Section>
            <BackgroundZone background="var(--contact)" onEnterOnly>
              <div className="spacer-lg">
                <Stars />
              </div>
              <ContactCTA spacer="lg">
                If you&apos;re interested in working together or finding out
                more, feel free to reach out ✨
              </ContactCTA>
            </BackgroundZone>
          </div>
        </div>
      </div>
    </Layout>
  );
}
