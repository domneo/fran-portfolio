import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Divider } from "./Divider";
import { Spacer } from "./Spacer";

const richTextComponents = {
  spacer: Spacer,
  divider: Divider,
};

interface ThreeColumn111Props {
  col1: any;
  col2: any;
  col3: any;
}
export const ThreeColumn111 = ({ col1, col2, col3 }: ThreeColumn111Props) => (
  <div className="gap-4 gap-md-0 row">
    <div className="col-md pe-xl-4 pe-xxl-5">
      <TinaMarkdown content={col1} components={richTextComponents} />
    </div>
    <div className="col-md px-xl-4 px-xxl-5">
      <TinaMarkdown content={col2} components={richTextComponents} />
    </div>
    <div className="col-md ps-xl-4 ps-xxl-5">
      <TinaMarkdown content={col3} components={richTextComponents} />
    </div>
  </div>
);
