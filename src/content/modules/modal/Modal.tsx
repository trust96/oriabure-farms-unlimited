import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../../../utils/context/modal";

interface Props {
  variant:
    | "primary"
    | "outline"
    | "danger"
    | "outline-danger"
    | "warning"
    | "outline-warning"
    | "success"
    | "outline-success";
  buttonPrimary: string;
  buttonOutline: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Modal = ({
  variant,
  buttonOutline,
  buttonPrimary,
  children,
  onClick,
}: Props): JSX.Element => {
  const { isToggle, setIsToggle } = useContext(ModalContext);
  return (
    <div className={`modal ${isToggle ? "active" : ""}`}>
      <div className={`modal__wrapper ${isToggle ? "active" : ""}`}>
        <AiOutlineClose
          className="modal__close"
          onClick={() => setIsToggle((prevState) => !prevState)}
        />
        <div className="modal__content">
          <Typography
            className="modal__text"
            tag="p"
            variant="para"
            para="body1"
          >
            {children}
          </Typography>

          <div className="modal__buttons">
            <Button
              className="modal__button"
              variant={variant}
              size="sm"
              onClick={onClick}
            >
              {buttonPrimary}
            </Button>
            <Button
              className="modal__button"
              variant={`outline-${variant}`}
              size="sm"
              onClick={() => setIsToggle((prevstate) => !prevstate)}
            >
              {buttonOutline}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
