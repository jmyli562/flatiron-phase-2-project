import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import ExcerciseCard from "./ExerciseCard";
import "./ExcerciseCard.css";
function Excercises() {
  const {
    exercises,
    search,
    setSearch,
    targetFilter,
    setTargetFilter,
    equipmentFilter,
    setEquipmentFilter,
  } = useContext(AppContext);

  console.log("Search:", search);
  console.log("targetFilter:", targetFilter);
  console.log("equipmentFilter:", equipmentFilter);

  const filter = exercises.filter((exercise) => {
    if (
      search &&
      exercise.name.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return false;
    }

    if (
      targetFilter &&
      targetFilter !== "none" &&
      exercise.target.toLowerCase() != targetFilter.toLowerCase()
    ) {
      return false;
    }

    if (
      equipmentFilter &&
      equipmentFilter !== "none" &&
      exercise.equipment.toLowerCase() !== equipmentFilter.toLowerCase()
    ) {
      return false;
    }

    return true;
  });

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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a exercise..."
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button>Search</button>
        <span>Filter Excercise by Target</span>
        <select
          name="target"
          id="target"
          value={targetFilter}
          onChange={(e) => {
            setTargetFilter(e.target.value);
          }}
        >
          <option value="none" selected>
            none
          </option>
          <option value="abductors">abductors</option>
          <option value="abs">abs</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="cardiovascular system">cardiovascular system</option>
          <option value="delts">delts</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="levator scapulae">levator scapulae</option>
          <option value="pectorals">pectorals</option>
          <option value="quads">quads</option>
          <option value="serratus anterior">serratus anterior</option>
          <option value="spine">spine</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
          <option value="upper back">upper back</option>
        </select>
        <span>Filter Exercise by Equipment</span>
        <select
          name="equipment"
          id="equipment"
          value={equipmentFilter}
          onChange={(e) => {
            setEquipmentFilter(e.target.value);
          }}
        >
          <option value="none" selected>
            none
          </option>
          <option value="assisted">assisted</option>
          <option value="band">band</option>
          <option value="barbell">barbell</option>
          <option value="body weight">body weight</option>
          <option value="bosu ball">bosu ball</option>
          <option value="cable">cable</option>
          <option value="dumbbell">dumbbell</option>
          <option value="elliptical machine">elliptical machine</option>
          <option value="ez barbell">ez barbell</option>
          <option value="hammer">hammer</option>
          <option value="kettlebell">kettlebell</option>
          <option value="leverage machine weight">leverage machine</option>
          <option value="olympic barbell">olympic barbell</option>
          <option value="resistance band">resistance band</option>
          <option value="roller">roller</option>
          <option value="rope">rope</option>
          <option value="skierg machine">skierg machine</option>
          <option value="sled machine">sled machine</option>
          <option value="smith machine">smith machine</option>
          <option value="stability ball">stability ball</option>
          <option value="stationary bike">stationary bike</option>
          <option value="stepmill machine">stepmill machine</option>
          <option value="tire">tire</option>
          <option value="trap bar">trap bar</option>
          <option value="upper body ergometer">upper body ergometer</option>
          <option value="weighted">weighted</option>
          <option value="wheel roller">wheel roller</option>
        </select>
      </div>
      <div className="card-container">
        {search === "" && targetFilter === "none" && equipmentFilter === "none"
          ? exerciseList
          : filter.map((exercise) => {
              return (
                <ExcerciseCard
                  name={exercise.name}
                  img={exercise.gifUrl}
                  targetedArea={exercise.target}
                  equipmentNeeded={exercise.equipment}
                ></ExcerciseCard>
              );
            })}
      </div>
    </>
  );
}

export default Excercises;
