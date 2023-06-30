import React from "react";

function DisplayRoutine({ day, exercises }) {
  return (
    <div className="routine-list-container">
      <div>
        <h2>{day}</h2>
        {exercises.map((exercise) => {
          return (
            <ul>
              <li>{"Exercise:" + exercise.name}</li>
              <li>{"Duration:" + exercise.duration}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayRoutine;
