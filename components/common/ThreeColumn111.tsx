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
  <div className="row">
    <div className="col-md">
      <TinaMarkdown content={col1} components={richTextComponents} />
    </div>
    <div className="col-md">
      <TinaMarkdown content={col2} components={richTextComponents} />
    </div>
    <div className="col-md">
      <TinaMarkdown content={col3} components={richTextComponents} />
    </div>
  </div>
);
