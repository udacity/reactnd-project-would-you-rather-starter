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
    width: 600
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue)

  if (props.logState === false) {
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
        {value === 0 && <QuestionList ids={props.unanswered} />}
        {value === 1 && <QuestionList ids={props.answered} />}
      </Paper>
    </div>
    
  )
}

const mapStateToProps = ({ questions, authedUser, logState }) => {
  // Rearrange the order of questions by timestamp
  const questionArr = Object.entries(questions).sort((a, b) => 
    questions[b[0]].timestamp - questions[a[0]].timestamp)
  
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
    logState
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard)) 
