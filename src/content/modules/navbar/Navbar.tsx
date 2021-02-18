import React from "react";

interface Props {
  children: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Navbar;
