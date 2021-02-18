import React, { useContext } from "react";
import { NavContext } from "../../../utils/context/nav_context";

interface Props {
  className?: string;
  onClick?: () => void;
}

const Menu = ({ onClick, className }: Props) => {
  const { isToggle, setIsToggle } = useContext(NavContext);
  return (
    <button
      onClick={onClick}
      className={`menu ${isToggle ? "active" : ""} ${className}`}
    >
      <span
        className={`${isToggle ? "active" : ""} menu__item menu__item-0`}
      ></span>
      <span
        className={`${isToggle ? "active" : ""} menu__item menu__item-1`}
      ></span>
      <span
        className={`${isToggle ? "active" : ""} menu__item menu__item-2`}
      ></span>
    </button>
  );
};

export default Menu;
