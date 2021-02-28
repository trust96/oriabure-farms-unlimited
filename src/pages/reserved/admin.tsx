import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../content/components/button/Button";
import Input from "../../content/components/input/Input";
import Typography from "../../content/components/typography/Typography";
import Accordion from "../../content/modules/accordion/accordion";
import AdminNav from "../../content/modules/AdminNav/AdminNav";
import Head from "../../content/modules/Head/Head";
import Modal from "../../content/modules/modal/Modal";
import Section from "../../content/template/section/Section";
import { AuthContext } from "../../utils/auth/authProvider";
import signOut from "../../utils/auth/signOut";
import { signUp } from "../../utils/auth/signUp";
import { ModalContext, ModalProvider } from "../../utils/context/modal";
import { useDb } from "../../utils/db/db";
import { db } from "../../utils/firebase";

const admin = (): JSX.Element => {
  const { isToggle, setIsToggle } = useContext(ModalContext);
  const router = useRouter();
  const [modal, setModal] = useState({
    deleteText: "",
    downloadText: "",
    labelText: "",
  });
  const [admin, setAdmin] = useState("");
  const [report, setReport] = useState([]);
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { user } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      let mounted = true;
      const docs = await db.collection("report").get();
      docs.forEach(
        (doc) =>
          mounted &&
          setReport((prevstate) => [
            ...prevstate,
            {
              user: doc.data().user,
              report: doc.data().report,
              date: doc.data().date,
              id: doc.id,
            },
          ])
      );
      return () => {
        mounted = false;
      };
    })();
  }, []);
  useEffect(() => {
    !(user === "ekoh oriabure augustine") && router.push("/reserved/login");
  }, []);
  const handleDelete = () => {
    setModal({
      downloadText: "",
      labelText: "",
      deleteText: "are you sure you want to delete this report?",
    });
    setIsToggle((prevstate) => !prevstate);
  };

  const handleDownload = () => {
    setModal({
      deleteText: "",
      labelText: "",
      downloadText: "do you want do continue with this action?",
    });
    setIsToggle((prevstate) => !prevstate);
  };

  const handleLabel = () => {
    setModal({
      deleteText: "",
      downloadText: "",
      labelText: "NOTE: please notice that you can change this only once",
    });
    setIsToggle((prevstate) => !prevstate);
  };

  // const handleModal = () => {
  //   console.log(this);
  // };
  return (
    <>
      <Head>admin</Head>
      <AdminNav
        manage={() => {
          setAdmin("addUser");
        }}
        report={() => {
          setAdmin("report");
        }}
      />

      <Modal
        onClick={() => console.log(this)}
        variant={
          modal.deleteText !== ""
            ? "danger"
            : modal.downloadText !== ""
            ? "success"
            : modal.labelText !== ""
            ? "success"
            : "success"
        }
        buttonOutline="cancel"
        buttonPrimary={
          modal.deleteText !== ""
            ? "delete"
            : modal.downloadText !== ""
            ? "download"
            : modal.labelText !== ""
            ? "add"
            : "add"
        }
      >
        {modal.deleteText || modal.downloadText || modal.labelText}
      </Modal>
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
          tag="h2"
          title="secondary"
          color="primary"
          variant="title"
        >
          welcome back {user}
        </Typography>
        {admin === "report" ? (
          report.map((rep) => {
            return (
              <Accordion
                handleDelete={handleDelete}
                handleDownload={handleDownload}
                handleLabel={handleLabel}
                key={rep.id}
                date={rep.date}
                user={rep.user}
              >
                {rep.report}
              </Accordion>
            );
          })
        ) : (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              signUp(auth.username, auth.email, auth.password);
            }}
          >
            <Input
              onChange={(e) => {
                setAuth((prevstate) => ({
                  ...prevstate,
                  username: e.target.value,
                }));
              }}
              type="text"
              controlId="username"
            >
              Username
            </Input>
            <Input
              type="email"
              controlId="email"
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
              type="password"
              controlId="password"
              onChange={(e) => {
                setAuth((prevstate) => ({
                  ...prevstate,
                  password: e.target.value,
                }));
              }}
            >
              Password
            </Input>
            <Button variant="primary" size="sm" fullwidth>
              add user
            </Button>
          </Form>
        )}
      </Section>
    </>
  );
};

export default admin;
