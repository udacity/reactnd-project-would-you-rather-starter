import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  option: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2, 0, 0, 0),
    border: '2px solid #dcdcdc',
    borderRadius: 4
  }
}))

const ResultCard = ({ 
  totalVotes,
  optionText,
  optionVotes,
  optionPercentage
}) => {
  const classes = useStyles()

  return (
    <div className={classes.option}>
      <Typography variant="body2" component="p">
        {`Would you rather ${optionText}?`} 
      </Typography>
      <ProgressBar 
        variant="primary" 
        now={optionPercentage} 
        label={`${optionPercentage}%`} 
      />
      <Typography variant="body2" component="p" align="center">
        {`${optionVotes} out of ${totalVotes} votes`}
      </Typography>
      <style type="text/css">
        {`
        .progress {
          height: 20px;
          margin-top: 10px;
          margin-bottom: 2px;
        }

        .progress-bar {
          text-align: right;
          padding-right: 5px;
          border-radius: .25rem;
        }
        `}
      </style>
    </div>
  )
}

const mapStateToProps = ({ questions }, { id, option }) => {
  const question = questions[id],

        optionOneVotes = question.optionOne.votes.length,
        optionTwoVotes = question.optionTwo.votes.length,
        totalVotes = optionOneVotes + optionTwoVotes,

        optionOnePercentage = 
          Math.floor((optionOneVotes / totalVotes) * 1000) / 10,
        optionTwoPercentage = 
          Math.floor((optionTwoVotes / totalVotes) * 1000) / 10,

        optionText = 
          option === 0 ? question.optionOne.text : question.optionTwo.text,
        optionVotes = option === 0 ? optionOneVotes :  optionTwoVotes,
        optionPercentage = option === 0 ? optionOnePercentage :  optionTwoPercentage
  
  return {
    totalVotes,
    optionText,
    optionVotes,
    optionPercentage
  }
}

export default connect(mapStateToProps)(ResultCard)
