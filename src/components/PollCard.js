import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import Poll from './Poll';
import Results from './Results';


const PollCard = ({ question, authedUser, id, logState }) => {
  const isPoll = () => 
    question.optionOne.votes.indexOf(authedUser) === -1 && 
    question.optionTwo.votes.indexOf(authedUser) === -1

  if (logState === false) {
    return <Redirect to='/login' />
  }

  return (
    isPoll() === true
      ? <Poll id={id} />
      : <Results id={id} />
  )
}

const mapStateToProps = ({ questions, authedUser, logState }, props) => {
  const { id } = props.match.params
  const question = questions[id]

  return {
    question,
    authedUser,
    id: id,
    logState
  }
}

export default withRouter(connect(mapStateToProps)(PollCard)) 
