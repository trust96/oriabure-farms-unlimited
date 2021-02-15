import React from "react";
import Footer from "../../sections/footer/Footer";
import Nav from "../../sections/nav/Nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
