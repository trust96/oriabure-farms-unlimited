import React from "react";
import Typography from "../../components/typography/Typography";

interface Props {
  children: React.ReactNode;
}

const Head = ({ children }: Props) => {
  return (
    <div className="head ck">
      <Typography
        className="head__title"
        tag="h1"
        title="primary"
        variant="title"
      >
        {children}
      </Typography>
    </div>
  );
};

export default Head;
