import React, { Component } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { logOut } from '../actions/auth';

class Navigation extends Component {

  handleLogout = (e, id) => {
    const { dispatch } = this.props;
    dispatch(logOut());
  }

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
          <Form inline>
            {this.props.auth === null ? (
              <LinkContainer to="/login">
                <Button variant="outline-primary">Login</Button>
              </LinkContainer>
            ) : (
              <Button variant="outline-danger" onClick={(e) => {this.handleLogout(e)}}>Logout</Button>
            )}
          </Form>
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
