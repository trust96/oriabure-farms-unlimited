import React, { ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "../content/components/button/Button";
import Logo from "../content/components/logo/Logo";
import Navbar from "../content/modules/navbar/Navbar";
import Navlist from "../content/modules/navlist/Navlist";
import Header from "../content/sections/header/Header";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="pages">
      <Header />
    </div>
  );
}
