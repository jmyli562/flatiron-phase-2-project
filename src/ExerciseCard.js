import React from "react";
import ToggleButton from "./ToggleButton";
function ExcerciseCard({
  name,
  img,
  targetedArea,
  equipmentNeeded,
  saveExercises,
}) {
  return (
    <div className="exercise-card">
      <h4>{"Exercise name: " + name}</h4>
      <img src={img} alt="exercise-img" width="200px" height="200px"></img>
      <h4>{"Targets:" + targetedArea}</h4>
      <h3>{"Equipment needed: " + equipmentNeeded}</h3>
      <ToggleButton saveExercises={saveExercises}></ToggleButton>
    </div>
  );
}

export default ExcerciseCard;
