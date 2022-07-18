interface LineProps {
  width: string;
}
export const Line = ({ width }: LineProps) => {
  return <div style={{ width, height: "1px", background: "var(--bone)" }} />;
};
