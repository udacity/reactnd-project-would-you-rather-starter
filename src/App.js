import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from './actions';

import Home from './components/Home';
import Login from './components/Login';
import PollDetails from './components/PollDetails';
import PrivateRoute from './components/PrivateRoute';

export class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div id="main">
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/" component={Home} loggedInUser={this.props.loggedInUser}/>
        <PrivateRoute path="/questions/:questionId" component={PollDetails} loggedInUser={this.props.loggedInUser}/>
        <div id="footer">
          <div>Avatar icons made by <a href="https://www.freepik.com/?__hstc=57440181.7e9bb6a94f3fc1e2093442e33aeffd94.1561387357605.1561387357605.1561387357605.1&__hssc=57440181.7.1561387357606&__hsfp=752279542" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser || {},
    history: state.history
  };
}

const mapDispatchToProps = {
  loadInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
