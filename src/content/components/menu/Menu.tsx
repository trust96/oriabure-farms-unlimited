import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

const Menu = ({ onClick, className }: Props) => {
  return (
    <button className={`menu ${className}`}>
      <span className="menu__item"></span>
    </button>
  );
};

export default Menu;
