import React from "react";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";

interface Props {
  children: React.ReactNode;
  variant: "mobile" | "desktop";
}

const Navbar = ({ children, variant }: Props) => {
  return (
    <>
      {variant === "desktop" ? (
        <div className="d-nav__bar">{children}</div>
      ) : (
        <div className="m-nav__bar">{children}</div>
      )}
    </>
  );
};

Navbar.Desktop = () => {
  return (
    <>
      <ul className="d-nav__list">
        <li className="d-nav__item">
          <a href="/" className="d-nav__link">
            home
          </a>
        </li>
        <li className="d-nav__item">
          <a href="/about_us" className="d-nav__link">
            about us
          </a>
        </li>
        <li className="d-nav__item">
          <a href="services" className="d-nav__link">
            services
          </a>
        </li>
        <li className="d-nav__item">
          <a href="contact_us" className="d-nav__link">
            contact us
          </a>
        </li>
      </ul>
      <div className="d-nav__footer">
        <Typography className="nav__text" tag="strong">
          Are you a member?
        </Typography>
        <Button variant="primary" size="sm">
          Sign in
        </Button>
      </div>
    </>
  );
};
Navbar.Mobile = () => {
  return (
    <>
      <ul className="m-nav__list">
        <li className="m-nav__item">
          <a href="/" className="m-nav__link">
            home
          </a>
        </li>
        <li className="m-nav__item">
          <a href="/about_us" className="m-nav__link">
            about us
          </a>
        </li>
        <li className="m-nav__item">
          <a href="services" className="m-nav__link">
            services
          </a>
        </li>
        <li className="m-nav__item">
          <a href="contact_us" className="m-nav__link">
            contact us
          </a>
        </li>
      </ul>
      <div className="m-nav__footer">
        <Button variant="primary" size="sm">
          Sign in
        </Button>
      </div>
    </>
  );
};
export default Navbar;
