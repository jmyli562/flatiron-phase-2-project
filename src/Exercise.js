import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import ExcerciseCard from "./ExerciseCard";
import "./ExcerciseCard.css";
function Excercises() {
  const { exercises } = useContext(AppContext);

  const exerciseList = exercises[0].map((exercise) => {
    return (
      <ExcerciseCard
        name={exercise.name}
        img={exercise.gifUrl}
        targetedArea={exercise.target}
        equipmentNeeded={exercise.equipment}
      ></ExcerciseCard>
    );
  });

  return (
    <>
      <h1>Exercise Page</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a exercise..."
          name="email"
        ></input>
        <button>Search</button>
      </div>
      <div className="card-container">{exerciseList}</div>
    </>
  );
}

export default Excercises;
