import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register-form">
      <h1>Create a Account</h1>
      <form action="action_page.php">
        <label>
          <b>Email</b>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          ></input>
        </label>
        <label>
          <b>Username</b>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          ></input>
        </label>
        <label>
          <b>Password</b>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            required
          ></input>
        </label>
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Register;
