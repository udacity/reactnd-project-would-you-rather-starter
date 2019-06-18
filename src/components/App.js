import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withCookies } from 'react-cookie'

import Nav from './Nav';
import { handleInitialData, handleUserLogin } from '../actions/shared';
import Dashboard from './Dashboard';
import PollCard from './PollCard';
import NewPoll from './NewPoll';
import LeadBoard from './LeadBoard';
import Login from './Login';
import { logOut } from '../actions/logState';


class App extends Component {
  componentDidMount() {
    const { cookies, logState, dispatch } = this.props
    const authedUser = cookies.get('authedUser')

    const logFromCookie = () => {
      if (authedUser && logState === null) {
        dispatch(handleUserLogin(authedUser))
      }

      if (!authedUser && logState === null) {
        dispatch(logOut())
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
          {/** todo: loading bar */}
          <Nav cookies={cookies} />
          {logState !== null
            ? <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/poll/:id' component={PollCard} />
                <Route path='/newpoll' component={NewPoll} />
                <Route path='/leadboard' component={LeadBoard} />
                <Route path='/login' render={() => (<Login cookies={cookies} />)} />
              </div>
            : <div>Loading</div>
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
