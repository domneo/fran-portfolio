import { v4 as uuidv4 } from "uuid";

import { Heading } from "components/common/Heading";
import { Paragraph } from "components/common/Paragraph";

interface DetailType {
  title: string;
  content: string;
}

interface DetailsProps {
  details: Array<DetailType>;
  debut?: boolean;
}

export const Details = ({ details, debut = false }: DetailsProps) => {
  return (
    <div className="row">
      {details.map((detail) => (
        <div key={uuidv4()} className="col">
          <Heading level={5} className="paragraph caption text-works mb-2">
            {detail.title}
          </Heading>
          <Paragraph>{detail.content}</Paragraph>
        </div>
      ))}
    </div>
  );
};
