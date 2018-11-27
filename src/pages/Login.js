import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import logo from "../assets/logo.svg";

class Login extends Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
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
            {this.props.users.length !== 0 &&
              this.props.users.map((user, index) => (
                <Dropdown.Item eventKey={index + 1} key={user.id}>
                  <img
                    src={user.avatarURL}
                    alt={user.name}
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                  {user.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Card.Body>
      </Card>
    );
  }
}

Login.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  const userData = Object.keys(state.users).map(user => ({
    name: state.users[user].name,
    id: state.users[user].id,
    avatarURL: state.users[user].avatarURL,
  }));
  return {
    users: userData,
  };
}

export default connect(mapStateToProps)(Login);
