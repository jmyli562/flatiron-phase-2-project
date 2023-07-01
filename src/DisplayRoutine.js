import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function DisplayRoutine({ day, exercises }) {
  return (
    <div className="routine-list-container">
      <div>
        <h2>{day}</h2>
        {exercises.map((exercise) => {
          return (
            <ul class="list-group">
              <li>
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
