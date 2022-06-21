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
  image: "https://placekitten.com/1400/300",
  title: "Muji",
  subtitle:
    "Transforming an e-catalog into a seamless 'MUJI' e-commerce experience for shoppers",
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
        number={"1"}
        title={meta.title}
        subtitle={meta.subtitle}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Details details={meta.details} />
            <FigmaEmbed
              src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7KPcY0DIdGvthFRsiXNq6T%2FUntitled%3Fnode-id%3D168%253A2174%26scaling%3Dmin-zoom%26page-id%3D5%253A3%26starting-point-node-id%3D204%253A2791"
              spacer="lg"
            />
            <Section title="KICKOFF">
              <TitleContent spacer="sm">
                <p>
                  If there was a brand that immutably embodies its values to its
                  very core, you can bet your bottom dollar it's MUJI. The
                  company is so committed to its cause that it is literally
                  named as such - MUJI is short for 'Mujirushi Ryohin', and it
                  translates to 'no-brand quality goods'.
                </p>
                <p className="mb-0">
                  However, where MUJI's iconic brick and mortar stores are
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
                <ImageContentColumns
                  image={"/images/compawnion-primaryResearch-1.jpg"}
                  title={
                    "In a convenience sampling of 26 MUJI shoppers, an overwhelming majority believed they could shop on MUJI's website"
                  }
                  points={[
                    "23 / 26 people believed that the site supported e-commerce",
                    "All respondents stated that the site is reminiscent of an e-commerce site",
                  ]}
                />
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
                  image={"/images/compawnion-primaryResearch-1.jpg"}
                  number="01."
                  title={"All consumers want to shop on MUJI's website"}
                  points={[
                    "50% of interviewees were surprised that this feature did not already exist",
                    "Further validates the convenient sampling results",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-primaryResearch-1.jpg"}
                  number="02."
                  title={"Online catalogues are generally not useful"}
                  points={[
                    "Belief that it serves to direct consumers to luxury or premium brands with in-store only experiences",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-primaryResearch-1.jpg"}
                  number="03."
                  title={
                    "Brand websites should reflect consumers' preconceived impressions and experiences with its physical stores"
                  }
                  points={[
                    "Disconnect in experience on MUJI's website and physical store",
                    "Brand identity affects how consumers perceive a brand and what they expect to experience",
                    "Experience and branding should also carry over into a brand's mobile and app counterparts",
                  ]}
                />
                <ImageContentColumns
                  image={"/images/compawnion-primaryResearch-1.jpg"}
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
                  image={"/images/compawnion-primaryResearch-1.jpg"}
                  number="05."
                  title={
                    "Preference for shopping websites to be uncluttered and straightforward - overall baseline expectation i MUJI"
                  }
                  points={[
                    "No advertisements or gamification elements",
                    "Be able to find products and compare information quickly and efficiently",
                    "Given MUJI's reputation for minimalism and functionalism, consumers expect these concepts to be a given on its website as well",
                  ]}
                />
              </Carousel>
              <TitleContent title="Evaluating MUJI" spacer="sm" centralise>
                <p>
                  Because MUJI's current website is an e-catalogue, users were
                  not able to replicate a full shopping experience on the
                  website (i.e. they couldn't test a Checkout). As such, the
                  usability tests revolved around Discovery - navigating through
                  the site to find products.
                </p>
                <p className="mb-0">
                  This was where things got{" "}
                  <strong className="text-copperrose">really</strong>{" "}
                  interesting..
                </p>
              </TitleContent>
              <Carousel spacer="lg">
                <MultiImageNumberedContent
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
                          and ontology (main and sub-categories) don't follow
                          users' mental models
                        </li>
                      </ul>
                    </>,
                  ]}
                />
                <MultiImageNumberedContent
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
                          MUJI's official brand book lists the brand typeface as
                          Helvetica (English) and Yu Gothic (Japanese)
                        </li>
                      </ul>
                    </>,
                  ]}
                />
              </Carousel>
              <TitleContent title="Persona">
                <p>
                  All our interview insights and research eventually culminated
                  into...
                </p>
                <Image
                  src={"/images/designProcess.svg"}
                  alt="The design process"
                  width={1146}
                  height={296}
                />
              </TitleContent>
            </Section>
            <Section title="DEFINE">
              <TitleContent title="Defining the Problem" spacer="lg" centralise>
                <p>
                  While synthesising the research gathered so far, I defined the
                  key problems that had to be resolved and started laying the
                  groundwork for solutions. This was done by laying out the most
                  immediate business and user goals for an overview and a clear
                  direction.
                </p>
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
              <Highlight title="Problem" spacer="md">
                <p className="mb-0">
                  Consumers need a way to browse for products and make purchases
                  online on the MUJI website. They want convenience and direct
                  access to all products without having to visit MUJI's physical
                  stores or 3rd party online retailers.
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
              <TitleContent title="User Flows" spacer="sm">
                <p className="mb-0">
                  Now, with a problem in mind, I wanted to understand and
                  emphathise with Lee Tee's possible decisions and paths on a
                  more granular level. Discovery and Checkout user flows were
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
                      products due to the 'filter' navigation system
                    </>,
                    "The site's 'filter' navigation system meant that users had to navigate through filters to access certain pages",
                  ]}
                  image="/images/compawnion-primaryResearch-1.jpg"
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
                  image="/images/compawnion-primaryResearch-1.jpg"
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
                    "Strays away from MUJI's principle of streamlining processes",
                  ]}
                  image="/images/compawnion-primaryResearch-1.jpg"
                />
              </Carousel>
              <TitleContent title="Creating a Checkout Feature" spacer="sm">
                <p className="mb-0">
                  Without an online checkout in place, MUJI SG would benefit
                  from a task analysis of the its competitors' checkout
                  processes. This allows me to not only deconstruct the checkout
                  process for insights, but also see if current processes are
                  addressing user needs.
                </p>
                <Carousel spacer="md">
                  <div>
                    <p>
                      Task analysis: Checkout for users without an existing
                      account
                    </p>
                    <p>
                      The thick black line indicates where the process is
                      stopped - users without an account cannot progress any
                      further.
                    </p>
                  </div>
                  <div>
                    <p>
                      Task analysis: Checkout for a users with an existing
                      account
                    </p>
                  </div>
                </Carousel>
              </TitleContent>
              <TitleContent title="Insights" spacer="lg">
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
                            account first, then the option to either login to an
                            existing account or create a new one
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
                            Leverage on MUJI's strong in-store experiences for a
                            win-win situation
                          </li>
                          <li>
                            Relieves delivery logistics and costs while
                            providing users (who already enjoy MUJI's
                            aesthetics) in-store-only experiences that cannot be
                            attained online
                            <br />
                          </li>
                          <li>
                            ⚠ I believe that in a real world scenario, this
                            option will be affected by other aspects of the
                            business. It wouldn't be something that a UX
                            designer can request for and implement easily.
                            Provide users the option to purchase without an
                            account first, then the option to either login to an
                            existing account or create a new one
                          </li>
                        </ul>
                      }
                    />
                  }
                />
              </TitleContent>
              <TitleContent title="Information Architecture" centralise>
                <p className="mb-0">
                  As MUJI has a large inventory of items and categories arranged
                  in a way that was confusing for users, it had to be
                  reorganised and streamlined for a better navigational
                  experience. To find out what made sense to users, I conducted
                  an open card sort to understand how users believe products
                  should be grouped and the nomenclature of MUJI SG's consumers
                  through how they label these groups.
                </p>
              </TitleContent>
              <TwoColumns
                column1={
                  <Image
                    src={"/images/designProcess.svg"}
                    alt="The design process"
                    width={1146}
                    height={296}
                  />
                }
                column2={
                  <div className="h-100 d-flex flex-column justify-content-center">
                    <p>
                      What I found was that product organisation wasn't an
                      issue, but instead:
                    </p>
                    <p className="text-works">
                      <strong>
                        Individual categories could be renamed to better reflect
                        its ontology.
                      </strong>
                    </p>
                  </div>
                }
              />
              <TitleContent spacer="sm">
                <p className="mb-5">
                  Where the card sort showed me how MUJI consumers expected to
                  see the products and pages organised and named, I also had to
                  reconcile the structure with business realities - MUJI had to
                  keep abreast of its competitors. So, combining insights from
                  users and an element analysis, a new site map to showcase the
                  reorganised content and renamed categories on MUJI's website
                  and how the pages were related to each other.
                </p>
                <Carousel>
                  <div>
                    <p>
                      Information Architecture: Elements reorganised and
                      informed by user research and element analysis
                    </p>
                  </div>
                  <div>
                    <p>
                      Information Architecture: Original IA from MUJI SG with 2
                      different footers
                    </p>
                  </div>
                </Carousel>
              </TitleContent>
            </Section>
            <Section title="IDEATE">
              <TitleContent title="Wireframes" spacer="lg">
                <Image
                  src={"/images/designProcess.svg"}
                  alt="The design process"
                  width={1146}
                  height={296}
                />
              </TitleContent>
              <TitleContent title="High Fidelity Prototype" spacer="lg">
                <Image
                  src={"/images/designProcess.svg"}
                  alt="The design process"
                  width={1146}
                  height={296}
                />
                <Link href="">
                  <a>Play with the prototype here</a>
                </Link>
              </TitleContent>
            </Section>
            <Section title="TEST">
              <TitleContent title="System Usability Scale" spacer="lg">
                <p className="mb-5">
                  I recuited 6 participants to participate in the same usability
                  test as the first 4 participants. The only difference was that
                  they had to complete a Checkout Flow as well. Even with a
                  higher participant number, my prototype's average was not only
                  higher than the original site, but was{" "}
                  <strong>waay above average</strong>! Seeing the numbers appear
                  on the excel sheet was exhilarating!
                </p>
                <Image
                  src={"/images/designProcess.svg"}
                  alt="The design process"
                  width={1146}
                  height={296}
                />
              </TitleContent>
            </Section>
            <Section title="REFLECT">
              <TitleContent title="Moving Forward" spacer="md">
                <p className="mb-0">
                  While working on this project, I chanced upon design systems
                  and the beauty of using components and variations while
                  researching on UIUX interfaces. I <s>blindly</s> decided to
                  challenge myself to create a design system for this redesign.
                  Admittedly, even for a first try, it looked really rough.
                  However, it emboldened me to <strong>do better</strong> at
                  creating future design systems
                </p>
                <DropdownContent title="👁 My first attempt at a design system">
                  <p className="mb-0">
                    It's not the best system or guide, but I am proud of what I
                    was able to accomplish in such a short time - learning about
                    a system and creating it in the same week, haha! Next time,
                    I'll be back with a <em>vengeance</em> 💪🏻
                  </p>
                  <Image
                    src={"/images/designProcess.svg"}
                    alt="The design process"
                    width={1146}
                    height={296}
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
              <div className="spacer-lg">
                <Stars />
              </div>
              <ContactCTA spacer="lg">
                If you&apos;re interested in working together or finding out
                more, feel free to reach out ✨
              </ContactCTA>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
