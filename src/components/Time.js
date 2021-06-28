import React, { useState } from "react";

import { TimePicker } from "react-datetime-range-super-picker";
import "react-datetime-range-super-picker/dist/index.css";
import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";

import app from "../firebase";
import "firebase/firestore";
const firestore = app.firestore();

export default function Time() {
  const [hour24, setHour] = useState(22);
  const [minute, setMin] = useState(30);
  const emailuser = app.auth().currentUser.email;
  const db = app.firestore();
  const messagesRef = db.collection("appointement");

  const handleTimeUpdate = ({ time }) => {
    setHour(time.hour24);
    setMin(time.minute);
  };

  const onCreate = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      hour: hour24,
      min: minute,
      email: emailuser,
    });
  };

  return (
    <div>
      <TimePicker time={{ hour24, minute }} onTimeUpdate={handleTimeUpdate} />
     
      <Row>
        <Col>
          <Button
            variant="primary"
            size="lg"
            style={{ marginTop: "2em",backgroundColor:"green" }}
            onClick={onCreate}
          >
            pick a time
          </Button>
        </Col>
      </Row>
    </div>
  );
}
