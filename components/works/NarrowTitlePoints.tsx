import { v4 as uuidv4 } from "uuid";

interface NarrowTitlePointsProps {
  title?: string;
  points?: Array<React.ReactNode>;
  spacer?: "sm" | "md" | "lg";
}

export const NarrowTitlePoints = ({
  title,
  points,
  spacer,
}: NarrowTitlePointsProps) => (
  <section className={`row justify-content-center spacer-${spacer}`}>
    <div className={"col-lg-6"}>
      {title && <h3 className="display-5 text-bone text-center">{title}</h3>}
      {points && points.length && (
        <ul className="mb-0">
          {points.map((point) => (
            <li key={uuidv4()}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </section>
);
