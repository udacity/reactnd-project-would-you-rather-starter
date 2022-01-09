import React,{Component} from 'react'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import { Link, Route } from 'react-router-dom';
import AnsweredQuestionsContainer from './AnsweredQuestionsContainer';
import UnansweredQuestionsContainer from './UnansweredQuestionsContainer';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  componentDidMount(){
    //this.props is the store
    this.props.dispatch(handleInitialData())//handleIntialData() is the action
  }

  render(){
    return (

      <div className='app'>
        
        <Route exact path="/">
        <Login/>
        </Route>
        <Route path="/Dashboard" render={()=>(<Dashboard  />)}></Route>
        <Route path="/Answered Quesitons" render={()=>(<AnsweredQuestionsContainer/>)}></Route>
        <Route path="/Unanswered Quesitons" render={()=>(<UnansweredQuestionsContainer/>)}></Route>
        <Route path="/NewQuestion" render={()=>(<NewQuestion/>)}></Route>
        <Route path="/Leaderboard" render={()=>(<LeaderBoard/>)}></Route>
        
        </div>
    );
  }

} 

export default connect()(App);
