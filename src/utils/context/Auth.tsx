import React, { ReactElement, useState } from "react";
interface IContext {
  user: object;
}
const initialValue = {
  user: {},
};
const AuthContext = React.createContext<IContext | null>(null);

export const AuthProvider = (): ReactElement => {
  const [user, setUser] = useState(initialValue);
  return <AuthContext.Provider value={user}></AuthContext.Provider>;
};
