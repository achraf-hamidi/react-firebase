import React from "react";
import { Navbar } from "react-bootstrap";
import LoginForm from "../Component/LoginForm";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitLogin(e) {} 

  render() {
    return (
      <div>
        <body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5em",
            }}
          >
            <LoginForm />
          </div>
        </body>
      </div>
    );
  }
}
export default LoginScreen;
