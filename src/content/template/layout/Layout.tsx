import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Footer from "../../sections/footer/Footer";
import Nav from "../../sections/nav/Nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  const router = useRouter();
  if (
    router.pathname === "/reserved/login" ||
    router.pathname === "/reserved/admin" ||
    router.pathname === "/reserved/report"
  ) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
