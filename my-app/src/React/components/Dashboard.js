import React,{Component} from 'react'
import { connect } from 'react-redux';
import Question from './Question';
import Login from './Login';
import { Link } from 'react-router-dom';
import Nav from './Nav';


class Dashboard extends Component {
  render(){
    console.log('questions:',this.props.questionsIds)
    return (
      <div>
        <Nav/>
        <br/>
        <br/>
        Dashboard
        <div id='Nav'>
        <Link to="/Answered Quesitons"><button>Answered Quesitons </button></Link>
        
        <Link to="/Unanswered Quesitons"><button>Unanswered Quesitons</button></Link>
        </div>



      </div>
    );
  }

}

function mapStateToProps(state){
  const {questions} = state
 return{
     questionsIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp) ,//convert questions to array and sort them
 }
}

export default connect(mapStateToProps)(Dashboard);
