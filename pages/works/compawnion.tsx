import Image from "next/image";

import Layout from "components/Layout";
import { Carousel } from "components/works/Carousel";
import { Details } from "components/works/Details";
import { FigmaEmbed } from "components/works/FigmaEmbed";
import { Header } from "components/works/Header";
import { Highlight } from "components/works/Highlight";
import { SectionHeader } from "components/works/SectionHeader";
import { TitleContent } from "components/works/TitleContent";

export const meta = {
  image: "https://placekitten.com/1400/300",
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
      <Header image={meta.image} title={meta.title} subtitle={meta.subtitle} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Details details={meta.details} debut={meta.debut} />
            {/* <FigmaEmbed src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7KPcY0DIdGvthFRsiXNq6T%2FUntitled%3Fnode-id%3D168%253A2174%26scaling%3Dmin-zoom%26page-id%3D5%253A3%26starting-point-node-id%3D204%253A2791" /> */}
            <SectionHeader title="KICKOFF" />
            <TitleContent spacer={"md"}>
              <p>
                While talking about our dreams and aspirations, my teammate and
                I realised two things:
              </p>
              <ol>
                <li>
                  We wanted to create something near and dear to our hearts;
                  and,
                </li>
                <li>
                  What struck a chord between us was how we were both advocates
                  for pet adoption and we wanted to eventually adopt a pet.
                </li>
              </ol>
              <p>
                So we toyed with the idea of creating an app that addressed
                these overlapping factors.
              </p>
              <p className="mb-0">
                For this first project, I worked collaboratively with my
                teammate on all aspects of the app, from research to visuals and
                the overall UX.{" "}
              </p>
            </TitleContent>
            <Highlight title="Opportunity" spacer="lg">
              <p className="mb-0">
                What if there was an app that could create pawsitive change and
                find a forever home for a furiend?
              </p>
            </Highlight>
            <SectionHeader title="PROCESS" />
            <TitleContent spacer="lg" fullwidth centralise>
              <Image
                src={"/images/designProcess.svg"}
                width={1146}
                height={296}
              />
            </TitleContent>
            <SectionHeader title="EMPATHISE" />
            <TitleContent spacer="lg">
              <p>
                While we had some idea of what pet adoption is like in
                Singapore, there was still a gap between our understanding and
                the larger landscape and what pet adopters have experienced.
                Additionally, we also had to figure out if such an app was
                actually needed in our sunny island and how could this app help
                pet adopters.
              </p>
              <p className="mb-0">So off we went!</p>
            </TitleContent>
            <TitleContent title="Secondary Research" centralise spacer="sm" />
            <Carousel
              slides={[
                {
                  title: "6 stages in the pet adoption process",
                  content: (
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
                  ),
                },
                {
                  title:
                    "Many active FB groups dedicated to pet adoptions and fostering in SG",
                  content: (
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
                  ),
                },
                {
                  title: "Pet adoption making waves politically",
                  content: (
                    <ul>
                      <li>
                        SG government looking at introducing measures to
                        encourage adoption
                      </li>
                    </ul>
                  ),
                },
                {
                  title:
                    "SG public interest in pet adoption one of the highest worldwide",
                  content: (
                    <ul>
                      <li>
                        SG's Relative Search Volume (RSV) for pet adoption
                        search terms ranked 4th globally during the pandemic
                      </li>
                      <li>
                        Public interest reflected as a fraction of total
                        searches in a specific geographical region between
                        December 2015 - 2020
                      </li>
                    </ul>
                  ),
                },
                {
                  title:
                    "Adoption drives and manpower needs affected by safe-distancing measures",
                  content: (
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
                  ),
                },
                {
                  title: "Overall increase in adoptions and fostering requests",
                  content: (
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
                  ),
                },
              ]}
              spacer="lg"
            />
            {/* titlecontent */}
            {/* carousel */}
            {/* titlecontent */}
            {/* image */}
            {/* section header */}
            {/* titlecontent */}
            {/* image */}
            {/* titlecontent */}
            {/* learningpoint */}
            {/* titlecontent */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
