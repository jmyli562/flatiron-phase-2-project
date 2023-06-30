import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import DisplayRoutine from "./DisplayRoutine";
function SavedRoutines() {
  const { users, currUser, isLoggedIn } = useContext(AppContext);
  let routineArr = [];
  let routineList;
  if (isLoggedIn) {
    const userArr = users.filter((user) => {
      return user.username === currUser; //returning the user array that matches the currUser
    });

    routineArr = userArr[0];

    if (routineArr.hasOwnProperty("Routine")) {
      routineList = routineArr.Routines.map((routine) => {
        return (
          <DisplayRoutine
            day={routine.Day}
            exercises={routine.Exercises}
          ></DisplayRoutine>
        );
      });
    } else {
      window.alert(
        "You currently do not have any saved routines. Please create a routine in the create a routine tab"
      );
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
