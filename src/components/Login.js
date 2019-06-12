import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserId: ''
    };
  }

  onUserSelected = (event) => {
    this.setState({selectedUserId: event.target.value});
  };

  onLoginSubmitted = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.selectedUserId);
  };

  render() {
    return (
      <form onSubmit={this.onLoginSubmitted}>
        <label htmlFor="login_users">Login</label>
        <select id="login_users" data-testid="login_users" value={this.state.selectedUserId} onChange={this.onUserSelected}>
          <option key="default" data-testid="default">--- Please select a user ---</option>
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

function mapStateToProps({ users = {} }) {
  return {
    users: (users && users.users) || {}
  }
}

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
