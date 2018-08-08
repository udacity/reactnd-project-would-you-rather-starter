import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class QuestionList extends Component {

  loadQuestionDetails (e, id) {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  renderQuestionPreview(question, user) {
    return (
      <div>
        <div>{user.name} asks...</div>
        <div><img src={user.avatarURL} alt={user.name}/></div>
        <h4>Would you rather</h4>
        <div>{question.optionOne.text.substring(0, 10)}...</div>
        <div className="ui primary button" onClick={(e) => this.loadQuestionDetails(e, question.id)} >View Question</div>
      </div>
    )
  }

  renderQuestionListPreview(filteredQuestions) {
    const { questions, users } = this.props

    return (
      <div>{
        filteredQuestions.map(qid => <div key={qid}> {this.renderQuestionPreview(questions[qid], users[questions[qid].author])} </div>)
      }</div>
    )
  }

  render() {
    const { answeredQuestions, unansweredQuestions, type} = this.props

    return (
      <div> 
        {type.includes('unanswered') ? this.renderQuestionListPreview(unansweredQuestions) : null }
        {type.includes('answered') ? this.renderQuestionListPreview(answeredQuestions) : null }
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {

  const authedUserObj = users[authedUser];
  const answeredQuestions = Object.keys(authedUserObj.answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    users,
    questions,
    answeredQuestions,
    unansweredQuestions,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionList))