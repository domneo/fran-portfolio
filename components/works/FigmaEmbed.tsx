interface FigmaEmbedProps {
  src: string;
  spacer?: "sm" | "md" | "lg";
}

export const FigmaEmbed = ({ src, spacer }: FigmaEmbedProps) => (
  <div className={`spacer-${spacer || ""}`}>
    <iframe
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      width="100%"
      height="700"
      src={src}
      allowFullScreen
    />
  </div>
);
