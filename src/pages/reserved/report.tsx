import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "../../content/components/button/Button";
import Input from "../../content/components/input/Input";
import Typography from "../../content/components/typography/Typography";
import Head from "../../content/modules/Head/Head";
import Section from "../../content/template/section/Section";
import { AuthContext } from "../../utils/auth/authProvider";
import signOut from "../../utils/auth/signOut";
import { db } from "../../utils/firebase";

interface Props {}

const report = (props: Props) => {
  const [reportText, setReportText] = useState("");
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formElement = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    !user && router.push("/reserved/login");
  }, []);
  const date = new Date().toLocaleDateString();

  const handleReport = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportText(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await db.collection("report").add({
        user,
        report: reportText,
        date,
      });
      setSuccess("you sent your report successfully");
    } catch (err) {
      setError("your report had a problem, please retry");
    } finally {
      formElement.current.reset();
    }
  };
  return (
    <>
      <Head>Report</Head>

      <Section>
        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              signOut();
              router.push("/reserved/login");
            }}
          >
            signout
          </Button>
        </div>
        <Typography
          className="mb-5"
          variant="title"
          title="quartenary"
          tag="h2"
          color="primary"
        >
          welcome back {user}, please submit your report
        </Typography>
        <Alert
          className="d-flex justify-content-center"
          variant={(error && "danger") || (success && "success") || ""}
        >
          {error || success}
        </Alert>
        <Form onSubmit={handleSubmit} ref={formElement}>
          <Input
            controlId="report"
            as="textarea"
            rows={10}
            onChange={handleReport}
          >
            Report
          </Input>
          <Form.Group>
            <Form.File id="download" label="upload media:" />
          </Form.Group>
          <Button size="sm" fullwidth>
            submit report
          </Button>
        </Form>
      </Section>
    </>
  );
};

export default report;
