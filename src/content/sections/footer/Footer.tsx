import React from "react";
import Typography from "../../components/typography/Typography";
import Navlist from "../../modules/navlist/Navlist";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../../template/container/Container";

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__nav">
          <Typography
            tag="h4"
            para="body1"
            variant="para"
            className="footer__title"
          >
            Links
          </Typography>
          <Navlist />
        </section>
        <section className="footer__icons">
          <FaFacebook className="footer__icon" />
          <FaInstagram className="footer__icon" />
          <FaTwitter className="footer__icon" />
        </section>
      </Container>
      <section className="footer__copyright">
        &copy; All right reserved to oriabure farms unlimited
      </section>
    </footer>
  );
};

export default Footer;
