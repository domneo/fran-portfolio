import { v4 as uuidv4 } from "uuid";

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
          <h5 className="p caption text-works mb-2">{detail.title}</h5>
          <p>{detail.content}</p>
        </div>
      ))}
    </div>
  );
};
