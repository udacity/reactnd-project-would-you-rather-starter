import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'
class AnsweredQuestionsContainer extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <br/>
                Answered Quesitons Container
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

export default connect(mapStateToProps)(AnsweredQuestionsContainer)