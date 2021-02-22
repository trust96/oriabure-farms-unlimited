import React, { useState } from "react";
import { FaDownload, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import Button from "../../components/button/Button";
import Menu from "../../components/menu/Menu";
import Typography from "../../components/typography/Typography";

interface Props {
  text?: string;
  videoUrl?: string;
  audioUrl?: string;
  pictureUrl?: string;
}

const Accordion = ({ audioUrl, pictureUrl, text, videoUrl }: Props) => {
  const [isCollapse, setIsCollapse] = useState(true);

  const collapse = () => {
    setIsCollapse((prevState) => !prevState);
  };
  const myDate = new Date().toLocaleDateString();
  return (
    <div className="accordion">
      <div className="accordion__button" onClick={collapse}>
        <Typography tag="span" variant="para" para="body1">
          {myDate}
        </Typography>
        <Typography tag="span" variant="para" para="body1">
          submited by: <strong>{"trust"}</strong>
        </Typography>
      </div>
      <div className={`accordion__content ${isCollapse ? "" : "active"}`}>
        <Typography
          className="accordion__item"
          tag="p"
          variant="para"
          para="body1"
        >
          {text} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium culpa, temporibus quia dolorem voluptatum maiores expedita
          obcaecati fugiat! Rem, adipisci. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Velit quae enim explicabo error
          cupiditate quo voluptate quod unde numquam, quia quisquam tempora. Hic
          mollitia facilis officia ipsam optio debitis maxime.
        </Typography>
        <div className="accordion__icons">
          <Button className="accordion__icon" variant="outline" size="sm">
            {" "}
            <FaDownload />
          </Button>
          <Button
            className="accordion__icon"
            variant="outline-danger"
            size="sm"
          >
            <FaRegTrashAlt />
          </Button>

          <Button className="accordion__icon" variant="primary" size="sm">
            <FaPlus /> label
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
