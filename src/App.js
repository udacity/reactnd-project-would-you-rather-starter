
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import NewQuestion from './containers/NewQuestion'
import Signin from './containers/Signin';
import LeaderBoard from './containers/LeaderBoard';
import AnswerQuestion from './containers/AnswerQuestion';
import ResultPage from './containers/ResultPage';
import HomePage from './containers/HomePage';
import { connect } from 'react-redux';
import { getInitialData } from './actions/shared';

class App extends React.Component {
   componentDidMount() {
    this.props.dispatch(getInitialData())
   }
  render() {
    const {users, questions} = this.props;
    //console.log(Object.keys(users)); // login 
    return (
      <BrowserRouter>    
      <header>
        <div className="nav">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/question">New Question</Link>
          <Link className="item" to="/leaderboard">Leader Board</Link>
          <Link className="item">Hello Logged in user</Link>
          <Link className="item" to="/signin">Logout</Link>
          
        </div>
        
      </header>
      <main>
        <Route path="/question" component={NewQuestion} />
        <Route path="/answer" component={AnswerQuestion} />  {/** Todo: path has to be /question/question/id */}
        <Route path="/results" component={ResultPage} />
        <Route path="/signin" component={Signin} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/" component={HomePage} exact/>
      </main>
      
     
    </BrowserRouter>
    ) 
  }
}
const mapStateToProps = ({users, questions, signUser}) =>({ users, questions, signUser });
 //Todo: if signed user redirect to homepage else redirect to login
export default connect(mapStateToProps)(App);
