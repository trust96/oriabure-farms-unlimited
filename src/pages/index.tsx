import React, { ReactElement } from "react";
import Header from "../content/sections/header/Header";
import OurPlants from "../content/sections/our_plants/OurPlants";
import Services from "../content/sections/services/Services";

export default function index(): ReactElement {
  return (
    <div className="pages">
      <Header />
      <Services />
      {/* <OurPlants /> */}
    </div>
  );
}
