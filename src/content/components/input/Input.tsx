import React, { ReactElement } from "react";
import { Form } from "react-bootstrap";

interface Props {
  controlId?: string;
  children: React.ReactNode;
  type: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  children,
  controlId,
  placeholder,
  type,
  className,
  onChange,
}: Props): ReactElement => {
  return (
    <>
      <Form.Group className={`form__group ${className}`} controlId={controlId}>
        <Form.Label className={`form__label`}>{children}</Form.Label>
        <Form.Control
          className={`form__input`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        ></Form.Control>
      </Form.Group>
    </>
  );
};

export default Input;
