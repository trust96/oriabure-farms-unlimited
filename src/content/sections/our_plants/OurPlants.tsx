import React from "react";
import { Carousel } from "react-bootstrap";
import Section from "../../template/section/Section";

interface Props {}

const OurPlants = ({}: Props) => {
  return (
    <Section title="our plants">
      <Carousel>
        <Carousel.Item>
          <Carousel.Item>
            <img src="/images/greenhouse.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Caption>this si</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Item>
            <img src="/images/greenhouse.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Caption>this si</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Item>
            <img src="/images/greenhouse.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Caption>this si</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Section>
  );
};

export default OurPlants;
