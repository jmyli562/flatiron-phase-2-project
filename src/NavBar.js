import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/home">
        Home
      </NavLink>
      <NavLink to="/exercises">Excercises</NavLink>
    </div>
  );
}

export default NavBar;
