import react from "react";
import app from "../firebase";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
function Header() {
  return (
    <Nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link to="/login" class="navbar-brand">
          <i class="fa fa-h-square"></i>Health Center
        </Link>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <p>
          test
        </p>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto"></ul>
          <form class="d-flex">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => app.auth().signOut()}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </Nav>
  );
}
export default Header;
