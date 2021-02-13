import React, { ReactElement } from "react";
import { Props } from "./Props";

export default function Menu({ onClick,collapse,className }: Props): ReactElement {
  return (
    <button className={`menu ${className}`} onClick={onClick}>
      <div className={`menu__item menu__top ${collapse? 'active' : ''}`}></div>
      <div className={`menu__item menu__center ${collapse? 'active' : ''}`}></div>
      <div className={`menu__item menu__bottom ${collapse? 'active' : ''}`}></div>
    </button>
  );
}
