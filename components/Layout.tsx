import Head from "next/head";

import styles from "styles/Layout.module.scss";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  hideHeaderMenu?: boolean;
  hideFooterMenu?: boolean;
  centraliseFooter?: boolean;
  children: React.ReactNode;
  [index: string]: any;
}
const Layout = ({
  hideHeaderMenu = false,
  hideFooterMenu = false,
  centraliseFooter = false,
  children,
  ...props
}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>fran | UX Designer</title>
        <meta name="description" content="A UX Designer portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header hideHeaderMenu={hideHeaderMenu} />
      <main {...props}>{children}</main>
      <Footer
        hideFooterMenu={hideFooterMenu}
        centraliseFooter={centraliseFooter}
      />
    </div>
  );
};

export default Layout;
