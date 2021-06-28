import react from "react";
import { Form, Button, Card } from "react-bootstrap";

function LoginForm() {
  return (
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
        <Form style={{ width: "9cm" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="show password" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ textAlign: "right" }}
          >
            Submit
          </Button>
          <p style={{ textAlign: "right" }}>
            Already registered{" "}
            <a href="./Screens/RegisterScreen.js">sign in?</a>
          </p>
        </Form>
      </Card>
    </div>
  );
}
export default LoginForm;
