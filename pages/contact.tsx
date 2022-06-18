import Link from "next/link";

import Layout from "components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <h1 className="display-1">
          CONTACTCONTACTCONTACTCONTACT
          <span className="text-contact">CONTACT</span>
          CONTACTCONTACTCONTACTCONTA
        </h1>
      </div>
      <h3>
        <div>me to</div>
        <div>
          <span>tell me bad jokes</span>
          <span>collaborate on interesting projects</span>
          <span>rage when pixels and guides aren&apos;t snapping</span>
          <span>work on design systems</span>
          <span>rave about games, ceramics, oddities, coffee and tea</span>
          <span>
            dream up smooth experiences with functional and beautiful designs
          </span>
          <span>tell me bad jokes</span>
        </div>
      </h3>
      <Link href={"mailto:francinelim21@gmail.com"}>
        <a>EMAIL</a>
      </Link>
    </Layout>
  );
}
