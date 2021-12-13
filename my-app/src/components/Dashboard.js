import React,{Component} from 'react'
import { connect } from 'react-redux';
import Question from './Question';
import Login from './Login';

class Dashboard extends Component {
  render(){
    console.log('questions:',this.props.questionsIds)
    return (
      <div>
          <ul>
            {this.props.questionsIds.map(id=>(
              <li key={id}>
      
                <Question id={id}/>
              </li>
    ))}
            
                             <Login/>       

            
          </ul>

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
