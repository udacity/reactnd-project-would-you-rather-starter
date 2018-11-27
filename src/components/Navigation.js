import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <div>
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
            {this.props.auth === null ? (
              <Navbar.Text>Sign in to vote</Navbar.Text>
            ) : (
              <Navbar.Text>
                Welcome back {this.props.auth.user.name}
              </Navbar.Text>
            )}
          </Navbar.Collapse>
          <Nav>
            {this.props.auth === null ? (
              <LinkContainer to="/login">
                <Button variant="outline-primary">Login</Button>
              </LinkContainer>
            ) : (
              <LinkContainer to="/logout">
                <Button variant="outline-danger">Logout</Button>
              </LinkContainer>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Navigation);
