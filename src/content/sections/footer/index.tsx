import React, { ReactElement } from "react";
import Logo from "../../components/Logo";
import Typography from "../../components/Typography";


interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="footer">
      <div className="container">
          <section className="footer__infos">
              <Logo variant="large" className="footer__logo" />
              <Typography className="footer__info" tag="p" variant="para" para="secondary">oriaburefarms@homail.com</Typography>
              <Typography className="footer__info" tag="p" variant="para" para="secondary">+39 4379827865</Typography>
              <Typography className="footer__info" tag="p" variant="para" para="secondary">awori street baba n.8</Typography>
          </section>
        <section className="footer__icons">
          <i aria-hidden className=" footer__icon fab fa-facebook"></i>
          <i aria-hidden className=" footer__icon fab fa-instagram"></i>
          <i aria-hidden className=" footer__icon fab fa-twitter"></i>
        </section>
      </div>
      <section className="footer__copyright">
        <Typography tag="span" variant="para" para="secondary">
          &copy; All rights reserved to Oriabure Farms Limited
        </Typography>
      </section>
    </footer>
  );
}
