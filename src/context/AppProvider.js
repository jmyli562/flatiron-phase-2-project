import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [users, setUsers] = useState([]); //array holding all off the current users
  const [currUser, setCurrUser] = useState("");
  const [currUserPass, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const value = {
    currUser,
    setCurrUser,
    currUserPass,
    setPassword,
    users,
    setUsers,
    isLoggedIn,
    setLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
