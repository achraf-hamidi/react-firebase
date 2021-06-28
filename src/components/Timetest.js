import React from "react";
import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";

export default function Timetest() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "CDF0EA",
        }}
      >
        <div
          class="card text-white bg-success mb-3"
          style={{
            width: "50em",
            height: "9em",
            marginTop: "5em",
            marginLeft: "15em",
            marginRight: "15em",
          }}
        >
          {/* <div class="card-header">Header</div> */}
          <div class="card-body">
            <h4 class="card-title">Success!!</h4>
            <p class="card-text">
              Your appointment has been sent successfully.
            </p>

            <div style={{ textAlign: "right" }}>
              <button type="button" class="btn btn-outline-light">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
