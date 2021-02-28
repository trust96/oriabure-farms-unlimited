import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../content/components/button/Button";
import Input from "../../content/components/input/Input";
import Typography from "../../content/components/typography/Typography";
import Head from "../../content/modules/Head/Head";
import Section from "../../content/template/section/Section";
import { AuthContext } from "../../utils/auth/authProvider";
import signIn from "../../utils/auth/signIn";

const login = () => {
  const { user } = useContext(AuthContext);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

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

        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            await signIn(auth.email, auth.password);
            user === "ekoh oriabure augustine"
              ? router.push("/reserved/admin")
              : user
              ? router.push("/reserved/report")
              : router.push("/reserved/login");
          }}
        >
          <Input
            controlId="username"
            type="text"
            onChange={(e) => {
              setAuth((prevstate) => ({
                ...prevstate,
                email: e.target.value,
              }));
            }}
          >
            Email
          </Input>
          <Input
            controlId="password"
            type="password"
            onChange={(e) => {
              setAuth((prevstate) => ({
                ...prevstate,
                password: e.target.value,
              }));
            }}
          >
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
