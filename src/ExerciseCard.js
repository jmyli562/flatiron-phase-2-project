import React from "react";
import "./ExcerciseCard.css";
function ExcerciseCard({ name, img, targetedArea, equipmentNeeded }) {
  return (
    <div className="card-container">
      <div className="exercise-card">
        <h4>{"Excercise name: " + name}</h4>
        <img src={img} alt="exercise-img" width="200px" height="200px"></img>
        <h4>{"Targets:" + targetedArea}</h4>
        <h3>{"Equipment needed: " + equipmentNeeded}</h3>
        <button>Save Exercise</button>
      </div>
    </div>
  );
}

export default ExcerciseCard;
