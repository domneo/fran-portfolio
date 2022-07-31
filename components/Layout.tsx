import Head from "next/head";

import styles from "styles/Layout.module.scss";

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { UnderConstruction } from "./layout/UnderConstruction";

interface LayoutProps {
  showHeaderMenu?: boolean;
  showFooterMenu?: boolean;
  centraliseFooter?: boolean;
  children: React.ReactNode;
  [index: string]: any;
}

const Layout = ({
  showHeaderMenu = true,
  showFooterMenu = true,
  centraliseFooter = false,
  children,
  ...props
}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>fran | UIUX Designer</title>
        <meta
          name="description"
          content="Former educator and producer who enjoys problem solving, learning about people and creating experiences to meet their needs. Meticulous and driven in creating intentional and user-centric designs and interfaces for seamless experiences."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header showHeaderMenu={showHeaderMenu} />
      <main {...props}>
        <UnderConstruction>{children}</UnderConstruction>
      </main>
      <Footer
        showFooterMenu={showFooterMenu}
        centraliseFooter={centraliseFooter}
      />
    </div>
  );
};

export default Layout;
