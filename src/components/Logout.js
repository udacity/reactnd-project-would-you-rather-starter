import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutUser } from '../actions';

class Logout extends React.Component {
  handleLogoutUser = (event) => {
    event.preventDefault();
    this.props.logoutUser(this.props.loggedInUserId);
  };

  render() {
    if (!this.props.loggedInUserId) {
      return (<Redirect to="/login"/>);
    }

    return(
      <div>
        <button onClick={this.handleLogoutUser}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUserId }) {
  return {
    loggedInUserId
  };
}

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
