import Head from "next/head";

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
      <Head>
        <title>fran | UX Designer</title>
        <meta name="description" content="A UX Designer portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hideMenu={hideMenu} />
      <main className="overflow-hidden" {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
