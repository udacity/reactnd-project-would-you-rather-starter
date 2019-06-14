import React, { Component } from 'react'
import Dashboard from './Dashboard';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Nav from './Nav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Poll from './Poll';
import Results from './Results';
import PollCard from './PollCard';
import NewPoll from './NewPoll';
import LeadBoard from './LeadBoard';
import Login from './Login';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    // console.log(this.props)

    return (
      <Router>
        <div>
          <Nav />
          {this.props.loading === true
            ? <div>
                loading
              </div>
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/poll/:id' component={PollCard} />
                <Route path='/newpoll' component={NewPoll} />
                <Route path='/leadboard' component={LeadBoard} />
                <Route path='/login' component={Login} />
              </div>
          }
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser, logState }) => ({
  loading: authedUser === null && logState === null,
})

export default connect(mapStateToProps)(App);
