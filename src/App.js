import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import { handleInitialData } from "./actions/shared";

import Navigation from "./components/Navigation";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AskAQuestion from "./pages/AskAQuestion";

class App extends Component {

  // load initial redux store data, users + questions
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/ask-a-question" component={AskAQuestion} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
