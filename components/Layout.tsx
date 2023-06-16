import Head from "next/head";
import styles from "styles/Layout.module.scss";
import { GlobalQuery } from "tina/__generated__/types";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { QuickActions } from "./layout/QuickActions";
import { UnderConstruction } from "./layout/UnderConstruction";

interface LayoutProps {
  data: GlobalQuery;
  showContactLinks?: boolean;
  showQuickActions?: boolean;
  children: React.ReactNode;
  [index: string]: any;
}

const Layout = ({
  data,
  showContactLinks,
  showQuickActions = true,
  children,
  ...props
}: LayoutProps) => {
  const { siteTitle, siteDescription, menu, contactLinks, footerCredits } =
    data.global;

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Header menu={menu} footerCredits={footerCredits} />
      <main {...props}>
        <UnderConstruction>{children}</UnderConstruction>
      </main>
      <Footer
        contactLinks={contactLinks}
        footerCredits={footerCredits}
        showContactLinks={showContactLinks}
      />
      {showQuickActions && <QuickActions />}
    </div>
  );
};

export default Layout;
