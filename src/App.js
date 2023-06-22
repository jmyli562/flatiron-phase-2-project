import "./App.css";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
