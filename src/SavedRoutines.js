import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
function SavedRoutines() {
  const { users, currUser, isLoggedIn } = useContext(AppContext);

  const userArr = users.filter((user) => {
    return user.username === currUser; //returning the user array that matches the currUser
  });

  const routineArr = userArr[0].Routines.map((routine) => {
    return <h2>{routine.Day}</h2>;
  });

  return (
    <>
      {!isLoggedIn ? (
        <h1>Please login to view your saved routines</h1>
      ) : (
        <div>
          <h1>View your Saved Routine</h1>
          {routineArr}
        </div>
      )}
    </>
  );
}

export default SavedRoutines;
