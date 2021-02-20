import React from "react";
import { NavProvider } from "../../../utils/context/nav_context";
import Navbar from "../../modules/navbar/Navbar";
import Container from "../../template/container/Container";

interface Props {}

const Nav = ({}: Props) => {
  return (
    <nav className="nav">
      <Container>
        <NavProvider>
          <Navbar />
        </NavProvider>
      </Container>
    </nav>
  );
};

export default Nav;
