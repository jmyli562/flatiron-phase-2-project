import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import ExcerciseCard from "./ExerciseCard";
function Excercises() {
  const { exercises } = useContext(AppContext);

  const exerciseList = exercises.map((exercise) => {
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
      {exerciseList}
    </>
  );
}

export default Excercises;
