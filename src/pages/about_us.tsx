import React from "react";
import Typography from "../content/components/typography/Typography";
import Head from "../content/modules/Head/Head";
import OurTeam from "../content/sections/our_team/OurTeam";
import Section from "../content/template/section/Section";

interface Props {}

const about_us = (props: Props) => {
  return (
    <div className="pages">
      <Head>about us</Head>
      <OurTeam />
      <Section title="our mission">
        <Typography tag="p" variant="para" para="body1">
          sLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Section>
    </div>
  );
};

export default about_us;
