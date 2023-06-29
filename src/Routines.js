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
    </div>
  );
}

export default Routines;
