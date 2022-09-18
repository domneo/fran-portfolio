import "bootstrap/scss/bootstrap-utilities.scss";
import { withPasswordProtect } from "next-password-protect";
import { AppProps } from "next/app";

import "styles/globals.scss";

import { LoginComponent } from "components/Login";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp, {
      loginComponent: LoginComponent,
    })
  : MyApp;
