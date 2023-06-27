import React from "react";

function RoutineInfo() {
  return (
    <>
      <span>Add saved exercise: </span>
      <select name="saved-exercises" id="exercises">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}

export default RoutineInfo;
