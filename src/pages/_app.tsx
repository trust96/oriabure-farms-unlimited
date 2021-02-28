import React from "react";
import "../style/index.scss";
import Layout from "../content/template/layout/Layout";
import { ModalProvider } from "../utils/context/modal";
import { AuthProvider } from "../utils/auth/authProvider";
function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <AuthProvider>
      <Layout>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
