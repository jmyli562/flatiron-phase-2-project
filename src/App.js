import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Navigation from "./Navigation";
import AccountCreated from "./AccountCreated.js";
import Register from "./Register";

function App() {
  let history = useHistory();

  const redirectUser = () => {
    history.push("/register/success");
  };

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  function userExists(email) {
    let exists = false;
    users.forEach((user) => {
      if (user.email === email) {
        exists = true;
      }
    });

    return exists;
  }

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

    if (userExists(email)) {
      window.alert(
        "An account under this email already exists. Please use a different email"
      );
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };

      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((resp) => resp.json())
        .then(() => redirectUser());
    }
    setUsername("");
    setPassword("");
    setEmail("");
  }

  return (
    <div>
      <Router>
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
          <Route path="/register/success">
            <AccountCreated />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
