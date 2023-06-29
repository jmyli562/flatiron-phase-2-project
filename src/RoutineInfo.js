import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppProvider";
function RoutineInfo() {
  function handeClick(e) {
    e.target.textContent = "Remove";
    e.target.addEventListener("click", handleRemove);
    setNewExercise(<RoutineInfo></RoutineInfo>);
  }

  function handleRemove(e) {
    e.target.parentElement.remove();
  }
  const [newExercise, setNewExercise] = useState();
  const { savedExercises } = useContext(AppContext);
  const selectExerciseList = savedExercises.map((exercise) => {
    return <option value={exercise.name}>{exercise.name}</option>;
  });
  return (
    <>
      <div className="exercise-routine">
        <span>Exercise name: </span>
        <select name="saved-exercises" id="exercises">
          <option>None</option>
          {selectExerciseList}
        </select>
        <span>Duration: </span>
        <select name="duration" id="duration">
          <option>None</option>
          <option>5 minutes</option>
          <option>10 minutes</option>
          <option>15 minutes</option>
          <option>20 minutes</option>
          <option>25 minutes</option>
          <option>30 minutes</option>
          <option>35 minutes</option>
          <option>40 minutes</option>
          <option>45 minutes</option>
          <option>50 minutes</option>
          <option>55 minutes</option>
          <option>60 minutes</option>
        </select>
        <button onClick={handeClick}> + Add new Exercise </button>
      </div>
      {newExercise}
    </>
  );
}

export default RoutineInfo;
