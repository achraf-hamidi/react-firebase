import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";

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

  render() {
    return (
      <Container>
        <Card>
          <Row>
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
                  : "Please select a day 👻"}
              </p>
            </Col>
            <Col sm={4}>
              <Time />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" size="lg">
                Take appointiment
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
