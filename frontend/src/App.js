import logo from './logo.svg';
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import NewQuestion from './containers/NewQuestion'
import Signin from './containers/Signin';
import LeaderBoard from './containers/LeaderBoard';
import AnswerQuestion from './containers/AnswerQuestion';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>    
      <header>
        <div className="nav">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/question">New Question</Link>
          <Link className="item">Leader Board</Link>
          <Link className="item">Hello Logged in user</Link>
          <Link className="item" to="/signin">Logout</Link>
          
        </div>
        
      </header>
      <main>
        <Route path="/question" component={NewQuestion} />
        <Route path="/answer" component={AnswerQuestion} />  {/** Todo: path has to be /question/question/id */}
        <Route path="/signin" component={Signin} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </main>
     
    </BrowserRouter>
    )
  }
}

export default App;
