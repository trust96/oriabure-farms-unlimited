import React, { Dispatch, SetStateAction, useContext, useState } from "react";

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
export const NavContext = React.createContext<IContext | null>(null);

interface IProps {
  children: React.ReactNode;
}
export const NavProvider = ({ children }: IProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const navToggle = { isToggle, setIsToggle };
  return (
    <NavContext.Provider value={navToggle}>{children}</NavContext.Provider>
  );
};
