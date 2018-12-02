import React, { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { handleAddQuestion } from "../actions/questions";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: "",
      optionTwo: "",
      showAlert: false,
      showError: false,
    };
  }

  handleInput = e => {
    const input = e.target.value;
    const option = e.target.name;
    this.setState({
      [option]: input,
      showError: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, history } = this.props;
    if (optionOne && optionTwo) {
      dispatch(handleAddQuestion(optionOne, optionTwo)).then(() => {
        this.setState({
          optionOne: "",
          optionTwo: "",
          showAlert: true,
        });
        setTimeout(function() {
          history.push("/");
        }, 3000);
      });
    } else {
      this.setState({
        showError: true,
      })
    }
  };

  render() {
    const { optionOne, optionTwo, showAlert, showError } = this.state;

    return (
      <div style={{ color: "white" }}>
        <Container style={{ marginTop: 24 }}>
          {showAlert && (
            <Alert variant={"success"}>
              Question added! Redirecting to the home page...
            </Alert>
          )}
          { showError && (
            <Alert variant={"danger"}>
              Uh-oh, options cannot be blank.
            </Alert>
          )}
          <PageTitle>New Poll</PageTitle>
          <h3>Would you rather...</h3>
          <Form>
            <Form.Group controlId="optionOne">
              <Form.Label>Option one</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="optionOne"
                onChange={e => this.handleInput(e)}
                value={optionOne}
              />
            </Form.Group>
            <Form.Group controlId="optionTwo">
              <Form.Label>Option two</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="optionTwo"
                onChange={e => this.handleInput(e)}
                value={optionTwo}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(connect()(AddQuestion));
