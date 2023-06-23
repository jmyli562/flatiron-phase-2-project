import "./App.css";
import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Register from "./Register";
function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(() => e.target.value);
  }

  function handleEmail(e) {
    setEmail(() => e.target.value);
  }

  function handlePassword(e) {
    setPassword(() => e.target.value);
  }

  function createUser(e) {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    console.log(newUser);
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/register">
            <Register
              username={username}
              email={email}
              password={password}
              createUser={createUser}
              handleUsername={handleUsername}
              handlePassword={handlePassword}
              handleEmail={handleEmail}
            />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
