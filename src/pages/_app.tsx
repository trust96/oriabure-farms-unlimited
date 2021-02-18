import "../style/index.scss";
import Layout from "../content/template/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
