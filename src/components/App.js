import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withCookies } from 'react-cookie'
import LoadingBar from 'react-redux-loading'

import Nav from './Nav';
import { handleInitialData, handleUserLogin } from '../actions/shared';
import Dashboard from './Dashboard';
import PollCard from './PollCard';
import NewPoll from './NewPoll';
import LeadBoard from './LeadBoard';
import Login from './Login';
import { appInit } from '../actions/logState';
import Initializing from './Initializing'
import NonExisting from './NonExisting'


class App extends Component {
  componentDidMount() {
    const { cookies, logState, dispatch } = this.props
    const authedUser = cookies.get('authedUser')

    const logFromCookie = () => {
      if (authedUser && logState === null) {
        dispatch(handleUserLogin(authedUser))
      }

      if (!authedUser && logState === null) {
        dispatch(appInit())
      }
    }

    dispatch(handleInitialData(logFromCookie))
  }

  render() {
    const { logState, cookies } = this.props

    return (
      <Router>
        <Fragment>
          <CssBaseline /> {/** To clear the browser CSS feature */}
          <LoadingBar />
          <Nav cookies={cookies} />
          {logState !== null
            ? <div>
                <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' component={PollCard} />
                  <Route path='/add' component={NewPoll} />
                  <Route path='/leaderboard' component={LeadBoard} />
                  <Route path='/login' render={() => (<Login cookies={cookies} />)} />
                  <Route component={NonExisting} />
                </Switch>  
              </div>
            : <Initializing />
          }
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ logState }) => {
  return {
    logState
  }
}

export default connect(mapStateToProps)(withCookies(App))
