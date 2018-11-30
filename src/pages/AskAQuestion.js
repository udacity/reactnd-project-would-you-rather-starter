import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle";

class AskAQuestion extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <Container style={{ marginTop: 24 }}>
          <PageTitle>New Poll</PageTitle>
          <h3>Would you rather...</h3>
          <Form>
            <Form.Group controlId="optionOne">
              <Form.Label>Option one</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="optionTwo">
              <Form.Label>Option two</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AskAQuestion;
