import { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface AnchorLinkProps {
  children?: ReactNode;
  anchorId?: string;
  title?: string;
}

export const AnchorLink = (props: AnchorLinkProps) => {
  const onClick = (event: any, anchorId?: string | null) => {
    if (anchorId) {
      event.preventDefault();
      gsap.to(window, { duration: 0.8, scrollTo: anchorId });
    }
  };

  return (
    <a
      href={`#${props.anchorId || ""}`}
      title={props.title || ""}
      onClick={(event) => {
        onClick(event, props.anchorId);
      }}
    >
      {props.children}
    </a>
  );
};
