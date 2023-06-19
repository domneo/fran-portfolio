import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Divider } from "./Divider";
import { Spacer } from "./Spacer";

const richTextComponents = {
  spacer: Spacer,
  divider: Divider,
};

interface TwoColumn11Props {
  col1: any;
  col2: any;
}
export const TwoColumn11 = ({ col1, col2 }: TwoColumn11Props) => (
  <div className="row">
    <div className="col-md">
      <TinaMarkdown content={col1} components={richTextComponents} />
    </div>
    <div className="col-md">
      <TinaMarkdown content={col2} components={richTextComponents} />
    </div>
  </div>
);
