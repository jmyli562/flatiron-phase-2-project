import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [users, setUsers] = useState([]); //array holding all off the current users
  const [currUser, setCurrUser] = useState("");
  const [currUserPass, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState(""); //search term that the user will filter the exercises by
  const [targetFilter, setTargetFilter] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [savedExercises, setSavedExercises] = useState([]);
  const value = {
    currUser,
    setCurrUser,
    currUserPass,
    setPassword,
    users,
    setUsers,
    isLoggedIn,
    setLogin,
    exercises,
    setExercises,
    search,
    setSearch,
    targetFilter,
    setTargetFilter,
    equipmentFilter,
    setEquipmentFilter,
    savedExercises,
    setSavedExercises,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
