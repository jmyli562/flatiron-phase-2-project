import React, { useContext } from "react";
import { AppContext } from "./context/AppProvider";
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
      } else {
        window.alert(
          "An account with that username or password does not exist. Please make a account or try again"
        );
      }
    });
  }

  //conditional rendering using the isLoggedIn state
  return (
    <>
      {isLoggedIn ? (
        <>
          <p className="login-text">Logged in as {currUser}!</p>
          <button>Logout</button>
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
