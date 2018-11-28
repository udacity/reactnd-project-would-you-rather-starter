import React from "react";
import { Form, Button } from "react-bootstrap";

class NewQuestionForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
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
    );
  }
}

export default NewQuestionForm;
