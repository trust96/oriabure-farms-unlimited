import React, { ReactElement } from "react";
import { Form } from "react-bootstrap";
import Button from "../content/components/button/Button";
import Menu from "../content/components/menu/Menu";
import Navbar from "../content/modules/navbar/Navbar";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Navbar variant="desktop">
        <Navbar.Desktop />
      </Navbar>
    </div>
  );
}
