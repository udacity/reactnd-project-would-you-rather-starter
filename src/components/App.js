import React, { Component } from 'react'
import Dashboard from './Dashboard';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Poll from './Poll';
import Results from './Results';
import PollCard from './PollCard';


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
            ? <div>Loading</div>
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/poll/:id' component={PollCard} />
                <Route path='/results/:id' component={Results} />
              </div>
          }
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
