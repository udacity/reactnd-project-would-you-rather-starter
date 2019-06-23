import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import UserCard from './UserCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 15
  },
  container: {
    width: 480
  },
}))

const LeadBoard = ({ userIds, logState }) => {
  const classes = useStyles()

  if (logState === false || logState === 0) {
    return <Redirect to='/login' />
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {userIds.map((id, index) => <UserCard id={id} key={id} rank={index} />)}
      </div>
    </div>
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
