import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

import { Link } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";

const SignUp = ({ history }) => {
  console.log("signup");

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    // <div>
    //   <h1>Sign up</h1>
    //   <form onSubmit={handleSignUp}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
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
          Register
        </h1>
        <br />
        <Form style={{ width: "9cm" }} onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              id="password"
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
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default withRouter(SignUp);
