import React, { ReactElement } from "react";
import Card from "../../components/card/Card";
import Section from "../../template/section/Section";

interface Props {}

const OurTeam = ({}: Props): ReactElement => {
  return (
    <Section title="our teams" className="our_team">
      <div className="our_team__content">
        <Card
          className="our_team__item"
          src="logo-small.jpeg"
          title="oriabure trust"
          subtitle="ceo"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore libero corrupti quidem tempore labore neque magnam quis a
          ipsam quas?
        </Card>
        <Card
          className="our_team__item"
          src="logo-small.jpeg"
          title="oriabure trust"
          subtitle="ceo"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore libero corrupti quidem tempore labore neque magnam quis a
          ipsam quas?
        </Card>
        <Card
          className="our_team__item"
          src="logo-small.jpeg"
          title="oriabure trust"
          subtitle="ceo"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore libero corrupti quidem tempore labore neque magnam quis a
          ipsam quas?
        </Card>
        <Card
          className="our_team__item"
          src="logo-small.jpeg"
          title="oriabure trust"
          subtitle="ceo"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore libero corrupti quidem tempore labore neque magnam quis a
          ipsam quas?
        </Card>
      </div>
    </Section>
  );
};

export default OurTeam;
