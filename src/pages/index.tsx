import React, { ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "../content/components/button/Button";
import Logo from "../content/components/logo/Logo";
import Paper from "../content/components/paper/Paper";
import Navbar from "../content/modules/navbar/Navbar";
import Navlist from "../content/modules/navlist/Navlist";
import Header from "../content/sections/header/Header";
import Services from "../content/sections/services/Services";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="pages">
      <Header />
      <Services />
    </div>
  );
}
