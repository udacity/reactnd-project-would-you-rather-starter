import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from './actions';
import { isEmptyObject } from './utils';

import Home from './components/Home';
import Login from './components/Login';

function PrivateRoute({ component: Component, ...rest }) {
  const isUserLoggedIn = (state) => {
    return !isEmptyObject(state && state.loggedInUser);
  };

  const renderComponentOrRedirectToLogin = (props) => {
    if (isUserLoggedIn(props.location.state)) {
      return (<Component {...props}/>);
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
      )
    }
  };

  return (
    <Route
      {...rest}
      render={renderComponentOrRedirectToLogin}
    />
  );
}

export class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <Router>
        <PrivateRoute exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
      </Router>
    );
  };
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

const mapDispatchToProps = {
  loadInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
