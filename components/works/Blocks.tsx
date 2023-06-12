import React from "react";
import type { Works_PostsSectionsSection } from "tina/__generated__/types";
import { TwoColumns } from "components/common/TwoColumns";
import { ThreeColumns } from "components/common/ThreeColumns";

export const Blocks = (props: Works_PostsSectionsSection) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block?.__typename) {
              case "Works_postsSectionsSectionBlocksTwoColumn":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <TwoColumns>{block.col1}</TwoColumns>
                  </React.Fragment>
                );
              case "Works_postsSectionsSectionBlocksThreeColumn":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <ThreeColumns>{block.col1}</ThreeColumns>
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
