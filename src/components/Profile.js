import React from 'react';
import { connect } from 'react-redux';

import Logout from './Logout';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <p>Logged In: {this.props.loggedInUser.id}</p>
        <Logout/>
      </div>
    );
  }
}

function mapStateToProps({loggedInUser}) {
  return {
    loggedInUser
  };
}

export default connect(mapStateToProps)(Profile);
