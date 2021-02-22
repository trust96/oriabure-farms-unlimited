import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NavContext } from "../../../utils/context/nav_context";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import Navlist from "../navlist/Navlist";

interface Props {}
interface IActive {
  home: boolean;
  about: boolean;
  services: boolean;
  contact: boolean;
}
const Navbar = ({}: Props) => {
  const [isActive, setIsActive] = useState<IActive>({
    home: false,
    about: false,
    services: false,
    contact: false,
  });
  const { isToggle, setIsToggle } = useContext(NavContext);
  const router = useRouter();
  const handleToggle = () => {
    setIsToggle((prevstate) => !prevstate);
  };

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        return setIsActive((prevstate) => ({ ...prevstate, home: true }));
      case "/about_us":
        return setIsActive((prevstate) => ({ ...prevstate, home: true }));
      case "/services":
        return setIsActive((prevstate) => ({ ...prevstate, home: true }));
      case "/contact_us":
        return setIsActive((prevstate) => ({ ...prevstate, home: true }));
    }
  }, []);

  const handleClick = () => {
    router.push("/reserved/login");
    setIsToggle(!isToggle);
  };
  return (
    <div className={`nav__bar`}>
      <Logo variant="small" />
      <Navlist className={` ${isToggle ? "active" : ""}`}>
        <Button
          onClick={handleClick}
          className="nav__button"
          variant="primary"
          size="sm"
          fullwidth
        >
          login {isActive.home}
        </Button>
      </Navlist>
      <Menu onClick={handleToggle} />
    </div>
  );
};

export default Navbar;
