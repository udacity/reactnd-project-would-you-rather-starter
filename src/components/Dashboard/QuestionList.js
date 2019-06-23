import React from 'react'
import { connect } from 'react-redux'
import { Typography, withStyles } from '@material-ui/core'

import Question from './Question';

const styles = {
  typo: {
    marginTop: 18
  }
}

const QuestionList = ({ classes, ids, type }) => (
  ids.length === 0
    ? <Typography className={classes.typo} align="center">
        {`You have no ${type} questions.`}
      </Typography>
    : ids.map(id => <Question key={id} id={id} />)
)

const mapStateToProps = ({ questions }, { ids, type }) => {
  return {
    questions,
    ids
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionList))
