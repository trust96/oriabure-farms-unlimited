import React, { Dispatch, SetStateAction, useState } from "react";

interface IContext {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}
const initialValue: IContext = {
  isToggle: false,
  setIsToggle: () => {
    throw Error("please provider a provider for this context");
  },
};
export const ModalContext = React.createContext<IContext | null>(null);

interface IProps {
  children: React.ReactNode;
}
export const ModalProvider = ({ children }: IProps): JSX.Element => {
  const [isToggle, setIsToggle] = useState(false);
  const modalToggle = { isToggle, setIsToggle };
  return (
    <ModalContext.Provider value={modalToggle}>
      {children}
    </ModalContext.Provider>
  );
};
