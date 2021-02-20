import React from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";
import Container from "../../template/container/Container";

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className="header">
      <Container>
        <div className="row">
          <section className="header__content col-12 col-lg-8">
            <Typography
              className="header__title"
              tag="h1"
              variant="title"
              title="primary"
              color="primary"
            >
              Taking Nigeria agriculture to the next level
            </Typography>
            <Typography
              className="header__text"
              tag="p"
              variant="para"
              para="body1"
              color="subtle"
            >
              ORIABURE FARMS LTD is a well structured and organised company
              which approaches the domestic market following the principal
              standard attached to product quality and efficient service
            </Typography>
            <div className="header__button">
              <Button size="sm">Book a consultation</Button>
              <Button variant="outline" size="sm">
                Contact us
              </Button>
            </div>
          </section>
          <section className="header__image col-12 col-lg-4 only-large-screen">
            <img className="img-fluid" src="/images/breadfruit.png" alt="" />
          </section>
        </div>
      </Container>
    </header>
  );
};

export default Header;
