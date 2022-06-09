import Image from "next/image";

import Layout from "../../components/Layout";

export const meta = {
  image: "https://placekitten.com/1400/300",
  title: "Compawnion",
  subtitle:
    "Enabling adopters to search, compare, and connect with animal shelters",
  details: {
    challenge:
      "Define a problem that could be solved with the design of a mobile app.",
    role: "UIUX Designer (in a team of 2)",
    platform: "Mobile app",
    scope: "Research, Wireframing, Interface Design, Development",
    deliverables: "User Research, Wireframes, Prototype, Process",
    time: "4 weeks (flex sprint)",
    debut: true,
  },
};

export default function Compawnion() {
  return (
    <Layout>
      <div className="container">
        <Image src={meta.image} width={1400} height={300} />
        <h1 className="display-1">{meta.title}</h1>
        <h2 className="display-5 text-bone">{meta.subtitle}</h2>
        {/* details */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* section header */}
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
