import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import Login from "./Login";
function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expands="sm"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <img
                src="data:image/jpeg;base64,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"
                width="40px"
                height="40px"
              ></img>
              <NavLink exact to="/home">
                Home
              </NavLink>
              <NavLink exact to="/register">
                Register
              </NavLink>
              <NavLink to="/exercises">Excercises</NavLink>
              <NavLink to="/exercise-form">Create your Routine</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Login />
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
