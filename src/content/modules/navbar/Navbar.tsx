import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { NavContext } from "../../../utils/context/nav_context";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import Navlist from "../navlist/Navlist";

interface Props {}

const Navbar = ({}: Props) => {
  const { isToggle, setIsToggle } = useContext(NavContext);
  const router = useRouter();
  const handleToggle = () => {
    setIsToggle((prevstate) => !prevstate);
  };
  const handleClick = () => {
    router.push("/dashbord/signin");
  };
  return (
    <div className={`nav__bar`}>
      <Logo variant="small" />
      <Navlist className={`${isToggle ? "active" : ""}`}>
        <Button
          onClick={handleClick}
          className="nav__button"
          variant="primary"
          size="sm"
          fullwidth
        >
          login
        </Button>
      </Navlist>
      <Menu onClick={handleToggle} />
    </div>
  );
};

export default Navbar;
