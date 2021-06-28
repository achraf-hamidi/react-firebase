import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";

import app from "../firebase";
import "firebase/firestore";

import Time from "./Time";

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  onCreate = async (e) => {
    e.preventDefault();

    await app.firestore().collection("appointement").add({
      date: this.state.selectedDay,
    });
  };

  render() {
    return (
      <Container>
        <Card style={{ margin: "2em" }} border="secondary">
          <Row style={{ margin: "1em" }}>
            <Col sm={7}>
              <Card.Body>
                <Card.Title>Choose your day</Card.Title>
              </Card.Body>
              <DayPicker
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
              />
              <p>
                {this.state.selectedDay
                  ? this.state.selectedDay.toLocaleDateString()
                  : "Please select a day "}
              </p>
            </Col>
            <Col sm={4}>
              <Time />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                style={{ marginBottom: "1em" }}
                onClick={this.onCreate}
              >
                Take appointiment
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
