import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../actions';

class Logout extends React.Component {
  handleLogoutUser = (event) => {
    event.preventDefault();
    this.props.logoutUser(this.props.loggedInUser);
    this.props.history.push("/");
  };

  render() {
    return(
      <div>
        <button onClick={this.handleLogoutUser}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, history }) {
  return {
    loggedInUser,
    history
  };
}

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));
