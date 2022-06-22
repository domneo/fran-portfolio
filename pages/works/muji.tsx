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
import { MultiImageNumberedContent } from "components/works/MultiImageNumberedContent";
import { NarrowTitlePoints } from "components/works/NarrowTitlePoints";
import { NumberedContentImageColumns } from "components/works/NumberedContentImageColumns";
import { NumberedKeyPoint } from "components/works/NumberedKeyPoint";
import { Section } from "components/works/Section";
import { ThreeColumns } from "components/works/ThreeColumns";
import { TitleContent } from "components/works/TitleContent";
import { TwoColumns } from "components/works/TwoColumns";

export const meta = {
  image: "/images/muji-hero.jpg",
  title: "Muji",
  subtitle:
    "Transforming an e-catalog into a seamless &apos;MUJI&apos; e-commerce experience for shoppers",
  details: [
    {
      title: "Challenge",
      content:
        "(GA Project) Design an improved e-Commerce experience for the MUJI SG website.",
    },
    { title: "Role", content: "UIUX Designer (one woman show)" },
    { title: "Platform", content: "Website" },
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

export default function Compawnion() {
  return (
    <Layout>
      <Header
        image={meta.image}
        number={"2"}
        title={meta.title}
        subtitle={meta.subtitle}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Details details={meta.details} />
            <FigmaEmbed
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2CTw3LMGDNk8EZdPh04xYk%2FMUJI_Redesigned%3Fpage-id%3D0%253A1%26node-id%3D103%253A5575%26viewport%3D199%252C404%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D103%253A5575"
              spacer="lg"
            />
            <Section title="KICKOFF">
              <TitleContent spacer="sm">
                <p>
                  If there was a brand that immutably embodies its values to its
                  very core, you can bet your bottom dollar it&apos;s MUJI. The
                  company is so committed to its cause that it is literally
                  named as such - MUJI is short for &apos;Mujirushi
                  Ryohin&apos;, and it translates to &apos;no-brand quality
                  goods&apos;.
                </p>
                <p className="mb-0">
                  However, where MUJI&apos;s iconic brick and mortar stores are
                  beautifully and intentionally organised, its online experience
                  is that of a catalogue far disconnected from its offline
                  experience.
                </p>
              </TitleContent>
              <Highlight title="Opportunity" spacer="lg">
                <p className="mb-0">
                  What if the online-offline
                  <span className="mx-3">d i s c o n n e c t</span> could be
                  reconnected with a MUJI SG e-commerce experience that matches
                  its iconic physical stores?
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
              <TitleContent
                title="Primary Research"
                spacer="lg"
                fullwidth
                centralise
              >
                <div className="mt-5">
                  <ImageContentColumns
                    image={"/images/muji-store-interior.jpg"}
                    title={
                      "In a convenience sampling of 26 MUJI shoppers, an overwhelming majority believed they could shop on MUJI&apos;s website"
                    }
                    points={[
                      "23 / 26 people believed that the site supported e-commerce",
                      "All respondents stated that the site is reminiscent of an e-commerce site",
                    ]}
                  />
                </div>
              </TitleContent>
              <TitleContent spacer="sm" centralise>
                <p className="mb-0">
                  I further recruited 4 online shoppers who were also MUJI
                  consumers between 24 - 33 years old for in-depth user
                  interviews and a usability test on the existing MUJI SG
                  website.
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <ImageContentColumns
                  image={"/images/muji-affinity-map_01.png"}
                  number="01."
                  title={"All consumers want to shop on MUJI&apos;s website"}
                  points={[
                    "50% of interviewees were surprised that this feature did not already exist",
                    "Further validates the convenient sampling results",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/muji-affinity-map_02.png"}
                  number="02."
                  title={"Online catalogues are generally not useful"}
                  points={[
                    "Belief that it serves to direct consumers to luxury or premium brands with in-store only experiences",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/muji-affinity-map_03.png"}
                  number="03."
                  title={
                    "Brand websites should reflect consumers&apos; preconceived impressions and experiences with its physical stores"
                  }
                  points={[
                    "Disconnect in experience on MUJI&apos;s website and physical store",
                    "Brand identity affects how consumers perceive a brand and what they expect to experience",
                    "Experience and branding should also carry over into a brand&apos;s mobile and app counterparts",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/muji-affinity-map_04.png"}
                  number="04."
                  title={
                    "Shopping websites and point-of-sale affect consumer perceptions"
                  }
                  points={[
                    "Brand websites perceived as more trustworthy and secure than 3rd party retailers",
                    "Affects where consumers choose to buy certain products",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/muji-affinity-map_05.png"}
                  number="05."
                  title={
                    "Preference for shopping websites to be uncluttered and straightforward - overall baseline expectation i MUJI"
                  }
                  points={[
                    "No advertisements or gamification elements",
                    "Be able to find products and compare information quickly and efficiently",
                    "Given MUJI&apos;s reputation for minimalism and functionalism, consumers expect these concepts to be a given on its website as well",
                  ]}
                />
              </Carousel>
              <TitleContent title="Evaluating MUJI" spacer="sm" centralise>
                <p>
                  Because MUJI&apos;s current website is an e-catalogue, users
                  were not able to replicate a full shopping experience on the
                  website (i.e. they couldn&apos;t test a Checkout). As such,
                  the usability tests revolved around Discovery - navigating
                  through the site to find products.
                </p>
                <p className="mb-0">
                  This was where things got{" "}
                  <strong className="text-copperrose">really</strong>{" "}
                  interesting..
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <MultiImageNumberedContent
                  topContent={
                    <div className="row mb-5">
                      <div className="col-lg-3 offset-lg-1 text-center">
                        <div
                          className="mx-auto mb-2"
                          style={{ maxWidth: "214px" }}
                        >
                          <Image
                            src="/images/muji-point-01_left.png"
                            alt="Condensed IA"
                            width={563}
                            height={1053}
                          />
                        </div>
                        <p className="caption mb-0">Condensed IA</p>
                      </div>
                      <div className="col-lg-6 text-center">
                        <div
                          className="mx-auto mb-2"
                          style={{ maxWidth: "682px" }}
                        >
                          <Image
                            src="/images/muji-point-01_right.gif"
                            alt="How users can access the “Fashion” category and how every page is a “Filter”"
                            width={1294}
                            height={759}
                          />
                        </div>
                        <p className="caption mb-0">
                          How users can access the “Fashion” category and how
                          every page is a “Filter”
                        </p>
                      </div>
                    </div>
                  }
                  number="1"
                  title="Navigating through the site is navigating through “Filterception”"
                  points={[
                    <>
                      Information Architecture (IA) is confusing
                      <ul className="mt-1 mb-3">
                        <li>
                          <strong>All users</strong> spent too much time is
                          spent trying to understand and navigate the website
                          than achieving goals
                        </li>
                        <li>
                          Slowest user took{" "}
                          <strong>about 15 minutes to find 2 products</strong>
                        </li>
                      </ul>
                    </>,
                    <>
                      Mismatch between what users expect in a process and how a
                      digital experience actually makes them feel
                      <ul className="mt-1 mb-3">
                        <li>
                          Main navigational elements (navigation bar, footer)
                          and ontology (main and sub-categories) don&apos;t
                          follow users&apos; mental models
                        </li>
                      </ul>
                    </>,
                  ]}
                />
                <MultiImageNumberedContent
                  topContent={
                    <div className="row justify-content-center mb-5">
                      <div className="col-lg-10 text-center">
                        <div
                          className="mx-auto mb-2"
                          style={{ maxWidth: "484px" }}
                        >
                          <Image
                            src="/images/muji-Point-02_top.png"
                            alt="Landing Page Footer &gt; Element flow:→&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typeface: Helvetica"
                            width={1094}
                            height={474}
                          />
                        </div>
                        <p className="caption">
                          Landing Page Footer &gt; Element flow:
                          →&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typeface: Helvetica
                        </p>
                        <div
                          className="mx-auto mb-2"
                          style={{ maxWidth: "708px" }}
                        >
                          <Image
                            src="/images/muji-Point-02_bottom.png"
                            alt="Footer for all other pages &gt; Element flow:↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typeface: Meiryo"
                            width={1476}
                            height={271}
                          />
                        </div>
                        <p className="caption mb-0">
                          Footer for all other pages &gt; Element flow:
                          ↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typeface: Meiryo
                        </p>
                      </div>
                    </div>
                  }
                  number="2"
                  title="Footer(s) did not follow convention or address user needs"
                  points={[
                    <>
                      External inconsistency as it strays from established
                      footer use
                      <ul className="mt-1 mb-3">
                        <li>
                          Many similar and overlapping elements, with links that
                          <strong>do not appear</strong> anywhere else on the
                          site
                        </li>
                        <li>
                          Confused <strong>3 / 4</strong> users who used the
                          footer (”like a site map”) to look for pages
                        </li>
                        <li>
                          <strong>50%</strong> were surprised and wondered if
                          they had missed anything or if anything had changed
                        </li>
                      </ul>
                    </>,
                    <>
                      Internal inconsistency in terms of element flow, colours
                      and typeface
                      <ul className="mt-1 mb-3">
                        <li>
                          MUJI&apos;s official brand book lists the brand
                          typeface as Helvetica (English) and Yu Gothic
                          (Japanese)
                        </li>
                      </ul>
                    </>,
                  ]}
                />
              </Carousel>
              <TitleContent title="Persona" spacer="lg" centralise fullwidth>
                <p>
                  All our interview insights and research eventually culminated
                  into...
                </p>
                <Image
                  src={"/images/muji-persona.png"}
                  alt="MUJI Persona"
                  width={1306}
                  height={462}
                />
              </TitleContent>
            </Section>
            <Section title="DEFINE">
              <TitleContent title="Defining the Problem" spacer="lg" centralise>
                <p className="mb-5">
                  While synthesising the research gathered so far, I defined the
                  key problems that had to be resolved and started laying the
                  groundwork for solutions. This was done by laying out the most
                  immediate business and user goals for an overview and a clear
                  direction.
                </p>
                <div className="mx-auto mb-5" style={{ maxWidth: "852px" }}>
                  <Image
                    src={"/images/muji-venn-diagram.png"}
                    alt={"MUJI venn diagram"}
                    width={1187}
                    height={1122}
                  />
                </div>
                <p>
                  A huge overlap in the business and user goals - further
                  reinforced by the convenience sampling of MUJI customers - was
                  a want for and an overall assumption of the possibility of
                  direct e-commerce. It follows then, that{" "}
                  <strong>
                    the redesign had to focus not on just improving the online
                    experience, but to{" "}
                    <span className="text-copperrose">create</span> an
                    e-commerce experience.
                  </strong>
                </p>
              </TitleContent>
              <Highlight title="Problem" spacer="lg">
                <p className="mb-0">
                  Consumers need a way to browse for products and make purchases
                  online on the MUJI website. They want convenience and direct
                  access to all products without having to visit MUJI&apos;s
                  physical stores or 3rd party online retailers.
                </p>
              </Highlight>
              <NarrowTitlePoints
                title="How Might We Help Lee Tee"
                points={[
                  "Efficiently navigate and browse for products on the MUJI website?",
                  "Make purchases through the MUJI website?",
                ]}
                spacer="lg"
              />
              <TitleContent title="User Flows" spacer="sm" centralise>
                <p className="mb-0">
                  Now, with a problem in mind, I wanted to understand and
                  emphathise with Lee Tee&apos;s possible decisions and paths on
                  a more granular level. Discovery and Checkout user flows were
                  thus created to represent these pathways.
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <NumberedContentImageColumns
                  number="1"
                  title="Existing Discovery Flow is unnecessarily complex"
                  points={[
                    <>
                      <strong>3 / 4</strong> users were unable to discover
                      products due to the &apos;filter&apos; navigation system
                    </>,
                    "The site&apos;s &apos;filter&apos; navigation system meant that users had to navigate through filters to access certain pages",
                  ]}
                  image="/images/muji-user-flow_01.png"
                />
                <NumberedContentImageColumns
                  number="2"
                  title="Not intuitive to view all products in an overarching category"
                  points={[
                    "Overarching category pages can be accessed only if users noticed that search bar terms can be removed or manipulated the URL",
                    <>
                      Users have pre-conceived expectations of how a site should
                      work
                      <ul className="mt-1 mb-3">
                        <li>
                          All users wanted and expected to be able to access
                          overarching category pages when discovering new
                          products since they could do so on other websites
                        </li>
                      </ul>
                    </>,
                  ]}
                  image="/images/muji-user-flow_02.png"
                />
                <NumberedContentImageColumns
                  number="3"
                  title="Buying MUJI products online dependent on consumer awareness and willingness to put in additional effort"
                  points={[
                    <>
                      No existing checkout means consumers must either:
                      <ul className="mt-1 mb-3">
                        <li>
                          Find / be aware of an e-commerce site that sells MUJI
                          products; or,
                        </li>
                        <li>Be willing to visit a physical store</li>
                      </ul>
                    </>,
                    "Strays away from MUJI&apos;s principle of streamlining processes",
                  ]}
                  image="/images/muji-user-flow_03.png"
                />
              </Carousel>
              <TitleContent
                title="Creating a Checkout Feature"
                spacer="md"
                centralise
              >
                <p className="mb-5">
                  Without an online checkout in place, MUJI SG would benefit
                  from a task analysis of the its competitors&apos; checkout
                  processes. This allows me to not only deconstruct the checkout
                  process for insights, but also see if current processes are
                  addressing user needs.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <Carousel>
                      <div className="text-start">
                        <p>
                          Task analysis: Checkout for users without an existing
                          account
                        </p>
                        <div className="mb-4">
                          <Image
                            src="/images/muji-task-analysis_01.png"
                            alt="Task analysis: Checkout for users without an existing
                            account"
                            width={1576}
                            height={505}
                          />
                        </div>
                        <p className="mb-0">
                          The thick black line indicates where the process is
                          stopped - users without an account cannot progress any
                          further.
                        </p>
                      </div>
                      <div className="text-start">
                        <p>
                          Task analysis: Checkout for a users with an existing
                          account
                        </p>
                        <Image
                          src="/images/muji-task-analysis_02.png"
                          alt="Task analysis: Checkout for a users with an existing
                          account"
                          width={1576}
                          height={505}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </TitleContent>
              <TitleContent title="Insights" spacer="lg" centralise fullwidth>
                <div className="mt-5 text-start">
                  <TwoColumns
                    column1={
                      <NumberedKeyPoint
                        title="Account creation at the start of the checkout process a barrier against users"
                        content={
                          <ul>
                            <li>
                              Shoppers are more likely to abandon carts if
                              barriers are placed in the beginning - negatively
                              affects both user and business
                            </li>
                            <li>
                              Provide users the option to purchase without an
                              account first, then the option to either login to
                              an existing account or create a new one
                            </li>
                          </ul>
                        }
                      />
                    }
                    column2={
                      <NumberedKeyPoint
                        title="Provide in-store collection options"
                        content={
                          <ul>
                            <li>
                              Leverage on MUJI&apos;s strong in-store
                              experiences for a win-win situation
                            </li>
                            <li>
                              Relieves delivery logistics and costs while
                              providing users (who already enjoy MUJI&apos;s
                              aesthetics) in-store-only experiences that cannot
                              be attained online
                              <br />
                              <br />
                            </li>
                            <li>
                              ⚠ I believe that in a real world scenario, this
                              option will be affected by other aspects of the
                              business. It wouldn&apos;t be something that a UX
                              designer can request for and implement easily.
                              Provide users the option to purchase without an
                              account first, then the option to either login to
                              an existing account or create a new one
                            </li>
                          </ul>
                        }
                      />
                    }
                  />
                </div>
              </TitleContent>
              <TitleContent
                title="Information Architecture"
                spacer="md"
                centralise
              >
                <p className="mb-0">
                  As MUJI has a large inventory of items and categories arranged
                  in a way that was confusing for users, it had to be
                  reorganised and streamlined for a better navigational
                  experience. To find out what made sense to users, I conducted
                  an open card sort to understand how users believe products
                  should be grouped and the nomenclature of MUJI SG&apos;s
                  consumers through how they label these groups.
                </p>
              </TitleContent>
              <TwoColumns
                column1={
                  <Image
                    src={"/images/muji-chart.png"}
                    alt="MUJI dendrogram chart"
                    width={1280}
                    height={460}
                  />
                }
                column2={
                  <div className="h-100 d-flex flex-column justify-content-center">
                    <p>
                      What I found was that product organisation wasn&apos;t an
                      issue, but instead:
                    </p>
                    <p className="text-works mb-0">
                      <strong>
                        Individual categories could be renamed to better reflect
                        its ontology.
                      </strong>
                    </p>
                  </div>
                }
                spacer="md"
              />
              <TitleContent spacer="lg" centralise>
                <p className="mb-5">
                  Where the card sort showed me how MUJI consumers expected to
                  see the products and pages organised and named, I also had to
                  reconcile the structure with business realities - MUJI had to
                  keep abreast of its competitors. So, combining insights from
                  users and an element analysis, a new site map to showcase the
                  reorganised content and renamed categories on MUJI&apos;s
                  website and how the pages were related to each other.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <Carousel>
                      <div className="text-start">
                        <p>
                          Information Architecture: Elements reorganised and
                          informed by user research and element analysis
                        </p>
                        <div className="mx-auto">
                          <Image
                            src={"/images/muji-IA_01.png"}
                            alt="Information Architecture"
                            width={7808}
                            height={4342}
                          />
                        </div>
                      </div>
                      <div className="text-start">
                        <p>
                          Information Architecture: Original IA from MUJI SG
                          with 2 different footers
                        </p>
                        <div className="mx-auto" style={{ maxWidth: "345px" }}>
                          <Image
                            src={"/images/muji-IA_02.png"}
                            alt="Information Architecture"
                            width={3840}
                            height={5736}
                          />
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </TitleContent>
            </Section>
            <Section title="IDEATE">
              <TitleContent title="Wireframes" spacer="lg" centralise fullwidth>
                <div className="my-4">
                  <Image
                    src={"/images/muji-wireframes.png"}
                    alt="Wireframes"
                    width={1306}
                    height={600}
                  />
                </div>
              </TitleContent>
              <TitleContent
                title="High Fidelity Prototype"
                spacer="lg"
                centralise
                fullwidth
              >
                <div className="my-4">
                  <Image
                    src={"/images/muji-hifi.png"}
                    alt="High Fidelity Prototype"
                    width={1335}
                    height={866}
                  />
                </div>
                <Link href={process.env.NEXT_PUBLIC_PROTOTYPE_MUJI || ""}>
                  <a>Play with the prototype here</a>
                </Link>
              </TitleContent>
            </Section>
            <Section title="TEST">
              <TitleContent
                title="System Usability Scale"
                spacer="lg"
                centralise
              >
                <p className="mb-5">
                  I recuited 6 participants to participate in the same usability
                  test as the first 4 participants. The only difference was that
                  they had to complete a Checkout Flow as well. Even with a
                  higher participant number, my prototype&apos;s average was not
                  only higher than the original site, but was{" "}
                  <strong>waay above average</strong>! Seeing the numbers appear
                  on the excel sheet was exhilarating!
                </p>
                <Image
                  src={"/images/muji-sus-scores.png"}
                  alt="MUJI SUS scores"
                  width={904}
                  height={414}
                />
              </TitleContent>
            </Section>
            <Section title="REFLECT">
              <TitleContent title="Moving Forward" spacer="md" centralise>
                <p>
                  While working on this project, I chanced upon design systems
                  and the beauty of using components and variations while
                  researching on UIUX interfaces. I <s>blindly</s> decided to
                  challenge myself to create a design system for this redesign.
                  Admittedly, even for a first try, it looked really rough.
                  However, it emboldened me to <strong>do better</strong> at
                  creating future design systems
                </p>
                <DropdownContent title="👁 My first attempt at a design system">
                  <p>
                    It&apos;s not the best system or guide, but I am proud of
                    what I was able to accomplish in such a short time -
                    learning about a system and creating it in the same week,
                    haha! Next time, I&apos;ll be back with a <em>vengeance</em>{" "}
                    💪🏻
                  </p>
                  <Image
                    src={"/images/muji-first-design-system.png"}
                    alt="My first design system"
                    width={1122}
                    height={906}
                  />
                </DropdownContent>
              </TitleContent>
              <ThreeColumns
                column1={
                  <KeyIssue caption="PROCESS" title="perception">
                    <ul>
                      <li className="mb-4">
                        Users have preconceived impressions and beliefs on what
                        brand identities and experiences should be like
                      </li>
                      <li className="mb-4">
                        Brand identities and experiences are self-affirming and
                        mutually reinforcing
                      </li>
                      <li className="mb-4">
                        Offline and online experiences should ideally reflect
                        each other and transitioning between them should be
                        seamless
                      </li>
                    </ul>
                  </KeyIssue>
                }
                column2={
                  <KeyIssue caption="CHANGE" title="plan">
                    <ul>
                      <li className="mb-4">
                        Minimalism is a strategy - restrictions in visual design
                        means more has to be done with less
                        <ul>
                          <li>
                            Easy for minimalist elements to be subsumed/mistaken
                            as other elements
                          </li>
                        </ul>
                      </li>
                      <li className="mb-4">
                        A proper design system and guide should have been
                        created before building a prototype as elements will
                        look different in relation to other elements
                      </li>
                    </ul>
                  </KeyIssue>
                }
                column3={
                  <KeyIssue caption="UPWARDS &amp; ONWARDS" title="progress">
                    <ul>
                      <li className="mb-4">
                        Reiterate the high-fidelity prototype and close the loop
                        - for users to create an account after checking out
                      </li>
                      <li className="mb-4">
                        Design the checkout process for users with an existing
                        MUJI SG account
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
