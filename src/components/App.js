import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Hello There! 
      </div>
    );
  }
}


export default connect()(App)