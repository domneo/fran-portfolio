interface TitleContentProps {
  title?: string;
  children?: React.ReactNode;
  centralise?: boolean;
  spacer?: "sm" | "md" | "lg";
}

export const TitleContent = ({
  title,
  children,
  centralise = false,
  spacer,
}: TitleContentProps) => (
  <section className={`row justify-content-center spacer-${spacer}`}>
    <div className={`col-10 ${centralise ? "text-center" : ""}`}>
      {title && <h2 className="display-3 text-bone">{title}</h2>}
      {children}
    </div>
  </section>
);
