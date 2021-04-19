
import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import NewQuestion from './containers/NewQuestion'
import LeaderBoard from './containers/LeaderBoard';
import AnswerQuestion from './containers/AnswerQuestion';
import ResultPage from './containers/ResultPage';
import HomePage from './containers/HomePage';
import { connect } from 'react-redux';
import { getInitialData } from './actions/shared';
import { logoutAction } from './actions/signInAction'


class App extends React.Component {
   componentDidMount() {
    this.props.dispatch(getInitialData())
   }
   logoutHandler() {
     const {dispatch} = this.props;
     dispatch(logoutAction());
   }
  render() {
    // const {users, questions, signUser } = this.props;
    const {users,signUser } = this.props;
  
    const authedUser = Object.values(users).filter(user => user.id ===signUser);  
    const name = authedUser.map(({name})=> name); 
 
   
    return (
      <BrowserRouter>    
      <header>
        <div className="nav">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/add">New Question</Link>
          <Link className="item" to="/leaderboard">Leader Board</Link>
          {name.length ?(
            <>            
              <Link className="item">Hello {name}</Link>
              <Link className="item" onClick={(e)=>this.logoutHandler()}>Logout</Link>
            </>
            
          ):<> </>}
          
          
        </div>
        
      </header>
      <main>
        <Route path="/add" component={NewQuestion} />
        <Route path="/questions/:question_id" render={(props)=>(         
         <AnswerQuestion name={name} questionId={props.match.params.question_id}/> 
        )}/>
       <Route path="/result/:question_id" render={(props)=>(         
         <ResultPage name={name} questionId={props.match.params.question_id}/> 
        )}/>
        
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/" component={HomePage} exact authUser={authedUser} />
      </main>
      
     
    </BrowserRouter>
    ) 
  }
}
const mapStateToProps = ({users, questions, signUser}) =>({ users, questions, signUser });
export default connect(mapStateToProps)(App);
