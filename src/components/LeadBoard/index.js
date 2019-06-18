import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import UserCard from './UserCard';

const LeadBoard = ({ userIds, logState }) => {
  if (logState === false) {
    return <Redirect to='/login' />
  }

  return (
    <ul>
      {userIds.map(id => (
        <li key={id}>
          <UserCard id={id} />
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ users, logState }) => {
  const userIds = Object.keys(users).sort((a, b) => 
    (Object.keys(users[b].answers).length + users[b].questions.length) - 
      (Object.keys(users[a].answers).length + users[a].questions.length))

  return {
    userIds,
    logState
  }
}

export default connect(mapStateToProps)(LeadBoard)
