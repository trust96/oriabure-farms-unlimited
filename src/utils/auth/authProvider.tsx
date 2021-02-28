import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
interface IAuth {
  user: string;
}
const defaultValue = {
  user: "please",
};
export const AuthContext = React.createContext<IAuth | null>(defaultValue);
interface IProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: IProps): JSX.Element => {
  const [user, setUser] = useState({
    user: "",
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser((prevstate) => ({ ...prevstate, user: user.displayName }));
      } else {
        setUser({ user: "" });
      }
    });
  }, [user]);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
