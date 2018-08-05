import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Home from './Home'
import Login from './Login'
import Page_404 from './Page_404';


class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser} = this.props;

    if (authedUser === null) {
      return (
        <Login />
      )
    } else {
      return (
        <Router>
          <Fragment>
            <div className='container'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route component={Page_404} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      )
    }

  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}


export default connect(mapStateToProps)(App)