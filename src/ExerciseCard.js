import React from "react";

function ExcerciseCard({ name, img, targetedArea, equipmentNeeded }) {
  return (
    <div>
      <h1>{"Excercise name:" + name}</h1>
      <img src="img" alt="exercise-img"></img>
      <p>{"Targets:" + targetedArea}</p>
      <p>{"Equipment needed: " + equipmentNeeded}</p>
    </div>
  );
}

export default ExcerciseCard;
