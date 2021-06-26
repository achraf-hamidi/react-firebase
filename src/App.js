import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

import { AuthProvider } from "./Auth";
import { BrowserRouter as Router,Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
