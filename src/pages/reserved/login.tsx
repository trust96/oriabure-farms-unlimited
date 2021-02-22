import React from "react";
import { Form } from "react-bootstrap";
import Button from "../../content/components/button/Button";
import Input from "../../content/components/input/Input";
import Typography from "../../content/components/typography/Typography";
import Head from "../../content/modules/Head/Head";
import Container from "../../content/template/container/Container";
import Section from "../../content/template/section/Section";

interface Props {}

const login = (props: Props) => {
  return (
    <>
      <Head>Login</Head>
      <Section>
        <Typography className="mb-5" tag="h2" variant="title" title="primary">
          Welcome back to
          <span className="text--primary"> Oriabure Farms Limited.</span>
        </Typography>
        <Typography
          className="mb-3"
          tag="h3"
          variant="title"
          title="quartenary"
        >
          please <strong>sign in</strong> and submit your report
        </Typography>

        <Form>
          <Input controlId="username" type="text">
            Username
          </Input>
          <Input controlId="password" type="password">
            Password
          </Input>
          <Button fullwidth variant="primary" size="sm">
            log in
          </Button>
        </Form>
      </Section>
    </>
  );
};

export default login;
