import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppProvider";
function ToggleButton({ saveExercises }) {
  const [toggle, setToggle] = useState(false);
  const { savedExercises, setSavedExercises } = useContext(AppContext);

  function removeExercise(e) {
    let exerciseToRemove = e.target.parentElement.children[0].textContent;
    exerciseToRemove = exerciseToRemove
      .slice(exerciseToRemove.indexOf(":") + 1)
      .trim();
    setSavedExercises(
      savedExercises.filter((exercise) => {
        return exercise.name !== exerciseToRemove;
      })
    );
  }
  return (
    <button
      onClick={(e) => {
        saveExercises(e);
        setToggle(() => !toggle);
        if (toggle) {
          //if the user presses the button again after saving the exercise the exercise should be removed from the state array
          removeExercise(e);
        }
      }}
    >
      {toggle ? "Remove Exercise" : "Save Exercise"}
    </button>
  );
}

export default ToggleButton;
