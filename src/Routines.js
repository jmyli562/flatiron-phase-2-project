import React from "react";
import RoutineInfo from "./RoutineInfo";
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
      <>
        <li>{weekday}</li>
        <RoutineInfo />
      </>
    );
  });
  return (
    <div>
      <h1>Create a Routine</h1>
      <div>
        <h2>Settings</h2>
        <ul>{weekdayList}</ul>
      </div>
    </div>
  );
}

export default Routines;
