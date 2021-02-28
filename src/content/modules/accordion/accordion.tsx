import React, { useState } from "react";
import { FaDownload, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";

interface Props {
  handleDownload: () => void;
  handleDelete: () => void;
  handleLabel: () => void;
  children: React.ReactNode;
  date?: string;
  user: string;
}

const Accordion = ({
  handleDelete,
  handleDownload,
  handleLabel,
  children,
  date,
  user,
}: Props): JSX.Element => {
  const [isCollapse, setIsCollapse] = useState(true);

  const collapse = () => {
    setIsCollapse((prevState) => !prevState);
  };
  return (
    <div className="accordion">
      <div className="accordion__button" onClick={collapse}>
        <Typography tag="span" variant="para" para="body1">
          {date}
        </Typography>
        <Typography tag="span" variant="para" para="body1">
          submited by: <strong>{user}</strong>
        </Typography>
      </div>
      <div className={`accordion__content ${isCollapse ? "" : "active"}`}>
        <Typography
          className="accordion__item"
          tag="p"
          variant="para"
          para="body1"
        >
          {children}
        </Typography>
        <div className="accordion__icons">
          <Button
            className="accordion__icon"
            variant="outline"
            size="sm"
            onClick={handleDownload}
          >
            <FaDownload />
          </Button>
          <Button
            className="accordion__icon"
            variant="outline-danger"
            size="sm"
            onClick={handleDelete}
          >
            <FaRegTrashAlt />
          </Button>

          <Button
            className="accordion__icon"
            variant="primary"
            size="sm"
            onClick={handleLabel}
          >
            <FaPlus /> label
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
