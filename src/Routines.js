import React from "react";
import RoutineInfo from "./RoutineInfo";
import "./RoutineInfo.css";
function Routines() {
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

    /*

    const routines = document.getElementsByClassName("Monday");
    const emptyObj = {};
    for (let child of routines[0].children) {
      for (let exercise of child.children) {
        if (exercise.tagName === "SELECT" && exercise.id === "exercises") {
          //console.log(exercise);
          emptyObj.name = exercise.value;
          //console.log(emptyObj);
        } else if (
          exercise.tagName === "SELECT" &&
          exercise.id === "duration"
        ) {
          //console.log(exercise);
          emptyObj.duration = exercise.value;
          //console.log(emptyObj);
          tempObj.Routines[0].Exercises.push(
            JSON.parse(JSON.stringify(emptyObj))
          );
          //console.log(tempObj);
        }
      }
    }

    */

    console.log(tempObj);
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
