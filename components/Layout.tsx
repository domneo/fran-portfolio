import classNames from "classnames";
import Head from "next/head";
import styles from "styles/Layout.module.scss";
import { GlobalQuery } from "tina/__generated__/types";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { FloatingActions } from "./layout/FloatingActions";

interface LayoutProps {
  data: GlobalQuery;
  darkMode?: boolean;
  showContactLinks?: boolean;
  showFloatingActions?: boolean;
  children: React.ReactNode;
  [index: string]: any;
}

const Layout = ({
  data,
  darkMode,
  showContactLinks = true,
  showFloatingActions = true,
  children,
  ...props
}: LayoutProps) => {
  const { siteTitle, siteDescription, menu, contactLinks, footerCredits } =
    data.global;

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkMode]: darkMode,
      })}
    >
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header menu={menu} footerCredits={footerCredits} />
      <main {...props}>{children}</main>
      <Footer
        contactLinks={contactLinks}
        footerCredits={footerCredits}
        showContactLinks={showContactLinks}
      />
      {showFloatingActions && <FloatingActions />}
    </div>
  );
};

export default Layout;
