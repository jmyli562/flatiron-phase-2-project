import React from "react";
import "./Register.css";
function Register({
  username,
  email,
  password,
  createUser,
  handleUsername,
  handlePassword,
  handleEmail,
}) {
  return (
    <div className="register-form">
      <h1>Create a Account</h1>
      <form action="action_page.php" onSubmit={createUser}>
        <label>
          <b>Email</b>
          <input
            className="email-form"
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          ></input>
        </label>
        <label>
          <b>Username</b>
          <input
            className="username-form"
            type="text"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleUsername}
            required
          ></input>
        </label>
        <label>
          <b>Password</b>
          <input
            classname="password-form"
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          ></input>
        </label>
        <p>
          By creating an account you agree to our{" "}
          <a href="/home">Terms & Privacy</a>.
        </p>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Register;
