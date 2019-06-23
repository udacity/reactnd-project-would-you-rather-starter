import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutUser } from '../actions';
import { isEmptyObject } from '../utils';

class Logout extends React.Component {
  handleLogoutUser = (event) => {
    event.preventDefault();
    this.props.logoutUser(this.props.loggedInUser);
  };

  render() {
    if (isEmptyObject(this.props.loggedInUser)) {
      return (<Redirect to="/login"/>);
    }

    return(
      <div>
        <button onClick={this.handleLogoutUser}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedInUser
  };
}

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
