import React from 'react';
import { connect } from 'react-redux';

import Polls from './Polls';
import Profile from './Profile';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Profile/>
        <p>Home</p>
        <Polls/>
      </div>
    );
  }
}

export default connect()(Home)
