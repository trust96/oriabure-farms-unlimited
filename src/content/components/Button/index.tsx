import React, { ReactElement } from "react";
import Props from "./Props";

export default function Button({
  variant,
  children,
  onClick,
  className
}: Props): ReactElement {
  return (
    <button onClick={onClick} className={`btn btn--${variant} ${className}`}>
      {children}
    </button>
  );
}
