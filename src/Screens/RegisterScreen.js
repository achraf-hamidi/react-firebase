import React from "react";
import { Navbar } from "react-bootstrap";
import RegisterForm from "../Component/RegisterForm";

class RegisterScreen extends React.Component {
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
            <RegisterForm />
          </div>
        </body>
      </div>
    );
  }
}
export default RegisterScreen;
