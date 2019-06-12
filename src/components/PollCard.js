import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Poll from './Poll';
import Results from './Results';


const PollCard = ({ question, authedUser, id }) => {
  const isPoll = () => 
    question.optionOne.votes.indexOf(authedUser) === -1 && 
    question.optionTwo.votes.indexOf(authedUser) === -1

  return (
    isPoll() === true
      ? <Poll id={id} />
      : <Results id={id} />
  )
}

const mapStateToProps = ({ questions, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]

  return {
    question,
    authedUser,
    id: id
  }
}

export default withRouter(connect(mapStateToProps)(PollCard)) 
