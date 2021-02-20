import { title } from "process";
import React from "react";
import Typography from "../../components/typography/Typography";
import Container from "../container/Container";

interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Section = ({ className, children, title }: Props) => {
  return (
    <section className={`section ${className}`}>
      <Container>
        <Typography
          className="section__title"
          tag="h2"
          title="primary"
          variant="title"
        >
          {title}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

export default Section;
