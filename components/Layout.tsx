interface LayoutProps {
  children: React.ReactNode;
  [index: string]: any;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return <div {...props}>{children}</div>;
};

export default Layout;
