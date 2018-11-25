import React, { Component } from "react";
import "./App.scss";
import Navigation from './components/Navigation';

import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Login from './pages/Login';
import AskAQuestion from './pages/AskAQuestion';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/ask-a-question" component={AskAQuestion} />
        </div>
      </Router>
    );
  }
}

export default App;
