import "../content/style/main.scss";
import Layout from "../content/templates/Layout";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'

function MyApp({ Component, pageProps }) {
  return (
    <><Layout>
      <Component {...pageProps} /></Layout>
    </>
  );
}

export default MyApp;
