import React, { ReactElement, useContext } from "react";
import { NavContext } from "../../../context/navcontext";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Navlist from "../navlist";
import { Props } from "./Props";

export function Navbar({ variant }: Props): ReactElement {
  const { isCollapse, setIsCollapse } = useContext(NavContext);
  const collapse = () => {
    setIsCollapse((prevstate: boolean) => !prevstate);
  };

  if (variant === "mobile") {
    return (
      <div className={`m-nav ${isCollapse && 'active'}`}>
        <div className="container">
          <div className="m-nav__bar">
            <Logo variant="medium" />
            <Menu className="nav__menu" collapse={isCollapse} onClick={collapse} />

            <Navlist variant={variant} />

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-nav">
        <div className="container">
          <div className="d-nav__bar">
            <Logo variant="small" />
            <Navlist variant={variant} />
            <Menu collapse={isCollapse} onClick={collapse} />
          </div>
        </div>
      </div>
    );
  }
}
