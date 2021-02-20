import React from "react";
import Paper from "../../components/paper/Paper";
import Container from "../../template/container/Container";
import Section from "../../template/section/Section";

interface Props {}

const Services = ({}: Props) => {
  return (
    <Section title="services" className="services">
      <div className="services__content">
        {/**
         * SECOND
         */}
        <Container>
          <div className="services__item">
            <Paper
              className="services__paper services__paper-0"
              title="horticolture"
            >
              designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure..
            </Paper>
            <div className="services__img">
              <img
                className="img-fluid"
                src="/images/horticolture.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
        {/**
         * SECOND
         */}
        <Container>
          <div className="services__item">
            <Paper
              className="services__paper services__paper-1 d-md-none"
              title="greenhouse"
            >
              designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure..
            </Paper>
            <div className="services__img">
              <img className="img-fluid" src="/images/greenhouse.jpg" alt="" />
            </div>
            <Paper
              className="services__paper services__paper-2 only-large-screen"
              title="greenhouse"
            >
              designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure..
            </Paper>
          </div>
        </Container>
        {/**
         * THIRD
         */}
        <Container>
          <div className="services__item">
            <Paper className="services__paper services__paper-3" title="tools">
              designs commercial greenhouse for the horticultural industry in
              Nigeria. Product feature greenhouse structure..
            </Paper>
            <div className="services__img">
              <img className="img-fluid" src="/images/tools.jpg" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Services;
