import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import Poll from './Poll';
import Results from './Results';
import NonExisting from '../NonExisting';

const PollCard = ({ question, authedUser, id, logState }) => {
  const isPoll = () => 
    question.optionOne.votes.indexOf(authedUser) === -1 && 
    question.optionTwo.votes.indexOf(authedUser) === -1

  if (logState === 0) {
    return <Redirect 
      to={{
        pathname: "/login",
        state: { referrer: id }
      }} 
    />
  }

  if (logState === false) {
    return <Redirect to='/login' />
  }

  if (question === null) {
    return <NonExisting />
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
    question: question ? question : null,
    authedUser,
    id,
    logState
  }
}

export default withRouter(connect(mapStateToProps)(PollCard)) 
