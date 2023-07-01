import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import DisplayRoutine from "./DisplayRoutine";
import "./SavedRoutines.css";
function SavedRoutines() {
  const { users, currUser, isLoggedIn } = useContext(AppContext);
  let routineArr = [];
  let routineList;
  if (isLoggedIn) {
    const userArr = users.filter((user) => {
      return user.username === currUser; //returning the user array that matches the currUser
    });

    routineArr = userArr[0];

    if (routineArr.hasOwnProperty("Routines")) {
      routineList = routineArr.Routines.map((routine) => {
        return (
          <DisplayRoutine
            day={routine.Day}
            exercises={routine.Exercises}
          ></DisplayRoutine>
        );
      });
    }
  }

  return (
    <>
      {!isLoggedIn ? (
        <h1>Please login to view any saved routines</h1>
      ) : (
        <div>
          <h1>View your Saved Routine</h1>
          {routineList}
        </div>
      )}
    </>
  );
}

export default SavedRoutines;
