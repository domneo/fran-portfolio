import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import { BackgroundZone } from "components/common/BackgroundZone";
import { ContactCTA } from "components/common/ContactCTA";
import { ImageZoom } from "components/common/ImageZoom";
import { Stars } from "components/common/Stars";
import { BigNumberContent } from "components/works/BigNumberContent";
import { CaptionTitleContent } from "components/works/CaptionTitleContent";
import { Carousel } from "components/works/Carousel";
import { Container } from "components/works/Container";
import { Details } from "components/works/Details";
import { DropdownContent } from "components/works/DropdownContent";
import { Header } from "components/works/Header";
import { Heading } from "components/works/Heading";
import { Highlight } from "components/works/Highlight";
import { Section } from "components/works/Section";
import { Spacer } from "components/works/Spacer";
import { ThreeColumns } from "components/works/ThreeColumns";
import { TwoColumns } from "components/works/TwoColumns";

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
      <section>
        <Header
          image={meta.image}
          number={"3"}
          title={meta.title}
          subtitle={meta.subtitle}
        />
      </section>
      <section>
        <Container size="normal">
          <Details details={meta.details} debut={meta.debut} />
        </Container>
      </section>
      <Section title="KICKOFF">
        <Container size="compact">
          <p>
            While talking about our dreams and aspirations, my teammate and I
            realised two things:
          </p>
          <ol>
            <li>
              We wanted to create something near and dear to our hearts; and,
            </li>
            <li>
              What struck a chord between us was how we were both advocates for
              pet adoption and we wanted to eventually adopt a pet.
            </li>
          </ol>
          <p>
            So we toyed with the idea of creating an app that addressed these
            overlapping factors.
          </p>
          <p>
            For this first project, I worked collaboratively with my teammate on
            all aspects of the app, from research to visuals and the overall UX.
          </p>
        </Container>
        <Spacer size="lg" />
        <Container size="normal">
          <Highlight type="star" title="Opportunity">
            <p>
              What if there was an app that could create pawsitive change and
              find a forever home for a furiend?
            </p>
          </Highlight>
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="PROCESS">
        <Container size="normal" centerElements>
          <Image
            src={"/images/designProcess.svg"}
            alt="The design process"
            width={1146}
            height={296}
          />
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="EMPATHISE">
        <Container size="compact">
          <p>
            While we had some idea of what pet adoption is like in Singapore,
            there was still a gap between our understanding and the larger
            landscape and what pet adopters have experienced. Additionally, we
            also had to figure out if such an app was actually needed in our
            sunny island and how could this app help pet adopters.
          </p>
          <p>So off we went!</p>
        </Container>
        <Spacer size="lg" />
        <Heading centerText>Secondary Research</Heading>
        <Spacer size="sm" />
        <Container size="normal" centerElements>
          <Carousel slidesToShow={3}>
            <CaptionTitleContent
              bigTitle={1}
              title="6 stages in the pet adoption process"
              centerHeaderText
              showLine
            >
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
            </CaptionTitleContent>
            <CaptionTitleContent
              bigTitle={2}
              title="Many active FB groups dedicated to pet adoptions and fostering in SG"
              centerHeaderText
              showLine
            >
              <ul>
                <li>
                  At least 11 groups with an average of 26,300 members each
                </li>
                <li>
                  At least 3 posts per day per group in the past week about
                  adoption and adoption requests
                </li>
              </ul>
            </CaptionTitleContent>
            <CaptionTitleContent
              bigTitle={3}
              title="Pet adoption making waves politically"
              centerHeaderText
              showLine
            >
              <ul>
                <li>
                  SG government looking at introducing measures to encourage
                  adoption
                </li>
              </ul>
            </CaptionTitleContent>
            <CaptionTitleContent
              bigTitle={4}
              title="SG public interest in pet adoption one of the highest worldwide"
              centerHeaderText
              showLine
            >
              <ul>
                <li>
                  SG&apos;s Relative Search Volume (RSV) for pet adoption search
                  terms ranked 4th globally during the pandemic
                </li>
                <li>
                  Public interest reflected as a fraction of total searches in a
                  specific geographical region between December 2015 - 2020
                </li>
              </ul>
            </CaptionTitleContent>
            <CaptionTitleContent
              bigTitle={5}
              title="Adoption drives and manpower needs affected by safe-distancing measures"
              centerHeaderText
              showLine
            >
              <ul>
                <li>
                  Adoption drives stopped due to COVID-19 circuit breakers and
                  restrictions
                </li>
                <li>
                  Shelters unwilling to have remote adoptions - face-to-face
                  interaction crucial
                </li>
                <li>
                  Shelters face a manpower crunch to care for the animals,
                  organise adoption drives, and manage adoption requests
                </li>
              </ul>
            </CaptionTitleContent>
            <CaptionTitleContent
              bigTitle={6}
              title="Overall increase in adoptions and fostering requests"
              centerHeaderText
              showLine
            >
              <ul>
                <li>
                  3 shelters reported a 33% to 100% increase in the number of
                  adoptions
                </li>
                <li>
                  1 shelter reported a 11.6% drop in adoptions, but a tenfold
                  increase in fostering applications
                </li>
              </ul>
            </CaptionTitleContent>
          </Carousel>
        </Container>
        <Spacer size="lg" />
        <Container size="compact" centerText>
          <p>
            Equipped with secondary research, we headed for a deep dive into
            <strong>
              <em> who </em>
            </strong>
            pet adopters are. Here, we focused on open-ended questions to draw
            upon the richness of their experiences - what their needs, goals and
            motivations are, and what were their experiences like?
          </p>
          <p>
            <strong>
              To uncover these perspectives, we interviewed 5 people - 3 were
              actively searching to adopt and 2 have already adopted a pet.
            </strong>
          </p>
        </Container>
        <Spacer size="sm" />
        <Container size="normal">
          <Carousel centerVertically>
            <TwoColumns col1Props={{ centerV: true, centerH: true }}>
              <ImageZoom
                src={"/images/compawnion-affinity-map_01.png"}
                alt={
                  "How successful the adopter is in searching for a suitable pet online is dependent on their ability to filter, sieve through, and compare information"
                }
                width={3491}
                height={1785}
              />
              <CaptionTitleContent
                caption="01."
                title="How successful the adopter is in searching for a suitable pet online is dependent on their ability to filter, sieve through, and compare information"
              >
                <ul className="mb-0">
                  <li>
                    Adoptors want to find and compare information quickly and
                    efficiently
                  </li>
                  <li>
                    Pet descriptions do not follow a standardised format or
                    contain all information (including photos and videos)
                    adopters want
                  </li>
                  <li>
                    Adopters inclined to believe that pet descriptions are not
                    fully transparent as they are written subjectively
                  </li>
                </ul>
              </CaptionTitleContent>
            </TwoColumns>
            <TwoColumns col1Props={{ centerV: true, centerH: true }}>
              <ImageZoom
                src={"/images/compawnion-affinity-map_02.png"}
                alt={"Pet adoption is heavily adopter-driven"}
                width={2980}
                height={1063}
              />
              <CaptionTitleContent
                caption="02."
                title="Pet adoption is heavily adopter-driven"
              >
                <ul className="mb-0">
                  <li>Belief that pet adoption is ethical and motivating</li>
                  <li>
                    Adoption process starts when adopters have suitable life
                    circumstances
                  </li>
                  <li>
                    Adopters have pre-existing criteria for what pets they want
                    to adopt
                  </li>
                  <li>Animal shelters are perceived as more trustworthy</li>
                  <li>
                    Lesser known shelters are omitted from the search process
                  </li>
                </ul>
              </CaptionTitleContent>
            </TwoColumns>
            <TwoColumns col1Props={{ centerV: true, centerH: true }}>
              <ImageZoom
                src={"/images/compawnion-affinity-map_03.png"}
                alt={
                  "Adopters value convenience, digitalisation, and streamlined processes"
                }
                width={2403}
                height={1140}
              />
              <CaptionTitleContent
                caption="03."
                title="Adopters value convenience, digitalisation, and streamlined processes"
              >
                <ul className="mb-0">
                  <li>
                    Prefer expending minimum effort in the administrative
                    aspects of the adoption process
                  </li>
                  <li>Want soft copies of forms and documents</li>
                  <li>
                    Don&apos;t have a reliable way to keep track of pre- and
                    post-adoption tasks
                  </li>
                </ul>
              </CaptionTitleContent>
            </TwoColumns>
            <TwoColumns col1Props={{ centerV: true, centerH: true }}>
              <ImageZoom
                src={"/images/compawnion-affinity-map_04.png"}
                alt={"Misaligned expectations between adopters and shelters"}
                width={1349}
                height={447}
              />
              <CaptionTitleContent
                caption="04."
                title="Misaligned expectations between adopters and shelters"
              >
                <ul className="mb-0">
                  <li>
                    Adopters expect shelters to provide them with actionable and
                    pre-emptive information
                  </li>
                  <li>
                    Shelters expect adopters to know what to prepare for the
                    adoption process and do after the process is completed
                  </li>
                </ul>
              </CaptionTitleContent>
            </TwoColumns>
            <TwoColumns col1Props={{ centerV: true, centerH: true }}>
              <ImageZoom
                src={"/images/compawnion-affinity-map_05.png"}
                alt={
                  "Positive face-to-face interaction between the pet, adopter, and environment is key to a successful adoption"
                }
                width={818}
                height={878}
              />
              <CaptionTitleContent
                caption="05."
                title="Positive face-to-face interaction between the pet, adopter, and environment is key to a successful adoption"
              >
                <ul className="mb-0">
                  <li>
                    Adopters must and want to have face-to-face interaction with
                    pets before committing to the adoption
                  </li>
                  <li>
                    Shelter staff actively observe the pet&apos;s behaviour at a
                    trial home stay and evaluation
                  </li>
                </ul>
              </CaptionTitleContent>
            </TwoColumns>
          </Carousel>
        </Container>
        <Spacer size="lg" />
        <Heading centerText>Persona</Heading>
        <Container size="compact" centerText>
          <p>
            All our interview insights and research eventually culminated
            into...
          </p>
        </Container>
        <Container size="normal">
          <Image
            src={"/images/compawnion-persona.png"}
            alt="Persona"
            width={2612}
            height={930}
          />
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="DEFINE">
        <Container size="compact" centerElements centerText>
          <Heading centerText>Defining the Problem</Heading>
          <p>
            Now that we could put a face to who we were designing for, it was
            time to get down and dirty - we had to know exactly what we were
            trying to solve. By charting a journey map, we can visualise the
            highs and the lows of Pawline&apos;s journey to becoming a pet
            <s> slave </s>owner.
          </p>
          <Spacer size="xs" />
          <ImageZoom
            src={"/images/compawnion-journey-map.png"}
            alt="User journey"
            width={2006}
            height={1280}
          />
          <Spacer size="sm" />
          <p>
            Pawline&apos;s user journey painted a clear overview of where her
            woes lay: the Search, Communicate, and the Post-Adoption stages. She
            faced many problems, but we were but a team of two sprinting towards
            a deadline. With map in hand, we looked for a north star.
          </p>
          <DropdownContent title="💡 Learning point">
            <p>
              Real life business goals would help align our goals and focus our
              priorities on how we can help Pawline.
            </p>
          </DropdownContent>
          <Spacer size="xs" />
          <p>
            A commonality in the secondary research and user interviews was that
            both adopters and shelters heavily emphasised the need to interact
            with a potential pet first before adoption. This means that while we
            cannot influence shelter evaluations, we could affect the most
            change in the search process. This tied in with one of
            Pawline&apos;s main goals - to find and meet a pet.
          </p>
        </Container>
        <Spacer size="lg" />
        <Container size="normal" centerElements>
          <Highlight type="star" title="Problem">
            <p>
              Adopters need a way to easily search for pets and connect with
              multiple shelters because they want to consider a wide selection
              and make an informed decision before adopting a pet.
            </p>
          </Highlight>
        </Container>
        <Spacer size="lg" />
        <Container size="narrow">
          <Heading size="h5" centerText>
            How Might We Help Pawline
          </Heading>
          <ul className="mb-0">
            <li>Search for pets that suit her criteria?</li>
            <li>
              Quickly understand and compare large amounts of information about
              pets from different shelters?
            </li>
            <li>Connect with shelters?</li>
            <li>Keep track of what to do for the adoption process?</li>
          </ul>
        </Container>
        <Spacer size="lg" />
        <Container size="compact" centerText>
          <Heading centerText>User Flows</Heading>
          <p>
            Before we could create the app, we had to understand and empathise
            with the decisions and paths Pawline might take to achieve her goals
            on a more granular level. This would help further guide us in
            designing the app&apos;s features and functionalities. As such, we
            created user flows to represent these pathways before identifying
            key issues to solve.
          </p>
        </Container>
        <Container size="normal">
          <Carousel centerVertically>
            <div>
              <ImageZoom
                src={"/images/compawnion-userflow-01.png"}
                alt="Pet adoption is not linear and has a lot of unnecessary repeated actions"
                width={3840}
                height={950}
              />
              <Spacer size="sm" />
              <Container size="normal">
                <BigNumberContent number="1">
                  <CaptionTitleContent title="Pet adoption is not linear and has a lot of unnecessary repeated actions">
                    <ul className="mb-0">
                      <li>
                        Administrative processes and face-to-face interactions
                        are broken up and repetitive
                      </li>
                      <li>
                        If adopters have to repeat certain steps in the adoption
                        process, they must start anew from a much earlier stage
                        - tedious, frustrating for adopters
                      </li>
                    </ul>
                  </CaptionTitleContent>
                </BigNumberContent>
              </Container>
            </div>
            <div>
              <div className="mx-auto" style={{ maxWidth: "1147px" }}>
                <ImageZoom
                  src={"/images/compawnion-userflow-02.png"}
                  alt="Search process is circular and time consuming"
                  width={4513}
                  height={1653}
                />
              </div>
              <Spacer size="sm" />
              <Container size="normal">
                <BigNumberContent number="2">
                  <CaptionTitleContent title="Search process is circular and time consuming">
                    <ul className="mb-0">
                      <li>
                        Researching and searching for shelters and pets are
                        heavily adopter-action driven
                        <ul className="mt-1 mb-3">
                          <li>
                            14 user actions (blue squares); 4 user decisions
                            (yellow diamonds)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Adopters must repeat many steps to learn about shelters
                        and get pet information
                        <ul className="mt-1 mb-3">
                          <li>
                            Must put in even more effort to compare and remember
                            what they find
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </CaptionTitleContent>
                </BigNumberContent>
              </Container>
            </div>
            <div>
              <div className="mx-auto" style={{ maxWidth: "628px" }}>
                <ImageZoom
                  src={"/images/compawnion-userflow-03.png"}
                  alt="Administrative processes and face-to-face interactions are broken up and repetitive"
                  width={3167}
                  height={2329}
                />
              </div>
              <Spacer size="sm" />
              <Container size="normal">
                <BigNumberContent number="3">
                  <CaptionTitleContent title="Administrative processes and face-to-face interactions are broken up and repetitive">
                    <ul className="mb-0">
                      <li>
                        Processes are also repeated for each new shelter the
                        adopter wants to interact with
                      </li>
                    </ul>
                  </CaptionTitleContent>
                </BigNumberContent>
              </Container>
            </div>
          </Carousel>
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="IDEATE">
        <Container size="compact" centerText>
          <Heading centerText>Wireframes</Heading>
          <p>
            With our understanding of the research, Pawline and her goals, my
            teammate and I sketched low-fidelity wireframes. We decided to work
            independently on creating our designs first before reconvening to
            decide on the designs that would be brought to life.
          </p>
          <DropdownContent title="💡 Learning point">
            When my teammate and I embarked on this project, we had yet to learn
            about the joys (and fun!) of ideation workshops. In retrospect, we
            would have considered inviting users to join us in breathing life
            into Compawnion 😌
          </DropdownContent>
        </Container>
        <Spacer size="sm" />
        <Container size="normal" centerText centerElements>
          <Image
            src={"/images/compawnion-sketches.jpg"}
            alt="Sketches"
            width={2498}
            height={1488}
          />
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="PROTOTYPE">
        <Container size="compact" centerText centerElements>
          <Heading centerText>Mid-fi Prototype</Heading>
        </Container>
        <Spacer size="sm" />
        <Container size="normal" centerText centerElements>
          <Image
            src={"/images/compawnion-midfi-withframe.png"}
            alt="Mid-fi prototype"
            width={2870}
            height={1952}
            unoptimized
          />
          <Spacer size="xs" />
          <Link href={process.env.NEXT_PUBLIC_PROTOTYPE_COMPAWNION || ""}>
            <a target={"_blank"}>Play with the prototype here</a>
          </Link>
        </Container>
        <Spacer size="lg" />
      </Section>
      <Section title="REFLECT">
        <Container size="compact" centerText>
          <Heading centerText>Moving Forward</Heading>
          <p>
            Compawnion was my first foray into UIUX and suffice to say, it hit a
            sweet spot where the skills I&apos;ve picked up over the years
            melded with my love of solving problems and trying to be more
            creative. After the project, I learnt many things on hindsight and
            was left with many more questions about UIUX - questions I look
            forward to finding the answers to as I plunge deeper into this new
            world.
          </p>
        </Container>
        <Spacer size="md" />
        <Container size="normal">
          <ThreeColumns>
            <CaptionTitleContent caption="PROCESS" bigTitle="recency" showLine>
              <p>
                How long is too long ago? Was it important to include the
                perspectives of someone who adopted a long time ago?
              </p>
              <p>
                On hindsight, yes, since the research goals were to discover the
                needs and pain points of the pet adoption process.
              </p>
              <p>
                However, in other scenarios with product-centric questions, it
                may not be useful as the product may have changed significantly
                since.
              </p>
            </CaptionTitleContent>
            <CaptionTitleContent
              caption="CHANGE"
              bigTitle="(di)similarity"
              showLine
            >
              <p>
                During ideation, we should have considered a wider range of
                apps.
              </p>
              <p>
                In usability tests, users relied on their mental model of
                existing apps to make sense of Compawnion, even if these apps
                may not seem immediately relevant
              </p>
              <p>
                As the GA course progressed, I&apos;ve since learnt about
                competitive and comparative analysis and its role in the UIUX
                process.
              </p>
            </CaptionTitleContent>
            <CaptionTitleContent
              caption="UPWARDS &amp; ONWARDS"
              bigTitle="progress"
              showLine
            >
              <ul>
                <li className="mb-4">
                  Reiterate mid-fi prototype and transform Compawnion into a
                  high-fidelity prototype
                </li>
                <li className="mb-4">
                  Prioritise and differentiate features for an MVP and later
                  versions to see how Compawnion may evolve
                </li>
                <li className="mb-4">
                  Consider and design functionalities for pet shelters for an
                  added challenge (posting pet profiles, interacting with
                  adopters, confirm and track visits, etc.)
                </li>
              </ul>
            </CaptionTitleContent>
          </ThreeColumns>
        </Container>
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
