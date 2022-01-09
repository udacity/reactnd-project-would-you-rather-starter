import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import Nav from './Nav'


class UnansweredQuestionsContainer extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <br/>
                Unanswered Quesitons container
                <ul>
            {this.props.questionsIds.map(id=>(
              <li key={id}>
      
                <Question id={id}/>
              </li>
    ))}
            
                                    

            
          </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {questions} = state
    return{
        questionsIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp) ,//convert questions to array and sort them
    }

}

export default connect(mapStateToProps)(UnansweredQuestionsContainer)
