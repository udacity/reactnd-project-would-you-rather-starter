import React from 'react'
import { connect } from 'react-redux'

import Question from './Question';

const QuestionList = ({ ids }) => (
  ids.map(id => <Question key={id} id={id} />)
)

const mapStateToProps = ({ questions }, { ids }) => {
  return {
    questions,
    ids
  }
}

export default connect(mapStateToProps)(QuestionList)
