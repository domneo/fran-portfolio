import React from "react";
import type { Works_Posts } from "tina/__generated__/types";
import { Section } from "components/works/Section";
import { Blocks } from "./Blocks";

export const Sections = (props: Works_Posts) => {
  return (
    <>
      {props.sections
        ? props.sections.map(function (section, i) {
            switch (section?.__typename) {
              case "Works_postsSectionsSection":
                return (
                  <React.Fragment key={i + section.__typename}>
                    <Section title={section.title} heading={section.heading}>
                      <Blocks blocks={section.blocks} />
                    </Section>
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
