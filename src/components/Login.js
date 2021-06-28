import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import { Link } from "react-router-dom";
import app from "../firebase";
import { AuthContext } from "../Auth";

import { Form, Button, Card } from "react-bootstrap";

const Login = ({ history }) => {
  console.log("login");
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
  
    <body>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5em",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card body>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Login
            </h1>
            <br />
            <Form style={{ width: "9cm" }} onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ textAlign: "right" }}
              >
                Submit
              </Button>
              <p style={{ textAlign: "right" }}>
                You don't have account <Link to="/signup">sign up?</Link>
              </p>
            </Form>
          </Card>
        </div>
      </div>
    </body>
  );
};

export default withRouter(Login);
