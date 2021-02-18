import React from "react";
import Button from "../../components/button/Button";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Navlist = ({ className, children }: Props) => {
  return (
    <ul className={`${className} nav__list`}>
      <li className="nav__item">
        <a href="/" className="nav__link">
          home
        </a>
      </li>
      <li className="nav__item">
        <a href="/about_us" className="nav__link">
          about us
        </a>
      </li>
      <li className="nav__item">
        <a href="/services" className="nav__link">
          services
        </a>
      </li>
      <li className="nav__item">
        <a href="/contact_us" className="nav__link">
          contact us
        </a>
      </li>
      {children}
    </ul>
  );
};

export default Navlist;
