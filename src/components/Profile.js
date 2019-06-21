import React from 'react';
import { connect } from 'react-redux';

import Logout from './Logout';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <p>Logged In: {this.props.loggedInUserId}</p>
        <Logout/>
      </div>
    );
  }
}

function mapStateToProps({loggedInUserId}) {
  return {
    loggedInUserId
  };
}

export default connect(mapStateToProps)(Profile);
