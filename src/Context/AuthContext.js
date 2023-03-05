import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const LoginUserAction = () => {
    setToken(true);
  };
  const logOut = () => setToken(false);

  const value = { token, setToken, logOut, LoginUserAction };

  return <authContext.Provider value={value}> {children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
export default AuthContextProvider;
