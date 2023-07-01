import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import axios from "axios";
import "./Login.css";
function Login() {
  const {
    users,
    currUser,
    setCurrUser,
    currUserPass,
    setPassword,
    isLoggedIn,
    setLogin,
  } = useContext(AppContext);

  function authenticateUser(e) {
    e.preventDefault();
    users.forEach((user) => {
      if (user.username === currUser && user.password === currUserPass) {
        setLogin(() => !isLoggedIn);
        localStorage.setItem("currUser", currUser);
      }
    });
  }

  function handleLogout() {
    setLogin(() => !isLoggedIn);
    setCurrUser("");
    setPassword("");
  }

  //conditional rendering using the isLoggedIn state
  return (
    <>
      {isLoggedIn ? (
        <>
          <p className="login-text">Welcome, {currUser}!</p>
          <button className="log-out-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <form action="/action_page.php" onSubmit={authenticateUser}>
          <label for="username">
            <b>Username</b>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            value={currUser}
            onChange={(e) => setCurrUser(() => e.target.value)}
          ></input>
          <input
            id="password"
            type="text"
            placeholder="Password"
            name="password"
            value={currUserPass}
            onChange={(e) => setPassword(() => e.target.value)}
          ></input>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
    </>
  );
}

export default Login;
