import React from "react";
import "./DisplayRoutine.css";
import { v4 as uuidv4 } from "uuid";
function DisplayRoutine({ day, exercises }) {
  return (
    <div className="routine-list-container">
      <div className="routine-list-content">
        <h2>{day}</h2>
        {exercises.map((exercise) => {
          return (
            <ul class="list-group">
              <li key={uuidv4()}>
                {`Exercise name: ` +
                  exercise.name +
                  " Duration: " +
                  exercise.duration}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayRoutine;
