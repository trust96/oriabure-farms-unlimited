import React from "react";
import { Props } from "./Props";
const Logo = ({ variant, className }: Props) => {
  return (
    <a className={`logo logo--${variant} ${className}`} href="/">
      <img className="img-fluid logo__image" src="/images/logo-small.jpeg" />
    </a>
  );
};

export default Logo;
