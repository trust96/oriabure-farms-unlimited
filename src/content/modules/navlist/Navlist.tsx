import React from "react";

interface Props {
  className?: string;
  variant: "drawer" | "nav";
}

const Navlist = ({ className, variant }: Props) => {
  return (
    <ul className={`${variant}__list ${className}`}>
      <li className={`${variant}__item`}>
        <a href="/" className={`${variant}__link`}>
          home
        </a>
      </li>
      <li className={`${variant}__item`}>
        <a href="/about_us" className={`${variant}__link`}>
          about us
        </a>
      </li>
      <li className={`${variant}__item`}>
        <a href="/services" className={`${variant}__link`}>
          services
        </a>
      </li>
      <li className={`${variant}__item`}>
        <a href="/contact_us" className={`${variant}__link`}>
          contact us
        </a>
      </li>
    </ul>
  );
};

export default Navlist;
