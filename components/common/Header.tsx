import { TinaMarkdown } from "tinacms/dist/rich-text";

interface HeaderProps {
  title: string;
  subtitle: string;
  overview: any;
}
export const Header = ({ title, subtitle, overview }: HeaderProps) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <h3 className="semibold allcaps mb-0">{subtitle}</h3>
        <h1>{title}</h1>
      </div>
      <div className="spacer-md"></div>
      <div className="caption-all col-12 col-sm-10 offset-sm-2 col-lg-7 offset-lg-3 col-xxl-6 offset-xxl-4">
        <TinaMarkdown content={overview} />
      </div>
    </div>
  );
};
