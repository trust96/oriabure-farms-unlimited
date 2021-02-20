import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="container-lg container-fluid">{children}</div>;
};

export default Container;
