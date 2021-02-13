import React, { ReactElement } from "react";
import Button from "../../components/Button";
import Link from "../../components/Link";
import { Props } from "./Props";
import useRouter from "next/router";
import Typography from "../../components/Typography";

export default function Navlist({ variant }: Props): ReactElement {
  const router = useRouter;
  const pushToLogin = () => {
    router.push("/dashboard/login");
  };
  if (variant === "mobile") {
    return (
      <ul className={`m-nav__list`}>
        <li className="m-nav__item">
          <Link href="/" className="m-nav__link">home</Link>
        </li>
        <li className="m-nav__item">
          <Link href="/about_us" className="m-nav__link">about us</Link>
        </li>
        <li className="m-nav__item">
          <Link href="/services" className="m-nav__link">services</Link>
        </li>
        <li className="m-nav__item">
          <Link href="/contact_us" className="m-nav__link">contact us</Link>
        </li>

        <li className="m-nav__item">
        <Button
          className="m-nav__button"
          variant="primary"
          onClick={pushToLogin}
        >
          Login
        </Button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className={`d-nav__list`}>
        <li className="d-nav__item">
          <Link href="/" className="d-nav__link">home</Link>
        </li>
        <li className="d-nav__item">
          <Link href="/about_us" className="d-nav__link">about us</Link>
        </li>
        <li className="d-nav__item">
          <Link href="/services" className="d-nav__link">services</Link>
        </li>
        <li className="d-nav__item">
          <Link href="/contact_us" className="d-nav__link">contact us</Link>
        </li>
        <Typography className="d-nav__text" tag="p" variant="para">
          <strong>are you a member?</strong>
        </Typography>
        <Button
          className="d-nav__button"
          variant="primary"
          onClick={pushToLogin}
        >
          Login
        </Button>
      </ul>
    );
  }
}
