import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import { getInitialData } from "./actions/shared";

import Navigation from "./components/Navigation";
import Leaderboard from "./pages/Leaderboard";
import IndividualQuestion from "./pages/IndividualQuestion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddQuestion from "./pages/AddQuestion";

class App extends Component {

  // load initial redux store data, users + questions
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/add" component={AddQuestion} />
          <Route path="/question/:qid" component={IndividualQuestion} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
