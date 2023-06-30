import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import Home from "./Home";
import { withRouter, Switch, Route, useHistory } from "react-router-dom";
import Navigation from "./Navigation";
import AccountCreated from "./AccountCreated.js";
import Register from "./Register";
import { AppContext } from "./context/AppProvider";
import Routines from "./Routines";
import Excercise from "./Exercise.js";
import SavedRoutines from "./SavedRoutines";
function App() {
  let history = useHistory();
  const { users, setUsers, exercises, setExercises } = useContext(AppContext);
  const redirectUser = () => {
    history.push("/register/success");
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    })
      .then((resp) => resp.json())
      .then((exercises) => setExercises(exercises));
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
        <Route exact path="/exercises">
          <Excercise />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/register/success">
          <AccountCreated />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/routines">
          <Routines />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/routines/saved">
          <SavedRoutines />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
