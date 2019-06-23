import React from 'react'
import { connect } from 'react-redux'
import { 
  makeStyles,
  Tabs,
  Tab,
  Paper
} from '@material-ui/core'
import { Redirect, withRouter } from 'react-router-dom'

import QuestionList from './QuestionList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  paper: {
    paddingBottom: 18,
    width: 480
  },
}))

const Dashboard = ({ 
  logState, 
  unanswered, 
  answered,
  UNANSWERED,
  ANSWERED
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue)

  if (logState === false || logState === 0) {
    return <Redirect to='/login' />
  }
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Tabs 
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          value={value} 
          onChange={handleChange}
        >
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>
        {value === 0 && <QuestionList ids={unanswered} type={UNANSWERED}  />}
        {value === 1 && <QuestionList ids={answered} type={ANSWERED} />}
      </Paper>
    </div>
  )
}

const mapStateToProps = ({ questions, authedUser, logState }) => {
  // Rearrange the order of questions by timestamp
  const questionArr = Object.entries(questions).sort((a, b) => 
    questions[b[0]].timestamp - questions[a[0]].timestamp),

        UNANSWERED = 'unanswered',
        ANSWERED = 'answered'
  
  let unanswered = [], // For unanswered question ids
      answered = [] // For answered question ids

  questionArr.forEach(q => {
    if (
      q[1].optionOne.votes.indexOf(authedUser) !== -1 ||
      q[1].optionTwo.votes.indexOf(authedUser) !== -1
    ) {
      answered.push(q[0])
    } else {
      unanswered.push(q[0])
    }
  })
  
  return {
    unanswered,
    answered,
    logState,
    UNANSWERED,
    ANSWERED
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard)) 
