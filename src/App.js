import React from 'react';
import Login from './components/Login';
import { connect } from 'react-redux';
import { loadInitialData } from './actions';

export class App extends React.Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div className="App">
        <Login/>
        <p>Logged In: {this.props.loggedInUserId}</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  console.log("loggedIn User %o", state)
  return {
    loggedInUserId: state.loggedInUserId
  };
}

const mapDispatchToProps = {
  loadInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
