import { ReactElement } from "react";
import Head from "next/head";
import Navlist from "../../modules/navlist";
import Menu from "../../components/Menu";
import { Props } from "./Props";
import Nav from "../../sections/nav";
import { Navbar } from "../../modules/Navbar";
import Logo from "../../components/Logo";
import Footer from "../../sections/footer";

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/503f634bdf.js"
          crossOrigin="anonymous"
        />
      </Head>
      <section className="nav">
        <Nav />
      </section>
      {children}
<Footer/>
    </>
  );
}
