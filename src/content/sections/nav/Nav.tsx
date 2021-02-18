import React from "react";
import { NavProvider } from "../../../utils/context/nav_context";
import Navbar from "../../modules/navbar/Navbar";

interface Props {}

const Nav = ({}: Props) => {
  return (
    <nav className="nav">
      <div className="container-lg container-fluid">
        <NavProvider>
          <Navbar />
        </NavProvider>
      </div>
    </nav>
  );
};

export default Nav;
