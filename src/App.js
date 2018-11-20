import React, { Component } from "react";
import "./App.scss";
// import '~bootstrap/dist/css/bootstrap.min.csss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  InputGroup,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  SplitButton,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import logo from "./logo.svg";

const Index = () => (
  <Container>
    <Row className="justify-content-md-center question-card">
      <Col md="auto">
        <Card bg="secondary" text="white">
          <Card.Header>John Doe asks...</Card.Header>
          <Card.Body>
            <Container>
              <Row style={{ marginBottom: 24 }}>
                <Col sm={2}>
                  <img
                    src="https://image.flaticon.com/icons/svg/145/145843.svg"
                    alt="User avatar"
                    style={{ width: 100, height: 100 }}
                  />
                </Col>
                <Col sm={10}>
                  <Card.Title>Would you rather...</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div class="answers-wrapper">
                    <div className="choices first" tabIndex={0} role="button">
                      Some quick example text to build on the card title Some
                      quick example text to build on the card title Some quick
                      example text to build on the card title and make up the
                      bulk of the card's content.
                    </div>
                    <div class="or">
                      <span>or</span>
                    </div>
                    <div className="choices second" tabIndex={0} role="button">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-md-center question-card">
      <Col md="auto">
        <Card bg="secondary" text="white">
          <Card.Header>John Doe asks...</Card.Header>
          <Card.Body>
            <Container>
              <Row style={{ marginBottom: 24 }}>
                <Col sm={2}>
                  <img
                    src="https://image.flaticon.com/icons/svg/145/145843.svg"
                    alt="User avatar"
                    style={{ width: 100, height: 100 }}
                  />
                </Col>
                <Col sm={10}>
                  <Card.Title>Would you rather...</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div class="answers-wrapper">
                    <div className="choices first" tabIndex={0} role="button">
                      Some quick example text to build on the card title Some
                      quick example text to build on the card title Some quick
                      example text to build on the card title and make up the
                      bulk of the card's content.
                    </div>
                    <div class="or">
                      <span>or</span>
                    </div>
                    <div className="choices second" tabIndex={0} role="button">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const Login = () => (
  <Card bg="secondary" text="white" className="login-card">
    <Card.Header>Please sign in to continue</Card.Header>
    <Card.Body>
      <Card.Text>Select a user from the dropdown</Card.Text>
      <img src={logo} alt="Logo" />
      <DropdownButton
        drop={"down"}
        variant="primary"
        title={` Login `}
        id={`dropdown-button-drop`}
        className="login-button"
      >
        <Dropdown.Item eventKey="1">User A</Dropdown.Item>
        <Dropdown.Item eventKey="2">User B</Dropdown.Item>
        <Dropdown.Item eventKey="3">User C</Dropdown.Item>
      </DropdownButton>
    </Card.Body>
  </Card>
);

const Leaderboard = () => <div style={{color: 'white'}}>LEADERBOARD</div>;

const AskAQuestion = () => <div style={{color: 'white'}}>AskAQuestion</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" variant="light">
            <LinkContainer to="/">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="https://image.flaticon.com/icons/svg/953/953818.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {" WyR"}
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ask-a-question">
                <Nav.Link>Ask a Question</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/leaderboard">
                <Nav.Link>Leaderboard</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Collapse className="justify-content-end logged-in-username">
              <Navbar.Text>Welcome back: Mark Otto</Navbar.Text>
            </Navbar.Collapse>
            <Nav>
              <LinkContainer to="/login">
                <Button variant="outline-primary">Login</Button>
              </LinkContainer>
            </Nav>
          </Navbar>

          <Route path="/" exact component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/ask-a-question" component={AskAQuestion} />
        </div>
      </Router>
    );
  }
}

export default App;
