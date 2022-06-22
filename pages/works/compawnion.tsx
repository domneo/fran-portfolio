import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { ContactCTA } from "components/common/ContactCTA";
import { Stars } from "components/common/Stars";
import { Carousel } from "components/works/Carousel";
import { Details } from "components/works/Details";
import { DropdownContent } from "components/works/DropdownContent";
import { FigmaEmbed } from "components/works/FigmaEmbed";
import { Header } from "components/works/Header";
import { Highlight } from "components/works/Highlight";
import { ImageContentColumns } from "components/works/ImageContentColumns";
import { KeyIssue } from "components/works/KeyIssue";
import { NarrowTitlePoints } from "components/works/NarrowTitlePoints";
import { NumberedContentImageColumns } from "components/works/NumberedContentImageColumns";
import { NumberedKeyPoint } from "components/works/NumberedKeyPoint";
import { Section } from "components/works/Section";
import { ThreeColumns } from "components/works/ThreeColumns";
import { TitleContent } from "components/works/TitleContent";

export const meta = {
  image: "/images/compawnion-hero.jpg",
  title: "Compawnion",
  subtitle:
    "Enabling adopters to search, compare, and connect with animal shelters",
  details: [
    {
      title: "Challenge",
      content:
        "Define a problem that could be solved with the design of a mobile app.",
    },
    { title: "Role", content: "UIUX Designer (in a team of 2)" },
    { title: "Platform", content: "Mobile app" },
    {
      title: "Scope",
      content: "Research, Wireframing, Interface Design, Development",
    },
    {
      title: "Deliverables",
      content: "User Research, Wireframes, Prototype, Process",
    },
    { title: "Time", content: "4 weeks (flex sprint)" },
  ],
  debut: true,
};

