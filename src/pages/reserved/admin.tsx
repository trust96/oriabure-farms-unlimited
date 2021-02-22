import React from "react";
import Accordion from "../../content/modules/accordion/accordion";
import AdminNav from "../../content/modules/AdminNav/AdminNav";
import Head from "../../content/modules/Head/Head";
import Section from "../../content/template/section/Section";

interface Props {}

const admin = (props: Props) => {
  return (
    <>
      <Head>admin</Head>
      <AdminNav
        manage={() => {
          console.log("i am user");
        }}
        report={() => {
          console.log("report here");
        }}
      />
      <Section>
        <Accordion />
      </Section>
    </>
  );
};

export default admin;
