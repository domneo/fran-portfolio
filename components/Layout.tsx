import styles from "styles/Layout.module.scss";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  hideMenu?: boolean;
  children: React.ReactNode;
  [index: string]: any;
}
const Layout = ({ hideMenu = false, children, ...props }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header hideMenu={hideMenu} />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
