import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Home from './Home'
import Login from './Login'
import Page_404 from './Page_404'
import Nav from './Nav'
import QuestionDetails from './QuestionDetails'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return(
      <div className='main-container'>
        { authedUser === null ? <Login /> :
          <Router>
            <Fragment>
              <div className='container'>
                <Nav />
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/add' exact component={AddQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/questions/:id' component={QuestionDetails} /> 
                  <Route component={Page_404} />
                </Switch>
              </div>
            </Fragment>
          </Router>
      }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)