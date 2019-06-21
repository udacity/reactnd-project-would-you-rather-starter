import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Profile/>
        <p>Home</p>
      </div>
    );
  }
}

export default connect()(Home)
