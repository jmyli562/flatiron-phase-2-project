import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import RoutineInfo from "./RoutineInfo";
import "./RoutineInfo.css";
function Routines() {
  const { isLoggedIn, users, currUser } = useContext(AppContext);
  //console.log(users);
  function getUserId() {
    let id;
    users.forEach((user) => {
      if (currUser === user.username) {
        id = user.id;
      }
    });
    return id;
  }
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function saveRoutine() {
    const tempObj = {
      Routines: [
        {
          Day: "Monday",
          Exercises: [],
        },
        {
          Day: "Tuesday",
          Exercises: [],
        },
        {
          Day: "Wednesday",
          Exercises: [],
        },
        {
          Day: "Thursday",
          Exercises: [],
        },
        {
          Day: "Friday",
          Exercises: [],
        },
        {
          Day: "Saturday",
          Exercises: [],
        },
        {
          Day: "Sunday",
          Exercises: [],
        },
      ],
    };

    weekdays.forEach((weekday, index) => {
      const routines = document.getElementsByClassName(`${weekday}`);
      const emptyObj = {};
      for (let child of routines[0].children) {
        for (let exercise of child.children) {
          if (exercise.tagName === "SELECT" && exercise.id === "exercises") {
            emptyObj.name = exercise.value;
          } else if (
            exercise.tagName === "SELECT" &&
            exercise.id === "duration"
          ) {
            emptyObj.duration = exercise.value;
            tempObj.Routines[index].Exercises.push(
              JSON.parse(JSON.stringify(emptyObj))
            );
          }
        }
      }
    });
    //user should not be able to save their routine if not logged in, prompt the user to log in or register an account
    if (!isLoggedIn) {
      window.alert("Please log in or register an account to save this routine");
    } else {
      //past this point the user should be logged in
      const id = getUserId();

      fetch(`http://localhost:3001/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempObj),
      });
    }
  }

  const weekdayList = weekdays.map((weekday) => {
    return (
      <div className={weekday}>
        <h3>{weekday}</h3>
        <RoutineInfo />
      </div>
    );
  });
  return (
    <div className="routine-container">
      <h1>Create a Routine</h1>
      <>
        <div className="routine-list">
          <ul>{weekdayList}</ul>
        </div>
      </>
      <button className="save-routine" onClick={saveRoutine}>
        Save Routine
      </button>
    </div>
  );
}

export default Routines;
