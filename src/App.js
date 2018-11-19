import React, { Component } from "react";
import "./App.css";
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
} from "react-bootstrap";
import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Ask a Question</Nav.Link>
            <Nav.Link href="#pricing">Leaderboard</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome back: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar>
        <Card bg="dark" text="white" className="login-card">
          <Card.Header>Please sign in to continue</Card.Header>
          <Card.Body>
            <Card.Text>Please select a user from the dropdown</Card.Text>
            <img src={logo} alt="Logo" />
            <DropdownButton
              drop={'down'}
              variant="primary"
              title={` Login `}
              id={`dropdown-button-drop`}
            >
              <Dropdown.Item eventKey="1">User A</Dropdown.Item>
              <Dropdown.Item eventKey="2">User B</Dropdown.Item>
              <Dropdown.Item eventKey="3">User C</Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
