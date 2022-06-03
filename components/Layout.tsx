import styles from "../styles/Layout.module.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  [index: string]: any;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
