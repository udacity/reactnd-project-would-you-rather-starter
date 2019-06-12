import React from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList';
import { makeStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  ul: {
    width: '50%',
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // console.log(props)
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Unanswered" />
          <Tab label="Answered" />
        </Tabs>
      </AppBar>
      {value === 0 && <QuestionList ids={props.unanswered} />}
      {value === 1 && <QuestionList ids={props.answered} />}
    </div>
  )
}

const mapStateToProps = ({ questions, authedUser }) => {
  // Order the questions with timestamp
  const questionArr = Object.entries(questions).sort((a, b) => questions[b[0]].timestamp - questions[a[0]].timestamp)

  const optOneNullIds = questionArr.filter(q => q[1].optionOne.votes.length === 0).map(q => q[0])
  const optTwoNullIds = questionArr.filter(q => q[1].optionTwo.votes.length === 0).map(q => q[0])

  // const questionIds = questionArr.map(q => q[0])
  
  let unanswered = [], answered = [], questionIds = []
  questionArr.forEach(q => {
    if (
      q[1].optionOne.votes.indexOf(authedUser) !== -1 ||
      q[1].optionTwo.votes.indexOf(authedUser) !== -1
    ) {
      answered.push(q[0])
    } else {
      unanswered.push(q[0])
    }
    questionIds.push(q[0])
  })
  
  return {
    questions,
    questionIds,
    optOneNullIds,
    optTwoNullIds,
    unanswered,
    answered
  }
}

export default connect(mapStateToProps)(Dashboard)