export default function Compawnion() {
  return (
    <Layout>
      <Header
        image={meta.image}
        number={"1"}
        title={meta.title}
        subtitle={meta.subtitle}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Details details={meta.details} debut={meta.debut} />
            <FigmaEmbed
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7UEFUo9gkJu8eEl6uzgAdJ%2FCompawnion-Mid-Fi-Prototype%3Fpage-id%3D56%253A5357%26node-id%3D56%253A9525%26viewport%3D558%252C-163%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D56%253A9525"
              spacer="lg"
            />
            <Section title="KICKOFF">
              <TitleContent spacer={"md"}>
                <p>
                  While talking about our dreams and aspirations, my teammate
                  and I realised two things:
                </p>
                <ol>
                  <li>
                    We wanted to create something near and dear to our hearts;
                    and,
                  </li>
                  <li>
                    What struck a chord between us was how we were both
                    advocates for pet adoption and we wanted to eventually adopt
                    a pet.
                  </li>
                </ol>
                <p>
                  So we toyed with the idea of creating an app that addressed
                  these overlapping factors.
                </p>
                <p className="mb-0">
                  For this first project, I worked collaboratively with my
                  teammate on all aspects of the app, from research to visuals
                  and the overall UX.{" "}
                </p>
              </TitleContent>
              <Highlight title="Opportunity" spacer="lg">
                <p className="mb-0">
                  What if there was an app that could create pawsitive change
                  and find a forever home for a furiend?
                </p>
              </Highlight>
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
              <TitleContent spacer="lg">
                <p>
                  While we had some idea of what pet adoption is like in
                  Singapore, there was still a gap between our understanding and
                  the larger landscape and what pet adopters have experienced.
                  Additionally, we also had to figure out if such an app was
                  actually needed in our sunny island and how could this app
                  help pet adopters.
                </p>
                <p className="mb-0">So off we went!</p>
              </TitleContent>
              <TitleContent title="Secondary Research" centralise spacer="sm" />
              <Carousel slidesToShow={3} spacer="lg">
                <NumberedKeyPoint
                  number={1}
                  title="6 stages in the pet adoption process"
                  content={
                    <ol>
                      <li>Search for a pet</li>
                      <li>Connect with a shelter/fosterer</li>
                      <li>Meet the pet</li>
                      <li>
                        Home Evaluation and/or Trial Home Stay (dependent on the
                        shelter/fosterer)
                      </li>
                      <li>Actual Adoption!</li>
                      <li>Post-Adoption</li>
                    </ol>
                  }
                />
                <NumberedKeyPoint
                  number={2}
                  title="Many active FB groups dedicated to pet adoptions and fostering in SG"
                  content={
                    <ul>
                      <li>
                        At least 11 groups with an average of 26,300 members
                        each
                      </li>
                      <li>
                        At least 3 posts per day per group in the past week
                        about adoption and adoption requests
                      </li>
                    </ul>
                  }
                />
                <NumberedKeyPoint
                  number={3}
                  title="Pet adoption making waves politically"
                  content={
                    <ul>
                      <li>
                        SG government looking at introducing measures to
                        encourage adoption
                      </li>
                    </ul>
                  }
                />
                <NumberedKeyPoint
                  number={4}
                  title="SG public interest in pet adoption one of the highest worldwide"
                  content={
                    <ul>
                      <li>
                        SG&apos;s Relative Search Volume (RSV) for pet adoption
                        search terms ranked 4th globally during the pandemic
                      </li>
                      <li>
                        Public interest reflected as a fraction of total
                        searches in a specific geographical region between
                        December 2015 - 2020
                      </li>
                    </ul>
                  }
                />
                <NumberedKeyPoint
                  number={5}
                  title="Adoption drives and manpower needs affected by safe-distancing measures"
                  content={
                    <ul>
                      <li>
                        Adoption drives stopped due to COVID-19 circuit breakers
                        and restrictions
                      </li>
                      <li>
                        Shelters unwilling to have remote adoptions -
                        face-to-face interaction crucial
                      </li>
                      <li>
                        Shelters face a manpower crunch to care for the animals,
                        organise adoption drives, and manage adoption requests
                      </li>
                    </ul>
                  }
                />
                <NumberedKeyPoint
                  number={6}
                  title="Overall increase in adoptions and fostering requests"
                  content={
                    <ul>
                      <li>
                        3 shelters reported a 33% to 100% increase in the number
                        of adoptions
                      </li>
                      <li>
                        1 shelter reported a 11.6% drop in adoptions, but a
                        tenfold increase in fostering applications
                      </li>
                    </ul>
                  }
                />
              </Carousel>
              <TitleContent title="Primary Research" centralise spacer="sm">
                <p>
                  Equipped with secondary research, we headed for a deep dive
                  into{" "}
                  <strong>
                    <em>who</em>
                  </strong>{" "}
                  pet adopters are. Here, we focused on open-ended questions to
                  draw upon the richness of their experiences - what their
                  needs, goals and motivations are, and what were their
                  experiences like?
                </p>
                <p>
                  <strong>
                    To uncover these perspectives, we interviewed 5 people - 3
                    were actively searching to adopt and 2 have already adopted
                    a pet.
                  </strong>
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <ImageContentColumns
                  image={"/images/compawnion-affinity-map_01.png"}
                  imageWidth={3491}
                  imageHeight={1785}
                  number={"01."}
                  title={
                    "How successful the adopter is in searching for a suitable pet online is dependent on their ability to filter, sieve through, and compare information"
                  }
                  points={[
                    "Adoptors want to find and compare information quickly and efficiently",
                    "Pet descriptions do not follow a standardised format or contain all information (including photos and videos) adopters want",
                    "Adopters inclined to believe that pet descriptions are not fully transparent as they are written subjectively",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-affinity-map_02.png"}
                  imageWidth={2980}
                  imageHeight={1063}
                  number={"02."}
                  title={"Pet adoption is heavily adopter-driven"}
                  points={[
                    "Belief that pet adoption is ethical and motivating",
                    "Adoption process starts when adopters have suitable life circumstances",
                    "Adopters have pre-existing criteria for what pets they want to adopt",
                    "Animal shelters are perceived as more trustworthy",
                    "Lesser known shelters are omitted from the search process",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-affinity-map_03.png"}
                  imageWidth={2403}
                  imageHeight={1140}
                  number={"03."}
                  title={
                    "Adopters value convenience, digitalisation, and streamlined processes"
                  }
                  points={[
                    "Prefer expending minimum effort in the administrative aspects of the adoption process",
                    "Want soft copies of forms and documents",
                    "Don&apos;t have a reliable way to keep track of pre- and post-adoption tasks",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-affinity-map_04.png"}
                  imageWidth={1349}
                  imageHeight={447}
                  number={"04."}
                  title={
                    "Misaligned expectations between adopters and shelters"
                  }
                  points={[
                    "Adopters expect shelters to provide them with actionable and pre-emptive information",
                    "Shelters expect adopters to know what to prepare for the adoption process and do after the process is completed",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-affinity-map_05.png"}
                  imageWidth={818}
                  imageHeight={878}
                  number={"05."}
                  title={
                    "Positive face-to-face interaction between the pet, adopter, and environment is key to a successful adoption"
                  }
                  points={[
                    "Adopters must and want to have face-to-face interaction with pets before committing to the adoption",
                    "Shelter staff actively observe the pet&apos;s behaviour at a trial home stay and evaluation",
                  ]}
                />
              </Carousel>
              <TitleContent title="Persona" centralise spacer="lg">
                <p>
                  All our interview insights and research eventually culminated
                  into...
                </p>
                <Image
                  src={"/images/compawnion-persona.png"}
                  alt="Persona"
                  width={1306}
                  height={433}
                />
              </TitleContent>
            </Section>
            <Section title="DEFINE">
              <TitleContent title="Defining the Problem" centralise spacer="lg">
                <p className="mb-5">
                  Now that we could put a face to who we were designing for, it
                  was time to get down and dirty - we had to know exactly what
                  we were trying to solve. By charting a journey map, we can
                  visualise the highs and the lows of Pawline&apos;s journey to
                  becoming a pet slave owner.
                </p>
                <div className="mb-5">
                  <Image
                    src={"/images/compawnion-journey-map.png"}
                    alt="User journey"
                    width={2006}
                    height={1280}
                  />
                </div>
                <p className="mb-5">
                  Pawline&apos;s user journey painted a clear overview of where
                  her woes lay: the Search, Communicate, and the Post-Adoption
                  stages. She faced many problems, but we were but a team of two
                  sprinting towards a deadline. With map in hand, we looked for
                  a north star.
                </p>
                <DropdownContent title="💡 Learning point" spacer="sm">
                  <p className="mb-0">
                    Real life business goals would help align our goals and
                    focus our priorities on how we can help Pawline.
                  </p>
                </DropdownContent>
                <p className="mb-0">
                  A commonality in the secondary research and user interviews
                  was that both adopters and shelters heavily emphasised the
                  need to interact with a potential pet first before adoption.
                  This means that while we cannot influence shelter evaluations,
                  we could affect the most change in the search process. This
                  tied in with one of Pawline&apos;s main goals - to find and
                  meet a pet.
                </p>
              </TitleContent>
              <Highlight title="Problem" spacer="lg">
                <p className="mb-0">
                  Adopters need a way to easily search for pets and connect with
                  multiple shelters because they want to consider a wide
                  selection and make an informed decision before adopting a pet.
                </p>
              </Highlight>
              <NarrowTitlePoints
                title="How Might We Help Pawline"
                points={[
                  "Search for pets that suit her criteria?",
                  "Quickly understand and compare large amounts of information about pets from different shelters?",
                  "Connect with shelters?",
                  "Keep track of what to do for the adoption process?",
                ]}
                spacer="lg"
              />
              <TitleContent title="User Flows" centralise>
                <p>
                  Before we could create the app, we had to understand and
                  empathise with the decisions and paths Pawline might take to
                  achieve her goals on a more granular level. This would help
                  further guide us in designing the app&apos;s features and
                  functionalities. As such, we created user flows to represent
                  these pathways before identifying key issues to solve.
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <NumberedContentImageColumns
                  number={"1"}
                  title={
                    "Pet adoption is not linear and has a lot of unnecessary repeated actions"
                  }
                  points={[
                    "Administrative processes and face-to-face interactions are broken up and repetitive",
                    "If adopters have to repeat certain steps in the adoption process, they must start anew from a much earlier stage - tedious, frustrating for adopters",
                  ]}
                  image={"/images/compawnion-userflow-01.png"}
                />
                <NumberedContentImageColumns
                  number={"2"}
                  title={"Search process is circular and time consuming"}
                  points={[
                    <>
                      Researching and searching for shelters and pets are
                      heavily adopter-action driven
                      <ul className="mt-1 mb-3">
                        <li>
                          14 user actions (blue squares); 4 user decisions
                          (yellow diamonds)
                        </li>
                      </ul>
                    </>,
                    <>
                      Adopters must repeat many steps to learn about shelters
                      and get pet information
                      <ul className="mt-1 mb-3">
                        <li>
                          Must put in even more effort to compare and remember
                          what they find
                        </li>
                      </ul>
                    </>,
                  ]}
                  image={"/images/compawnion-userflow-02.png"}
                />
                <NumberedContentImageColumns
                  number={"3"}
                  title={
                    "Administrative processes and face-to-face interactions are broken up and repetitive"
                  }
                  points={[
                    "Processes are also repeated for each new shelter the adopter wants to interact with",
                  ]}
                  image={"/images/compawnion-userflow-03.png"}
                />
              </Carousel>
            </Section>
            <Section title="IDEATE">
              <TitleContent title="Wireframes" centralise spacer="lg">
                <p className="mb-5">
                  With our understanding of the research, Pawline and her goals,
                  my teammate and I sketched low-fidelity wireframes. We decided
                  to work independently on creating our designs first before
                  reconvening to decide on the designs that would be brought to
                  life.
                </p>
                <DropdownContent title="💡 Learning point" spacer="sm">
                  <p className="mb-0">
                    When my teammate and I embarked on this project, we had yet
                    to learn about the joys (and fun!) of ideation workshops. In
                    retrospect, we would have considered inviting users to join
                    us in breathing life into Compawnion 😌
                  </p>
                </DropdownContent>
                <Image
                  src={"/images/compawnion-wireframes-01.png"}
                  alt="Wireframes"
                  width={2020}
                  height={1200}
                />
              </TitleContent>
            </Section>
            <Section title="PROTOTYPE">
              <TitleContent title="Mid-fi Prototype" centralise spacer="lg">
                <div className="mt-5 mb-4">
                  <Image
                    src={"/images/compawnion-wireframes-02.png"}
                    alt="Mid-fi prototype"
                    width={1524}
                    height={1336}
                  />
                </div>
                <Link href={process.env.NEXT_PUBLIC_PROTOTYPE_COMPAWNION || ""}>
                  <a target={"_blank"}>Play with the prototype here</a>
                </Link>
              </TitleContent>
            </Section>
            <Section title="REFLECT">
              <TitleContent title="Moving Forward" centralise spacer="md">
                <p>
                  Compawnion was my first foray into UIUX and suffice to say, it
                  hit a sweet spot where the skills I&apos;ve picked up over the
                  years melded with my love of solving problems and trying to be
                  more creative. After the project, I learnt many things on
                  hindsight and was left with many more questions about UIUX -
                  questions I look forward to finding the answers to as I plunge
                  deeper into this new world.
                </p>
              </TitleContent>
              <ThreeColumns
                column1={
                  <KeyIssue caption="PROCESS" title="recency">
                    <p>
                      How long is too long ago? Was it important to include the
                      perspectives of someone who adopted a long time ago?
                    </p>
                    <p>
                      On hindsight, yes, since the research goals were to
                      discover the needs and pain points of the pet adoption
                      process.
                    </p>
                    <p>
                      However, in other scenarios with product-centric
                      questions, it may not be useful as the product may have
                      changed significantly since.
                    </p>
                  </KeyIssue>
                }
                column2={
                  <KeyIssue caption="CHANGE" title="(di)similarity">
                    <p>
                      During ideation, we should have considered a wider range
                      of apps.
                    </p>
                    <p>
                      In usability tests, users relied on their mental model of
                      existing apps to make sense of Compawnion, even if these
                      apps may not seem immediately relevant
                    </p>
                    <p>
                      As the GA course progressed, I&apos;ve since learnt about
                      competitive and comparative analysis and its role in the
                      UIUX process.
                    </p>
                  </KeyIssue>
                }
                column3={
                  <KeyIssue caption="UPWARDS &amp; ONWARDS" title="progress">
                    <ul>
                      <li className="mb-4">
                        Reiterate mid-fi prototype and transform Compawnion into
                        a high-fidelity prototype
                      </li>
                      <li className="mb-4">
                        Prioritise and differentiate features for an MVP and
                        later versions to see how Compawnion may evolve
                      </li>
                      <li className="mb-4">
                        Consider and design functionalities for pet shelters for
                        an added challenge (posting pet profiles, interacting
                        with adopters, confirm and track visits, etc.)
                      </li>
                    </ul>
                  </KeyIssue>
                }
                spacer="lg"
              />
            </Section>
            <div className="spacer-lg">
              <Stars />
            </div>
            <ContactCTA spacer="lg">
              If you&apos;re interested in working together or finding out more,
              feel free to reach out ✨
            </ContactCTA>
          </div>
        </div>
      </div>
    </Layout>
  );
}
