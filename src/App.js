
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
    const {users, questions, signUser } = this.props;
  
    const authedUser = Object.values(users).filter(user => user.id ===signUser);   
    
    return (
      <BrowserRouter>    
      <header>
        <div className="nav">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/question">New Question</Link>
          <Link className="item" to="/leaderboard">Leader Board</Link>
          {authedUser ? authedUser.map(({id, name})=> (
            <>            
              <Link className="item">Hello {name}</Link>
              <Link className="item" to="/signin">Logout</Link>
            </>
            
          )):(
            <Link className="item" to="/signin">Signin</Link>
          )}
          
          
        </div>
        
      </header>
      <main>
        <Route path="/question" component={NewQuestion} />
        <Route path="/answer" component={AnswerQuestion} />  {/** Todo: path has to be /question/question/id */}
        <Route path="/results" component={ResultPage} />
        <Route path="/signin" component={Signin} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/" component={HomePage} exact authUser={authedUser} />
      </main>
      
     
    </BrowserRouter>
    ) 
  }
}
const mapStateToProps = ({users, questions, signUser}) =>({ users, questions, signUser });

 //Todo: if signed user redirect to homepage else redirect to login
export default connect(mapStateToProps)(App);
