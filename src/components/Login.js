import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { isEmptyObject } from '../utils';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: {id: ""}
    };
  }

  onUserSelected = (event) => {
    const selectedUserId = event.target.value;
    const selectedUser = Object.values(this.props.users).filter((user) => user.id === selectedUserId)[0] || {id: ""};
    this.setState({ selectedUser: selectedUser });
  };

  onLoginSubmitted = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.selectedUser);
  };

  render() {
    if (!isEmptyObject(this.props.loggedInUser)) {
      return(<Redirect to={{ pathname: "/", state: {loggedInUser: this.props.loggedInUser}}}/>);
    }

    return (
      <form onSubmit={this.onLoginSubmitted}>
        <label htmlFor="login_users">Login</label>
        <select id="login_users" data-testid="login_users" value={this.state.selectedUser.id} onChange={this.onUserSelected}>
          <option key="default" data-testid="default" value="">--- Please select a user ---</option>
          {
            Object.values(this.props.users).map((user) => {
              return <option key={user.id} data-testid={user.id} value={user.id}>{user.name}</option>
            })
          }
        </select>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

function mapStateToProps({ users = {}, loggedInUser }) {
  return {
    users: (users && users.users) || {},
    loggedInUser
  }
}

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
