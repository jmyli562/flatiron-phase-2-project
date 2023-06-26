import React, { useState } from "react";

function ToggleButton({ saveExercises }) {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={(e) => {
        saveExercises(e);
        setToggle(() => !toggle);
      }}
    >
      {toggle ? "Saved" : "Save Exercise"}
    </button>
  );
}

export default ToggleButton;
