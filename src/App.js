import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import "./App.scss";
import store from './store';
import Navigation from './components/Navigation';
import Leaderboard from './pages/Leaderboard';
import Home from './pages/Home';
import Login from './pages/Login';
import AskAQuestion from './pages/AskAQuestion';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation/>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/ask-a-question" component={AskAQuestion} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
