import React from "react";
import "./Login.css";
function Login() {
  //conditional rendering using the isLoggedIn state
  return (
    <>
      <form action="/action_page.php">
        <label for="username">
          <b>Username</b>
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
        ></input>
        <input
          id="password"
          type="text"
          placeholder="Password"
          name="password"
        ></input>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
