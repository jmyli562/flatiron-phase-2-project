import "./App.css";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Register from "./Register";
function App() {
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
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
