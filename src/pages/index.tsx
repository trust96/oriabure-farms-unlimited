import React, { ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "../content/components/button/Button";
import Logo from "../content/components/logo/Logo";
import Navbar from "../content/modules/navbar/Navbar";
import Navlist from "../content/modules/navlist/Navlist";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Navbar>
        <Logo variant="small" />
        <Logo variant="medium" />
        <Logo variant="large" />
        <Navlist variant="drawer" />
      </Navbar>
    </div>
  );
}
