import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Divider } from "./Divider";
import { Spacer } from "./Spacer";

const richTextComponents = {
  spacer: Spacer,
  divider: Divider,
};

interface TwoColumn12Props {
  col1: any;
  col2: any;
}
export const TwoColumn12 = ({ col1, col2 }: TwoColumn12Props) => (
  <div className="gap-4 gap-md-0 row">
    <div className="col-md-3 pe-lg-5">
      <TinaMarkdown content={col1} components={richTextComponents} />
    </div>
    <div className="col-md-9 ps-lg-5">
      <TinaMarkdown content={col2} components={richTextComponents} />
    </div>
  </div>
);
