import Layout from "components/Layout";
import { Details } from "components/works/Details";
import { Header } from "components/works/Header";
import { SectionHeader } from "components/works/SectionHeader";

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
            <SectionHeader title="KICKOFF" />
            {/* titlecontent */}
            {/* highlight */}
            {/* section header */}
            {/* image */}
            {/* section header */}
            {/* titlecontent */}
            {/* titlecontent */}
            {/* carousel */}
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
