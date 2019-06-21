import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadInitialData } from './actions';

import Home from './components/Home';
import Login from './components/Login';

function PrivateRoute({ component: Component, ...rest }) {
  const isUserLoggedIn = (state) => {
    const i = state && state.loggedInUserId && state.loggedInUserId.length > 0;
    return i;
  };

  return (
    <Route
      {...rest}
      render={props => {
        return (
          isUserLoggedIn(props.location.state) ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {from: props.location}
              }}
            />
          )
        )
      }}
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
      </Router>
    );
  };
}

function mapStateToProps(state) {
  return {
    loggedInUserId: state.loggedInUserId
  };
}

const mapDispatchToProps = {
  loadInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
