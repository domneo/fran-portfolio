export const FigmaEmbed = ({ src }: { src: string }) => (
  <div className="spacer-md">
    <iframe
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      width="100%"
      height="500"
      src={src}
      allowFullScreen
    />
  </div>
);
