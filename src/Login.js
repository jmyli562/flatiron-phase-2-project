import React from "react";

function Login() {
  //conditional rendering using the isLoggedIn state
  return (
    <>
      <form action="/action_page.php">
        <input type="text" placeholder="Username" name="username"></input>
        <input type="text" placeholder="Password" name="password"></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
